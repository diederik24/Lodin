import type { Metadata } from "next";
import FotoVak from "@/components/FotoVak";
import Knop from "@/components/Knop";
import PaginaKop from "@/components/PaginaKop";
import { Camera, Instagram, Pijl, Poot } from "@/components/Icons";
import { bedrijf } from "@/data/site";

export const metadata: Metadata = {
  title: "Galerij",
  description:
    "Foto's van onze wandelingen door de bossen en heide rond Loon op Zand. Blije honden, modderpoten en mooie plekken.",
};

/**
 * De galerij werkt nu met placeholders. Zet je eigen foto's in /public/fotos
 * en vervang <FotoVak /> door <Image src="/fotos/naam.jpg" ... />.
 */
const fotos = [
  { bijschrift: "Ochtendwandeling in het bos", vorm: "aspect-[4/5]" },
  { bijschrift: "Rennen over de heide", vorm: "aspect-square" },
  { bijschrift: "Even samen uitrusten", vorm: "aspect-[4/5]" },
  { bijschrift: "Zandpaden bij De Moer", vorm: "aspect-square" },
  { bijschrift: "Het groepje van dinsdag", vorm: "aspect-square" },
  { bijschrift: "Modderpoten na de regen", vorm: "aspect-[4/5]" },
  { bijschrift: "Snuffelen in het struikgewas", vorm: "aspect-square" },
  { bijschrift: "Loki in de herfstbladeren", vorm: "aspect-[4/5]" },
  { bijschrift: "Odin op de uitkijk", vorm: "aspect-square" },
];

export default function Galerij() {
  return (
    <>
      <PaginaKop
        bovenkop="Galerij"
        titel="Blije snuiten en modderpoten"
        tekst="Een kijkje in onze wandelingen. Elke dag maken we onderweg foto's, zodat jij ziet hoe je hond zich vermaakt."
      />

      <section className="bg-creme pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
            {fotos.map((foto) => (
              <div key={foto.bijschrift} className="mb-5 break-inside-avoid">
                <FotoVak bijschrift={foto.bijschrift} className={foto.vorm} />
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-dashed border-goud/50 bg-zand/50 p-6 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-creme text-goud">
              <Camera className="h-6 w-6" />
            </span>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-houtskool/70">
              De echte foto&apos;s komen hier binnenkort te staan. Zet je
              afbeeldingen in de map <code>public/fotos</code> en vervang de
              vakken op deze pagina, dan staan ze meteen online.
            </p>
          </div>
        </div>
      </section>

      {/* Instagram-blok */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="pootjes-patroon relative overflow-hidden rounded-[2.5rem] bg-olijf px-6 py-12 text-center text-creme sm:px-12">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-goud text-houtskool">
              <Instagram className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-3xl font-semibold">
              Volg ons onderweg
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-creme/85">
              Op Instagram delen we bijna dagelijks foto&apos;s van de
              wandelingen. Kom je ook kijken wie er vandaag mee waren?
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={bedrijf.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-goud px-7 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-goud-diep"
              >
                <Instagram className="h-5 w-5" />
                Naar Instagram
              </a>
              <Knop href="/contact" variant="licht">
                Aanmelden
                <Pijl className="h-5 w-5" />
              </Knop>
            </div>
            <Poot className="absolute -bottom-6 -left-4 h-28 w-28 -rotate-12 text-creme/10" />
          </div>
        </div>
      </section>
    </>
  );
}
