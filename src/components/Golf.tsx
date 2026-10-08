type GolfProps = {
  /** Kleur van de golf zelf (de sectie die eronder of erboven ligt) */
  kleur?: string;
  /** Golf omdraaien, zodat hij bol in plaats van hol loopt */
  omgekeerd?: boolean;
  className?: string;
};

/** Speelse golvende scheiding tussen twee secties */
export default function Golf({
  kleur = "#fbf6ec",
  omgekeerd = false,
  className = "",
}: GolfProps) {
  return (
    <div
      className={`pointer-events-none w-full leading-[0] ${omgekeerd ? "rotate-180" : ""} ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[50px] w-full sm:h-[70px]"
      >
        <path
          d="M0 40c120 30 260 44 420 30 160-13 280-46 430-48 150-2 280 26 400 36 80 7 140 6 190-3V90H0Z"
          fill={kleur}
        />
      </svg>
    </div>
  );
}
