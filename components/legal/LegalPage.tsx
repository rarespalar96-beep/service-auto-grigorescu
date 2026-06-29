import PageHeader from "@/components/ui/PageHeader";

interface Props {
  titlu: string;
  actualizat: string; // ex. „iunie 2026"
  children: React.ReactNode;
}

/** Layout pentru pagini legale, cu stil de prose aplicat copiilor. */
export default function LegalPage({ titlu, actualizat, children }: Props) {
  return (
    <>
      <PageHeader titlu={titlu} />
      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20">
          <p className="text-sm text-muted">Ultima actualizare: {actualizat}</p>
          <div
            className="mt-8 space-y-4 text-ink [&_a]:text-accent [&_a]:underline [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:uppercase [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_p]:leading-relaxed [&_ul]:space-y-1"
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
