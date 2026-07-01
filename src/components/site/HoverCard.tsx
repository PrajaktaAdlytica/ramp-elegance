import { useRef, type ReactNode, type MouseEvent } from "react";

export function HoverCard({
  children,
  className = "",
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "a" | "article";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };
  const Cmp = As as "div";
  return (
    <Cmp
      ref={ref as never}
      onMouseMove={handleMove}
      className={`card-hover relative rounded-2xl border border-border bg-white ${className}`}
    >
      {children}
    </Cmp>
  );
}
