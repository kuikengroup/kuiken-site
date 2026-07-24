"use server";

import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { resendDelivery } from "./delivery/resend";
import type { InquiryFormState } from "./inquiry";
import { validateInquiry } from "./inquiry";
import { isRateLimited } from "./rate-limit";

export async function submitInquiry(
  _previousState: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  if (String(formData.get("website") ?? "")) {
    return {
      status: "error",
      message: "We could not send your inquiry. Please review the form and try again.",
    };
  }

  const requestHeaders = await headers();
  const clientAddress =
    requestHeaders.get("cf-connecting-ip") ??
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    null;

  if (isRateLimited(clientAddress)) {
    return {
      status: "error",
      message: "Too many attempts were made. Please wait a few minutes and try again.",
    };
  }

  const validation = validateInquiry(formData);
  if (!validation.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      fieldErrors: validation.errors,
    };
  }

  const result = await resendDelivery.send(validation.inquiry);
  if (!result.accepted) {
    return {
      status: "error",
      message:
        "Your inquiry could not be sent right now. Your entries are still here—please try again or email brady@kuikengroup.com.",
    };
  }

  const cookieStore = await cookies();
  cookieStore.set("contact_submission", result.id, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 5 * 60,
    path: "/contact/success",
  });

  redirect("/contact/success");
}
