import { site, aniExperienta } from "@/content/site";
import Placeholder from "@/components/ui/Placeholder";

/** Bandă de încredere sub hero: 4 semnale-cheie, pe fundal deschis. */
export default function TrustBar() {
  const aniExp = aniExperienta();

  return (
    <section aria-label="De ce să ai încredere" className="border-b border-line bg-surface">
      <div className="mx-auto grid max-w-6xl grid-cols-1 divide-line px-4 min-[460px]:grid-cols-2 sm:px-6 md:grid-cols-4 md:divide-x">
        <Item
          titlu="Autorizat RAR"
          sub="Lucrări conforme"
          icon={<ShieldIcon />}
        />
        <Item
          titlu={
            aniExp !== null ? `${aniExp} ani experiență` : <Placeholder label="ani experiență" />
          }
          sub={site.anInfiintare !== null ? `Din ${site.anInfiintare}` : <Placeholder label="an" />}
          icon={<WrenchIcon />}
        />
        <Item
          titlu="Recenzii reale"
          sub="Verificate pe Google"
          icon={<ChatIcon />}
        />
        <Item
          titlu="Garanție la lucrări"
          sub="În funcție de serviciu"
          icon={<BadgeIcon />}
        />
      </div>
    </section>
  );
}

function Item({
  titlu,
  sub,
  icon,
}: {
  titlu: React.ReactNode;
  sub: React.ReactNode;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 px-2 py-5 md:px-6">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-accent/[0.08] text-accent ring-1 ring-accent/15">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="font-display text-sm font-semibold uppercase tracking-wide leading-tight text-ink">
          {titlu}
        </p>
        <p className="text-xs text-muted">{sub}</p>
      </div>
    </div>
  );
}

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const ShieldIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3l8 3v6c0 4.5-3.4 7.6-8 9-4.6-1.4-8-4.5-8-9V6l8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const WrenchIcon = () => (
  <svg {...iconProps}>
    <path d="M14 7a4 4 0 0 1-5 5l-5 5 2 2 5-5a4 4 0 0 1 5-5l-2-2 2-2z" />
  </svg>
);
const BadgeIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="9" r="6" />
    <path d="M9 14l-1 7 4-2 4 2-1-7" />
  </svg>
);
const ChatIcon = () => (
  <svg {...iconProps}>
    <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" />
  </svg>
);
