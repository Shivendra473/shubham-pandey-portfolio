// In dev, Vite proxies /api → http://localhost:8000 (see vite.config.ts).
// Set VITE_API_URL for production, e.g. https://your-api.example.com/api
const API_BASE_URL = import.meta.env.VITE_API_URL ?? "/api";

export type CityOption = {
  value: number;
  label: string;
  name?: string | null;
};

export type FormOptions = {
  categories: string[];
  experience: string[];
  area_of_expertise: string[];
  industry: string[];
  category_specialization: string[];
};

type ApiValidationError = {
  errors: Record<string, string[]>;
};

async function parseJson<T>(response: Response): Promise<T> {
  const text = await response.text();
  if (!text) return {} as T;
  try {
    return JSON.parse(text) as T;
  } catch {
    return text as unknown as T;
  }
}

export async function sendSmsOtp(mobile: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/sms-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ mobile }),
  });

  if (!response.ok) {
    const data = await parseJson<ApiValidationError>(response);
    const message =
      data.errors?.mobile?.[0] ??
      (typeof data === "object" && "message" in data
        ? String((data as { message?: string }).message)
        : "Failed to send OTP");
    throw new Error(message);
  }
}

export async function verifySmsOtp(mobile: string, otp: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/verify-sms-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ mobile, otp }),
  });

  if (!response.ok) {
    const data = await parseJson<ApiValidationError>(response);
    const message = data.errors?.otp?.[0] ?? "Invalid OTP. Please try again.";
    throw new Error(message);
  }
}

export async function fetchFormOptions(): Promise<FormOptions> {
  const response = await fetch(`${API_BASE_URL}/hiring-form-application/form-options`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to load form options");
  }

  return response.json();
}

export async function fetchCities(): Promise<CityOption[]> {
  const response = await fetch(`${API_BASE_URL}/cities`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Failed to load districts");
  }

  const data = await response.json();
  return data.cities ?? [];
}

export type HiringFormPayload = {
  name: string;
  mobile: string;
  email: string;
  district: number;
  city: string;
  category: string;
  experience: string;
  area_of_expertise: string[];
  industry?: string;
  category_specialization?: string;
  is_training_workshops: "Yes" | "No";
  training_workshop_topics: string;
  is_willing_to_conduct_traning: "Yes" | "No";
  is_willing_to_travel_outstation: "Yes" | "No";
  resume: File;
};

export async function submitHiringForm(
  payload: HiringFormPayload,
): Promise<{ message: string }> {
  const formData = new FormData();
  formData.append("name", payload.name);
  formData.append("mobile", payload.mobile);
  formData.append("email", payload.email);
  formData.append("district", String(payload.district));
  formData.append("city", payload.city);
  formData.append("category", payload.category);
  formData.append("experience", payload.experience);
  payload.area_of_expertise.forEach((item) => {
    formData.append("area_of_expertise[]", item);
  });
  if (payload.industry) {
    formData.append("industry", payload.industry);
  }
  if (payload.category_specialization) {
    formData.append("category_specialization", payload.category_specialization);
  }
  formData.append("is_training_workshops", payload.is_training_workshops);
  formData.append("training_workshop_topics", payload.training_workshop_topics);
  formData.append("is_willing_to_conduct_traning", payload.is_willing_to_conduct_traning);
  formData.append("is_willing_to_travel_outstation", payload.is_willing_to_travel_outstation);
  formData.append("status", "PENDING");
  formData.append("resume", payload.resume);

  const response = await fetch(`${API_BASE_URL}/hiring-form-applications`, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  const data = await parseJson<{ message?: string } & ApiValidationError>(response);

  if (!response.ok) {
    if (response.status === 422 && data.errors) {
      const error = new Error("Validation failed") as Error & {
        validationErrors: Record<string, string[]>;
      };
      error.validationErrors = data.errors;
      throw error;
    }
    throw new Error(data.message ?? "Failed to submit application");
  }

  return { message: data.message ?? "Form application submitted successfully" };
}

/** Map Laravel validation field names to react-hook-form field names */
export const serverFieldMap: Record<string, string> = {
  name: "fullName",
  mobile: "mobile",
  email: "email",
  district: "district",
  city: "city",
  category: "category",
  experience: "experience",
  area_of_expertise: "areaOfExpertise",
  "area_of_expertise.0": "areaOfExpertise",
  industry: "industry",
  category_specialization: "specialization",
  is_training_workshops: "conductedTraining",
  training_workshop_topics: "trainingDetails",
  is_willing_to_conduct_traning: "offlineTraining",
  is_willing_to_travel_outstation: "travelNearby",
  resume: "resume",
};

export function mapServerErrors(
  errors: Record<string, string[]>,
): Record<string, string> {
  const mapped: Record<string, string> = {};
  for (const [key, messages] of Object.entries(errors)) {
    const formKey = serverFieldMap[key] ?? serverFieldMap[key.split(".")[0]] ?? key;
    if (!mapped[formKey] && messages[0]) {
      mapped[formKey] = messages[0];
    }
  }
  return mapped;
}
