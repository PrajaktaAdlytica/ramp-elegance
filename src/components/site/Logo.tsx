export function Logo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src="/ledgerza-logo.png" alt="Ledgerza" className={className} />
    </a>
  );
}
