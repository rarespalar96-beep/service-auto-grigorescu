interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
}

/** Antet consistent: chenar tehnic care cuprinde eyebrow + titlu + subtitlu opțional. */
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
    <div
      className={`heading-frame px-6 py-6 sm:px-8 sm:py-7 ${
        tone === "dark" ? "heading-frame-invert" : ""
      } ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow && (
        <p
          className={`font-display text-sm font-semibold uppercase tracking-widest ${
            tone === "dark" ? "text-accent-light" : "text-accent"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-3xl font-bold uppercase sm:text-4xl ${ink} ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      {subtitle && <p className={`mt-3 text-lg ${muted}`}>{subtitle}</p>}
    </div>
  );
}
