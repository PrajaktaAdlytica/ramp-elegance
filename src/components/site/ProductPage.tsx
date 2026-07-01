import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WovenLightHero } from "./Backgrounds";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Section } from "./Section";
import { HoverCard } from "./HoverCard";
import { ShimmerButton, OutlineButton } from "./Button";
import { Dashboard } from "./Dashboard";
import { FAQ } from "./FAQ";

export type ProductContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: { icon: React.ComponentType<{ className?: string }>; title: string; desc: string }[];
  benefits: string[];
  faq: { q: string; a: string }[];
};

export function ProductPage({ content }: { content: ProductContent }) {
  return (
    <div className="relative">
      <Navbar />

      <WovenLightHero className="pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {content.eyebrow}
            </div>
            <h1 className="display text-5xl text-foreground md:text-6xl">{content.title}</h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {content.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <ShimmerButton href="/request-demo" withArrow>Request Demo</ShimmerButton>
              <OutlineButton href="/#platform">View Platform</OutlineButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-16 max-w-6xl"
          >
            <Dashboard />
          </motion.div>
        </div>
      </WovenLightHero>

      <Section eyebrow="Features" title="Built for how finance teams actually work.">
        <div className="grid gap-5 md:grid-cols-3">
          {content.features.map((f, i) => (
            <HoverCard key={i} className="p-7">
              <f.icon className="h-6 w-6 text-accent" />
              <h3 className="mt-5 text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{f.desc}</p>
            </HoverCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="Benefits" title="Outcomes finance leaders measure.">
        <div className="grid gap-4 md:grid-cols-2">
          {content.benefits.map((b, i) => (
            <HoverCard key={i} className="flex items-start gap-4 p-6">
              <div className="mt-0.5 rounded-full bg-accent/10 p-1.5 text-accent">
                <Check className="h-4 w-4" />
              </div>
              <div className="text-[15px] leading-relaxed">{b}</div>
            </HoverCard>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Answers for finance, IT and audit.">
        <FAQ items={content.faq} />
      </Section>

      <Section className="!py-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground p-12 text-center text-white md:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(600px 240px at 50% 0%, rgba(99,91,255,0.55), transparent 60%), radial-gradient(500px 200px at 80% 100%, rgba(59,130,246,0.35), transparent 60%)",
            }}
          />
          <div className="relative">
            <h3 className="display mx-auto max-w-2xl text-4xl md:text-5xl">
              Bring {content.title.split(".")[0]} to your finance stack.
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-white/70">
              See Ledgerza on your data in a 30-minute working session with a solutions engineer.
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
