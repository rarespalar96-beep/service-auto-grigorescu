import BookingButton from "@/components/cta/BookingButton";
import SectionHeading from "@/components/ui/SectionHeading";

const pasi = [
  {
    nr: "01",
    titlu: "Te programezi online",
    text:
      "Alegi serviciul și intervalul orar pe platforma noastră de programări. " +
      "Durează sub un minut și primești confirmare pe loc.",
    nota: "Programarea se face pe platforma online, unde vei fi redirecționat.",
  },
  {
    nr: "02",
    titlu: "Diagnoză și ofertă clară",
    text:
      "La sosire facem diagnoza, îți explicăm exact ce e de făcut și îți dăm un " +
      "deviz transparent înainte de orice intervenție.",
  },
  {
    nr: "03",
    titlu: "Primești mașina",
    text:
      "Executăm lucrarea cu piese cu garanție și îți predăm mașina cu factură. " +
      "Te ținem la curent pe tot parcursul.",
  },
];

export default function HowItWorks() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow="Simplu"
          title="Cum funcționează, în 3 pași"
        />

        <ol className="mt-12 grid gap-6 md:grid-cols-3">
          {pasi.map((p) => (
            <li
              key={p.nr}
              className="group relative overflow-hidden rounded-xl border border-line bg-bg p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:border-accent/60 hover:shadow-card-hover"
            >
              <span className="flex items-baseline gap-2 font-display text-5xl font-bold leading-none text-accent">
                {p.nr}
                <span className="h-2 w-2 translate-y-[-0.4rem] rounded-full bg-accent/30" aria-hidden />
              </span>
              <h3 className="mt-4 text-xl font-semibold uppercase text-ink">{p.titlu}</h3>
              <p className="mt-2 text-sm text-muted">{p.text}</p>
              {p.nota && (
                <p className="mt-3 border-t border-line pt-3 text-xs text-muted">
                  {p.nota}
                </p>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10">
          <BookingButton campaign="home-cum-functioneaza">
            Programează-te acum
          </BookingButton>
        </div>
      </div>
    </section>
  );
}
