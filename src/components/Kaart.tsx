import { werkgebied } from "@/data/site";
import { Speld } from "./Icons";

export default function Kaart() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-zand-diep bg-white/80 shadow-sm">
      <iframe
        title="Kaart van het werkgebied van Lodin rond Loon op Zand"
        src="https://www.openstreetmap.org/export/embed.html?bbox=4.94%2C51.58%2C5.22%2C51.72&layer=mapnik&marker=51.6417%2C5.0806"
        loading="lazy"
        className="h-72 w-full border-0 sm:h-96"
      />
      <div className="flex flex-wrap gap-2 p-5">
        {werkgebied.map((plaats) => (
          <span
            key={plaats}
            className="inline-flex items-center gap-1.5 rounded-full bg-zand px-3.5 py-1.5 text-sm font-semibold text-olijf-diep"
          >
            <Speld className="h-3.5 w-3.5 text-goud" />
            {plaats}
          </span>
        ))}
      </div>
    </div>
  );
}
