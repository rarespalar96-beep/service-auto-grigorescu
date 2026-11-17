"use client";

import { bookingUrl, externalLinkAttrs, type BookingTarget } from "@/lib/links";
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
  /** Unde aterizează pe gatadedrum (secțiune + categorie); implicit pagina generală. */
  target?: BookingTarget;
  tone?: Tone;
  size?: BtnSize;
  className?: string;
  children?: React.ReactNode;
}

export default function BookingButton({
  campaign,
  target,
  tone = "dark",
  size = "md",
  className = "",
  children,
}: Props) {
  return (
    <a
      href={bookingUrl(campaign, target)}
      {...externalLinkAttrs}
      onClick={() => trackProgramare(campaign)}
      className={btn(varianteDupaTon[tone], size, className)}
    >
      {children ?? "Programează-te"}
    </a>
  );
}
