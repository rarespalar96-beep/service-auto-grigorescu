import Link from "next/link";
import type { Serviciu } from "@/content/servicii";
import ServiceIcon from "@/components/ui/ServiceIcon";

interface Props {
  serviciu: Serviciu;
  /** Afișează durata + prețul „de la" (pe pagina /servicii). */
  showMeta?: boolean;
}

/** Card de serviciu — folosit în grid-ul de pe homepage și pe pagina /servicii. */
export default function ServiceCard({ serviciu: s, showMeta = false }: Props) {
  return (
    <Link
      href={`/servicii/${s.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-hover"
    >
      {/* Bară accent care apare la hover (semnătură tehnică) */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-200 group-hover:scale-x-100"
      />
      <span className="grid h-12 w-12 place-items-center rounded-lg bg-accent/[0.08] text-accent ring-1 ring-accent/15 transition-colors duration-200 group-hover:bg-accent group-hover:text-accent-ink group-hover:ring-accent">
        <ServiceIcon name={s.icon} />
      </span>
      <h3 className="mt-4 text-xl font-semibold uppercase text-ink">{s.nume}</h3>
      <p className="mt-2 flex-1 text-sm text-muted">{s.sumar}</p>

      {showMeta && (
        <dl className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-4 text-sm">
          <div className="flex items-center gap-1.5">
            <dt className="text-muted">Preț</dt>
            <dd className="font-display font-semibold text-ink">la telefon</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <dt className="text-muted">Durată</dt>
            <dd className="font-display font-semibold text-ink">{s.durataOrientativa}</dd>
          </div>
        </dl>
      )}

      <span className="mt-4 inline-flex items-center gap-1 font-display text-sm font-semibold uppercase tracking-wide text-ink transition-colors group-hover:text-accent">
        Detalii
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </Link>
  );
}
