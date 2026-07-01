import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { FileInput, ShieldCheck, GitBranch, CheckCircle2, Archive } from "lucide-react";

const steps = [
  { icon: FileInput, title: "Capture", desc: "Invoices, journals and requests arrive from ERP, email and Slack." },
  { icon: ShieldCheck, title: "Policy check", desc: "Rules engine validates thresholds, entities and approver chains." },
  { icon: GitBranch, title: "Route", desc: "Sequential or parallel approvers with escalation and delegation." },
  { icon: CheckCircle2, title: "Resolve", desc: "Exceptions closed with context; approvals signed off in one click." },
  { icon: Archive, title: "Audit", desc: "Immutable trail synced to ledger, ready for auditors on demand." },
];

export function WorkflowTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 30%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.4 });
  const lineHeight = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative rounded-2xl border border-border bg-white/70 p-6 backdrop-blur md:p-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm font-medium">Operational workflow</div>
        <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Live · sequential</span>
      </div>

      <div className="relative pl-10">
        {/* rail */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-border" aria-hidden />
        {/* progress fill */}
        <motion.div
          aria-hidden
          className="absolute left-4 top-2 w-px origin-top bg-gradient-to-b from-accent via-accent to-accent/40 shadow-[0_0_12px_rgba(99,91,255,0.6)]"
          style={{ height: lineHeight }}
        />

        <ol className="space-y-7">
          {steps.map((s, i) => {
            const start = i / steps.length;
            const active = useTransform(progress, (v) => (v >= start ? 1 : 0));
            const iconBg = useTransform(active, [0, 1], ["#ffffff", "#635bff"]);
            const iconColor = useTransform(active, [0, 1], ["#94a3b8", "#ffffff"]);
            const glow = useTransform(active, [0, 1], [
              "0 0 0 rgba(99,91,255,0)",
              "0 0 24px rgba(99,91,255,0.55)",
            ]);
            return (
              <li key={s.title} className="relative">
                <motion.span
                  className="absolute -left-10 top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border"
                  style={{ backgroundColor: iconBg, color: iconColor, boxShadow: glow }}
                >
                  <s.icon className="h-4 w-4" />
                </motion.span>
                <motion.div
                  style={{ opacity: useTransform(active, [0, 1], [0.55, 1]) }}
                  className="flex flex-col gap-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-foreground">{s.title}</span>
                    <motion.span
                      style={{ opacity: active }}
                      className="rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-accent"
                    >
                      Active
                    </motion.span>
                  </div>
                  <p className="text-[13px] leading-relaxed text-muted-foreground">{s.desc}</p>
                </motion.div>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
