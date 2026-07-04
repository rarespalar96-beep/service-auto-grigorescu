import { site } from "@/content/site";

/**
 * Program pe departamente (Luni–Vineri) + nota de weekend.
 * `tone="dark"` pentru suprafețe închise (ContactMap), `"light"` pentru deschise
 * (pagina /contact). Textul valorii moștenește culoarea curentă a containerului.
 */
export default function ProgramDepartamente({
  tone = "light",
}: {
  tone?: "light" | "dark";
}) {
  const muted = tone === "dark" ? "text-muted-invert" : "text-muted";
  const linie = tone === "dark" ? "border-antracit-600" : "border-line";

  return (
    <div>
      <p className={`font-display text-xs font-semibold uppercase tracking-widest ${muted}`}>
        Luni–Vineri
      </p>
      <ul className="mt-2 space-y-1">
        {site.programDepartamente.map((d) => (
          <li key={d.departament} className="flex items-center justify-between gap-6">
            <span className={muted}>{d.departament}</span>
            <span className="whitespace-nowrap font-medium">{d.ore}</span>
          </li>
        ))}
      </ul>

      <ul className={`mt-3 space-y-1 border-t ${linie} pt-3`}>
        <li className="flex items-center justify-between gap-6">
          <span className={muted}>Sâmbătă (toate)</span>
          <span className="whitespace-nowrap font-medium">{site.programWeekend.sambata}</span>
        </li>
        <li className="flex items-center justify-between gap-6">
          <span className={muted}>Duminică</span>
          <span className={`whitespace-nowrap ${muted}`}>{site.programWeekend.duminica}</span>
        </li>
      </ul>
    </div>
  );
}
