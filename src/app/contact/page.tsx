import type { Metadata } from "next";
import ContactFormulier from "@/components/ContactFormulier";
import Kaart from "@/components/Kaart";
import PaginaKop from "@/components/PaginaKop";
import SectieKop from "@/components/SectieKop";
import {
  Facebook,
  Instagram,
  Klok,
  Mail,
  Speld,
  Telefoon,
  WhatsApp,
} from "@/components/Icons";
import { bedrijf, openingstijden } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Lodin honden uitlaat service in Loon op Zand. Plan een gratis kennismaking voor jou en je hond.",
};

export default function Contact() {
  return (
    <>
      <PaginaKop
        bovenkop="Contact"
        titel="Laten we kennismaken"
        tekst="Bel, app of stuur een berichtje via het formulier. We plannen graag een gratis kennismaking waarin we jou en je hond leren kennen."
      />

      <section className="bg-creme pb-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 lg:grid-cols-[1fr_1.15fr]">
          {/* Gegevens */}
          <div className="space-y-6">
            <div className="rounded-[2rem] border border-zand-diep bg-white/75 p-7">
              <h2 className="font-display text-2xl font-semibold text-houtskool">
                Direct contact
              </h2>
              <ul className="mt-5 space-y-4">
                <li>
                  <a
                    href={`tel:${bedrijf.telefoonLink}`}
                    className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-zand/60"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-olijf text-goud-licht transition-colors group-hover:bg-goud group-hover:text-houtskool">
                      <Telefoon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-houtskool/50">
                        Telefoon
                      </span>
                      <span className="block text-base font-semibold text-houtskool">
                        {bedrijf.telefoon}
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`https://wa.me/${bedrijf.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-zand/60"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-olijf text-goud-licht transition-colors group-hover:bg-goud group-hover:text-houtskool">
                      <WhatsApp className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-houtskool/50">
                        WhatsApp
                      </span>
                      <span className="block text-base font-semibold text-houtskool">
                        Stuur een berichtje
                      </span>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${bedrijf.email}`}
                    className="group flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-zand/60"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-olijf text-goud-licht transition-colors group-hover:bg-goud group-hover:text-houtskool">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-houtskool/50">
                        E-mail
                      </span>
                      <span className="block text-base font-semibold text-houtskool">
                        {bedrijf.email}
                      </span>
                    </span>
                  </a>
                </li>
                <li className="flex items-center gap-4 p-2">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-olijf text-goud-licht">
                    <Speld className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-wider text-houtskool/50">
                      Standplaats
                    </span>
                    <span className="block text-base font-semibold text-houtskool">
                      {bedrijf.standplaats} en omgeving
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-6 flex gap-3 border-t border-zand-diep pt-5">
                <a
                  href={bedrijf.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram van Lodin"
                  className="rounded-full bg-zand p-2.5 text-olijf-diep transition-colors hover:bg-goud hover:text-houtskool"
                >
                  <Instagram />
                </a>
                <a
                  href={bedrijf.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook van Lodin"
                  className="rounded-full bg-zand p-2.5 text-olijf-diep transition-colors hover:bg-goud hover:text-houtskool"
                >
                  <Facebook />
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-zand-diep bg-white/75 p-7">
              <h2 className="flex items-center gap-3 font-display text-2xl font-semibold text-houtskool">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-zand text-goud">
                  <Klok className="h-5 w-5" />
                </span>
                Bereikbaarheid
              </h2>
              <ul className="mt-5 space-y-2.5">
                {openingstijden.map((rij) => (
                  <li
                    key={rij.dag}
                    className="flex items-center justify-between gap-4 border-b border-zand-diep/60 pb-2.5 text-sm last:border-0"
                  >
                    <span className="font-semibold text-houtskool/80">
                      {rij.dag}
                    </span>
                    <span className="text-houtskool/65">{rij.tijd}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-houtskool/65">
                Onderweg kunnen we de telefoon niet altijd opnemen. Spreek
                gerust iets in of stuur een appje, we bellen je zo snel mogelijk
                terug.
              </p>
            </div>
          </div>

          {/* Formulier */}
          <ContactFormulier />
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-zand/60 py-20">
        <div className="mx-auto max-w-6xl px-4">
          <SectieKop
            bovenkop="Werkgebied"
            titel="Hier komen we langs"
            tekst="Vanuit Loon op Zand rijden we door de hele omgeving. Woon je er net buiten? Vraag het gerust, vaak is er meer mogelijk dan je denkt."
          />
          <div className="mt-12">
            <Kaart />
          </div>
        </div>
      </section>
    </>
  );
}
