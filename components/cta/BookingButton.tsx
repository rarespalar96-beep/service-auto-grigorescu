"use client";

import { bookingUrl, externalLinkAttrs } from "@/lib/links";
import { trackProgramare } from "@/lib/analytics";
import { btn, type BtnSize, type BtnVariant } from "@/components/cta/buttonStyles";

/** Fundalul pe care stă butonul — decide culoarea plină (albul nu se vede pe deschis). */
type Tone = "dark" | "light" | "bar";

const varianteDupaTon: Record<Tone, BtnVariant> = {
  dark: "book-dark",
  light: "book-light",
  bar: "bar-book",
};

interface Props {
  /** Identifică pagina-sursă pentru UTM (ex. "home", "servicii-frane"). */
  campaign: string;
  tone?: Tone;
  size?: BtnSize;
  className?: string;
  children?: React.ReactNode;
}

export default function BookingButton({
  campaign,
  tone = "dark",
  size = "md",
  className = "",
  children,
}: Props) {
  return (
    <a
      href={bookingUrl(campaign)}
      {...externalLinkAttrs}
      onClick={() => trackProgramare(campaign)}
      className={btn(varianteDupaTon[tone], size, className)}
    >
      {children ?? "Programează-te"}
    </a>
  );
}
