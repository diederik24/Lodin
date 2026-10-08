import type { Metadata } from "next";
import FotoVak from "@/components/FotoVak";
import Knop from "@/components/Knop";
import PaginaKop from "@/components/PaginaKop";
import SectieKop from "@/components/SectieKop";
import {
  Blad,
  Bus,
  Camera,
  Hart,
  Klok,
  Pijl,
  Poot,
  Schild,
  Vink,
} from "@/components/Icons";
import { stappen } from "@/data/site";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "De dagelijkse uitlaatservice van Lodin: ophalen aan de deur, anderhalf uur wandelen in kleine groepjes door de natuur rond Loon op Zand en weer schoon thuisbrengen.",
};

const inbegrepen = [
  {
    icoon: Bus,
    titel: "Halen en brengen",
    tekst: "We komen je hond thuis ophalen en brengen hem na de wandeling weer terug. Sleutelafspraak is mogelijk.",
  },
  {
    icoon: Klok,
    titel: "Anderhalf uur buiten",
    tekst: "De volle anderhalf uur is wandeltijd. De rit naar het bos en terug zit daar niet bij.",
  },
  {
    icoon: Poot,
    titel: "Maximaal vier honden",
    tekst: "Kleine groepjes die qua energie en karakter bij elkaar passen, met steeds dezelfde maatjes.",
  },
  {
    icoon: Blad,
    titel: "Wisselende routes",
    tekst: "Bos, heide en zandpaden. Elke dag een andere route, zodat het spannend blijft.",
  },
  {
    icoon: Schild,
    titel: "Veilig op pad",
    tekst: "Loslopen alleen met jouw toestemming. Onderweg is er altijd water en een EHBO-set bij de hand.",
  },
  {
    icoon: Camera,
    titel: "Foto's en updates",
    tekst: "Regelmatig een foto van onderweg en een berichtje als er iets bijzonders is.",
  },
];

const aandacht = [
  "Jonge honden die nog moeten leren wat andere honden bedoelen",
  "Drukke honden die hun energie kwijt moeten",
  "Onzekere honden die rustig moeten wennen",
  "Oudere honden die het graag wat kalmer aan doen",
];

export default function Diensten() {
  return (
    <>
      <PaginaKop
        bovenkop="Diensten"
        titel="Dagelijks uitlaten, van deur tot deur"
        tekst="Op dit moment richten we ons helemaal op waar we het beste in zijn: je hond ophalen, anderhalf uur heerlijk laten wandelen en voldaan weer thuisbrengen."
      />

      {/* De dienst */}
      <section className="bg-creme pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectieKop
                bovenkop="De uitlaatservice"
                titel="Eén dienst, en die doen we goed"
                gecentreerd={false}
                tekst="Geen ingewikkelde pakketten of verborgen kosten. Je hond gaat op de afgesproken dagen mee met een klein groepje en beleeft anderhalf uur lang een echte hondendag."
              />
              <p className="mt-4 text-base leading-relaxed text-houtskool/75">
                We rijden naar de mooiste plekken in de omgeving, zodat er
                genoeg te ruiken en te ontdekken valt. Onderweg is er tijd om te
                rennen, te spelen en om gewoon even rustig rond te snuffelen.
                Want ook dat laatste maakt een hond heerlijk moe.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Knop href="/contact">
                  Plan een kennismaking
                  <Pijl className="h-5 w-5" />
                </Knop>
                <Knop href="/tarieven" variant="omlijnd">
                  Naar de tarieven
                </Knop>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <FotoVak
                bijschrift="Onderweg in het bos"
                className="aspect-[4/5]"
              />
              <FotoVak
                bijschrift="Pauze op de heide"
                className="aspect-[4/5] sm:mt-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Wat zit erbij */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Inbegrepen"
            titel="Dit zit er altijd bij"
            tekst="Bij elke wandeling, of je nu losse wandelingen afneemt of vaste dagen hebt."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {inbegrepen.map(({ icoon: Icoon, titel, tekst }) => (
              <div
                key={titel}
                className="group rounded-3xl border border-zand-diep bg-creme p-6 transition-all hover:-translate-y-1 hover:border-goud/60 hover:shadow-lg hover:shadow-houtskool/5"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-olijf text-goud-licht transition-colors group-hover:bg-goud group-hover:text-houtskool">
                  <Icoon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-houtskool">
                  {titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-houtskool/70">
                  {tekst}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-4xl px-4">
          <SectieKop
            bovenkop="Werkwijze"
            titel="Zo ziet een dag eruit"
            tekst="Van de eerste kennismaking tot een vaste plek in het groepje."
          />
          <ol className="mt-12 space-y-4">
            {stappen.map((stap, i) => (
              <li
                key={stap.titel}
                className="flex gap-5 rounded-3xl border border-zand-diep bg-white/70 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-goud font-display text-lg font-bold text-houtskool">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-houtskool">
                    {stap.titel}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-houtskool/75">
                    {stap.tekst}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Voor welke honden */}
      <section className="bg-olijf-diep py-20 text-creme">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectieKop
              licht
              bovenkop="Voor wie"
              titel="Welke honden gaan mee?"
              gecentreerd={false}
              tekst="In principe is iedere hond welkom, van pup tot senior. Tijdens de kennismaking kijken we samen of het past en in welk groepje je hond zich het prettigst voelt."
            />
            <ul className="mt-7 space-y-3">
              {aandacht.map((punt) => (
                <li key={punt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-goud/25 text-goud-licht">
                    <Vink className="h-4 w-4" />
                  </span>
                  <span className="text-base text-creme/85">{punt}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[2rem] bg-creme/10 p-8">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-goud text-houtskool">
              <Hart className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold text-goud-licht">
              Nog even goed om te weten
            </h3>
            <ul className="mt-4 space-y-3 text-base leading-relaxed text-creme/85">
              <li>
                Je hond is regulier geënt en behandeld tegen vlooien, teken en
                wormen.
              </li>
              <li>
                Loopse teven laten we thuis, veiligheid en rust in de groep gaan
                voor.
              </li>
              <li>
                Honden met agressie naar andere honden kunnen helaas niet mee in
                een groep.
              </li>
              <li>
                Twijfel je of het past? Bel gewoon even, we denken graag mee.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
