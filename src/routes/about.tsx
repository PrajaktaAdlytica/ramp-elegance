import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { WovenLightHero } from "@/components/site/Backgrounds";
import { Section } from "@/components/site/Section";
import { HoverCard } from "@/components/site/HoverCard";
import { ShimmerButton, OutlineButton } from "@/components/site/Button";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About Ledgerza — Finance operations, built in Warsaw" },
      { name: "description", content: "Ledgerza is a Polish finance operations platform built by controllers, auditors and engineers for regulated EU businesses." },
    ],
  }),
});

const values = [
  { t: "Finance-native", d: "Built by former controllers and Big-Four auditors. We know the workflows because we ran them." },
  { t: "EU by default", d: "Data resident in Frankfurt and Warsaw. GDPR-native, SOC 2 Type II aligned, no exceptions." },
  { t: "Boring on purpose", d: "Finance software should be predictable. We ship slow, test hard and version everything." },
];

function About() {
  return (
    <div className="relative">
      <Navbar />
      <WovenLightHero className="pt-28">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> About Ledgerza
            </div>
            <h1 className="display text-5xl text-foreground md:text-6xl">
              Finance operations, built in Warsaw.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Ledgerza was founded in 2024 by a small team of former controllers, Big-Four auditors and infrastructure engineers who kept solving the same finance-operations problem for every company they joined. So we built the platform we always wanted.
            </p>
          </motion.div>
        </div>
      </WovenLightHero>

      <Section eyebrow="What we believe" title="Three principles that shape every decision.">
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((v) => (
            <HoverCard key={v.t} className="p-8">
              <h3 className="text-xl font-medium">{v.t}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{v.d}</p>
            </HoverCard>
          ))}
        </div>
      </Section>

      <Section className="!py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display text-4xl">Come see what we're building.</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            30 minutes, your data, a working session with a solutions engineer.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <ShimmerButton href="/request-demo" withArrow>Request Demo</ShimmerButton>
            <OutlineButton href="/signin">Sign In</OutlineButton>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
