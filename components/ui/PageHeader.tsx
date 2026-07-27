import Link from "next/link";

interface Props {
  titlu: string;
  subtitlu?: string;
  /** Verigă intermediară de breadcrumb (ex. Blog), între Acasă și pagina curentă. */
  parinte?: { label: string; href: string };
}

/** Antet de pagină pe fundal antracit, cu breadcrumb și chenar tehnic pe titlu. */
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

        <div className="heading-frame heading-frame-invert mt-5 max-w-3xl px-6 py-6 sm:px-8 sm:py-7">
          <h1 className="text-4xl font-bold uppercase sm:text-5xl">{titlu}</h1>
          {subtitlu && <p className="mt-3 text-lg text-muted-invert">{subtitlu}</p>}
        </div>
      </div>
    </section>
  );
}
