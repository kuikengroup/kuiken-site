import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "../lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Client Access",
  description: "Access the private Kuiken Group client portal.",
  path: "/client-access",
  noIndex: true,
});

export default function ClientAccessLayout({ children }: { children: ReactNode }) {
  return children;
}
