import { createFileRoute } from "@tanstack/react-router";
import { Search, AlertTriangle, Sparkles, Filter, Layers, ShieldCheck } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/exceptions")({
  component: () => <ProductPage content={content} />,
  head: () => ({
    meta: [
      { title: "Ledgerza Exceptions — Detect and resolve financial anomalies" },
      { name: "description", content: "Detect, prioritise and resolve financial exceptions faster with contextual signals, duplicate detection and one-click resolution." },
    ],
  }),
});

const content = {
  eyebrow: "Ledgerza Exceptions",
  title: "Anomalies caught early. Resolved with context.",
  subtitle:
    "Detect duplicate invoices, mismatched POs, unusual expenses and reconciliation breaks the moment they appear — and resolve them from a single console with the evidence already attached.",
  features: [
    { icon: Search, title: "Continuous scanning", desc: "Every journal, invoice, expense and payment scanned as it lands — no batch delay." },
    { icon: Sparkles, title: "Contextual signals", desc: "Vendor history, GL patterns and entity norms combined into a single confidence score." },
    { icon: AlertTriangle, title: "Prioritised queue", desc: "High-impact exceptions surface first, with SLA timers, owners and downstream impact." },
    { icon: Filter, title: "Custom rules", desc: "Layer your own detection rules alongside built-in ones — regex, thresholds, GL scopes." },
    { icon: Layers, title: "Bulk resolution", desc: "Group similar exceptions and resolve them together with a documented playbook." },
    { icon: ShieldCheck, title: "Evidence attached", desc: "Every resolution links source data, decision, actor and policy — audit-ready by default." },
  ],
  benefits: [
    "Catch duplicate payments before they leave your bank, not after month-end.",
    "Reduce controller reconciliation time by 60% with pre-grouped exception clusters.",
    "Give auditors a searchable, permanent record of every anomaly and its resolution.",
    "Ship custom detection rules without engineering — configure in the console.",
  ],
  faq: [
    { q: "How does detection compare to rules-only tools?", a: "Ledgerza combines your custom rules with vendor, GL and entity context so you get fewer false positives and clearer prioritisation than rules-only systems." },
    { q: "Can we plug in our own scoring logic?", a: "Yes. Custom rules and score weights are configurable per entity, so risk appetite differs by subsidiary." },
    { q: "What happens after resolution?", a: "The resolution is written back to the source system where possible and permanently attached to the exception record for audit." },
    { q: "Does it support KSeF and MSR flows?", a: "Yes. Detection is aware of Polish KSeF invoice formats and MSR reporting requirements out of the box." },
  ],
};
