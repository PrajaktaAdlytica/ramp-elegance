import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Clock, AlertTriangle, TrendingUp, FileCheck2, Zap } from "lucide-react";
import { CountUp } from "./CountUp";

const spring = { type: "spring" as const, stiffness: 120, damping: 20, mass: 0.6 };

function card(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { ...spring, delay },
  };
}

const bars = [42, 58, 47, 71, 63, 84, 76, 92, 88];

export function Dashboard({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative rounded-2xl border border-border bg-white p-4 shadow-lift ${compact ? "" : "md:p-6"}`}>
      {/* window chrome */}
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f87171]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#fbbf24]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#34d399]" />
        <div className="mx-auto flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-[11px] text-muted-foreground tnum">
          app.ledgerza.com / operations
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {/* KPI Row */}
        <motion.div {...card(0.05)} className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Open approvals</span>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </div>
          <div className="mt-2 text-2xl font-light tracking-tight">
            <CountUp to={128} />
          </div>
          <div className="mt-1 text-xs text-success">
            <span className="tnum">−12%</span> vs last week
          </div>
        </motion.div>
        <motion.div {...card(0.12)} className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Exceptions flagged</span>
            <AlertTriangle className="h-4 w-4 text-[#f59e0b]" />
          </div>
          <div className="mt-2 text-2xl font-light tracking-tight">
            <CountUp to={17} />
          </div>
          <div className="mt-1 text-xs text-muted-foreground tnum">4 high · 9 med · 4 low</div>
        </motion.div>
        <motion.div {...card(0.19)} className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">Cycle time</span>
            <Zap className="h-4 w-4 text-accent" />
          </div>
          <div className="mt-2 text-2xl font-light tracking-tight tnum">
            <CountUp to={2.4} decimals={1} suffix="d" />
          </div>
          <div className="mt-1 text-xs text-success">
            <CountUp to={38} suffix="% faster" />
          </div>
        </motion.div>

        {/* Approval queue */}
        <motion.div {...card(0.26)} className="md:col-span-2 rounded-xl border border-border">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="text-sm font-medium">Approval queue</div>
            <button className="inline-flex items-center gap-1 text-xs text-accent">
              View all <ArrowUpRight className="h-3 w-3" />
            </button>
          </div>
          <div className="divide-y divide-border">
            {[
              { v: "€ 12,480.00", who: "Kacper Wójcik", type: "Vendor invoice", state: "Pending", tone: "warn" },
              { v: "€ 3,290.55", who: "Anna Nowak", type: "Reimbursement", state: "Approved", tone: "ok" },
              { v: "€ 84,000.00", who: "Maria Kowalska", type: "Purchase order", state: "In review", tone: "info" },
              { v: "€ 1,120.00", who: "Piotr Zieliński", type: "Card charge", state: "Approved", tone: "ok" },
            ].map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.35 + i * 0.08 }}
                className="grid grid-cols-12 items-center gap-3 px-4 py-3 text-sm"
              >
                <div className="col-span-3 tnum font-medium">{r.v}</div>
                <div className="col-span-3 text-muted-foreground">{r.who}</div>
                <div className="col-span-3 text-muted-foreground">{r.type}</div>
                <div className="col-span-3 text-right">
                  <span
                    className={
                      "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] " +
                      (r.tone === "ok"
                        ? "bg-emerald-50 text-emerald-700"
                        : r.tone === "warn"
                        ? "bg-amber-50 text-amber-700"
                        : "bg-blue-50 text-blue-700")
                    }
                  >
                    {r.tone === "ok" ? <CheckCircle2 className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
                    {r.state}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Chart */}
        <motion.div {...card(0.32)} className="rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium">Cash flow · 30d</div>
            <TrendingUp className="h-4 w-4 text-accent" />
          </div>
          <div className="mt-1 text-2xl font-light tracking-tight tnum">
            € <CountUp to={4820000} />
          </div>
          <div className="mt-4 flex h-24 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.4 + i * 0.05 }}
                style={{ height: `${h}%`, transformOrigin: "bottom" }}
                className={`flex-1 rounded-sm ${i === bars.length - 1 ? "bg-accent" : "bg-foreground/80"}`}
              />
            ))}
          </div>
        </motion.div>

        {/* Audit timeline */}
        <motion.div {...card(0.38)} className="md:col-span-2 rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-medium">Audit timeline</div>
            <span className="text-xs text-muted-foreground tnum">Q3 · 2026</span>
          </div>
          <ol className="relative border-l border-border pl-4">
            {[
              { t: "10:24", txt: "Invoice #INV-2841 approved by K. Wójcik", ok: true },
              { t: "10:19", txt: "Exception EX-108 resolved — duplicate vendor payment", ok: true },
              { t: "10:11", txt: "PO #PO-9021 escalated to CFO for €84,000 threshold", ok: false },
              { t: "10:03", txt: "GL close checkpoint completed — August 2026", ok: true },
            ].map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ ...spring, delay: 0.5 + i * 0.08 }}
                className="mb-3 last:mb-0"
              >
                <span
                  className={`absolute -left-[7px] mt-1.5 h-3 w-3 rounded-full border-2 border-white ${r.ok ? "bg-success" : "bg-warning"}`}
                />
                <div className="flex items-center gap-3 text-sm">
                  <span className="tnum text-xs text-muted-foreground">{r.t}</span>
                  <span className="text-foreground/90">{r.txt}</span>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Activity */}
        <motion.div {...card(0.44)} className="rounded-xl border border-border p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-medium">
            <FileCheck2 className="h-4 w-4 text-accent" />
            Activity
          </div>
          <div className="space-y-3 text-xs text-muted-foreground">
            {[
              "New rule: auto-approve < €500 for T&E",
              "Vanta control mapped to SOX-402",
              "Xero sync completed · 342 records",
              "Slack: 3 pending mentions for M. Kowalska",
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-2"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
                <span>{s}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
