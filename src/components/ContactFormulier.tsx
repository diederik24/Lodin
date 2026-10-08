"use client";

import { useState, type FormEvent } from "react";
import { bedrijf } from "@/data/site";
import { Pijl } from "./Icons";

const veldStijl =
  "w-full rounded-2xl border border-zand-diep bg-creme/60 px-4 py-3 text-base text-houtskool outline-none transition-colors placeholder:text-houtskool/40 focus:border-goud focus:bg-white";

/**
 * Aanmeldformulier. Het versturen is bewust nog niet gekoppeld aan een
 * mailservice of database. Sluit het later aan in `onSubmit`.
 */
export default function ContactFormulier() {
  const [melding, setMelding] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMelding(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[2rem] border border-zand-diep bg-white/80 p-6 shadow-sm sm:p-8"
    >
      <h3 className="font-display text-2xl font-semibold text-houtskool">
        Vraag een kennismaking aan
      </h3>
      <p className="mt-2 text-sm text-houtskool/70">
        Vertel kort iets over jezelf en je hond, dan nemen we contact met je op
        voor een gratis kennismaking.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="naam" className="mb-1.5 block text-sm font-semibold">
            Je naam
          </label>
          <input
            id="naam"
            name="naam"
            type="text"
            placeholder="Voor- en achternaam"
            className={veldStijl}
          />
        </div>
        <div>
          <label
            htmlFor="telefoon"
            className="mb-1.5 block text-sm font-semibold"
          >
            Telefoonnummer
          </label>
          <input
            id="telefoon"
            name="telefoon"
            type="tel"
            placeholder="06 12 34 56 78"
            className={veldStijl}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
            E-mailadres
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="jouw@email.nl"
            className={veldStijl}
          />
        </div>
        <div>
          <label
            htmlFor="plaats"
            className="mb-1.5 block text-sm font-semibold"
          >
            Woonplaats
          </label>
          <input
            id="plaats"
            name="plaats"
            type="text"
            placeholder="Bijvoorbeeld Kaatsheuvel"
            className={veldStijl}
          />
        </div>
        <div>
          <label htmlFor="hond" className="mb-1.5 block text-sm font-semibold">
            Naam van je hond
          </label>
          <input
            id="hond"
            name="hond"
            type="text"
            placeholder="Hoe heet je maatje?"
            className={veldStijl}
          />
        </div>
        <div>
          <label htmlFor="ras" className="mb-1.5 block text-sm font-semibold">
            Ras en leeftijd
          </label>
          <input
            id="ras"
            name="ras"
            type="text"
            placeholder="Bijvoorbeeld labrador, 3 jaar"
            className={veldStijl}
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="pakket" className="mb-1.5 block text-sm font-semibold">
          Waar heb je interesse in?
        </label>
        <select id="pakket" name="pakket" className={veldStijl} defaultValue="">
          <option value="" disabled>
            Maak een keuze
          </option>
          <option>Losse wandeling</option>
          <option>Vaste dagen per week</option>
          <option>Strippenkaart van 10 wandelingen</option>
          <option>Weet ik nog niet, graag advies</option>
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="bericht" className="mb-1.5 block text-sm font-semibold">
          Vertel iets over je hond
        </label>
        <textarea
          id="bericht"
          name="bericht"
          rows={4}
          placeholder="Karakter, ervaring met andere honden, bijzonderheden, gewenste dagen..."
          className={`${veldStijl} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-goud px-7 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-goud-diep sm:w-auto"
      >
        Versturen
        <Pijl className="h-5 w-5" />
      </button>

      {melding && (
        <div
          role="status"
          className="mt-5 rounded-2xl border border-goud/50 bg-zand/70 px-5 py-4 text-sm leading-relaxed text-olijf-diep"
        >
          <strong className="block font-display text-base">
            Dit formulier is nog niet actief
          </strong>
          De website staat nog in de startblokken, dus je bericht wordt nog niet
          verstuurd. Bel of app gerust even naar {bedrijf.telefoon}, dan regelen
          we het zo.
        </div>
      )}
    </form>
  );
}
