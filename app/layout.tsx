import "./globals.css";

export const metadata = {
  title: "Kuiken Group | Marketing Firm",
  description:
    "Kuiken Group helps businesses build stronger brands, sharper websites, and clearer paths to growth through strategy, design, and digital marketing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-[#E7DCC1]">
        <div className="min-h-screen bg-[#0D0D0D] text-[#E7DCC1] scroll-smooth">
          <header className="sticky top-0 z-20 border-b border-[#E7DCC1]/10 bg-[#0D0D0D]/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 lg:px-12">
              <a href="/" className="flex items-center gap-3">
                <img
                  src="/kuiken-logo-white.png"
                  alt="Kuiken Group Logo"
                  className="h-11 w-auto object-contain"
                />
                <div>
                  <div className="text-[11px] uppercase tracking-[0.32em] text-[#C6A972]">
                    Marketing Firm
                  </div>
                  <div className="text-sm font-semibold tracking-[0.22em] text-[#E7DCC1]">
                    KUIKEN GROUP
                  </div>
                </div>
              </a>

              <nav className="hidden items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-[#E7DCC1]/70 md:flex">
                <a href="/about" className="transition hover:text-[#C6A972]">
                  About
                </a>
                <a href="/#services" className="transition hover:text-[#C6A972]">
                  Services
                </a>
                <a href="/#approach" className="transition hover:text-[#C6A972]">
                  Approach
                </a>
                <a href="/#contact" className="transition hover:text-[#C6A972]">
                  Contact
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="/client-access"
                  className="rounded-full border border-[#C6A972]/35 bg-transparent px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#E7DCC1] transition duration-200 hover:-translate-y-0.5 hover:border-[#C6A972] hover:text-[#C6A972] inline-block"
                >
                  Client Access
                </a>
                <a
                  href="/#contact"
                  className="rounded-full bg-[#C6A972] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#0D0D0D] transition duration-200 hover:-translate-y-0.5 hover:opacity-90 inline-block"
                >
                  Schedule a Conversation
                </a>
              </div>
            </div>
          </header>

          <main>{children}</main>

          <footer className="border-t border-[#E7DCC1]/10 bg-[#252625]">
            <div className="mx-auto max-w-7xl px-8 py-14 lg:px-12">
              <div className="grid gap-10 md:grid-cols-3">
                <div>
                  <img
                    src="/kuiken-logo-white.png"
                    alt="Kuiken Group"
                    className="h-10 w-auto"
                  />
                  <p className="mt-5 max-w-xs text-sm leading-6 text-[#E7DCC1]/65">
                    Kuiken Group is a marketing firm helping businesses build stronger brands, sharper websites, and clearer paths to growth.
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#C6A972]">
                    Navigation
                  </div>
                  <div className="mt-5 space-y-3 text-sm text-[#E7DCC1]/65">
                    <a href="/about" className="block hover:text-[#C6A972]">
                      About
                    </a>
                    <a href="/#services" className="block hover:text-[#C6A972]">
                      Services
                    </a>
                    <a href="/#approach" className="block hover:text-[#C6A972]">
                      Approach
                    </a>
                    <a href="/client-access" className="block hover:text-[#C6A972]">
                      Client Access
                    </a>
                  </div>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#C6A972]">
                    Contact
                  </div>
                  <div className="mt-5 space-y-3 text-sm text-[#E7DCC1]/65">
                    <div>Brady Kuiken</div>
                    <div>President / CEO</div>
                    <div>brady@kuikengroup.com</div>
                    <div>712-541-7694</div>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col gap-2 border-t border-[#E7DCC1]/10 pt-6 text-xs text-[#E7DCC1]/45 md:flex-row md:items-center md:justify-between">
                <div>© {new Date().getFullYear()} Kuiken Group. All rights reserved.</div>
                <div>Brand Strategy • Digital Marketing • Lead Generation</div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}