/**
 * Interactieve werkgebiedkaart.
 * Bronbestanden staan in /public/kaart-voor-website (zie LEESMIJ.txt daar).
 */
export default function Kaart() {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-zand-diep bg-white/80 shadow-sm">
      <iframe
        src="/kaart-voor-website/kaart.html"
        title="Werkgebied"
        style={{ width: "100%", height: "500px", border: 0 }}
        loading="lazy"
      />
    </div>
  );
}
