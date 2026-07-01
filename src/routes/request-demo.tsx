import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Zap, GaugeCircle } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WovenLightHero } from "@/components/site/Backgrounds";
import { ShimmerButton } from "@/components/site/Button";
import { HoverCard } from "@/components/site/HoverCard";
import { Dashboard } from "@/components/site/Dashboard";

export const Route = createFileRoute("/request-demo")({
  component: RequestDemo,
  head: () => ({
    meta: [
      { title: "Request a demo — Ledgerza" },
      { name: "description", content: "See Ledgerza on your data. Book a 30-minute working session with a solutions engineer." },
    ],
  }),
});

function Field({
  label, id, type = "text", placeholder, textarea, required,
}: { label: string; id: string; type?: string; placeholder?: string; textarea?: boolean; required?: boolean }) {
  const cls =
    "mt-2 block w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-[15px] text-foreground placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10 transition";
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      {textarea ? (
        <textarea id={id} placeholder={placeholder} rows={4} className={cls} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} className={cls} />
      )}
    </div>
  );
}

function RequestDemo() {
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <Navbar />
      <WovenLightHero className="pt-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-14 md:grid-cols-2 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> Request Demo
            </div>
            <h1 className="display text-4xl text-foreground md:text-5xl">
              See Ledgerza on your data.
            </h1>
            <p className="mt-5 max-w-lg text-[17px] leading-relaxed text-muted-foreground">
              A 30-minute working session with a solutions engineer — no slides, just your workflows. Available in English, Polish and German.
            </p>

            <HoverCard className="mt-8 p-7">
              {sent ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-success/10 text-success">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-xl font-medium">Thanks — we'll be in touch.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A Ledgerza solutions engineer will reach out within one business day to schedule.
                  </p>
                </div>
              ) : (
                <form
                  className="grid gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSent(true);
                  }}
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="company" label="Company" placeholder="Northwind sp. z o.o." required />
                    <Field id="name" label="Name" placeholder="Anna Nowak" required />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field id="email" label="Work email" type="email" placeholder="anna@northwind.eu" required />
                    <Field id="title" label="Job title" placeholder="Financial Controller" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="country" className="text-sm font-medium">Country</label>
                      <select id="country" className="mt-2 block w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-[15px] focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10">
                        <option>Poland</option><option>Germany</option><option>Netherlands</option>
                        <option>France</option><option>United Kingdom</option><option>Other EU</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="size" className="text-sm font-medium">Company size</label>
                      <select id="size" className="mt-2 block w-full rounded-lg border border-border bg-white px-3.5 py-2.5 text-[15px] focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/10">
                        <option>1–50</option><option>51–200</option><option>201–1,000</option>
                        <option>1,001–5,000</option><option>5,000+</option>
                      </select>
                    </div>
                  </div>
                  <Field id="message" label="Message" placeholder="What would you like to see?" textarea />
                  <div className="mt-2">
                    <ShimmerButton type="submit" withArrow>Request Demo</ShimmerButton>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We reply within one business day. Your data stays in the EU.
                  </p>
                </form>
              )}
            </HoverCard>
          </motion.div>

          <div className="flex flex-col gap-6">
            <HoverCard className="p-7">
              <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">What you'll see</div>
              <ul className="mt-5 space-y-4">
                {[
                  { i: GaugeCircle, t: "Your approvals, mapped live", d: "We wire a sample of your policy into Ledgerza during the call." },
                  { i: ShieldCheck, t: "Audit trail on real data", d: "See how an audit sample renders across your ERP, journals and Slack." },
                  { i: Zap, t: "Exception detection preview", d: "We run detection against a sample GL to show what surfaces." },
                ].map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 rounded-full bg-accent/10 p-1.5 text-accent">
                      <f.i className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-sm font-medium">{f.t}</div>
                      <div className="text-sm text-muted-foreground">{f.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </HoverCard>

            <HoverCard className="p-7">
              <div className="text-2xl leading-none text-accent">“</div>
              <p className="mt-2 text-[15px] leading-relaxed text-foreground/90">
                We booked the demo on Monday and were live on our first entity by end of month. The Ledgerza team knows finance operations at a rare depth.
              </p>
              <div className="mt-5 border-t border-border pt-4 text-sm">
                <div className="font-medium">Maria Kowalska</div>
                <div className="text-muted-foreground">VP Finance, Kraków Labs</div>
              </div>
            </HoverCard>

            <HoverCard className="p-2">
              <Dashboard compact />
            </HoverCard>
          </div>
        </div>
      </WovenLightHero>
      <Footer />
    </div>
  );
}
