# Rosenlunds Verkstad – webbplats

Webbplats för Rosenlunds Verkstad AB i Jönköping. Byggd med Next.js och Tailwind, publiceras på Vercel.

## Ändra innehåll

Nästan all text och kontaktinfo ligger i `lib/site.ts`:

- `site` – namn, telefon, mejl, adress, öppettider, domän
- `services` – tjänster (visas på startsidan, Tjänster och i bokningsformuläret)
- `vehicles`, `brands` – fordon och märken
- `contacts` – kontaktpersoner (sätt `placeholder: false` när uppgifterna är bekräftade)

Bilder ligger i `public/` (`brand/`, `images/`, `team/`).

## Köra lokalt

```bash
npm install
npm run dev
```

Öppna http://localhost:3000.

## Inför lansering

- Byt `site.url` i `lib/site.ts` till riktig domän (används av sitemap, robots och Google-info)
- Fyll i kontaktpersoner
- Granska integritetspolicyn (`app/integritet/page.tsx`)
