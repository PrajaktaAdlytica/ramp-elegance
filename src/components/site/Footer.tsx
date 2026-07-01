import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Products",
    links: [
      { label: "Approvals", to: "/products/approvals" },
      { label: "Exceptions", to: "/products/exceptions" },
      { label: "Audit", to: "/products/audit" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Pricing", to: "/#pricing" },
      { label: "Contact", to: "/request-demo" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Sign In", to: "/signin" },
      { label: "Request Demo", to: "/request-demo" },
      { label: "Security", to: "/#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/" },
      { label: "Terms", to: "/" },
      { label: "GDPR", to: "/" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/60">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-6">
          <div className="md:col-span-2">
            <Logo className="h-8" />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Operational finance software for modern European businesses. Warsaw, Poland.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-medium uppercase tracking-wider text-foreground">
                {c.title}
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {c.links.map((l) =>
                  l.to.startsWith("/#") ? (
                    <li key={l.label}>
                      <a href={l.to} className="text-muted-foreground hover:text-foreground">
                        {l.label}
                      </a>
                    </li>
                  ) : (
                    <li key={l.label}>
                      <Link to={l.to} className="text-muted-foreground hover:text-foreground">
                        {l.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} Ledgerza sp. z o.o. — ledgerza.com</span>
          <span>Made in Warsaw · GDPR & SOC 2 aligned</span>
        </div>
      </div>
    </footer>
  );
}
