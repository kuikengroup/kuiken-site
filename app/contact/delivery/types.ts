import type { Inquiry } from "../inquiry";

export type DeliveryResult =
  | { accepted: true; id: string }
  | { accepted: false };

export interface InquiryDeliveryProvider {
  send(inquiry: Inquiry): Promise<DeliveryResult>;
}
