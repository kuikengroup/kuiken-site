import "./globals.css";

export const metadata = {
  title: "Kuiken Group | Strategic Advisory",
  description:
    "Kuiken Group partners with business owners, investors, and operators to navigate growth, capital, and complex transitions with clarity, discipline, and discretion.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f5f1] text-[#16181d]">
        <div className="min-h-screen bg-[#f7f5f1] text-[#16181d] scroll-smooth">
          <header className="sticky top-0 z-20 border-b border-black/5 bg-[#f7f5f1]/90 backdrop-blur">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5 lg:px-12">
              <div className="flex items-center gap-3">
                <a href="/" className="flex items-center gap-3">
                  <img
                    src="/kuiken-logo.png"
                    alt="Kuiken Group Logo"
                    className="h-11 w-auto object-contain"
                  />
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.32em] text-[#8f7750]">
                      Private Advisory
                    </div>
                    <div className="text-sm font-semibold tracking-[0.22em] text-[#1a2230]">
                      KUIKEN GROUP
                    </div>
                  </div>
                </a>
              </div>

              <nav className="hidden items-center gap-10 text-[12px] uppercase tracking-[0.22em] text-[#4a4f57] md:flex">
                <a href="/about" className="transition hover:text-[#1a2230]">
                  About
                </a>
                <a href="/#services" className="transition hover:text-[#1a2230]">
                  Services
                </a>
                <a href="/#approach" className="transition hover:text-[#1a2230]">
                  Approach
                </a>
                <a href="/#contact" className="transition hover:text-[#1a2230]">
                  Contact
                </a>
              </nav>

              <div className="flex items-center gap-3">
                <a
                  href="/client-access"
                  className="rounded-full border border-[#1a2230]/15 bg-white px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:border-[#1a2230] inline-block"
                >
                  Client Access
                </a>
                <a
                  href="/#contact"
                  className="rounded-full border border-[#1a2230] px-5 py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#1a2230] transition duration-200 hover:-translate-y-0.5 hover:bg-[#1a2230] hover:text-white inline-block"
                >
                  Schedule a Conversation
                </a>
              </div>
            </div>
          </header>

          <main>{children}</main>

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
                    Kuiken Group is a private advisory firm focused on strategic decisions
                    involving growth, capital, and complex transitions.
                  </p>
                </div>

                <div>
                  <div className="text-[11px] uppercase tracking-[0.28em] text-[#8f7750]">
                    Navigation
                  </div>
                  <div className="mt-5 space-y-3 text-sm text-[#4a4f57]">
                    <a href="/about" className="block hover:text-[#1a2230]">
                      About
                    </a>
                    <a href="/#services" className="block hover:text-[#1a2230]">
                      Services
                    </a>
                    <a href="/#approach" className="block hover:text-[#1a2230]">
                      Approach
                    </a>
                    <a href="/private" className="block hover:text-[#1a2230]">
                      Client Access
                    </a>
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
        </div>
      </body>
    </html>
  );
}