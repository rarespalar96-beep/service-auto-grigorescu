import BookingButton from "@/components/cta/BookingButton";
import PhoneLink from "@/components/cta/PhoneLink";

interface Props {
  campaign: string;
  titlu?: string;
  subtitlu?: string;
}

/** Bandă CTA finală — refolosită pe paginile de servicii și altele. */
export default function CtaBand({
  campaign,
  titlu = "Gata să-ți programezi mașina?",
  subtitlu = "Alegi serviciul și ora online, în mai puțin de un minut.",
}: Props) {
  return (
    <section className="bg-antracit text-ink-invert">
      <div className="gauge-rule gauge-rule-accent" aria-hidden />
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-14 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold uppercase sm:text-3xl">{titlu}</h2>
          <p className="mt-2 text-muted-invert">{subtitlu}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <BookingButton campaign={campaign}>Programează-te online</BookingButton>
          <PhoneLink
            sursa={campaign}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-antracit-600 px-5 py-3 font-display text-base font-semibold uppercase tracking-wide text-ink-invert transition-colors hover:border-accent hover:text-accent"
          >
            Sună acum
          </PhoneLink>
        </div>
      </div>
    </section>
  );
}
