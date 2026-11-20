/**
 * Template UNIC de buton — folosit de „Sună" (CallButton) și de „Programează-te"
 * (BookingButton), ca cele două CTA-uri să aibă exact aceeași greutate vizuală.
 * Diferă doar culoarea: ROȘU = telefon, plin-neutru = programare online.
 */

// NOTĂ: raza și umbra stau pe dimensiuni, nu pe bază — variantele de bară nu
// primesc dimensiune, deci nu trebuie să anuleze `rounded-md`/`shadow-sm`
// (două utilitare Tailwind neprefixate care se bat pe aceeași proprietate au
// câștigător imprevizibil, dat de ordinea din foaia generată, nu de ordinea din
// `className`).
export const btnBase =
  "inline-flex items-center justify-center gap-2 font-display font-semibold " +
  "uppercase tracking-wide leading-none transition focus-visible:outline-none " +
  "active:translate-y-px";

export type BtnSize = "sm" | "md" | "lg" | "xl";

export const btnSizes: Record<BtnSize, string> = {
  sm: "h-11 px-4 text-sm rounded-md shadow-sm",
  md: "h-12 px-5 text-base rounded-md shadow-sm",
  lg: "h-14 px-6 text-lg rounded-md shadow-sm",
  xl: "h-16 px-8 text-xl rounded-md shadow-sm",
};

export type BtnVariant =
  | "call"
  | "book-dark"
  | "book-light"
  | "bar-call"
  | "bar-book";

/** Variantele de bară umplu celula din grila barei mobile fixe. */
const bara = "h-full w-full text-base";

export const btnVariants: Record<BtnVariant, string> = {
  // TELEFON — roșu plin, pe orice fundal (alb pe roșu trece AA)
  call: "bg-accent text-accent-ink hover:bg-accent-600",
  // PROGRAMARE pe fundal ÎNCHIS — alb plin
  "book-dark": "bg-ink-invert text-antracit hover:bg-white",
  // PROGRAMARE pe fundal DESCHIS — grafit plin (albul ar dispărea pe card alb)
  "book-light": "bg-antracit text-ink-invert hover:bg-antracit-700",
  // Jumătățile barei mobile fixe
  "bar-call": `bg-accent text-accent-ink ${bara}`,
  "bar-book": `bg-ink-invert text-antracit ${bara}`,
};

const esteBara = (v: BtnVariant) => v === "bar-call" || v === "bar-book";

/** Compune clasele. `size` se ignoră pentru variantele de bară. */
export function btn(
  variant: BtnVariant,
  size: BtnSize = "md",
  extra = "",
): string {
  const dimensiune = esteBara(variant) ? "" : btnSizes[size];
  return `${btnBase} ${dimensiune} ${btnVariants[variant]} ${extra}`.trim();
}
