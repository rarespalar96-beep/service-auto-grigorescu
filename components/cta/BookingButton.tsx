"use client";

import { bookingUrl, externalLinkAttrs } from "@/lib/links";
import { trackProgramare } from "@/lib/analytics";

type Variant = "primary" | "ghost" | "bar";

const base =
  "inline-flex items-center justify-center gap-2 font-display font-semibold " +
  "uppercase tracking-wide transition focus-visible:outline-none active:translate-y-px";

const variants: Record<Variant, string> = {
  // CTA principal — singurul loc unde apare galbenul
  primary:
    "bg-accent text-accent-ink hover:bg-accent-600 px-5 py-3 text-base rounded-md " +
    "shadow-sm",
  // CTA în contexte deja accentuate (ex. lângă alt buton galben)
  ghost:
    "border border-accent text-accent hover:bg-accent hover:text-accent-ink " +
    "px-5 py-3 text-base rounded-md",
  // Jumătatea dreaptă a barei mobile fixe
  bar: "bg-accent text-accent-ink h-full w-full text-base",
};

interface Props {
  /** Identifică pagina-sursă pentru UTM (ex. "home", "servicii-frane"). */
  campaign: string;
  variant?: Variant;
  className?: string;
  children?: React.ReactNode;
}

export default function BookingButton({
  campaign,
  variant = "primary",
  className = "",
  children,
}: Props) {
  return (
    <a
      href={bookingUrl(campaign)}
      {...externalLinkAttrs}
      onClick={() => trackProgramare(campaign)}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children ?? "Programează-te"}
    </a>
  );
}
