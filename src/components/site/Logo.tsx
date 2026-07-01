import logo from "@/assets/ledgerza-logo.asset.json";

export function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={logo.url} alt="Ledgerza" className={className} />
    </a>
  );
}
