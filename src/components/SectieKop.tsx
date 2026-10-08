import { Poot } from "./Icons";

type SectieKopProps = {
  bovenkop?: string;
  titel: string;
  tekst?: string;
  gecentreerd?: boolean;
  licht?: boolean;
};

export default function SectieKop({
  bovenkop,
  titel,
  tekst,
  gecentreerd = true,
  licht = false,
}: SectieKopProps) {
  return (
    <div
      className={`${gecentreerd ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {bovenkop && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] ${
            licht ? "bg-creme/15 text-goud-licht" : "bg-zand text-olijf-diep"
          }`}
        >
          <Poot className="h-3.5 w-3.5 text-goud" />
          {bovenkop}
        </span>
      )}
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-tight sm:text-4xl ${
          licht ? "text-creme" : "text-houtskool"
        }`}
      >
        {titel}
      </h2>
      {tekst && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            licht ? "text-creme/80" : "text-houtskool/75"
          }`}
        >
          {tekst}
        </p>
      )}
    </div>
  );
}
