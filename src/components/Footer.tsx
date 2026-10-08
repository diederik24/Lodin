import Image from "next/image";
import Link from "next/link";
import { bedrijf, navigatie, werkgebied } from "@/data/site";
import { Facebook, Instagram, Mail, Poot, Speld, Telefoon } from "./Icons";

export default function Footer() {
  return (
    <footer className="mt-auto bg-olijf-diep text-creme">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-creme p-1.5">
              <Image
                src="/logo.png"
                alt="Logo Lodin"
                width={90}
                height={90}
                className="h-12 w-12 mix-blend-multiply"
              />
            </span>
            <span>
              <span className="block font-display text-2xl font-semibold tracking-wide">
                LODIN
              </span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-goud-licht">
                Honden Uitlaat Service
              </span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-creme/80">
            Rust, ruimte en persoonlijke aandacht. Kleine groepjes, lange
            wandelingen in de natuur rond {bedrijf.standplaats}.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={bedrijf.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram van Lodin"
              className="rounded-full bg-creme/10 p-2.5 transition-colors hover:bg-goud hover:text-houtskool"
            >
              <Instagram />
            </a>
            <a
              href={bedrijf.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook van Lodin"
              className="rounded-full bg-creme/10 p-2.5 transition-colors hover:bg-goud hover:text-houtskool"
            >
              <Facebook />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-goud-licht">
            Menu
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {navigatie.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-creme/85 transition-colors hover:text-goud-licht"
                >
                  <Poot className="h-3.5 w-3.5 text-goud" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-goud-licht">
            Werkgebied
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-creme/85">
            {werkgebied.map((plaats) => (
              <li key={plaats} className="flex items-center gap-2">
                <Speld className="h-3.5 w-3.5 text-goud" />
                {plaats}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-goud-licht">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-creme/85">
            <li>
              <a
                href={`tel:${bedrijf.telefoonLink}`}
                className="flex items-center gap-2 transition-colors hover:text-goud-licht"
              >
                <Telefoon className="h-4 w-4 text-goud" />
                {bedrijf.telefoon}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${bedrijf.email}`}
                className="flex items-center gap-2 transition-colors hover:text-goud-licht"
              >
                <Mail className="h-4 w-4 text-goud" />
                {bedrijf.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Speld className="h-4 w-4 text-goud" />
              {bedrijf.standplaats} en omgeving
            </li>
          </ul>
          <p className="mt-4 text-xs text-creme/60">KvK {bedrijf.kvk}</p>
        </div>
      </div>

      <div className="border-t border-creme/15">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-creme/65 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Lodin Honden Uitlaat Service. Alle
            rechten voorbehouden.
          </p>
          <p className="italic">Geboren uit liefde voor Loki en Odin</p>
        </div>
      </div>
    </footer>
  );
}
