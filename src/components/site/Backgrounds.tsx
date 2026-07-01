export function DottedSurface() {
  return <div className="bg-dotted-surface" aria-hidden />;
}

export function WovenLightHero({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <section className={`bg-hero-woven ${className}`}>
      <div className="ribbons" aria-hidden>
        <div className="ribbon ribbon-a" />
        <div className="ribbon ribbon-b" />
        <div className="ribbon ribbon-c" />
      </div>
      {children}
    </section>
  );
}
