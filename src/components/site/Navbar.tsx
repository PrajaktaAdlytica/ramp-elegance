import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { ShimmerButton, OutlineButton } from "./Button";

const productLinks = [
  { to: "/products/approvals", title: "Ledgerza Approvals", desc: "Streamline financial approvals across every department." },
  { to: "/products/exceptions", title: "Ledgerza Exceptions", desc: "Detect, prioritise and resolve financial anomalies faster." },
  { to: "/products/audit", title: "Ledgerza Audit", desc: "Maintain a complete audit trail with confidence." },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="flex items-center gap-10">
          <Logo className={scrolled ? "h-10 w-auto" : "h-11 w-auto"} />
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              to="/"
              className="rounded-full px-3 py-1.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setOpen(true)}
              onMouseLeave={() => setOpen(false)}
            >
              <button className="inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground">
                Products <ChevronDown className="h-3.5 w-3.5" />
              </button>
              {open && (
                <div className="absolute left-1/2 top-full w-[380px] -translate-x-1/2 pt-3">
                  <div className="rounded-2xl border border-border bg-white p-2 shadow-lift">
                    {productLinks.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        className="block rounded-xl px-3 py-3 transition hover:bg-muted"
                      >
                        <div className="text-sm font-medium text-foreground">{p.title}</div>
                        <div className="mt-0.5 text-xs text-muted-foreground">{p.desc}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <a href="/#solutions" className="rounded-full px-3 py-1.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground">
              Solutions
            </a>
            <a href="/#pricing" className="rounded-full px-3 py-1.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground">
              Pricing
            </a>
            <Link to="/about" className="rounded-full px-3 py-1.5 text-sm text-foreground/80 transition hover:bg-black/5 hover:text-foreground">
              About
            </Link>
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/signin" className="text-sm text-foreground/80 hover:text-foreground">
            Sign In
          </Link>
          <ShimmerButton href="/request-demo" withArrow>
            Request Demo
          </ShimmerButton>
        </div>

        <button
          className="md:hidden rounded-full border border-border bg-white p-2"
          onClick={() => setMobile(!mobile)}
          aria-label="Menu"
        >
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobile && (
        <div className="mx-4 mb-4 rounded-2xl border border-border bg-white p-4 shadow-lift md:hidden">
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" onClick={() => setMobile(false)}>Home</Link>
            {productLinks.map((p) => (
              <Link key={p.to} to={p.to} onClick={() => setMobile(false)} className="pl-3 text-foreground/80">
                {p.title}
              </Link>
            ))}
            <a href="/#solutions" onClick={() => setMobile(false)}>Solutions</a>
            <a href="/#pricing" onClick={() => setMobile(false)}>Pricing</a>
            <Link to="/about" onClick={() => setMobile(false)}>About</Link>
            <Link to="/signin" onClick={() => setMobile(false)}>Sign In</Link>
            <div className="pt-2">
              <ShimmerButton href="/request-demo" withArrow>Request Demo</ShimmerButton>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export function _unused_outline() {
  return <OutlineButton>_</OutlineButton>;
}
