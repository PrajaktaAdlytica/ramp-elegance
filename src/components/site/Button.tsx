import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

type Common = { children: ReactNode; className?: string; withArrow?: boolean };

export function ShimmerButton({
  children,
  href,
  onClick,
  type,
  className = "",
  withArrow,
}: Common & {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );
  if (href) {
    const external = href.startsWith("http") || href.startsWith("#");
    if (external) return <a href={href} className={`btn-shimmer ${className}`}>{content}</a>;
    return (
      <Link to={href} className={`btn-shimmer ${className}`}>
        {content}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} onClick={onClick} className={`btn-shimmer ${className}`}>
      {content}
    </button>
  );
}

export function OutlineButton({
  children,
  href,
  onClick,
  className = "",
  withArrow,
  ...rest
}: Common & { href?: string; onClick?: () => void } & Partial<ComponentProps<"button">>) {
  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );
  if (href) {
    const external = href.startsWith("http") || href.startsWith("#");
    if (external) return <a href={href} className={`btn-outline ${className}`}>{content}</a>;
    return <Link to={href} className={`btn-outline ${className}`}>{content}</Link>;
  }
  return (
    <button onClick={onClick} className={`btn-outline ${className}`} {...rest}>
      {content}
    </button>
  );
}
