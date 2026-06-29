import type { ServiceIconKey } from "@/content/servicii";

/** Iconuri linie (stroke = currentColor) pentru fiecare serviciu. */
const paths: Record<ServiceIconKey, React.ReactNode> = {
  mecanica: (
    // cheie franceză
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2l-6 6 1.9 1.9 6-6a4 4 0 0 0 5.2-5.4l-2.3 2.3-1.9-.4-.4-1.9z" />
    </>
  ),
  tinichigerie: (
    // pistol de vopsit (abstract)
    <>
      <path d="M4 9h7l3-3v9l-3-3H4z" />
      <path d="M14 12h4M18 9v6" />
    </>
  ),
  roti: (
    // anvelopă / roată
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  geometrie: (
    // unghiuri / aliniere
    <>
      <path d="M5 19h14" />
      <path d="M7 19V8M17 19V8" />
      <path d="M5 6l4-2M19 6l-4-2" />
    </>
  ),
  clima: (
    // fulg / aer rece
    <>
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </>
  ),
  spalatorie: (
    // picături de apă / spălare
    <>
      <path d="M7 14a5 5 0 0 0 10 0c0-3-5-9-5-9s-5 6-5 9z" />
      <path d="M5 21h14" />
    </>
  ),
};

interface Props {
  name: ServiceIconKey;
  size?: number;
  className?: string;
}

export default function ServiceIcon({ name, size = 28, className = "" }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
