/**
 * Infrastructură „de completat" (mod demo).
 *
 * Datele individuale ale service-ului (telefon, adresă, program, rating, prețuri
 * etc.) NU sunt încă cunoscute — le furnizează proprietarul. Până atunci, câmpurile
 * respective au valoarea `TBD` (text) sau `null` (numeric), iar UI-ul afișează un
 * chip vizibil „DE COMPLETAT" în loc de date fictive.
 *
 * Vezi `components/ui/Placeholder.tsx` (chip-ul vizual) și `TODO-continut.md`.
 */

/** Sentinel pentru un câmp text de completat de proprietar. */
export const TBD = "__TBD__";

/** True dacă valoarea lipsește / e încă de completat. */
export function isTbd(v: unknown): boolean {
  return v === null || v === undefined || v === "" || v === TBD;
}

/**
 * Text placeholder pentru contexte FĂRĂ JSX (meta title/description, alt, aria).
 * Ex: orTbd(site.zona, "localitate") → „「localitate」" când lipsește.
 */
export function orTbd(v: string | null | undefined, label = "de completat"): string {
  return isTbd(v) ? `「${label}」` : (v as string);
}
