import type { Metadata } from "next";
import Faq from "@/components/Faq";
import Knop from "@/components/Knop";
import PaginaKop from "@/components/PaginaKop";
import SectieKop from "@/components/SectieKop";
import { Hart, Pijl, Poot, Vink } from "@/components/Icons";
import { tarieven } from "@/data/site";

export const metadata: Metadata = {
  title: "Tarieven",
  description:
    "De tarieven van Lodin: een losse wandeling kost 17 euro, met vaste dagen betaal je 15 euro per wandeling. Ophalen en thuisbrengen zijn altijd inbegrepen.",
};

const goedOmTeWeten = [
  "Alle prijzen zijn inclusief ophalen en thuisbrengen binnen het werkgebied.",
  "De kennismaking en de proefwandeling zijn gratis en vrijblijvend.",
  "Afzeggen kan kosteloos tot 24 uur van tevoren.",
  "Op erkende feestdagen wandelen we niet, deze dagen worden niet berekend.",
  "Woon je net buiten het werkgebied? Vraag het gerust, vaak is er iets mogelijk.",
];

export default function Tarieven() {
  return (
    <>
      <PaginaKop
        bovenkop="Tarieven"
        titel="Eerlijke prijzen, alles inbegrepen"
        tekst="Geen kleine lettertjes en geen losse kosten voor het halen en brengen. Je weet precies waar je aan toe bent."
      />

      <section className="bg-creme pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {tarieven.map((pakket) => (
              <div
                key={pakket.naam}
                className={`relative flex flex-col rounded-[2rem] p-7 transition-all hover:-translate-y-1 ${
                  pakket.uitgelicht
                    ? "border-2 border-goud bg-white shadow-xl shadow-houtskool/10"
                    : "border border-zand-diep bg-white/70"
                }`}
              >
                {pakket.uitgelicht && (
                  <span className="absolute -top-3 left-7 rounded-full bg-goud px-4 py-1 text-xs font-bold uppercase tracking-wider text-houtskool">
                    Meest gekozen
                  </span>
                )}
                <h2 className="font-display text-2xl font-semibold text-houtskool">
                  {pakket.naam}
                </h2>
                <p className="mt-1 text-sm text-houtskool/65">{pakket.uitleg}</p>
                <p className="mt-5 flex items-baseline gap-2">
                  <span className="font-display text-4xl font-bold text-olijf">
                    {pakket.prijs}
                  </span>
                  <span className="text-sm text-houtskool/60">
                    {pakket.eenheid}
                  </span>
                </p>
                <ul className="mt-6 flex-1 space-y-2.5">
                  {pakket.punten.map((punt) => (
                    <li key={punt} className="flex items-start gap-2.5">
                      <Vink className="mt-0.5 h-4 w-4 shrink-0 text-goud" />
                      <span className="text-sm text-houtskool/80">{punt}</span>
                    </li>
                  ))}
                </ul>
                <Knop
                  href="/contact"
                  variant={pakket.uitgelicht ? "goud" : "omlijnd"}
                  className="mt-7 w-full"
                >
                  Aanmelden
                </Knop>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-houtskool/60">
            Alle bedragen zijn inclusief btw. Meerdere honden uit hetzelfde
            gezin? Vraag naar de korting voor het tweede maatje.
          </p>
        </div>
      </section>

      {/* Goed om te weten */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectieKop
              bovenkop="Voorwaarden"
              titel="Goed om te weten"
              gecentreerd={false}
              tekst="De belangrijkste afspraken op een rij, zodat er onderweg geen verrassingen zijn."
            />
            <ul className="mt-7 space-y-3">
              {goedOmTeWeten.map((punt) => (
                <li key={punt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olijf-licht/25 text-olijf-diep">
                    <Vink className="h-4 w-4" />
                  </span>
                  <span className="text-base text-houtskool/80">{punt}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pootjes-patroon relative overflow-hidden rounded-[2rem] bg-olijf p-8 text-creme">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-goud text-houtskool">
              <Hart className="h-6 w-6" />
            </span>
            <h3 className="mt-4 font-display text-2xl font-semibold">
              Eerst kennismaken, daarna pas kiezen
            </h3>
            <p className="mt-3 text-base leading-relaxed text-creme/85">
              Je hoeft nu nog niets te beslissen. We komen graag eerst langs om
              kennis te maken en je hond mag een keer gratis mee op
              proefwandeling. Daarna kijken we samen welke vorm het beste past
              bij jullie week.
            </p>
            <Knop href="/contact" className="mt-7">
              Plan een kennismaking
              <Pijl className="h-5 w-5" />
            </Knop>
            <Poot className="absolute -bottom-6 -right-4 h-28 w-28 rotate-12 text-creme/10" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Veelgestelde vragen"
            titel="Vragen over de tarieven en de wandelingen"
            tekst="Staat je vraag er niet bij? Bel of app gerust, we denken graag met je mee."
          />
          <Faq />
        </div>
      </section>
    </>
  );
}
