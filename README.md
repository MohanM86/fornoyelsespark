# Fornøyelsespark.no

Norges mest komplette guide til fornøyelsesparker, familieparker, badeland og aktivitetsparker.

## Teknisk stack

- **Next.js 14** med App Router
- **TypeScript**
- **Tailwind CSS**
- 312 statisk genererte sider
- Vercel-kompatibel deploy

## Komme i gang

```bash
npm install
npm run dev
```

Åpne [http://localhost:3000](http://localhost:3000)

## Deploy til Vercel

1. Push til GitHub
2. Importer i Vercel
3. Deploy – ingen konfigurasjon nødvendig

## Prosjektstruktur

```
├── app/
│   ├── layout.tsx          # Rot-layout med WebSite JSON-LD
│   ├── page.tsx            # Forside med H1, sammenligning, dagsplan
│   ├── globals.css         # Designsystem (krem bakgrunn)
│   ├── sitemap.ts          # Dynamisk sitemap (312 sider)
│   ├── robots.ts           # AI-crawler-vennlig
│   ├── [city]/page.tsx     # 11 bysider
│   ├── kategori/[slug]/    # 7 kategorisider
│   ├── park/[slug]/        # 282 parksider
│   └── guide/[slug]/       # 6 guidesider
├── components/
│   ├── Header.tsx          # Søkefelt, navigasjon
│   ├── Footer.tsx          # Internlenking
│   └── UI.tsx              # Komplett komponentsystem
├── data/
│   ├── parks.ts            # 20 detaljerte parkprofiler
│   ├── brreg.ts            # 262 kvalitetssikrede oppføringer
│   ├── cities.ts           # 11 byer
│   ├── categories.ts       # 7 kategorier
│   └── guides.ts           # 6 guider
├── lib/
│   ├── types.ts            # TypeScript-typer
│   ├── seo.ts              # JSON-LD, metadata, LocalBusiness
│   └── helpers.ts          # Datasammenslåing og oppslag
└── public/
    ├── favicon.svg
    ├── llms.txt            # AI-søkemotor-sammendrag
    ├── llms-full.txt       # Komplett entitetsindeks
    └── entity-index.json   # Schema.org WebSite
```

## SEO og AI-synlighet

| Funksjon | Status |
|----------|--------|
| JSON-LD (FAQPage, AmusementPark, LocalBusiness, BreadcrumbList, WebSite) | ✓ |
| Dynamisk sitemap.xml (312 sider) | ✓ |
| Robots.txt med AI-crawlere (GPTBot, ClaudeBot, PerplexityBot) | ✓ |
| llms.txt + llms-full.txt | ✓ |
| entity-index.json | ✓ |
| Unik H1, title, meta description per side | ✓ |
| FAQ-seksjoner på alle sider | ✓ |
| Semantisk HTML | ✓ |
| Internlenking (parker ↔ byer ↔ kategorier ↔ guider) | ✓ |
| Favicon | ✓ |

## Sidestatistikk

| Type | Antall |
|------|--------|
| Forside | 1 |
| Bysider | 11 |
| Kategorisider | 7 |
| Detaljsider (redaksjonelle) | 20 |
| Detaljsider (registerdata) | 262 |
| Guidesider | 6 |
| **Totalt** | **312** |
