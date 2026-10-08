import type { Metadata } from "next";
import Image from "next/image";
import FotoVak from "@/components/FotoVak";
import Knop from "@/components/Knop";
import PaginaKop from "@/components/PaginaKop";
import SectieKop from "@/components/SectieKop";
import { Blad, Hart, Pijl, Poot, Schild } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Lodin is vernoemd naar Loki en Odin, onze eigen twee herders. Lees ons verhaal en waar we in geloven bij het uitlaten van jouw hond.",
};

const waarden = [
  {
    icoon: Poot,
    titel: "Rust",
    tekst: "Geen drukke meutes en geen gehaaste rondjes. Een rustige groep geeft een rustige hond.",
  },
  {
    icoon: Blad,
    titel: "Ruimte",
    tekst: "Echte natuur, wisselende routes en de tijd om te snuffelen. Daar wordt een hond gelukkig van.",
  },
  {
    icoon: Hart,
    titel: "Persoonlijke aandacht",
    tekst: "We kennen elke hond bij naam en weten precies wat hij nodig heeft, of dat nu spel of geduld is.",
  },
  {
    icoon: Schild,
    titel: "Veiligheid",
    tekst: "Goed materiaal, duidelijke afspraken en nooit onnodig risico. Jouw hond komt heelhuids thuis.",
  },
];

export default function OverOns() {
  return (
    <>
      <PaginaKop
        bovenkop="Over ons"
        titel="Geboren uit liefde voor Loki en Odin"
        tekst="Twee herders zetten alles in gang. Zij leerden ons wat een hond echt nodig heeft, en dat gunnen we elke hond in de omgeving."
      />

      {/* Verhaal */}
      <section className="bg-creme pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-zand bg-white shadow-xl shadow-houtskool/10">
              <Image
                src="/logo.png"
                alt="Logo van Lodin met de silhouetten van Loki en Odin"
                width={820}
                height={820}
                className="h-auto w-full"
              />
            </div>
            <span className="drijf absolute -bottom-5 -left-3 rounded-3xl bg-goud px-5 py-3 font-display text-sm font-semibold italic text-houtskool shadow-lg">
              Sinds dag één ons team
            </span>
          </div>

          <div>
            <SectieKop
              bovenkop="Ons verhaal"
              titel="Van twee eigen herders naar een uitlaatservice"
              gecentreerd={false}
              tekst="Loki en Odin kwamen als pup in huis en groeiden uit tot twee honden met een enorme behoefte aan beweging en uitdaging. Wandelen werd daardoor onze dagelijkse gewoonte, in weer en wind."
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-houtskool/75">
              <p>
                In die jaren leerden we de mooiste plekken rond Loon op Zand
                kennen, maar vooral ook hoeveel verschil een goede wandeling
                maakt. Een hond die zijn neus mag gebruiken en zijn energie
                kwijt kan, is thuis een compleet ander beest: rustiger, blijer
                en meer ontspannen.
              </p>
              <p>
                Steeds vaker vroegen mensen uit de buurt of we hun hond ook een
                keertje mee wilden nemen. Dat werd zo leuk, dat we er onze
                dagelijkse bezigheid van hebben gemaakt. Lodin draagt de namen
                van de twee die het allemaal begonnen zijn.
              </p>
              <p>
                We doen het bewust kleinschalig. Liever een paar honden die we
                door en door kennen dan een grote bus vol. Zo weten we precies
                wie welke dag vrolijk is, wie moe is en wie even een extra
                aaitje kan gebruiken.
              </p>
            </div>
            <Knop href="/contact" variant="olijf" className="mt-8">
              Kom eens kennismaken
              <Pijl className="h-5 w-5" />
            </Knop>
          </div>
        </div>
      </section>

      {/* Waarden */}
      <section className="bg-olijf-diep py-20 text-creme">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            licht
            bovenkop="Waar we voor staan"
            titel="Rust, ruimte en persoonlijke aandacht"
            tekst="Vier uitgangspunten die bij elke wandeling terugkomen, of het nu regent of dat de zon schijnt."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {waarden.map(({ icoon: Icoon, titel, tekst }) => (
              <div
                key={titel}
                className="rounded-3xl bg-creme/10 p-6 transition-colors hover:bg-creme/15"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-goud text-houtskool">
                  <Icoon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-goud-licht">
                  {titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-creme/80">
                  {tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loki en Odin */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Het team"
            titel="Maak kennis met Loki en Odin"
            tekst="De twee naamgevers van Lodin. Ze gaan lang niet altijd mee met een groepje, maar ze zijn wel de reden dat dit er allemaal is."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-zand-diep bg-creme p-6">
              <FotoVak
                bijschrift="Foto van Loki"
                className="aspect-[4/3] w-full"
              />
              <h3 className="mt-5 font-display text-2xl font-semibold text-houtskool">
                Loki
              </h3>
              <p className="mt-2 text-base leading-relaxed text-houtskool/75">
                De vrolijke wervelwind. Altijd vooropgaan, overal zijn neus in
                steken en nooit te beroerd om een rondje te rennen. Loki laat
                zien hoe leuk een wandeling kan zijn.
              </p>
            </div>
            <div className="rounded-[2rem] border border-zand-diep bg-creme p-6">
              <FotoVak
                bijschrift="Foto van Odin"
                className="aspect-[4/3] w-full"
              />
              <h3 className="mt-5 font-display text-2xl font-semibold text-houtskool">
                Odin
              </h3>
              <p className="mt-2 text-base leading-relaxed text-houtskool/75">
                De rustige denker. Hij houdt het overzicht, blijft graag in de
                buurt en stelt onzekere honden met zijn kalmte razendsnel op hun
                gemak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
