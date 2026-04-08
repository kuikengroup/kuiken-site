import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kuiken Group",
  description: "Kuiken Group",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
        <footer className="border-t border-black/6 bg-white">
          <div className="mx-auto max-w-7xl px-8 py-14 lg:px-12">
            <div className="grid gap-10 md:grid-cols-3">
              <div>
                <img
                  src="/kuiken-logo.png"
                  alt="Kuiken Group"
                  className="h-10 w-auto"
                />
                <p className="mt-5 max-w-xs text-sm leading-6 text-[#5a616b]">
                  Kuiken Group is a private advisory firm focused on strategic decisions involving growth, capital, and complex transitions.
                </p>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                  Navigation
                </div>
                <div className="mt-5 space-y-3 text-sm text-[#4a4f57]">
                  <a href="/about" className="block hover:text-[#1a2230]">About</a>
                  <a href="/#services" className="block hover:text-[#1a2230]">Services</a>
                  <a href="/#approach" className="block hover:text-[#1a2230]">Approach</a>
                  <a href="/private" className="block hover:text-[#1a2230]">Client Access</a>
                </div>
              </div>

              <div>
                <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                  Contact
                </div>
                <div className="mt-5 space-y-3 text-sm text-[#4a4f57]">
                  <div>Brady Kuiken</div>
                  <div>President / CEO</div>
                  <div>brady@kuikengroup.com</div>
                  <div>712-541-7694</div>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-black/6 pt-6 text-xs text-[#6b7280] flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>© {new Date().getFullYear()} Kuiken Group. All rights reserved.</div>
              <div>Private Advisory • Discretion • Long-Term Value</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
