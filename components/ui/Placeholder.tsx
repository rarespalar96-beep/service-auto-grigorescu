/**
 * Chip „DE COMPLETAT" — marchează vizibil un câmp pe care îl furnizează
 * proprietarul (telefon, adresă, preț, rating etc.). Imposibil de confundat cu
 * date reale: contur punctat + pătrat-accent galben.
 *
 * Textul moștenește culoarea contextului (`currentColor`), deci are contrast AA
 * atât pe fundal deschis cât și pe antracit — galbenul rămâne doar pe contur/marker
 * (regula „accent doar pe CTA / elemente non-text").
 */
interface Props {
  /** Eticheta din chip. Implicit „De completat". */
  label?: string;
  className?: string;
}

export default function Placeholder({ label = "De completat", className = "" }: Props) {
  return (
    <span
      className={
        "inline-flex items-center gap-1.5 rounded border border-dashed border-accent " +
        "bg-accent/10 px-1.5 py-0.5 align-middle font-display text-[0.72em] font-semibold " +
        "uppercase leading-none tracking-wide " +
        className
      }
      title="De completat de proprietar"
    >
      <span aria-hidden className="h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent" />
      {label}
    </span>
  );
}
