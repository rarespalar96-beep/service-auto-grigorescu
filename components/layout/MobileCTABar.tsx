"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BookingButton from "@/components/cta/BookingButton";
import CallButton from "@/components/cta/CallButton";

/**
 * Bară fixă jos, sub xl: „Sună <număr>" + „Programează-te".
 *
 * Cât timp pe ecran se vede o secțiune marcată `data-ascunde-bara` (hero-ul de pe
 * homepage), bara stă ascunsă: acolo CTA-urile sunt deja vizibile, iar bara ar
 * acoperi caseta de daune. Pe paginile fără marcaj, bara e vizibilă mereu.
 */
export default function MobileCTABar() {
  const [ascunsa, setAscunsa] = useState(false);
  // Bara stă în layout (nu se remontează la navigare) → re-scanăm la fiecare pagină.
  const pathname = usePathname();

  useEffect(() => {
    const tinte = document.querySelectorAll("[data-ascunde-bara]");
    if (tinte.length === 0) return;
    const vizibile = new Set<Element>();
    const obs = new IntersectionObserver((intrari) => {
      for (const i of intrari) {
        if (i.isIntersecting) vizibile.add(i.target);
        else vizibile.delete(i.target);
      }
      setAscunsa(vizibile.size > 0);
    });
    tinte.forEach((t) => obs.observe(t));
    return () => {
      obs.disconnect();
      setAscunsa(false);
    };
  }, [pathname]);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 grid h-14 grid-cols-2 border-t border-antracit-600 bg-antracit transition-transform duration-300 xl:hidden ${
        ascunsa ? "pointer-events-none translate-y-full" : "translate-y-0"
      }`}
      role="region"
      aria-label="Acțiuni rapide"
      aria-hidden={ascunsa || undefined}
      inert={ascunsa || undefined}
    >
      <CallButton sursa="bara-mobila" tone="bar" eticheta={null} />
      <BookingButton campaign="bara-mobila" tone="bar" />
    </div>
  );
}
