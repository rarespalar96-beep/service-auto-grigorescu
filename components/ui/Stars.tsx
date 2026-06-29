/**
 * Rând de 5 stele cu suport pentru rating fracționar (ex. 4,8) prin clip pe lățime.
 * Stelele goale sunt subtile; cele pline folosesc accentul.
 */
interface Props {
  rating: number; // 0–5
  size?: number; // px
  className?: string;
  /** Culoarea stelelor goale — schimbă pe fundal închis (ex. "text-white/15"). */
  emptyClass?: string;
}

const Star = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.9l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
  </svg>
);

export default function Stars({
  rating,
  size = 18,
  className = "",
  emptyClass = "text-black/15",
}: Props) {
  const pct = Math.max(0, Math.min(100, (rating / 5) * 100));
  const stars = [0, 1, 2, 3, 4];
  return (
    <span
      className={`relative inline-flex ${className}`}
      role="img"
      aria-label={`${rating.toString().replace(".", ",")} din 5 stele`}
    >
      <span className={`inline-flex ${emptyClass}`}>
        {stars.map((i) => (
          <Star key={i} size={size} />
        ))}
      </span>
      <span
        className="absolute inset-0 inline-flex overflow-hidden text-accent"
        style={{ width: `${pct}%` }}
      >
        {stars.map((i) => (
          <Star key={i} size={size} />
        ))}
      </span>
    </span>
  );
}
