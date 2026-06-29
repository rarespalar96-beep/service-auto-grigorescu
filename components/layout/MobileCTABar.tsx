import BookingButton from "@/components/cta/BookingButton";
import PhoneLink from "@/components/cta/PhoneLink";

/**
 * Bară fixă jos, doar pe mobil: două butoane — „Sună" și „Programează-te".
 * (Linkul de telefon e inline aici ca să fie un singur element pe toată
 *  jumătatea, dar tracking-ul se face prin PhoneLink în restul site-ului.)
 */
export default function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid h-14 grid-cols-2 border-t border-antracit-600 bg-antracit lg:hidden"
      role="region"
      aria-label="Acțiuni rapide"
    >
      <PhoneLink
        sursa="bara-mobila"
        className="flex items-center justify-center gap-2 font-display text-base font-semibold uppercase tracking-wide text-ink-invert"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
        Sună
      </PhoneLink>
      <BookingButton campaign="bara-mobila" variant="bar" />
    </div>
  );
}
