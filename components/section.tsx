import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "ivory",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "ivory" | "white" | "forest";
}) {
  const tones = {
    ivory: "bg-ivory text-charcoal",
    white: "bg-white text-charcoal",
    forest: "bg-forest text-ivory",
  };
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-24 md:py-32 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-xs font-medium uppercase tracking-[0.25em] text-gold ${className}`}>{children}</p>
  );
}

export function ActionLink({
  href,
  children,
  variant = "primary",
  className = "",
  external,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "onDark" | "onDarkSecondary";
  className?: string;
  external?: boolean;
}) {
  const isExternal = external ?? (href.startsWith("http") || href.startsWith("mailto:"));
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-300";
  const variants = {
    primary: "bg-forest text-ivory hover:bg-forest-deep hover:shadow-lg hover:shadow-forest/10",
    secondary: "border border-charcoal/15 text-charcoal hover:border-gold hover:text-forest",
    onDark: "bg-ivory text-forest hover:bg-white hover:shadow-lg hover:shadow-black/20",
    onDarkSecondary: "border border-ivory/25 text-ivory hover:border-gold hover:text-gold-soft",
  };
  const classes = `${base} ${variants[variant]} ${className}`;

  return (
    <a
      href={href}
      className={classes}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
        →
      </span>
    </a>
  );
}

export function SourceNote({ source }: { source: { label: string; href: string } }) {
  return (
    <a
      href={source.href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-xs opacity-60 underline decoration-current/30 underline-offset-4 transition-opacity hover:opacity-100 hover:text-gold"
    >
      Source: {source.label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
