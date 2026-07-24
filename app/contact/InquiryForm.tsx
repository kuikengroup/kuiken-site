"use client";

import { useActionState, useState } from "react";
import { submitInquiry } from "./actions";
import {
  budgetOptions,
  initialInquiryState,
  serviceOptions,
  timelineOptions,
  type InquiryField,
  type InquiryValues,
} from "./inquiry";

const emptyValues: InquiryValues = {
  name: "",
  company: "",
  email: "",
  phone: "",
  services: [],
  budget: "",
  timeline: "",
  description: "",
};

function FieldError({
  field,
  errors,
}: {
  field: InquiryField;
  errors: Partial<Record<InquiryField, string>> | undefined;
}) {
  const error = errors?.[field];
  if (!error) return null;

  return (
    <p id={`${field}-error`} className="mt-2 text-xs leading-5 text-[#E6B7A9]">
      {error}
    </p>
  );
}

export default function InquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitInquiry,
    initialInquiryState,
  );
  const [values, setValues] = useState(emptyValues);

  const updateValue = (field: keyof InquiryValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const toggleService = (service: string) => {
    setValues((current) => ({
      ...current,
      services: current.services.includes(service)
        ? current.services.filter((item) => item !== service)
        : [...current.services, service],
    }));
  };

  const inputClass =
    "motion-ui w-full rounded-2xl border border-[#E7DCC1]/14 bg-[#171817] px-5 py-4 text-base text-[#E7DCC1] outline-none placeholder:text-[#E7DCC1]/30 hover:border-[#E7DCC1]/25 focus:border-[#C6A972]/70";
  const labelClass =
    "mb-3 block text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E7DCC1]/68";

  return (
    <form action={formAction} noValidate className="grid gap-8">
      <div className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && state.message ? (
        <div
          role="alert"
          className="rounded-2xl border border-[#E6B7A9]/30 bg-[#E6B7A9]/8 px-5 py-4 text-sm leading-6 text-[#F0D3C9]"
        >
          {state.message}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span aria-hidden="true" className="text-[#C6A972]">*</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            maxLength={80}
            value={values.name}
            onChange={(event) => updateValue("name", event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.name)}
            aria-describedby={state.fieldErrors?.name ? "name-error" : undefined}
            className={inputClass}
          />
          <FieldError field="name" errors={state.fieldErrors} />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span aria-hidden="true" className="text-[#C6A972]">*</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            required
            maxLength={120}
            value={values.company}
            onChange={(event) => updateValue("company", event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.company)}
            aria-describedby={state.fieldErrors?.company ? "company-error" : undefined}
            className={inputClass}
          />
          <FieldError field="company" errors={state.fieldErrors} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span aria-hidden="true" className="text-[#C6A972]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            maxLength={254}
            value={values.email}
            onChange={(event) => updateValue("email", event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.email)}
            aria-describedby={state.fieldErrors?.email ? "email-error" : undefined}
            className={inputClass}
          />
          <FieldError field="email" errors={state.fieldErrors} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone <span className="normal-case tracking-normal text-[#E7DCC1]/38">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            maxLength={40}
            value={values.phone}
            onChange={(event) => updateValue("phone", event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.phone)}
            aria-describedby={state.fieldErrors?.phone ? "phone-error" : undefined}
            className={inputClass}
          />
          <FieldError field="phone" errors={state.fieldErrors} />
        </div>
      </div>

      <fieldset>
        <legend className={labelClass}>
          Services interested in <span aria-hidden="true" className="text-[#C6A972]">*</span>
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {serviceOptions.map((service) => {
            const checked = values.services.includes(service);
            return (
              <label
                key={service}
                className={`motion-ui flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-4 text-sm ${
                  checked
                    ? "border-[#C6A972]/65 bg-[#C6A972]/8 text-[#E7DCC1]"
                    : "border-[#E7DCC1]/12 bg-[#171817] text-[#E7DCC1]/64 hover:border-[#E7DCC1]/25"
                }`}
              >
                <input
                  type="checkbox"
                  name="services"
                  value={service}
                  checked={checked}
                  onChange={() => toggleService(service)}
                  className="h-4 w-4 accent-[#C6A972]"
                />
                {service}
              </label>
            );
          })}
        </div>
        <FieldError field="services" errors={state.fieldErrors} />
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="budget" className={labelClass}>
            Estimated budget <span className="normal-case tracking-normal text-[#E7DCC1]/38">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={values.budget}
            onChange={(event) => updateValue("budget", event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.budget)}
            aria-describedby={state.fieldErrors?.budget ? "budget-error" : undefined}
            className={inputClass}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError field="budget" errors={state.fieldErrors} />
        </div>
        <div>
          <label htmlFor="timeline" className={labelClass}>
            Project timeline <span aria-hidden="true" className="text-[#C6A972]">*</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            required
            value={values.timeline}
            onChange={(event) => updateValue("timeline", event.target.value)}
            aria-invalid={Boolean(state.fieldErrors?.timeline)}
            aria-describedby={state.fieldErrors?.timeline ? "timeline-error" : undefined}
            className={inputClass}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <FieldError field="timeline" errors={state.fieldErrors} />
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Project description <span aria-hidden="true" className="text-[#C6A972]">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          minLength={30}
          maxLength={4000}
          rows={8}
          value={values.description}
          onChange={(event) => updateValue("description", event.target.value)}
          aria-invalid={Boolean(state.fieldErrors?.description)}
          aria-describedby="description-note description-error"
          placeholder="What are you building, what feels stuck, and what would a successful outcome look like?"
          className={`${inputClass} min-h-52 resize-y leading-7`}
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          <p id="description-note" className="text-xs leading-5 text-[#E7DCC1]/40">
            A useful brief helps us make the first conversation more valuable.
          </p>
          <span className="shrink-0 text-[10px] tabular-nums text-[#E7DCC1]/35">
            {values.description.length}/4000
          </span>
        </div>
        <FieldError field="description" errors={state.fieldErrors} />
      </div>

      <div className="flex flex-col gap-4 border-t border-[#E7DCC1]/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-5 text-[#E7DCC1]/42">
          Your information is used only to respond to this inquiry.
        </p>
        <button
          type="submit"
          disabled={pending}
          className="gold-button motion-ui inline-flex min-h-12 items-center justify-center rounded-full bg-[#C6A972] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0D0D0D] shadow-[0_12px_35px_rgba(198,169,114,0.18)] hover:-translate-y-0.5 hover:bg-[#D3B987] disabled:cursor-wait disabled:opacity-60"
        >
          <span className="relative z-10">
            {pending ? "Sending inquiry…" : "Send Inquiry"}
          </span>
        </button>
      </div>
    </form>
  );
}
