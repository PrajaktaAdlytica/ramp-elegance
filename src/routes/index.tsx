import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Workflow,
  Search,
  FileCheck2,
  Layers,
  Building2,
  ArrowRight,
  Sparkles,
  Lock,
  Landmark,
  GaugeCircle,
  Globe2,
} from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WovenLightHero } from "@/components/site/Backgrounds";
import { ShimmerButton, OutlineButton } from "@/components/site/Button";
import { Section } from "@/components/site/Section";
import { HoverCard } from "@/components/site/HoverCard";
import { Dashboard } from "@/components/site/Dashboard";
import { CountUp } from "@/components/site/CountUp";
import { FAQ } from "@/components/site/FAQ";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Ledgerza — Operational Finance. Finally in One Place." },
      {
        name: "description",
        content:
          "Approvals, exceptions and audit trails unified in one intelligent finance operations platform for modern European businesses.",
      },
    ],
  }),
});

const logos = ["Northwind", "Baltyk", "Kraków Labs", "Vistula Capital", "Helion Health", "Warsaw Foundry"];

const products = [
  {
    icon: Workflow,
    name: "Ledgerza Approvals",
    to: "/products/approvals",
    desc: "Streamline financial approvals across every department with policy-driven workflows.",
  },
  {
    icon: Search,
    name: "Ledgerza Exceptions",
    to: "/products/exceptions",
    desc: "Detect, prioritise and resolve financial anomalies faster with contextual signals.",
  },
  {
    icon: FileCheck2,
    name: "Ledgerza Audit",
    to: "/products/audit",
    desc: "Maintain a complete, immutable audit trail auditors and regulators trust on sight.",
  },
];

const benefits = [
  { icon: GaugeCircle, title: "38% faster close", desc: "Automate policy checks and eliminate the email-and-spreadsheet loop that stalls approvals." },
  { icon: ShieldCheck, title: "Audit-ready by default", desc: "Every decision, exception and approver captured with immutable, timestamped context." },
  { icon: Lock, title: "EU-hosted and compliant", desc: "SOC 2 aligned, GDPR-native, data resident in Frankfurt and Warsaw." },
  { icon: Layers, title: "Fits your stack", desc: "Native integrations with SAP, Xero, Comarch ERP, Netsuite, Slack, MS Teams and Vanta." },
  { icon: Landmark, title: "Built for regulated SMEs", desc: "Designed with Polish auditors and EU controllers for MSR, KSeF and IFRS realities." },
  { icon: Globe2, title: "Multi-entity, multi-currency", desc: "Manage EUR, PLN, GBP and USD workflows across subsidiaries from a single console." },
];

const tiers = [
  {
    name: "Starter",
    price: "€490",
    cadence: "/ month",
    desc: "For growing finance teams standardising approvals.",
    features: ["Up to 25 users", "Approvals + Exceptions", "Standard integrations", "Email support"],
  },
  {
    name: "Growth",
    price: "€1,490",
    cadence: "/ month",
    featured: true,
    badge: "Most popular",
    desc: "For controllers running multi-entity finance operations.",
    features: [
      "Up to 150 users",
      "Full platform — Approvals, Exceptions, Audit",
      "SSO, SAML & SCIM provisioning",
      "Audit trail export & Vanta control mapping",
      "Multi-entity & multi-currency (EUR, PLN, GBP, USD)",
      "Priority support with 4h SLA",
      "Dedicated implementation engineer",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "",
    desc: "For regulated groups with complex audit and residency needs.",
    features: ["Unlimited users", "Dedicated environment", "EU data residency", "24/7 CSM"],
  },
];

const testimonials = [
  {
    q: "Ledgerza collapsed three approval systems into one clean workflow. Our controllers finally close on schedule.",
    who: "Kacper Wójcik",
    role: "CFO, Baltyk Group",
  },
  {
    q: "The audit trail alone paid for it. Our auditors now come and go in a week.",
    who: "Anna Nowak",
    role: "Financial Controller, Helion Health",
  },
  {
    q: "Exceptions used to sit in inboxes. Now they surface with the context to actually resolve them.",
    who: "Piotr Zieliński",
    role: "Head of Finance Ops, Vistula Capital",
  },
];

const faq = [
  { q: "Where is my data hosted?", a: "All customer data is hosted in the EU — primary in Frankfurt with warm standby in Warsaw. Ledgerza is GDPR-native and SOC 2 Type II aligned." },
  { q: "Does Ledgerza replace our ERP?", a: "No. Ledgerza sits above your ERP and accounting system as the operational finance layer for approvals, exceptions and audit workflows." },
  { q: "Which systems do you integrate with?", a: "Native connectors for SAP, Xero, Comarch ERP, Netsuite, Sage, Microsoft Dynamics, Slack, MS Teams, Google Workspace and Vanta." },
  { q: "Is Ledgerza compatible with KSeF and MSR?", a: "Yes. Ledgerza was built alongside Polish auditors and supports KSeF invoice flows, MSR reporting formats and IFRS/PSR mappings out of the box." },
  { q: "How long is implementation?", a: "Most customers are live in 3–6 weeks. Implementation is included in Growth and Enterprise plans, delivered by our EU-based solutions engineers." },
];

export default function Home() {
  return (
    <div className="relative">
      <Navbar />

      {/* HERO */}
      <WovenLightHero className="pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-accent backdrop-blur">
              <Sparkles className="h-3 w-3" />
              Finance operations, unified for modern EU teams
            </div>
            <h1 className="display text-5xl text-foreground md:text-7xl">
              Operational Finance.
              <br />
              <span className="text-foreground/60">Finally in One Place.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ledgerza unifies approvals, financial exceptions and audit trails into one intelligent finance operations platform for modern European businesses.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <ShimmerButton href="/request-demo" withArrow>Request Demo</ShimmerButton>
              <OutlineButton href="#platform">View Platform</OutlineButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-20 max-w-6xl"
            id="platform"
          >
            <Dashboard />
          </motion.div>
        </div>
      </WovenLightHero>

      {/* TRUSTED BY */}
      <section className="border-y border-border bg-white/50 py-14">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by EU finance teams at
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-8 opacity-70 md:grid-cols-6">
            {logos.map((l) => (
              <div key={l} className="flex items-center justify-center">
                <span className="text-lg font-light tracking-tight text-foreground/70">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section eyebrow="The problem" title="Operational finance lives in the cracks between systems.">
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { t: "Approvals over email", d: "Chasing sign-offs across inboxes with no policy enforcement and no clean audit trail." },
            { t: "Exceptions in spreadsheets", d: "Reconciliations, duplicates and anomalies handled ad-hoc, discovered late, resolved slowly." },
            { t: "Audits from screenshots", d: "Assembling evidence from Slack, tickets and folders every quarter, every year." },
          ].map((c, i) => (
            <HoverCard key={i} className="p-8">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Problem 0{i + 1}
              </div>
              <h3 className="mt-3 text-xl font-medium text-foreground">{c.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{c.d}</p>
            </HoverCard>
          ))}
        </div>
      </Section>

      {/* SOLUTION */}
      <Section id="solutions" eyebrow="The Ledgerza platform" title="One operating system for your finance workflows.">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Ledgerza sits above your ERP and accounting stack as the operational layer where approvals move, exceptions get resolved and audit evidence is captured — automatically, in context, with every decision timestamped.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Policy-driven approvals across entities and currencies",
                "Anomaly detection on invoices, journals and expenses",
                "Immutable audit trail from decision to reconciliation",
                "Native connectors to SAP, Xero, Comarch, Netsuite and Vanta",
              ].map((x) => (
                <li key={x} className="flex items-start gap-3">
                  <span className="mt-1 rounded-full bg-accent/10 p-1 text-accent">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[15px]">{x}</span>
                </li>
              ))}
            </ul>
          </div>
          <HoverCard className="p-2">
            <Dashboard compact />
          </HoverCard>
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section eyebrow="Products" title="Three products. One platform. One source of truth.">
        <div className="grid gap-5 md:grid-cols-3">
          {products.map((p) => (
            <HoverCard key={p.name} className="flex flex-col p-8">
              <p.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-xl font-medium">{p.name}</h3>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted-foreground">{p.desc}</p>
              <Link
                to={p.to}
                className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:gap-2 transition-all"
              >
                Explore product <ArrowRight className="h-4 w-4" />
              </Link>
            </HoverCard>
          ))}
        </div>
      </Section>

      {/* BENEFITS */}
      <Section eyebrow="Benefits" title="Built for the way European finance teams work.">
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((b) => (
            <HoverCard key={b.title} className="p-7">
              <b.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-lg font-medium">{b.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{b.desc}</p>
            </HoverCard>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section id="pricing" eyebrow="Pricing" title="Transparent plans for teams that grow." center>
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <HoverCard key={t.name} className={`relative p-8 ${t.featured ? "bg-foreground text-white ring-1 ring-accent/40" : ""}`}>
              {t.featured && (t as { badge?: string }).badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-white shadow-lg shadow-accent/40">
                  {(t as { badge?: string }).badge}
                </div>
              )}
              <div className={`text-sm font-medium ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>{t.name}</div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="display text-4xl tnum">{t.price}</span>
                <span className={t.featured ? "text-white/60" : "text-muted-foreground"}>{t.cadence}</span>
              </div>
              <p className={`mt-3 text-[15px] leading-relaxed ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>{t.desc}</p>
              <ul className="mt-6 space-y-3 text-sm">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full ${t.featured ? "bg-white" : "bg-accent"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                {t.featured ? (
                  <ShimmerButton href="/request-demo" withArrow>Request Demo</ShimmerButton>
                ) : (
                  <OutlineButton href="/request-demo">Talk to sales</OutlineButton>
                )}
              </div>
            </HoverCard>
          ))}
        </div>
      </Section>

      {/* STATISTICS */}
      <Section eyebrow="Impact" title="Numbers our customers actually report." center>
        <div className="grid gap-5 md:grid-cols-4">
          {[
            { v: 38, s: "%", label: "faster monthly close" },
            { v: 4.2, s: "d", d: 1, label: "average approval cycle" },
            { v: 92, s: "%", label: "exceptions auto-classified" },
            { v: 100, s: "%", label: "audit-ready coverage" },
          ].map((k, i) => (
            <HoverCard key={i} className="p-8 text-center">
              <div className="display text-5xl text-foreground tnum">
                <CountUp to={k.v} suffix={k.s} decimals={k.d ?? 0} />
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{k.label}</div>
            </HoverCard>
          ))}
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section eyebrow="Customers" title="What EU finance leaders say.">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <HoverCard key={i} className="flex flex-col p-8">
              <div className="text-2xl leading-none text-accent">“</div>
              <p className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/90">{t.q}</p>
              <div className="mt-6 border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-xs font-medium text-white">
                    {t.who.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.who}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            </HoverCard>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" eyebrow="FAQ" title="Everything finance, IT and audit ask us." center>
        <FAQ items={faq} />
      </Section>

      {/* CTA */}
      <Section className="!py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-12 text-center text-white md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-50"
            style={{
              background:
                "radial-gradient(700px 300px at 50% 0%, rgba(99,91,255,0.55), transparent 60%), radial-gradient(500px 200px at 80% 100%, rgba(59,130,246,0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-white/80">
              <Building2 className="h-3 w-3" /> Trusted by regulated EU SMEs
            </div>
            <h3 className="display mx-auto mt-5 max-w-3xl text-4xl md:text-6xl">
              Ready to close the books, calmly.
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              A 30-minute working session with a solutions engineer, on your data, with your workflows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ShimmerButton href="/request-demo" withArrow>Request Demo</ShimmerButton>
              <a href="/signin" className="rounded-full border border-white/25 px-6 py-3 text-sm text-white/90 hover:bg-white/10">
                Sign In
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
