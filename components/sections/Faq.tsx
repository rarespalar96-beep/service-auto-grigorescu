import { faqHome } from "@/content/faq";
import BookingButton from "@/components/cta/BookingButton";
import SectionHeading from "@/components/ui/SectionHeading";

/** FAQ scurt — accordion nativ (<details>), fără JS. */
export default function Faq() {
  return (
    <section id="faq" className="border-t border-line bg-bg">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Întrebări frecvente" title="Bine de știut" align="center" />

        <div className="mt-12 divide-y divide-line border-y border-line">
          {faqHome.map((item, i) => (
            <details key={i} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-semibold uppercase tracking-wide text-ink marker:hidden">
                {item.intrebare}
                <span
                  aria-hidden
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md border border-line text-muted transition-all group-open:rotate-45 group-open:border-accent group-open:text-accent"
                >
                  +
                </span>
              </summary>
              <div className="pb-4 text-muted">
                <p>{item.raspuns}</p>
                {item.esteProgramare && (
                  <BookingButton
                    campaign="home-faq"
                    className="mt-4 px-4 py-2 text-sm"
                  >
                    Programează-te acum
                  </BookingButton>
                )}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
