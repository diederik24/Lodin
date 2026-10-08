import Golf from "./Golf";
import { Poot } from "./Icons";

type PaginaKopProps = {
  bovenkop: string;
  titel: string;
  tekst: string;
};

export default function PaginaKop({ bovenkop, titel, tekst }: PaginaKopProps) {
  return (
    <section className="pootjes-patroon relative overflow-hidden bg-zand/60 pt-14">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-olijf px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-creme">
          <Poot className="h-3.5 w-3.5 text-goud-licht" />
          {bovenkop}
        </span>
        <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-houtskool sm:text-5xl">
          {titel}
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-houtskool/75">{tekst}</p>
      </div>
      <Golf className="mt-12" />
    </section>
  );
}
