import { site } from "@/content/site";
import { externalLinkAttrs } from "@/lib/links";
import { getReviews, type ReviewsData } from "@/lib/reviews";
import SectionHeading from "@/components/ui/SectionHeading";
import Placeholder from "@/components/ui/Placeholder";
import Stars from "@/components/ui/Stars";
import ReviewsCarousel from "@/components/sections/ReviewsCarousel";

/**
 * Secțiune recenzii. Sursa datelor vine din `lib/reviews` (varianta A acum,
 * varianta B/Google Places în v2) — acest UI nu se schimbă la comutare.
 *
 * Nota agregată se afișează doar când există cifre reale (vezi `recenzii.ts`);
 * testimonialele din carusel rămân cele alese manual.
 */
interface Props {
  data?: ReviewsData;
}

export default async function Reviews({ data }: Props) {
  const { recenzii, rating, total } = data ?? (await getReviews());
  const areAgregat = rating !== null && total !== null;

  return (
    <section id="recenzii" className="bg-bg">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading eyebrow="Ce spun clienții" title="Recenzii" />

        {areAgregat ? (
          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2">
            <Stars rating={rating} size={20} />
            <span className="font-display text-2xl font-semibold text-ink">
              {rating.toFixed(1).replace(".", ",")}
            </span>
            <span className="text-sm text-muted">
              din {total} de recenzii pe Google
            </span>
          </div>
        ) : null}

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
