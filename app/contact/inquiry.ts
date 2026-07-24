export const serviceOptions = [
  "Brand Strategy",
  "Website Design & Development",
  "Digital Marketing",
  "Lead Generation",
  "Creative Direction",
] as const;

export const budgetOptions = [
  "Not sure yet",
  "Under $10,000",
  "$10,000–$25,000",
  "$25,000–$50,000",
  "$50,000+",
] as const;

export const timelineOptions = [
  "As soon as possible",
  "Within 1–2 months",
  "Within 3–4 months",
  "Within 6 months",
  "Exploring for the future",
] as const;

export type Inquiry = {
  name: string;
  company: string;
  email: string;
  phone: string;
  services: string[];
  budget: string;
  timeline: string;
  description: string;
  submittedAt: string;
};

export type InquiryValues = Omit<Inquiry, "submittedAt">;

export type InquiryField = keyof InquiryValues;

export type InquiryFormState = {
  status: "idle" | "error";
  message?: string;
  fieldErrors?: Partial<Record<InquiryField, string>>;
};

export const initialInquiryState: InquiryFormState = { status: "idle" };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readText(formData: FormData, field: string) {
  return String(formData.get(field) ?? "").trim();
}

export function validateInquiry(formData: FormData):
  | { success: true; inquiry: Inquiry }
  | {
      success: false;
      errors: Partial<Record<InquiryField, string>>;
    } {
  const values: InquiryValues = {
    name: readText(formData, "name"),
    company: readText(formData, "company"),
    email: readText(formData, "email").toLowerCase(),
    phone: readText(formData, "phone"),
    services: formData
      .getAll("services")
      .map(String)
      .filter((service) => serviceOptions.includes(service as (typeof serviceOptions)[number])),
    budget: readText(formData, "budget"),
    timeline: readText(formData, "timeline"),
    description: readText(formData, "description"),
  };

  const errors: Partial<Record<InquiryField, string>> = {};

  if (values.name.length < 2 || values.name.length > 80) {
    errors.name = "Enter your full name.";
  }
  if (values.company.length < 2 || values.company.length > 120) {
    errors.company = "Enter your company name.";
  }
  if (
    values.email.length > 254 ||
    !emailPattern.test(values.email)
  ) {
    errors.email = "Enter a valid email address.";
  }
  if (values.phone.length > 40) {
    errors.phone = "Enter a valid phone number.";
  }
  if (values.services.length === 0) {
    errors.services = "Select at least one service.";
  }
  if (
    values.budget &&
    !budgetOptions.includes(values.budget as (typeof budgetOptions)[number])
  ) {
    errors.budget = "Select a listed budget range.";
  }
  if (!timelineOptions.includes(values.timeline as (typeof timelineOptions)[number])) {
    errors.timeline = "Select a project timeline.";
  }
  if (values.description.length < 30 || values.description.length > 4000) {
    errors.description = "Share at least 30 characters and no more than 4,000.";
  }

  if (Object.keys(errors).length > 0) {
    return { success: false, errors };
  }

  return {
    success: true,
    inquiry: {
      ...values,
      submittedAt: new Date().toISOString(),
    },
  };
}
