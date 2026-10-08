import Image from "next/image";
import Faq from "@/components/Faq";
import FotoVak from "@/components/FotoVak";
import Golf from "@/components/Golf";
import Kaart from "@/components/Kaart";
import Knop from "@/components/Knop";
import SectieKop from "@/components/SectieKop";
import { Bus, Camera, Pijl, Poot, Speld, Vink } from "@/components/Icons";
import { reviews, stappen, tarieven } from "@/data/site";

/**
 * De praktische balk onder de hero. Op grote schermen zit deze informatie al
 * in de banner zelf, op mobiel tonen we hem los onder de foto.
 */
const balkItems = [
  { icoon: Speld, tekst: "Loon op Zand en omgeving" },
  { icoon: Bus, tekst: "Ophalen en thuisbrengen" },
  { icoon: Camera, tekst: "Regelmatig leuke foto's" },
];

export default function Home() {
  return (
    <>
      {/* Hero: de banner over de volle breedte */}
      <section>
        <h1 className="sr-only">
          Lodin honden uitlaat service in Loon op Zand en omgeving
        </h1>

        {/* Vanaf tablet de complete banner */}
        <Image
          src="/banner.jpg"
          alt="Lodin honden uitlaat service: twee Duitse herders wandelen met hun uitlaatster over een zandpad"
          width={1024}
          height={426}
          quality={95}
          sizes="100vw"
          priority
          className="hidden h-auto w-full sm:block"
        />

        {/* Op mobiel een uitsnede van de foto, de brede banner wordt daar te klein */}
        <Image
          src="/hero-foto.jpg"
          alt="Twee Duitse herders wandelen met hun uitlaatster over een zandpad door het bos"
          width={856}
          height={704}
          quality={95}
          sizes="100vw"
          priority
          className="block h-[60vh] w-full object-cover sm:hidden"
        />

        {/* Op mobiel staat de praktische informatie los onder de foto */}
        <div className="bg-olijf-diep sm:hidden">
          <ul className="flex flex-col gap-3 px-5 py-5 text-creme">
            {balkItems.map(({ icoon: Icoon, tekst }) => (
              <li key={tekst} className="flex items-center gap-3 text-sm font-semibold">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-creme/10 text-goud-licht">
                  <Icoon className="h-4 w-4" />
                </span>
                {tekst}
              </li>
            ))}
          </ul>
        </div>

        {/* Actiebalk direct onder het beeld */}
        <div className="border-b border-zand-diep bg-zand/50">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 py-6 md:flex-row md:justify-between">
            <p className="flex items-center gap-3 text-center text-base font-semibold text-olijf-diep md:text-left">
              <Poot className="hidden h-6 w-6 shrink-0 text-goud sm:block" />
              Kleine groepjes, anderhalf uur natuur, ophalen en thuisbrengen
              inbegrepen.
            </p>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Knop href="/contact">
                Plan een kennismaking
                <Pijl className="h-5 w-5" />
              </Knop>
              <Knop href="/tarieven" variant="omlijnd">
                Tarieven
              </Knop>
            </div>
          </div>
        </div>
      </section>

      {/* Over de dienst */}
      <section className="bg-creme py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
          <div>
            <SectieKop
              bovenkop="Onze dienst"
              titel="Dagelijks uitlaten, van deur tot deur"
              gecentreerd={false}
              tekst="Je hond wordt op vaste tijden opgehaald en gaat mee met een klein, vast groepje. Anderhalf uur snuffelen, rennen en spelen in de natuur. Daarna gaan de modderpoten af en ligt hij weer heerlijk moe op zijn eigen plekje."
            />
            <ul className="mt-7 space-y-3">
              {[
                "Vaste dagen of gewoon af en toe, allebei kan",
                "Altijd dezelfde vertrouwde gezichten voor je hond",
                "Sleutelafspraak mogelijk, jij hoeft niet thuis te zijn",
                "Schoon en verzorgd weer thuisgebracht",
              ].map((punt) => (
                <li key={punt} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-olijf-licht/25 text-olijf-diep">
                    <Vink className="h-4 w-4" />
                  </span>
                  <span className="text-base text-houtskool/80">{punt}</span>
                </li>
              ))}
            </ul>
            <Knop href="/diensten" variant="olijf" className="mt-8">
              Lees hoe het werkt
              <Pijl className="h-5 w-5" />
            </Knop>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <FotoVak bijschrift="Op pad in het bos" className="aspect-square" />
            <FotoVak
              bijschrift="Even lekker snuffelen"
              className="mt-8 aspect-square"
            />
            <FotoVak bijschrift="Samen in de heide" className="aspect-square" />
            <FotoVak
              bijschrift="Moe maar voldaan"
              className="mt-8 aspect-square"
            />
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="relative bg-olijf-diep pt-16 text-creme">
        <div className="mx-auto max-w-6xl px-4 pb-16">
          <SectieKop
            licht
            bovenkop="Zo gaat het"
            titel="In vijf stappen op pad"
            tekst="Van de eerste kop koffie tot een vaste plek in het groepje. Rustig opgebouwd, in het tempo van je hond."
          />
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {stappen.map((stap, i) => (
              <li
                key={stap.titel}
                className="rounded-3xl bg-creme/10 p-6 transition-colors hover:bg-creme/15"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-goud font-display text-lg font-bold text-houtskool">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-goud-licht">
                  {stap.titel}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-creme/80">
                  {stap.tekst}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <Golf />
      </section>

      {/* Tarieven */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Tarieven"
            titel="Eerlijke prijzen, alles inbegrepen"
            tekst="Ophalen, thuisbrengen, anderhalf uur wandelen en foto's van onderweg zitten er altijd bij. Geen kleine lettertjes."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
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
                <h3 className="font-display text-2xl font-semibold text-houtskool">
                  {pakket.naam}
                </h3>
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
        </div>
      </section>

      {/* Over ons */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <div className="overflow-hidden rounded-[2.5rem] border-4 border-creme bg-white shadow-xl shadow-houtskool/10">
              <Image
                src="/logo.png"
                alt="Logo van Lodin met Loki en Odin"
                width={820}
                height={820}
                className="h-auto w-full"
              />
            </div>
            <span className="drijf absolute -bottom-5 -right-3 rounded-3xl bg-olijf px-5 py-3 font-display text-sm font-semibold italic text-creme shadow-lg">
              Loki en Odin
            </span>
          </div>
          <div>
            <SectieKop
              bovenkop="Over Lodin"
              titel="Geboren uit liefde voor Loki en Odin"
              gecentreerd={false}
              tekst="Lodin is vernoemd naar onze eigen twee herders. Zij lieten ons zien hoeveel verschil een goede wandeling maakt: een hond die zijn neus mag gebruiken en zijn energie kwijt kan, is thuis een compleet ander beest."
            />
            <p className="mt-4 text-base leading-relaxed text-houtskool/75">
              Dat gunnen we elke hond. Daarom werken we bewust met kleine
              groepjes en nemen we de tijd. Geen haastige rondjes om het blok,
              maar echte wandelingen door bos en heide, met aandacht voor wat
              jouw hond nodig heeft.
            </p>
            <Knop href="/over-ons" variant="olijf" className="mt-7">
              Lees ons verhaal
              <Pijl className="h-5 w-5" />
            </Knop>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Ervaringen"
            titel="Wat baasjes vertellen"
            tekst="Niets zo fijn als een blij verhaal van een tevreden baasje en een uitgeputte hond op de bank."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {reviews.map((review) => (
              <figure
                key={review.naam}
                className="relative flex flex-col rounded-[2rem] border border-zand-diep bg-white/75 p-7 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-houtskool/5"
              >
                <Poot className="h-8 w-8 text-goud/40" />
                <blockquote className="mt-4 flex-1 text-base leading-relaxed text-houtskool/80">
                  {review.tekst}
                </blockquote>
                <figcaption className="mt-6 border-t border-zand-diep pt-4">
                  <span className="block font-display text-lg font-semibold text-houtskool">
                    {review.naam}
                  </span>
                  <span className="block text-sm text-houtskool/60">
                    {review.hond} &middot; {review.plaats}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Werkgebied"
            titel="Wij komen bij jou in de buurt"
            tekst="Vanuit Loon op Zand rijden we door de hele omgeving. Woon je er net buiten? Vraag het gerust, vaak is er meer mogelijk dan je denkt."
          />
          <div className="mt-12">
            <Kaart />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-creme py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Veelgestelde vragen"
            titel="Goed om te weten"
            tekst="Staat je vraag er niet bij? Bel of app gerust, we denken graag met je mee."
          />
          <Faq />
        </div>
      </section>

      {/* Slot-CTA */}
      <section className="bg-creme pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="pootjes-patroon relative overflow-hidden rounded-[2.5rem] bg-olijf px-6 py-14 text-center text-creme sm:px-14">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              Zin in een wandeling?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-creme/85 sm:text-lg">
              De kennismaking is gratis en helemaal vrijblijvend. We komen
              langs, leren je hond kennen en kijken samen wat het beste past.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Knop href="/contact">
                Neem contact op
                <Pijl className="h-5 w-5" />
              </Knop>
              <Knop href="/diensten" variant="licht">
                Bekijk de diensten
              </Knop>
            </div>
            <Poot className="absolute -bottom-6 -left-4 h-28 w-28 -rotate-12 text-creme/10" />
            <Poot className="absolute -right-4 -top-6 h-28 w-28 rotate-12 text-creme/10" />
          </div>
        </div>
      </section>
    </>
  );
}
