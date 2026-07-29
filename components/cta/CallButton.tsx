import { site } from "@/content/site";
import { isTbd } from "@/content/_placeholder";
import PhoneLink from "@/components/cta/PhoneLink";
import PhoneIcon from "@/components/ui/PhoneIcon";
import Placeholder from "@/components/ui/Placeholder";
import { btn, type BtnSize } from "@/components/cta/buttonStyles";

interface Props {
  /** Unde a fost apăsat, pentru tracking (ex. "header", "home-hero"). */
  sursa: string;
  /** `bar` = jumătatea barei mobile fixe. Culoarea e roșie pe orice fundal. */
  tone?: "dark" | "light" | "bar";
  size?: BtnSize;
  /** Cuvântul dinaintea numărului. `null` = doar numărul. */
  eticheta?: string | null;
  className?: string;
}

/**
 * „Sună <număr>" — același template ca BookingButton și ROȘU, deci CTA-ul cel
 * mai vizibil de pe pagină. Numărul se afișează ÎNTOTDEAUNA (proprietarul vrea
 * să fie citibil, nu doar un buton generic).
 */
export default function CallButton({
  sursa,
  tone = "dark",
  size = "md",
  eticheta = "Sună",
  className = "",
}: Props) {
  const numarLipsa = isTbd(site.contact.telefonAfisat);

  return (
    <PhoneLink
      sursa={sursa}
      className={btn(tone === "bar" ? "bar-call" : "call", size, className)}
    >
      <PhoneIcon size={size === "sm" ? 16 : 18} />
      {eticheta && <span>{eticheta}</span>}
      {numarLipsa ? (
        <Placeholder label="Telefon" />
      ) : (
        <span className="whitespace-nowrap tabular-nums">
          {site.contact.telefonAfisat}
        </span>
      )}
    </PhoneLink>
  );
}
