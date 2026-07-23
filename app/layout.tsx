import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://kuikengroup.com"),
  title: {
    default: "Kuiken Group | Premium Marketing & Web Design",
    template: "%s | Kuiken Group",
  },
  description:
    "Kuiken Group helps growing businesses sharpen their brand, strengthen their digital presence, and turn attention into measurable growth.",
  keywords: ["brand strategy", "website design", "digital marketing", "lead generation", "creative agency"],
  openGraph: {
    title: "Kuiken Group | Premium Marketing & Web Design",
    description: "Strategy, identity, and digital experiences for ambitious businesses ready to grow.",
    url: "/",
    siteName: "Kuiken Group",
    type: "website",
    images: [{ url: "/work/kuiken-identity-logo-v3.jpg", width: 1448, height: 1086, alt: "Kuiken Group identity system" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kuiken Group | Premium Marketing & Web Design",
    description: "Strategy, identity, and digital experiences for ambitious businesses ready to grow.",
    images: ["/work/kuiken-identity-logo-v3.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-[#E7DCC1] antialiased">
        <Navigation />
        <main>{children}</main>
        <footer className="border-t border-[#E7DCC1]/10 bg-[#111211]">
          <div className="mx-auto max-w-[90rem] px-6 py-14 sm:px-8 lg:px-12 lg:py-18">
            <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
              <div>
                <Link href="/" className="inline-flex items-center gap-3">
                  <Image src="/kuiken-logo-white.png" alt="" width={75} height={63} className="h-10 w-auto" />
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.32em] text-[#C6A972]">Marketing Firm</div>
                    <div className="mt-1 text-xs font-semibold tracking-[0.22em]">KUIKEN GROUP</div>
                  </div>
                </Link>
                <p className="mt-6 max-w-md text-sm leading-7 text-[#E7DCC1]/52">
                  Strategy, design, and digital execution for businesses ready to look sharper and grow with confidence.
                </p>
              </div>

              <div>
                <div className="section-label">Navigate</div>
                <div className="mt-5 grid gap-3 text-sm text-[#E7DCC1]/58">
                  <Link href="/about" className="hover:text-[#C6A972]">About</Link>
                  <Link href="/#work" className="hover:text-[#C6A972]">Work</Link>
                  <Link href="/#services" className="hover:text-[#C6A972]">Services</Link>
                  <Link href="/#approach" className="hover:text-[#C6A972]">Process</Link>
                  <Link href="/client-access" className="hover:text-[#C6A972]">Client Access</Link>
                </div>
              </div>

              <div>
                <div className="section-label">Contact</div>
                <div className="mt-5 grid gap-3 text-sm text-[#E7DCC1]/58">
                  <a href="mailto:brady@kuikengroup.com" className="hover:text-[#C6A972]">brady@kuikengroup.com</a>
                  <a href="tel:+17125417694" className="hover:text-[#C6A972]">712-541-7694</a>
                  <span>Brady Kuiken · President / CEO</span>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-3 border-t border-[#E7DCC1]/10 pt-6 text-[10px] uppercase tracking-[0.18em] text-[#E7DCC1]/32 sm:flex-row sm:items-center sm:justify-between">
              <span>© {new Date().getFullYear()} Kuiken Group. All rights reserved.</span>
              <span>Brand Strategy · Digital Marketing · Web Design</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
