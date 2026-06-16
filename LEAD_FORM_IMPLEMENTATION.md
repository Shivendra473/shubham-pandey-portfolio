# Lead Form Implementation Steps

## Requirements Checklist

- [x] **1. Auto-send OTP on mobile input** — When the user enters a valid 10-digit mobile number and stops typing (600ms debounce), call `POST /api/sms-otp`.
- [x] **2. OTP verification modal** — Open a modal with a 4-digit OTP input and submit button; verify via `POST /api/verify-sms-otp`.
- [x] **3. Submit button gated by OTP** — `Submit Registration` stays disabled until OTP is verified; show a note prompting verification first.
- [x] **4. Form submission** — On submit, call `POST /api/hiring-form-applications` with `FormData` including the resume file.
- [x] **5. Server validation errors** — On HTTP 422, display field errors below the corresponding inputs.
- [x] **6. Success flow** — Show a success message and redirect to the home page (`/`).
- [x] **7. District dropdown** — Load districts from `GET /api/cities` using `react-select` (searchable + clearable).
- [x] **8. Dynamic form options** — Load category, experience, area of expertise, industry, and specialization options from `GET /api/hiring-form-application/form-options`.

## API Endpoints

| # | Method | Endpoint | Purpose |
|---|--------|----------|---------|
| 1 | POST | `/api/sms-otp` | Send OTP to mobile |
| 2 | POST | `/api/verify-sms-otp` | Verify OTP |
| 3 | GET | `/api/hiring-form-application/form-options` | Dropdown options |
| 4 | POST | `/api/hiring-form-applications` | Submit application |
| 5 | GET | `/api/cities` | District list |

## Configuration

Set the API base URL via environment variable (optional):

```env
VITE_API_URL=http://localhost:8000/api
```

Defaults to `/api` (proxied to `http://localhost:8000` in dev via Vite). Set `VITE_API_URL` for production.

## Files Changed

- `src/lib/api/hiring-form.ts` — API client and error mapping
- `src/components/landing/LeadForm.tsx` — Form UI, OTP flow, API integration
- `package.json` — Added `react-select` dependency
