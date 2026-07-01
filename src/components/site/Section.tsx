import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = "",
  center = false,
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-7xl px-6 py-24 md:py-32 ${className}`}>
      {(eyebrow || title || subtitle) && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`mb-12 max-w-3xl ${center ? "mx-auto text-center" : ""}`}
        >
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-white/60 px-3 py-1 text-xs font-medium text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" /> {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="display text-4xl text-foreground md:text-5xl">{title}</h2>
          )}
          {subtitle && (
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
          )}
        </motion.div>
      )}
      {children}
    </section>
  );
}
