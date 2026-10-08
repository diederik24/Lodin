/**
 * Centrale gegevens van de website.
 * Pas hier je echte contactgegevens, prijzen en teksten aan; ze worden op elke pagina gebruikt.
 */

export const bedrijf = {
  naam: "Lodin",
  slogan: "Honden Uitlaat Service",
  pitch: "Rust, ruimte en persoonlijke aandacht",
  // TODO: vervang de placeholders hieronder door je echte gegevens
  telefoon: "06 12 34 56 78",
  telefoonLink: "+31612345678",
  whatsapp: "31612345678",
  email: "info@lodin.nl",
  instagram: "https://instagram.com/lodin.uitlaatservice",
  facebook: "https://facebook.com/lodin.uitlaatservice",
  kvk: "00000000",
  standplaats: "Loon op Zand",
};

export const werkgebied = [
  "Loon op Zand",
  "Kaatsheuvel",
  "De Moer",
  "Waalwijk",
  "Sprang-Capelle",
  "Dongen",
];

export const openingstijden = [
  { dag: "Maandag t/m vrijdag", tijd: "08:00 - 17:00" },
  { dag: "Zaterdag", tijd: "In overleg" },
  { dag: "Zondag", tijd: "Gesloten" },
];

export const tarieven = [
  {
    naam: "Losse wandeling",
    prijs: "€ 17,-",
    eenheid: "per wandeling",
    uitleg: "Ideaal om kennis te maken of voor een keertje tussendoor.",
    punten: [
      "Wandeling van 1,5 uur",
      "Ophalen en thuisbrengen inbegrepen",
      "Kleine groep van maximaal 4 honden",
      "Foto's van de wandeling",
    ],
    uitgelicht: false,
  },
  {
    naam: "Vaste dagen",
    prijs: "€ 15,-",
    eenheid: "per wandeling",
    uitleg:
      "Je hond heeft vaste dagen in de week en een vast groepje. Maandelijks gefactureerd.",
    punten: [
      "Vanaf 2 vaste dagen per week",
      "Wandeling van 1,5 uur",
      "Ophalen en thuisbrengen inbegrepen",
      "Altijd dezelfde vertrouwde maatjes",
      "Voorrang bij extra dagen",
    ],
    uitgelicht: true,
  },
  {
    naam: "Strippenkaart",
    prijs: "€ 160,-",
    eenheid: "voor 10 wandelingen",
    uitleg:
      "Flexibel uitlaten zonder vaste dagen. De kaart is een jaar geldig.",
    punten: [
      "10 wandelingen van 1,5 uur",
      "Ophalen en thuisbrengen inbegrepen",
      "Zelf je dagen kiezen in overleg",
      "Een jaar geldig",
    ],
    uitgelicht: false,
  },
];

export const stappen = [
  {
    titel: "Kennismaking",
    tekst: "We drinken een kop koffie, jij vertelt alles over je hond en we kijken of het klikt. Helemaal gratis en vrijblijvend.",
  },
  {
    titel: "Proefwandeling",
    tekst: "Je hond gaat een keer mee met een klein groepje, zodat we rustig kunnen zien hoe hij of zij het doet.",
  },
  {
    titel: "Ophalen aan de deur",
    tekst: "Op de afgesproken dagen halen we je hond thuis op. Sleutelafspraak mogelijk, zodat jij gewoon kunt werken.",
  },
  {
    titel: "Anderhalf uur buiten",
    tekst: "Bos, heide en zandpaden rond Loon op Zand. Snuffelen, rennen, spelen en daarna weer lekker tot rust komen.",
  },
  {
    titel: "Schoon en moe thuis",
    tekst: "Modderpoten gaan af, de waterbak wordt bijgevuld en jij krijgt een paar leuke foto's van de wandeling.",
  },
];

export const reviews = [
  {
    naam: "Sanne",
    plaats: "Kaatsheuvel",
    hond: "Nova, Mechelse herder",
    tekst: "Nova staat elke dinsdag al bij het raam te wachten. Ze komt heerlijk moe thuis en slaapt daarna de hele middag door. De foto's die we krijgen maken mijn werkdag altijd goed.",
  },
  {
    naam: "Mark en Lisa",
    plaats: "Loon op Zand",
    hond: "Boef, labrador",
    tekst: "Wat fijn dat het echt kleine groepjes zijn. Boef was in het begin onzeker bij andere honden, maar dat is met veel geduld helemaal opgebouwd. Hij is nu veel rustiger thuis.",
  },
  {
    naam: "Ilse",
    plaats: "Waalwijk",
    hond: "Pluk, kruising",
    tekst: "Betrouwbaar, altijd op tijd en je merkt gewoon dat de honden echt belangrijk zijn. Pluk wordt opgehaald en thuisgebracht, ik hoef nergens meer over na te denken.",
  },
];

export const faq = [
  {
    vraag: "Hoe groot zijn de groepjes?",
    antwoord:
      "We werken met kleine groepjes van maximaal vier honden die goed bij elkaar passen qua energie en karakter. Zo houden we het overzichtelijk, veilig en rustig voor iedereen.",
  },
  {
    vraag: "Hoe lang duurt een wandeling?",
    antwoord:
      "Een wandeling duurt anderhalf uur in het bos of op de heide. De tijd van ophalen en thuisbrengen zit daar niet bij, die krijg je er gewoon bij.",
  },
  {
    vraag: "Haal je mijn hond thuis op?",
    antwoord:
      "Ja, ophalen en thuisbrengen is bij elke wandeling inbegrepen binnen het werkgebied. We kunnen een sleutelafspraak maken zodat jij niet thuis hoeft te zijn.",
  },
  {
    vraag: "Gaan de honden los?",
    antwoord:
      "Alleen als jij daar toestemming voor geeft en als we zeker weten dat je hond betrouwbaar terugkomt. Tot die tijd wandelen we aan een lange lijn, veiligheid gaat altijd voor.",
  },
  {
    vraag: "Wat als mijn hond niet goed met andere honden kan?",
    antwoord:
      "Dat bespreken we tijdens de kennismaking. Soms past een rustiger groepje beter, soms is een individuele wandeling de betere keuze. We kijken altijd naar wat jouw hond nodig heeft.",
  },
  {
    vraag: "Is mijn hond verzekerd tijdens de wandeling?",
    antwoord:
      "Er is een bedrijfsaansprakelijkheidsverzekering afgesloten. Daarnaast vragen we je om de eigen WA-verzekering en de reguliere entingen op orde te hebben.",
  },
  {
    vraag: "Wat gebeurt er bij slecht weer?",
    antwoord:
      "Regen is voor honden zelden een probleem, dus we gaan gewoon naar buiten. Alleen bij extreem weer zoals onweer, storm of grote hitte passen we de route en de tijden aan.",
  },
  {
    vraag: "Hoe zeg ik een wandeling af?",
    antwoord:
      "Even een berichtje uiterlijk 24 uur van tevoren, dan brengen we niets in rekening. Bij afzeggen op de dag zelf rekenen we de wandeling helaas wel door.",
  },
];

export const navigatie = [
  { href: "/", label: "Home" },
  { href: "/diensten", label: "Diensten" },
  { href: "/tarieven", label: "Tarieven" },
  { href: "/over-ons", label: "Over ons" },
  { href: "/galerij", label: "Galerij" },
  { href: "/contact", label: "Contact" },
];
