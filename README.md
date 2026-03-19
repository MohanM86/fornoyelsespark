# Fornøyelsespark.no

Norges mest komplette guide til fornøyelsesparker, familieparker, badeland og aktivitetsparker.

## Teknisk stack

- **Next.js 14** med App Router
- **TypeScript**
- **Tailwind CSS**
- Statisk genererte sider for optimal ytelse
- Vercel-kompatibel deploy

## Komme i gang

### Installasjon

```bash
npm install
```

### Kjør lokalt

```bash
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000) i nettleseren.

### Bygg for produksjon

```bash
npm run build
npm start
```

## Deploy til Vercel

1. Push prosjektet til et GitHub-repo
2. Gå til [vercel.com](https://vercel.com) og importer repoet
3. Vercel vil automatisk detektere Next.js og konfigurere bygget
4. Klikk "Deploy"

Ingen ekstra konfigurasjon er nødvendig.

## Prosjektstruktur

```
├── app/
│   ├── layout.tsx          # Rot-layout med Header/Footer
│   ├── page.tsx            # Forside
│   ├── globals.css         # Global CSS med Tailwind
│   ├── sitemap.ts          # Dynamisk sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # 404-side
│   ├── [city]/page.tsx     # Dynamiske bysider
│   ├── kategori/[slug]/    # Dynamiske kategorisider
│   ├── park/[slug]/        # Dynamiske detaljsider
│   └── guide/[slug]/       # Dynamiske guidesider
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── UI.tsx              # Gjenbrukbare komponenter
├── data/
│   ├── parks.ts            # Parkdata (20+ parker)
│   ├── cities.ts           # Bydata (11 byer)
│   ├── categories.ts       # Kategoridata (7 kategorier)
│   └── guides.ts           # Guidedata (6 guider)
├── lib/
│   ├── types.ts            # TypeScript-typer
│   ├── seo.ts              # SEO-hjelpefunksjoner
│   └── helpers.ts          # Datahjelpefunksjoner
└── public/
    ├── llms.txt            # For AI-søkemotorer
    └── entity-index.json   # Strukturert entitetsdata
```

## Legge til innhold

### Ny park

Legg til et nytt objekt i `data/parks.ts`. Følg eksisterende struktur med alle felt utfylt.

### Ny by

Legg til et nytt objekt i `data/cities.ts`. Husk unik SEO-intro, metaTitle, metaDescription og FAQ.

### Ny kategori

Legg til i `data/categories.ts` og oppdater `ParkCategory`-typen i `lib/types.ts`.

### Ny guide

Legg til et nytt objekt i `data/guides.ts` med seksjoner, FAQ og relaterte parker/guider.

## SEO-funksjoner

- Unik title og meta description per side
- JSON-LD structured data (FAQPage, AmusementPark, BreadcrumbList)
- Dynamisk sitemap.xml
- Robots.txt med AI-crawler-støtte
- Semantisk HTML med korrekt H1/H2/H3-hierarki
- Sterk internlenking mellom alle sidetyper
- Brødsmuler på alle undersider
- llms.txt og entity-index.json for AI-synlighet

## Sidetyper og antall

| Type | Antall | URL-mønster |
|------|--------|-------------|
| Forside | 1 | / |
| Bysider | 11 | /[by] |
| Kategorisider | 7 | /kategori/[slug] |
| Detaljsider | 20+ | /park/[slug] |
| Guidesider | 6 | /guide/[slug] |
| **Totalt** | **45+** | |

## Fremtidig utvikling

Arkitekturen støtter enkel innlegging av:
- Fremhevede oppføringer (featured-flagg er allerede i datamodellen)
- Sponsede plasseringer
- Premium-profiler
- Kommersielle moduler

Datamodellen har `featured`-felt som kan brukes til å markere betalende aktører.
