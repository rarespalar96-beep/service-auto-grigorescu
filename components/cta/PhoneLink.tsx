"use client";

import { site } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import { telHref } from "@/lib/links";
import { trackTelefon } from "@/lib/analytics";
import Placeholder from "@/components/ui/Placeholder";

interface Props {
  /** Unde a fost apăsat (ex. "header", "bara-mobila", "footer"). */
  sursa: string;
  className?: string;
  /** Dacă lipsește, afișează numărul (sau chip „DE COMPLETAT"). */
  children?: React.ReactNode;
}

export default function PhoneLink({ sursa, className = "", children }: Props) {
  const href = telHref();
  const numarLipsa = isTbd(site.contact.telefonAfisat);

  // Conținutul implicit: numărul real sau chip-ul de completat.
  const continut =
    children ?? (numarLipsa ? <Placeholder label="Telefon" /> : site.contact.telefonAfisat);

  // Fără număr → nu există `tel:`; randăm un element neinteractiv (nu link spart).
  if (!href) {
    return <span className={className}>{continut}</span>;
  }

  // Cu conținut vizibil, numele accesibil = textul vizibil (evită mismatch a11y).
  return (
    <a
      href={href}
      onClick={() => trackTelefon(sursa)}
      className={className}
      aria-label={children ? undefined : `Sună la ${site.contact.telefonAfisat}`}
    >
      {continut}
    </a>
  );
}
