import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";

/**
 * Bară fixă jos, sub xl: două butoane pline, egale ca greutate vizuală —
 * „Sună <număr>" (alb) și „Programează-te" (roșu).
 */
export default function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 grid h-14 grid-cols-2 border-t border-antracit-600 bg-antracit xl:hidden"
      role="region"
      aria-label="Acțiuni rapide"
    >
      <CallButton sursa="bara-mobila" tone="bar" eticheta={null} />
      <BookingButton campaign="bara-mobila" tone="bar" />
    </div>
  );
}
