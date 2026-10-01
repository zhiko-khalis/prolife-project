"use client";

import { useId, useState } from "react";
import { company } from "@/lib/company";

type Fields = {
  name: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  brand: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  company: "",
  email: "",
  phone: "",
  country: "",
  brand: "",
  message: "",
};

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (values.name.trim().length < 2) errors.name = "Enter your name.";
  if (values.company.trim().length < 2) errors.company = "Enter your company.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  const digits = values.phone.replace(/\D/g, "");
  if (digits.length < 7) errors.phone = "Enter a phone number.";
  if (values.country.trim().length < 2) errors.country = "Enter your country.";
  if (values.brand.trim().length < 2) errors.brand = "Enter the brand or product.";
  if (values.message.trim().length < 10) errors.message = "Enter a message of at least 10 characters.";
  return errors;
}

export function InquiryForm() {
  const baseId = useId();
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function update(key: keyof Fields, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    const body = [
      `Name: ${values.name.trim()}`,
      `Company: ${values.company.trim()}`,
      `Email: ${values.email.trim()}`,
      `Phone: ${values.phone.trim()}`,
      `Country: ${values.country.trim()}`,
      `Brand / Product: ${values.brand.trim()}`,
      "",
      values.message.trim(),
    ].join("\n");

    const href = `mailto:${company.businessEmail}?subject=${encodeURIComponent(
      `Partnership inquiry from ${values.company.trim()}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus("ready");
  }

  return (
    <form id="inquiry" onSubmit={onSubmit} noValidate className="scroll-mt-28 rounded-[2rem] border border-ink/10 bg-white p-6 sm:p-8 lg:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id={`${baseId}-name`}
          label="Name"
          value={values.name}
          error={errors.name}
          autoComplete="name"
          onChange={(value) => update("name", value)}
        />
        <Field
          id={`${baseId}-company`}
          label="Company"
          value={values.company}
          error={errors.company}
          autoComplete="organization"
          onChange={(value) => update("company", value)}
        />
        <Field
          id={`${baseId}-email`}
          label="Email"
          type="email"
          value={values.email}
          error={errors.email}
          autoComplete="email"
          onChange={(value) => update("email", value)}
        />
        <Field
          id={`${baseId}-phone`}
          label="Phone"
          type="tel"
          value={values.phone}
          error={errors.phone}
          autoComplete="tel"
          onChange={(value) => update("phone", value)}
        />
        <Field
          id={`${baseId}-country`}
          label="Country"
          value={values.country}
          error={errors.country}
          autoComplete="country-name"
          onChange={(value) => update("country", value)}
        />
        <Field
          id={`${baseId}-brand`}
          label="Brand / Product"
          value={values.brand}
          error={errors.brand}
          onChange={(value) => update("brand", value)}
        />
      </div>
      <label className="mt-5 block" htmlFor={`${baseId}-message`}>
        <span className="text-sm font-medium text-ink">Message</span>
        <textarea
          id={`${baseId}-message`}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${baseId}-message-error` : undefined}
          className="mt-2 w-full rounded-2xl border border-ink/15 px-4 py-3 text-base text-ink outline-none"
        />
        {errors.message ? (
          <span id={`${baseId}-message-error`} className="mt-2 block text-sm text-[#8C2F2F]">
            {errors.message}
          </span>
        ) : null}
      </label>

      <p className="mt-5 text-sm leading-6 text-ink/60">
        This form opens your email application addressed to {company.businessEmail}. Submissions
        are not stored on this website.
      </p>

      <button
        type="submit"
        className="mt-6 inline-flex min-h-12 items-center rounded-full bg-ink px-6 text-sm font-medium text-white transition hover:bg-[#16383a]"
      >
        Send inquiry
      </button>

      <div aria-live="polite" className="mt-4 text-sm text-health-deep">
        {status === "ready"
          ? `Your email application should open with this inquiry to ${company.businessEmail}. If it does not, send the message there directly.`
          : ""}
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  value,
  error,
  onChange,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <label className="block" htmlFor={id}>
      <span className="text-sm font-medium text-ink">{label}</span>
      <input
        id={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="mt-2 h-12 w-full rounded-2xl border border-ink/15 px-4 text-base text-ink outline-none"
      />
      {error ? (
        <span id={`${id}-error`} className="mt-2 block text-sm text-[#8C2F2F]">
          {error}
        </span>
      ) : null}
    </label>
  );
}
