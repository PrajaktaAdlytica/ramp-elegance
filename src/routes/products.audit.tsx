import { createFileRoute } from "@tanstack/react-router";
import { FileCheck2, ShieldCheck, Search, FileText, History, DownloadCloud } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/audit")({
  component: () => <ProductPage content={content} />,
  head: () => ({
    meta: [
      { title: "Ledgerza Audit — Immutable audit trails for finance" },
      { name: "description", content: "Maintain a complete, immutable audit trail. Give auditors self-serve access with confidence — SOC 2 aligned, GDPR-native, EU-hosted." },
    ],
  }),
});

const content = {
  eyebrow: "Ledgerza Audit",
  title: "Audit trails auditors trust on sight.",
  subtitle:
    "Every approval, exception and finance decision captured in an immutable, timestamped ledger. Give auditors scoped, self-serve access — and cut audit weeks into days.",
  features: [
    { icon: FileCheck2, title: "Immutable ledger", desc: "Append-only record of every finance event, cryptographically anchored and export-ready." },
    { icon: History, title: "Point-in-time replay", desc: "Reconstruct any decision as it stood — policy version, actors, source data — for any date." },
    { icon: Search, title: "Auditor console", desc: "Read-only, scoped access for internal and external auditors with full search and filters." },
    { icon: FileText, title: "Evidence packs", desc: "One-click evidence bundles per control, sample or period — mapped to SOX, ISAE 3402 and MSR." },
    { icon: ShieldCheck, title: "SOC 2 + GDPR", desc: "SOC 2 Type II aligned, GDPR-native, EU data residency in Frankfurt and Warsaw." },
    { icon: DownloadCloud, title: "Vanta & Drata sync", desc: "Native evidence sync to Vanta, Drata and Secureframe controls — zero screenshots." },
  ],
  benefits: [
    "Reduce external audit cycles from four weeks to under one.",
    "Give auditors self-serve access with row-level scoping — no more shared inboxes.",
    "Automate evidence collection for SOC 2, ISAE 3402 and ISO 27001 controls.",
    "Keep a legally defensible record of every finance decision, forever.",
  ],
  faq: [
    { q: "Is the audit trail truly immutable?", a: "Yes. The ledger is append-only, cryptographically chained, and independently verifiable. Nothing can be edited or deleted after the fact." },
    { q: "How is auditor access managed?", a: "Auditors get scoped, read-only access limited to specific entities, periods and controls — provisioned by your team, revocable at any time." },
    { q: "Which frameworks do you support?", a: "SOX, SOC 2, ISAE 3402, ISO 27001, MSR, IFRS and Polish PSR. Evidence packs map controls automatically." },
    { q: "Where is the ledger hosted?", a: "EU-only. Primary in Frankfurt, warm standby in Warsaw. No data leaves the EU perimeter." },
  ],
};
