import { createFileRoute } from "@tanstack/react-router";
import { Workflow, Route as RouteIcon, ShieldCheck, Users, Zap, GitBranch } from "lucide-react";
import { ProductPage } from "@/components/site/ProductPage";

export const Route = createFileRoute("/products/approvals")({
  component: () => <ProductPage content={content} />,
  head: () => ({
    meta: [
      { title: "Ledgerza Approvals — Policy-driven financial approvals" },
      { name: "description", content: "Streamline financial approvals across every department with policy-driven workflows, thresholds and multi-entity support." },
    ],
  }),
});

const content = {
  eyebrow: "Ledgerza Approvals",
  title: "Approvals that move at finance speed.",
  subtitle:
    "Streamline financial approvals across every department with policy-driven workflows, threshold routing and native ERP sync — no more chasing sign-offs over email.",
  features: [
    { icon: Workflow, title: "Policy engine", desc: "Encode approval matrices, thresholds and delegations once. Ledgerza enforces them across every entity." },
    { icon: RouteIcon, title: "Smart routing", desc: "Route by amount, GL account, vendor risk or cost centre. Escalate automatically when SLAs slip." },
    { icon: Users, title: "Delegations & backups", desc: "Vacation coverage and role-based backups built in, so approvals never stall on out-of-office." },
    { icon: Zap, title: "Approve from anywhere", desc: "Web, mobile, Slack and MS Teams — with full context and one-tap actions." },
    { icon: GitBranch, title: "Parallel & sequential", desc: "Model any workflow: parallel legal + finance, sequential controller → CFO, or hybrid gates." },
    { icon: ShieldCheck, title: "Immutable trail", desc: "Every approval captured with policy version, actor and timestamp — export-ready for auditors." },
  ],
  benefits: [
    "Cut approval cycle time from 6 days to under 48 hours across the finance org.",
    "Enforce spend policy automatically — no more retroactive controller cleanups.",
    "Give auditors self-serve access to the full approval history per invoice or PO.",
    "Handle multi-entity approvals with entity-specific policy inheritance.",
  ],
  faq: [
    { q: "Can we model our existing approval matrix?", a: "Yes. Ledgerza's policy engine supports thresholds, GL scopes, entity inheritance, parallel and sequential gates, and delegation rules — no code required." },
    { q: "Does it work with our ERP?", a: "Native two-way sync with SAP, Xero, Comarch ERP, Netsuite, Sage and Dynamics. Approvals kick off from any source system and write back on completion." },
    { q: "How are policies audited?", a: "Every policy change is versioned. Approvals record the policy version that governed them, so historical decisions remain reproducible." },
    { q: "Can approvers act from Slack or Teams?", a: "Yes. Ledgerza posts full approval context and accepts one-click actions in Slack, MS Teams, email and mobile." },
  ],
};
