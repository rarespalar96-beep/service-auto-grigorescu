import { site } from "@/content/site";
import { externalLinkAttrs } from "@/lib/links";
import { getReviews, type ReviewsData } from "@/lib/reviews";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";

/**
 * Secțiune recenzii. Sursa datelor vine din `lib/reviews` (varianta A acum,
 * varianta B/Google Places în v2) — acest UI nu se schimbă la comutare.
 *
 * Afișăm DOAR testimoniale reale, într-un carusel auto-scroll (vezi
 * `ReviewsCarousel`), FĂRĂ notă agregată — decizie 2026-06-22 (vezi `recenzii.ts`).
 */
interface Props {
  data?: ReviewsData;
}

export default async function Reviews({ data }: Props) {
  const { recenzii } = data ?? (await getReviews());

  return (
    <section id="recenzii" className="bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Ce spun clienții" title="Recenzii reale, de pe Google" />

        <ReviewsCarousel recenzii={recenzii} />

        {site.google.profilUrl ? (
          <a
            href={site.google.profilUrl}
            {...externalLinkAttrs}
            className="mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-ink hover:text-accent"
          >
            Vezi toate recenziile pe Google
            <span aria-hidden>→</span>
          </a>
        ) : (
          <p className="mt-8 flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wide text-muted">
            Vezi toate recenziile pe Google <Placeholder label="link profil Google" />
          </p>
        )}
      </div>
    </section>
  );
}
