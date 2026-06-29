interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

/** Antet consistent: eyebrow accent + riglă-gauge + titlu + subtitlu opțional. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "left",
}: Props) {
  const muted = tone === "dark" ? "text-muted-invert" : "text-muted";
  const ink = tone === "dark" ? "text-ink-invert" : "text-ink";
  const center = align === "center";

  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p
          className={`font-display text-sm font-semibold uppercase tracking-widest ${
            tone === "dark" ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <div
        className={`mt-3 gauge-rule gauge-rule-accent h-2.5 w-28 ${center ? "mx-auto" : ""}`}
        aria-hidden
      />
      <h2 className={`mt-4 text-3xl font-bold uppercase sm:text-4xl ${ink}`}>{title}</h2>
      {subtitle && <p className={`mt-3 text-lg ${muted}`}>{subtitle}</p>}
    </div>
  );
}
