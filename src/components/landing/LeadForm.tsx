import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Controller, type Control, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { CheckCircle2, Loader2, Send, User, Briefcase, Presentation, MapPin, FileUp } from "lucide-react";
import Select, { type SingleValue, type StylesConfig } from "react-select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import {
  fetchCities,
  fetchFormOptions,
  mapServerErrors,
  sendSmsOtp,
  submitHiringForm,
  verifySmsOtp,
  type CityOption,
} from "@/lib/api/hiring-form";

const yesNo = z.enum(["Yes", "No"], { message: "Please select an option" });
const CATEGORY_OTHER = "Other, specify";
const MOBILE_REGEX = /^[6-9]\d{9}$/;
const OTP_RESEND_COOLDOWN_SEC = 120;

function formatCooldown(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs.toString().padStart(2, "0")}`;
}

const schema = z
  .object({
    fullName: z.string().trim().min(2, "Enter your full name").max(100),
    mobile: z.string().trim().regex(MOBILE_REGEX, "Enter a valid 10-digit mobile"),
    email: z.string().trim().email("Enter a valid email").max(255),
    district: z.number({ message: "Select your district" }).positive("Select your district"),
    city: z.string().trim().min(2, "Enter your city/town").max(80),
    category: z.string().min(1, "Select Your Category is required. Please select a value"),
    categoryOther: z.string().max(110).optional().or(z.literal("")),
    experience: z.string().min(1, "Total Experience is required. Please select a value"),
    areaOfExpertise: z.array(z.string()).min(1, "Select at least one area of expertise"),
    industry: z.string().max(80).optional().or(z.literal("")),
    specialization: z.string().max(80).optional().or(z.literal("")),
    conductedTraining: yesNo,
    trainingDetails: z.string().max(1000).optional().or(z.literal("")),
    offlineTraining: yesNo,
    travelNearby: yesNo,
    resume: z
      .any()
      .refine((files) => files instanceof FileList && files.length > 0, "Upload your resume/CV")
      .refine(
        (files) => files instanceof FileList && files[0]?.type === "application/pdf",
        "PDF only",
      ),
  })
  .superRefine((val, ctx) => {
    if (val.category === CATEGORY_OTHER && !val.categoryOther?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["categoryOther"],
        message: "Specify the category is required.",
      });
    }
    if (val.category === "Industry Expert" && !val.industry) {
      ctx.addIssue({ code: "custom", path: ["industry"], message: "Please choose your industry" });
    }
    if (
      (val.category === "Research Scholar" || val.category === "Business/Management Faculty") &&
      !val.specialization
    ) {
      ctx.addIssue({
        code: "custom",
        path: ["specialization"],
        message: "Please choose your specialization",
      });
    }
    if (val.conductedTraining === "Yes" && !val.trainingDetails?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["trainingDetails"],
        message: "Please mention the topics and audience",
      });
    }
  });

type FormData = z.infer<typeof schema>;

type SelectOption = { value: string; label: string };

const selectStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    minHeight: "46px",
    borderRadius: "0.75rem",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: state.isFocused ? "transparent" : "var(--input)",
    boxShadow: state.isFocused ? "0 0 0 2px var(--accent)" : "none",
    backgroundColor: "var(--background)",
    transition: "border-color 0.15s, box-shadow 0.15s",
    "&:hover": {
      borderColor: state.isFocused ? "transparent" : "var(--input)",
    },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: "0.75rem",
    border: "1px solid var(--input)",
    overflow: "hidden",
    zIndex: 50,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "var(--accent)"
      : state.isFocused
        ? "var(--accent-soft)"
        : "transparent",
    color: state.isSelected ? "var(--accent-foreground)" : "var(--foreground)",
    cursor: "pointer",
  }),
  placeholder: (base) => ({
    ...base,
    color: "color-mix(in oklab, var(--muted-foreground) 70%, transparent)",
  }),
  singleValue: (base) => ({
    ...base,
    color: "var(--foreground)",
  }),
  multiValue: (base) => ({
    ...base,
    borderRadius: "0.5rem",
    backgroundColor: "var(--accent-soft)",
  }),
  multiValueLabel: (base) => ({
    ...base,
    color: "var(--accent)",
  }),
  input: (base) => ({
    ...base,
    color: "var(--foreground)",
  }),
  indicatorSeparator: (base) => ({
    ...base,
    backgroundColor: "var(--input)",
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "var(--muted-foreground)",
    "&:hover": { color: "var(--foreground)" },
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "var(--muted-foreground)",
    "&:hover": { color: "var(--foreground)" },
  }),
};

export function LeadForm() {
  const [otpVerified, setOtpVerified] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [otpModalOpen, setOtpModalOpen] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpError, setOtpError] = useState("");
  const [otpSending, setOtpSending] = useState(false);
  const [otpVerifying, setOtpVerifying] = useState(false);
  const [mobileOtpError, setMobileOtpError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [resendCooldown, setResendCooldown] = useState(0);
  const lastOtpMobileRef = useRef("");
  const lastAutoVerifyOtpRef = useRef("");

  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    setError,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      areaOfExpertise: [],
      mobile: "",
      category: "",
      categoryOther: "",
      experience: "",
      conductedTraining: undefined,
      offlineTraining: undefined,
      travelNearby: undefined,
    },
  });

  const mobile = watch("mobile");
  const category = watch("category");
  const conductedTraining = watch("conductedTraining");
  const showCategoryOther = category === CATEGORY_OTHER;
  const showIndustry = category === "Industry Expert";
  const showSpecialization =
    category === "Research Scholar" || category === "Business/Management Faculty";
  const showTrainingDetails = conductedTraining === "Yes";

  const { data: formOptions, isLoading: optionsLoading } = useQuery({
    queryKey: ["hiring-form-options"],
    queryFn: fetchFormOptions,
  });

  const { data: cities = [], isLoading: citiesLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: fetchCities,
  });

  const categoryOptions = useMemo(
    () => (formOptions?.categories ?? []).map((c) => ({ value: c, label: c })),
    [formOptions?.categories],
  );

  const experienceOptions = useMemo(
    () => (formOptions?.experience ?? []).map((e) => ({ value: e, label: e })),
    [formOptions?.experience],
  );

  const expertiseOptions = useMemo(
    () => formOptions?.area_of_expertise ?? [],
    [formOptions?.area_of_expertise],
  );

  const industryOptions = useMemo(
    () => (formOptions?.industry ?? []).map((i) => ({ value: i, label: i })),
    [formOptions?.industry],
  );

  const specializationOptions = useMemo(
    () => (formOptions?.category_specialization ?? []).map((s) => ({ value: s, label: s })),
    [formOptions?.category_specialization],
  );

  const resetOtpState = useCallback(() => {
    setOtpVerified(false);
    setOtpSent(false);
    setOtpValue("");
    setOtpError("");
    setResendCooldown(0);
    setOtpModalOpen(false);
    lastAutoVerifyOtpRef.current = "";
  }, []);

  const handleMobileChange = useCallback(
    (rawValue: string) => {
      const digits = rawValue.replace(/\D/g, "").slice(0, 10);
      setValue("mobile", digits, { shouldValidate: true, shouldDirty: true });

      if (otpVerified) return;

      if (digits !== lastOtpMobileRef.current) {
        resetOtpState();
      }

      if (digits.length < 10) {
        lastOtpMobileRef.current = "";
      }

      return digits;
    },
    [otpVerified, resetOtpState, setValue],
  );

  const sendOtpForMobile = useCallback(async (mobileNumber: string) => {
    setOtpSending(true);
    setMobileOtpError("");
    try {
      await sendSmsOtp(mobileNumber);
      lastOtpMobileRef.current = mobileNumber;
      setOtpValue("");
      setOtpError("");
      setOtpSent(true);
      setOtpModalOpen(true);
      setResendCooldown(OTP_RESEND_COOLDOWN_SEC);
    } catch (err) {
      setMobileOtpError(err instanceof Error ? err.message : "Failed to send OTP");
      lastOtpMobileRef.current = "";
      resetOtpState();
    } finally {
      setOtpSending(false);
    }
  }, [resetOtpState]);

  useEffect(() => {
    if (resendCooldown <= 0) return;
    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [resendCooldown]);

  useEffect(() => {
    if (otpVerified && mobile === lastOtpMobileRef.current) {
      return;
    }

    if (!mobile || !MOBILE_REGEX.test(mobile)) {
      return;
    }

    if (mobile === lastOtpMobileRef.current) {
      return;
    }

    const timer = setTimeout(() => {
      void sendOtpForMobile(mobile);
    }, 600);

    return () => clearTimeout(timer);
  }, [mobile, otpVerified, sendOtpForMobile]);

  const handleVerifyOtp = useCallback(async () => {
    if (otpValue.length !== 4 || !mobile) return;

    setOtpVerifying(true);
    setOtpError("");
    try {
      await verifySmsOtp(mobile, otpValue);
      setOtpVerified(true);
      setOtpModalOpen(false);
      setMobileOtpError("");
      lastAutoVerifyOtpRef.current = "";
    } catch (err) {
      setOtpError(err instanceof Error ? err.message : "Invalid OTP");
    } finally {
      setOtpVerifying(false);
    }
  }, [mobile, otpValue]);

  useEffect(() => {
    if (otpValue.length < 4) {
      lastAutoVerifyOtpRef.current = "";
      return;
    }

    if (!otpModalOpen || !mobile || otpVerifying || otpVerified) {
      return;
    }

    if (lastAutoVerifyOtpRef.current === otpValue) {
      return;
    }

    lastAutoVerifyOtpRef.current = otpValue;
    void handleVerifyOtp();
  }, [otpValue, otpModalOpen, mobile, otpVerifying, otpVerified, handleVerifyOtp]);

  const onSubmit = async (data: FormData) => {
    clearErrors();
    setSubmitError("");
    try {
      const resumeFile = data.resume instanceof FileList ? data.resume[0] : null;
      if (!resumeFile) {
        setError("resume", { message: "Upload your resume/CV" });
        return;
      }

      const result = await submitHiringForm({
        name: data.fullName,
        mobile: data.mobile,
        email: data.email,
        district: data.district,
        city: data.city,
        category:
          data.category === CATEGORY_OTHER
            ? (data.categoryOther?.trim() ?? "")
            : data.category,
        experience: data.experience,
        area_of_expertise: data.areaOfExpertise,
        industry: data.industry || undefined,
        category_specialization: data.specialization || undefined,
        is_training_workshops: data.conductedTraining,
        training_workshop_topics:
          data.conductedTraining === "Yes"
            ? (data.trainingDetails?.trim() ?? "")
            : "Not applicable",
        is_willing_to_conduct_traning: data.offlineTraining,
        is_willing_to_travel_outstation: data.travelNearby,
        resume: resumeFile,
      });

      toast.success(result.message ?? "Form application submitted successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } catch (err) {
      const validationErrors = (err as Error & { validationErrors?: Record<string, string[]> })
        .validationErrors;
      if (validationErrors) {
        const mapped = mapServerErrors(validationErrors);
        if (mapped.category && category === CATEGORY_OTHER) {
          mapped.categoryOther = mapped.category;
          delete mapped.category;
        }
        for (const [field, message] of Object.entries(mapped)) {
          setError(field as keyof FormData, { message });
        }
        return;
      }
      setSubmitError(err instanceof Error ? err.message : "Failed to submit application");
    }
  };

  return (
    <section id="lead-form" className="py-20 bg-secondary/40">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Registration Open
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">
            Register Your Details
          </h2>
          <p className="mt-3 text-muted-foreground">
            Fill out the form and our team will get in touch with you.
          </p>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-card border border-border rounded-3xl shadow-card-hover p-6 sm:p-10"
        >
          {submitError && (
            <div className="mb-6 rounded-xl bg-destructive/10 text-destructive px-4 py-3 text-sm">
              {submitError}
            </div>
          )}

          <div className="flex items-center gap-2 mb-5">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-accent-soft text-accent">
              <User className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-bold text-primary">Personal Detail</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Full Name" required error={errors.fullName?.message}>
              <input {...register("fullName")} className={inputCls} placeholder="Enter your full name" />
            </Field>
            <Field label="Mobile Number" required error={errors.mobile?.message ?? mobileOtpError}>
              <div className="relative">
                <input
                  {...register("mobile", {
                    onChange: (e) => handleMobileChange(e.target.value),
                  })}
                  disabled={otpVerified}
                  className={`${inputCls} disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-muted/50`}
                  placeholder="Enter your 10-digit mobile number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={10}
                />
                {otpSending && (
                  <Loader2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 animate-spin text-muted-foreground" />
                )}
                {otpVerified && !otpSending && (
                  <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-accent" />
                )}
              </div>
              {otpSending && (
                <p className="mt-1.5 text-xs text-muted-foreground">Sending OTP...</p>
              )}
              {otpSent && !otpVerified && !otpSending && (
                <button
                  type="button"
                  onClick={() => setOtpModalOpen(true)}
                  className="mt-1.5 text-xs font-medium text-accent hover:underline"
                >
                  Click to Verify OTP
                </button>
              )}
            </Field>
            <Field label="Email ID" required error={errors.email?.message}>
              <input
                {...register("email")}
                className={inputCls}
                placeholder="Enter your email ID"
                type="email"
              />
            </Field>
            <Field label="Current District" required error={errors.district?.message}>
              <Controller
                name="district"
                control={control}
                render={({ field }) => (
                  <Select<CityOption, false>
                    instanceId="district-select"
                    options={cities}
                    value={cities.find((c) => c.value === field.value) ?? null}
                    onChange={(option: SingleValue<CityOption>) => {
                      field.onChange(option?.value ?? 0);
                    }}
                    isClearable
                    isSearchable
                    isLoading={citiesLoading}
                    placeholder={citiesLoading ? "Loading districts..." : "Search district..."}
                    noOptionsMessage={() => "No districts found"}
                    styles={selectStyles as StylesConfig<CityOption, false>}
                    getOptionLabel={(o) => o.label}
                    getOptionValue={(o) => String(o.value)}
                  />
                )}
              />
            </Field>
            <div className="sm:col-span-2">
              <Field label="Current City / Town" required error={errors.city?.message}>
                <input {...register("city")} className={inputCls} placeholder="Eg: Sarojini Nagar in Lucknow District" />
              </Field>
            </div>
          </div>

          <div className="flex items-center gap-2 mt-10 mb-5">
            <div className="h-9 w-9 grid place-items-center rounded-lg bg-accent-soft text-accent">
              <Briefcase className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-bold text-primary">Professional Profile</h3>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Select Your Category" required error={errors.category?.message}>
              <Controller
                name="category"
                control={control}
                render={({ field }) => (
                  <Select<SelectOption, false>
                    instanceId="category-select"
                    options={categoryOptions}
                    value={categoryOptions.find((o) => o.value === field.value) ?? null}
                    onChange={(option: SingleValue<SelectOption>) => {
                      field.onChange(option?.value ?? "");
                      setValue("industry", "");
                      setValue("specialization", "");
                      if (option?.value !== CATEGORY_OTHER) {
                        setValue("categoryOther", "");
                      }
                    }}
                    isClearable
                    isSearchable
                    isLoading={optionsLoading}
                    placeholder="Choose category"
                    styles={selectStyles as StylesConfig<SelectOption, false>}
                  />
                )}
              />
            </Field>
            {showCategoryOther ? (
              <Field
                label="Specify the category"
                required
                error={errors.categoryOther?.message}
              >
                <input
                  {...register("categoryOther")}
                  className={inputCls}
                  placeholder="Enter your category"
                />
              </Field>
            ) : (
              <ExperienceField
                control={control}
                experienceOptions={experienceOptions}
                optionsLoading={optionsLoading}
                error={errors.experience?.message}
              />
            )}
            {showCategoryOther && (
              <ExperienceField
                control={control}
                experienceOptions={experienceOptions}
                optionsLoading={optionsLoading}
                error={errors.experience?.message}
              />
            )}
            <div className="sm:col-span-2">
              <Field label="Area of Expertise" required error={errors.areaOfExpertise?.message}>
                <Controller
                  name="areaOfExpertise"
                  control={control}
                  render={({ field }) => (
                    <div className="grid sm:grid-cols-2 gap-3 rounded-xl border border-input bg-background p-4">
                      {optionsLoading ? (
                        <p className="sm:col-span-2 text-sm text-muted-foreground">Loading options...</p>
                      ) : (
                        expertiseOptions.map((option) => (
                          <label
                            key={option}
                            className="flex items-center gap-2.5 cursor-pointer text-sm text-foreground"
                          >
                            <Checkbox
                              checked={field.value.includes(option)}
                              onCheckedChange={(checked) => {
                                field.onChange(
                                  checked
                                    ? [...field.value, option]
                                    : field.value.filter((v) => v !== option),
                                );
                              }}
                            />
                            <span>{option}</span>
                          </label>
                        ))
                      )}
                    </div>
                  )}
                />
              </Field>
            </div>

            {showIndustry && (
              <div className="sm:col-span-2">
                <Field
                  label='If you selected "Industry Expert", please choose your industry'
                  labelClassName="text-[0.75rem]"
                  required
                  error={errors.industry?.message}
                >
                  <Controller
                    name="industry"
                    control={control}
                    render={({ field }) => (
                      <Select<SelectOption, false>
                        instanceId="industry-select"
                        options={industryOptions}
                        value={industryOptions.find((o) => o.value === field.value) ?? null}
                        onChange={(option: SingleValue<SelectOption>) => {
                          field.onChange(option?.value ?? "");
                        }}
                        isClearable
                        isSearchable
                        isLoading={optionsLoading}
                        placeholder="Choose your industry"
                        styles={selectStyles as StylesConfig<SelectOption, false>}
                      />
                    )}
                  />
                </Field>
              </div>
            )}

            {showSpecialization && (
              <div className="sm:col-span-2">
                <Field
                  label='If You selected "Research Scholar" or "Faculty", please choose your specialization'
                  labelClassName="text-[0.75rem]"
                  required
                  error={errors.specialization?.message}
                >
                  <Controller
                    name="specialization"
                    control={control}
                    render={({ field }) => (
                      <Select<SelectOption, false>
                        instanceId="specialization-select"
                        options={specializationOptions}
                        value={specializationOptions.find((o) => o.value === field.value) ?? null}
                        onChange={(option: SingleValue<SelectOption>) => {
                          field.onChange(option?.value ?? "");
                        }}
                        isClearable
                        isSearchable
                        isLoading={optionsLoading}
                        placeholder="Choose your specialization"
                        styles={selectStyles as StylesConfig<SelectOption, false>}
                      />
                    )}
                  />
                </Field>
              </div>
            )}
          </div>

          <SectionHeader icon={Presentation} title="Training Experience" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <Field
                label="Have you conducted any training/workshops before?"
                required
                error={errors.conductedTraining?.message}
              >
                <Controller
                  name="conductedTraining"
                  control={control}
                  render={({ field }) => (
                    <RadioGroup
                      value={field.value}
                      onValueChange={field.onChange}
                      className="flex gap-6"
                    >
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                        <RadioGroupItem value="Yes" />
                        Yes
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                        <RadioGroupItem value="No" />
                        No
                      </label>
                    </RadioGroup>
                  )}
                />
              </Field>
            </div>

            {showTrainingDetails && (
              <div className="sm:col-span-2">
                <Field
                  label="If Yes, briefly mention the topics and audience."
                  normalCase
                  required
                  error={errors.trainingDetails?.message}
                >
                  <textarea
                    {...register("trainingDetails")}
                    rows={4}
                    className={`${inputCls} resize-y min-h-[100px]`}
                    placeholder="e.g. MSME schemes workshop for rural entrepreneurs"
                  />
                </Field>
              </div>
            )}
          </div>

          <SectionHeader icon={MapPin} title="Availability" />

          <div className="grid sm:grid-cols-2 gap-5">
            <Field
              label="Are you willing to conduct offline training in your district?"
              required
              error={errors.offlineTraining?.message}
            >
              <Controller
                name="offlineTraining"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex gap-6"
                  >
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                      <RadioGroupItem value="Yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                      <RadioGroupItem value="No" />
                      No
                    </label>
                  </RadioGroup>
                )}
              />
            </Field>

            <Field
              label="Are you willing to travel to nearby districts if required?"
              required
              error={errors.travelNearby?.message}
            >
              <Controller
                name="travelNearby"
                control={control}
                render={({ field }) => (
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}
                    className="flex gap-6"
                  >
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                      <RadioGroupItem value="Yes" />
                      Yes
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-foreground">
                      <RadioGroupItem value="No" />
                      No
                    </label>
                  </RadioGroup>
                )}
              />
            </Field>
          </div>

          <SectionHeader icon={FileUp} title="Document Upload" />

          <div className="grid sm:grid-cols-2 gap-5">
            <div className="sm:col-span-2">
              <Field label="Upload Your Resume/CV" required error={errors.resume?.message as string}>
                <input
                  type="file"
                  accept=".pdf,application/pdf"
                  {...register("resume")}
                  className={`${inputCls} file:mr-4 file:rounded-lg file:border-0 file:bg-accent-soft file:px-4 file:py-2 file:text-sm file:font-medium file:text-accent cursor-pointer`}
                />
                <span className="mt-1.5 block text-xs text-muted-foreground">PDF only</span>
              </Field>
            </div>
          </div>

          {!otpVerified && (
            <p className="mt-6 text-sm text-muted-foreground">
              Please verify your mobile number using the OTP to proceed with form submission.@
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !otpVerified}
            className="mt-4 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-8 py-3.5 text-sm font-semibold shadow-accent hover:scale-[1.02] transition-transform disabled:opacity-60 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit Registration"}
            <Send className="h-4 w-4" />
          </button>
        </motion.form>
      </div>

      <Dialog open={otpModalOpen} onOpenChange={setOtpModalOpen}>
        <DialogContent className="gap-6 p-8 sm:max-w-xl">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl">Verify OTP</DialogTitle>
            <DialogDescription className="text-base">
              Enter the 4-digit OTP sent to {mobile || "your mobile number"}.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center gap-6 py-4">
            <InputOTP
              maxLength={4}
              value={otpValue}
              onChange={setOtpValue}
              containerClassName="gap-4"
            >
              <InputOTPGroup className="gap-4">
                <InputOTPSlot index={0} className={otpSlotCls} />
                <InputOTPSlot index={1} className={otpSlotCls} />
                <InputOTPSlot index={2} className={otpSlotCls} />
                <InputOTPSlot index={3} className={otpSlotCls} />
              </InputOTPGroup>
            </InputOTP>
            {otpError && <p className="text-sm text-destructive">{otpError}</p>}
          </div>

          <DialogFooter className="gap-3 sm:gap-3">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => mobile && void sendOtpForMobile(mobile)}
              disabled={otpSending || !mobile || resendCooldown > 0}
            >
              {otpSending
                ? "Sending..."
                : resendCooldown > 0
                  ? `Resend OTP in ${formatCooldown(resendCooldown)}`
                  : "Resend OTP"}
            </Button>
            <Button
              type="button"
              size="lg"
              onClick={() => void handleVerifyOtp()}
              disabled={otpVerifying || otpValue.length !== 4}
            >
              {otpVerifying ? "Verifying..." : "Verify OTP"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition";

const otpSlotCls =
  "h-16 w-16 rounded-xl border border-input text-2xl font-semibold shadow-sm";

function ExperienceField({
  control,
  experienceOptions,
  optionsLoading,
  error,
}: {
  control: Control<FormData>;
  experienceOptions: SelectOption[];
  optionsLoading: boolean;
  error?: string;
}) {
  return (
    <Field label="Total Experience" required error={error}>
      <Controller
        name="experience"
        control={control}
        render={({ field }) => (
          <Select<SelectOption, false>
            instanceId="experience-select"
            options={experienceOptions}
            value={experienceOptions.find((o) => o.value === field.value) ?? null}
            onChange={(option: SingleValue<SelectOption>) => {
              field.onChange(option?.value ?? "");
            }}
            isClearable
            isSearchable
            isLoading={optionsLoading}
            placeholder="Select experience"
            styles={selectStyles as StylesConfig<SelectOption, false>}
          />
        )}
      />
    </Field>
  );
}

function SectionHeader({
  icon: Icon,
  title,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2 mt-10 mb-5">
      <div className="h-9 w-9 grid place-items-center rounded-lg bg-accent-soft text-accent">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="text-lg font-bold text-primary">{title}</h3>
    </div>
  );
}

function Field({
  label,
  hint,
  normalCase,
  labelClassName,
  required,
  error,
  children,
}: {
  label: string;
  hint?: string;
  normalCase?: boolean;
  labelClassName?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="block">
      <span
        className={`${labelClassName ?? "text-xs"} font-semibold text-primary tracking-wide ${normalCase ? "normal-case" : "uppercase"}`}
      >
        {label}
        {required && <span className="ml-0.5 text-red-600">*</span>}
        {hint && (
          <span className="ml-1 normal-case tracking-normal text-muted-foreground font-normal">
            ({hint})
          </span>
        )}
      </span>
      <div className="mt-1.5">{children}</div>
      {error && <span className="mt-1 block text-xs text-destructive">{error}</span>}
    </div>
  );
}
