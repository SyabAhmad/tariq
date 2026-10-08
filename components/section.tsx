import type { ReactNode } from "react";

export function Section({
  id,
  children,
  className = "",
  tone = "paper",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tone?: "paper" | "cream" | "ink";
}) {
  const tones = {
    paper: "bg-paper text-ink",
    cream: "bg-cream text-ink",
    ink: "bg-ink text-paper",
  };
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-24 md:py-32 ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-mono text-[11px] font-medium uppercase tracking-[0.28em] text-oxblood ${className}`}>
      {children}
    </p>
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
    primary: "bg-ink text-paper hover:bg-oxblood",
    secondary: "border border-ink/20 text-ink hover:border-oxblood hover:text-oxblood",
    onDark: "bg-paper text-ink hover:bg-oxblood hover:text-paper",
    onDarkSecondary:
      "border border-paper/25 text-paper hover:border-oxblood-soft hover:text-oxblood-soft",
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
      className="inline-flex items-center gap-1.5 text-xs text-ink-soft underline decoration-ink/15 underline-offset-4 transition-colors hover:text-oxblood"
    >
      Source: {source.label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
