import Link from "next/link";

interface Props {
  titlu: string;
  subtitlu?: string;
  /** Verigă intermediară de breadcrumb (ex. Blog), între Acasă și pagina curentă. */
  parinte?: { label: string; href: string };
}

/** Antet de pagină pe fundal antracit, cu breadcrumb și riglă-gauge. */
export default function PageHeader({ titlu, subtitlu, parinte }: Props) {
  return (
    <section className="bg-blueprint text-ink-invert">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <nav aria-label="Breadcrumb" className="text-sm text-muted-invert">
          <Link href="/" className="hover:text-accent">Acasă</Link>
          {parinte && (
            <>
              <span className="mx-2" aria-hidden>/</span>
              <Link href={parinte.href} className="hover:text-accent">{parinte.label}</Link>
            </>
          )}
          <span className="mx-2" aria-hidden>/</span>
          <span className="text-ink-invert">{titlu}</span>
        </nav>

        <h1 className="mt-4 text-4xl font-bold uppercase sm:text-5xl">{titlu}</h1>
        <div className="mt-5 gauge-rule gauge-rule-accent h-2.5 max-w-xs" aria-hidden />
        {subtitlu && <p className="mt-5 max-w-2xl text-lg text-muted-invert">{subtitlu}</p>}
      </div>
    </section>
  );
}
