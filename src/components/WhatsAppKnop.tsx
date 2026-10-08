import { bedrijf } from "@/data/site";
import { WhatsApp } from "./Icons";

/**
 * Zwevende WhatsApp-knop. Vul in src/data/site.ts je echte nummer in
 * bij `whatsapp` om de knop werkend te maken.
 */
export default function WhatsAppKnop() {
  return (
    <a
      href={`https://wa.me/${bedrijf.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Stuur een WhatsApp-bericht naar Lodin"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-olijf px-4 py-4 text-creme shadow-lg shadow-houtskool/20 transition-all hover:-translate-y-1 hover:bg-olijf-diep sm:bottom-7 sm:right-7"
    >
      <WhatsApp className="h-7 w-7" />
      <span className="hidden max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-300 group-hover:max-w-[12rem] sm:block">
        Stuur een berichtje
      </span>
    </a>
  );
}
