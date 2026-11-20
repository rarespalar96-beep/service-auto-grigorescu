import { site } from "@/content/site";
import { recenzii } from "@/content/recenzii";
import Stars from "@/components/ui/Stars";

/**
 * Bandă sub TrustBar: o recenzie reală pusă în evidență (stânga) + nota agregată
 * Google (dreapta). Nota apare doar când există cifre reale (vezi `site.google`).
 */
export default function ReviewHighlight() {
  const featured = recenzii[0];
  const { rating, numarRecenzii } = site.google;

  return (
    <section aria-label="Recenzie Google" className="border-b border-line bg-bg">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 sm:px-6 md:grid-cols-[1fr_auto] md:gap-12">
        <figure className="min-w-0 border-l-2 border-accent pl-5">
          <blockquote className="line-clamp-4 text-lg leading-relaxed text-ink md:line-clamp-3">
            “{featured.text}”
          </blockquote>
          <figcaption className="mt-2 font-display text-sm font-semibold uppercase tracking-wide text-muted">
            {featured.nume}
          </figcaption>
        </figure>

        {rating !== null && numarRecenzii !== null && (
          <div className="flex items-center gap-3">
            <span className="font-display text-4xl font-bold text-ink">
              {rating.toFixed(1).replace(".", ",")}
            </span>
            <div>
              <Stars rating={rating} size={20} />
              <p className="text-xs text-muted">din {numarRecenzii} de recenzii pe Google</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
