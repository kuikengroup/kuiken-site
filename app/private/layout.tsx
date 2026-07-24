import type { Metadata } from "next";
import type { ReactNode } from "react";
import { createMetadata } from "../lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Client Resources",
  description: "Private Kuiken Group project resources for approved clients and collaborators.",
  path: "/private",
  noIndex: true,
});

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return children;
}
