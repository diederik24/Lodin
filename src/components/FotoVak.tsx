import { Camera, Poot } from "./Icons";

type FotoVakProps = {
  bijschrift: string;
  className?: string;
};

/**
 * Placeholder voor een foto. Vervang dit component later door een
 * <Image src="/fotos/jouw-foto.jpg" ... /> zodra je eigen foto's klaar hebt.
 */
export default function FotoVak({ bijschrift, className = "" }: FotoVakProps) {
  return (
    <div
      className={`pootjes-patroon group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-dashed border-goud/45 bg-zand/70 p-6 text-center ${className}`}
    >
      <span className="rounded-2xl bg-creme/80 p-3 text-goud shadow-sm transition-transform group-hover:-translate-y-1">
        <Camera className="h-7 w-7" />
      </span>
      <p className="mt-3 text-sm font-semibold text-olijf-diep">{bijschrift}</p>
      <p className="mt-1 text-xs text-houtskool/50">Ruimte voor jouw foto</p>
      <Poot className="absolute -bottom-3 -right-2 h-14 w-14 rotate-12 text-goud/15" />
    </div>
  );
}
