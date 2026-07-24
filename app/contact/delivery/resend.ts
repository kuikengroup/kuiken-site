import { Resend } from "resend";
import type { Inquiry } from "../inquiry";
import { createInquiryEmail } from "./email-template";
import type { InquiryDeliveryProvider } from "./types";

export const resendDelivery: InquiryDeliveryProvider = {
  async send(inquiry: Inquiry) {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_TO_EMAIL;
    const from = process.env.CONTACT_FROM_EMAIL;

    if (!apiKey || !to || !from) {
      console.error("[contact] Delivery configuration is incomplete.");
      return { accepted: false };
    }

    const resend = new Resend(apiKey);
    const { html, text } = createInquiryEmail(inquiry);

    try {
      const { data, error } = await resend.emails.send({
        from: `Kuiken Group Website <${from}>`,
        to,
        replyTo: inquiry.email,
        subject: `New website inquiry — ${inquiry.company}`,
        html,
        text,
      });

      if (error || !data?.id) {
        console.error("[contact] Resend did not accept the inquiry.");
        return { accepted: false };
      }

      return { accepted: true, id: data.id };
    } catch {
      console.error("[contact] Resend request failed.");
      return { accepted: false };
    }
  },
};
