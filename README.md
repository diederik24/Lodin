# Lodin Honden Uitlaat Service

Website gebouwd met Next.js, TypeScript en Tailwind CSS.

## Starten

```bash
npm run dev
```

De site draait daarna op http://localhost:3000

## Waar pas je wat aan

| Wat                                           | Bestand                            |
| --------------------------------------------- | ---------------------------------- |
| Telefoon, e-mail, KvK, social media           | `src/data/site.ts` (blok `bedrijf`) |
| Plaatsen in het werkgebied                    | `src/data/site.ts` (`werkgebied`)   |
| Prijzen en wat er in een pakket zit           | `src/data/site.ts` (`tarieven`)     |
| Veelgestelde vragen                           | `src/data/site.ts` (`faq`)          |
| Reviews van klanten                           | `src/data/site.ts` (`reviews`)      |
| Stappen van de werkwijze                      | `src/data/site.ts` (`stappen`)      |
| Kleuren en lettertypes                        | `src/app/globals.css`               |

De contactgegevens staan nu op placeholders. Vervang ze in `src/data/site.ts`,
dan worden ze overal op de site meteen goed getoond.

## Foto's toevoegen

De fotovakken zijn nu nog placeholders. Zet je eigen foto's in `public/fotos` en
vervang in `src/app/galerij/page.tsx` het component `<FotoVak />` door:

```tsx
<Image src="/fotos/jouw-foto.jpg" alt="Omschrijving" width={800} height={600} />
```

## Formulier

Het contactformulier in `src/components/ContactFormulier.tsx` verstuurt bewust
nog niets. In `onSubmit` kun je later een mailservice aansluiten.
