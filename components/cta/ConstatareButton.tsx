import PhoneLink from "@/components/cta/PhoneLink";
import PhoneIcon from "@/components/ui/PhoneIcon";
import { btn, type BtnSize } from "@/components/cta/buttonStyles";

/** Buton roșu „Constatare daune": sună la numărul service-ului (tel:), cu tracking. */
export default function ConstatareButton({
  sursa,
  size = "md",
  className = "",
}: {
  sursa: string;
  size?: BtnSize;
  className?: string;
}) {
  return (
    <PhoneLink sursa={sursa} className={btn("call", size, className)}>
      <PhoneIcon size={18} />
      <span>Constatare daune</span>
    </PhoneLink>
  );
}
