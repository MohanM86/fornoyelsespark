import { Park } from '@/lib/types'

export const parks: Park[] = [
  {
    id: 'tusenfryd',
    name: 'TusenFryd',
    slug: 'tusenfryd',
    city: 'Vinterbro',
    citySlug: 'oslo',
    county: 'Akershus',
    category: 'fornoyelsesparker',
    categories: ['fornoyelsesparker', 'familieparker'],
    shortDescription: 'Norges største fornøyelsespark med over 30 attraksjoner, berg-og-dal-baner og familieområder. Ligger sør for Oslo.',
    description: `TusenFryd er Norges største og mest besøkte fornøyelsespark. Parken ligger på Vinterbro i Akershus, omtrent 20 minutter sør for Oslo sentrum. Med over 30 attraksjoner fordelt på flere temaområder er dette et av landets mest populære utfluktsmål for familier og unge.

Parken er kjent for sine berg-og-dal-baner, deriblant SpeedMonster som akselererer til 90 km/t på under to sekunder, og ThunderCoaster som er en av Norges lengste trevognturer. For de yngste finnes det et eget barneområde med roligere attraksjoner tilpasset små barn.

I tillegg til mekaniske attraksjoner har TusenFryd et eget vannområde kalt BadeFryd, som er inkludert i inngangsbilletten om sommeren. Parken arrangerer også sesongbaserte hendelser som Halloween-festivalen og julemarked.

TusenFryd tiltrekker seg rundt 500 000 besøkende i sesongen og er eid av det spanske selskapet Parques Reunidos. Parken har kafeer, restauranter og flere butikker inne på området.`,
    address: 'Høyungsletta 19, 1407 Vinterbro',
    audience: ['Familier', 'Barn', 'Ungdom', 'Voksne'],
    tags: ['berg-og-dal-bane', 'vannpark', 'halloween', 'sommer', 'oslo-området'],
    featured: true,
    tips: [
      'Kjøp billetter på nett for å slippe kø ved inngangen.',
      'Kom tidlig på hverdager for kortere ventetider på de populære attraksjonene.',
      'Ta med badetøy til BadeFryd-området om sommeren.',
      'Parken er enklest å nå med bil, men det går også buss fra Oslo.',
      'Sesongen varer normalt fra mai til oktober.'
    ],
    faq: [
      { question: 'Hvor ligger TusenFryd?', answer: 'TusenFryd ligger på Vinterbro i Akershus, omtrent 20 minutter med bil sør for Oslo sentrum.' },
      { question: 'Hva koster det å besøke TusenFryd?', answer: 'Billettprisene varierer etter sesong og kjøpstidspunkt. Det er vanligvis billigere å kjøpe på nett i forkant. Sjekk tusenfryd.no for oppdaterte priser.' },
      { question: 'Er TusenFryd bra for små barn?', answer: 'Ja, parken har et eget barneområde med attraksjoner tilpasset barn under 120 cm. Det finnes også familievennlige attraksjoner i resten av parken.' },
      { question: 'Når er TusenFryd åpent?', answer: 'Parken er vanligvis åpen fra mai til oktober, med utvidede åpningstider i sommerferien. Halloween-festivalen finner sted i september og oktober.' }
    ]
  },
  {
    id: 'hunderfossen',
    name: 'Hunderfossen Eventyrpark',
    slug: 'hunderfossen',
    city: 'Lillehammer',
    citySlug: 'lillehammer',
    county: 'Innlandet',
    category: 'familieparker',
    categories: ['familieparker', 'opplevelsesparker'],
    shortDescription: 'Norges mest kjente familiepark med eventyrfigurer, trollslottet og interaktive opplevelser. Ligger ved Lillehammer.',
    description: `Hunderfossen Eventyrpark er en av Norges mest kjente familieparker og ligger langs E6, omtrent 15 kilometer nord for Lillehammer sentrum i Innlandet fylke. Parken er bygget rundt norske eventyr og folkeeventyr, og er spesielt kjent for det store trollet ved inngangen.

Parken har over 60 aktiviteter og attraksjoner, inkludert Il Tempo Extra Gigante som er en interaktiv mørkerittopplevelse, Eventyrgrottene med animatroniske figurer, og det legendariske Trollslottet. For de mer eventyrlystne finnes det bobrafting, klatrepark og diverse tivoli-attraksjoner.

Hunderfossen skiller seg fra tradisjonelle fornøyelsesparker ved å legge stor vekt på fortelling og norsk kultur. Mange av attraksjonene er interaktive og basert på norske folkeeventyr som Askeladden, De tre bukkene Bruse og Trollet som lurte prinsessen.

Parken er et populært utfluktsmål for barnefamilier og mottar flere hundre tusen besøkende hvert år. Den ligger i et naturskjønt område langs Gudbrandsdalslågen og er enkel å kombinere med andre aktiviteter i Lillehammer-området.`,
    address: 'Fåbergvegen 612, 2625 Fåberg',
    audience: ['Familier', 'Barn', 'Turister'],
    tags: ['eventyr', 'troll', 'interaktiv', 'lillehammer', 'familievennlig'],
    featured: true,
    tips: [
      'Besøk på hverdager for kortere køer og en roligere opplevelse.',
      'Mange av attraksjonene er innendørs, så parken fungerer godt også i dårlig vær.',
      'Kombiner besøket med Lilleputthammer som ligger like ved.',
      'Parken egner seg best for barn mellom 3 og 12 år.',
      'Det finnes flere spisesteder inne i parken.'
    ],
    faq: [
      { question: 'Hva er Hunderfossen Eventyrpark?', answer: 'Hunderfossen er en familiepark ved Lillehammer som er bygget rundt norske folkeeventyr. Parken har over 60 attraksjoner og er spesielt populær blant barnefamilier.' },
      { question: 'Hvilken aldersgruppe passer Hunderfossen for?', answer: 'Parken er primært rettet mot familier med barn mellom 3 og 12 år, men har også aktiviteter som passer for eldre barn og voksne.' },
      { question: 'Når er Hunderfossen åpent?', answer: 'Hunderfossen har vanligvis sommersesong fra midten av juni til midten av august, med noen utvidede åpningshelger i mai og september.' }
    ]
  },
  {
    id: 'kongeparken',
    name: 'Kongeparken',
    slug: 'kongeparken',
    city: 'Ålgård',
    citySlug: 'stavanger',
    county: 'Rogaland',
    category: 'familieparker',
    categories: ['familieparker', 'fornoyelsesparker', 'aktivitetsparker'],
    shortDescription: 'Sør-Vestlandets største familiepark med berg-og-dal-bane, vannattraksjoner og Kongen & Dronninga-området for de minste.',
    description: `Kongeparken er Sør-Vestlandets største fornøyelses- og familiepark, beliggende på Ålgård i Rogaland, omtrent 30 minutter sør for Stavanger sentrum. Parken kombinerer klassiske fornøyelsespark-attraksjoner med naturopplevelser og familievennlige aktiviteter.

Blant de mest populære attraksjonene er berg-og-dal-banen Humla, vannbrettet Kongerafta og den interaktive turen Eventyrfabrikken. For de aller minste er det et eget område kalt Kongen & Dronninga med tilpassede attraksjoner.

Parken ligger i vakker natur ved Gjesdal og tilbyr også utendørsaktiviteter som klatrepark, zip-line og gårdsdyr. Kongeparken har vokst betydelig de siste årene og satser sterkt på nye attraksjoner og opplevelser.

Med sin beliggenhet i en av Norges mest befolkede regioner er Kongeparken et naturlig valg for familier i Stavanger, Sandnes og omegn. Parken har flere spisesteder og fasiliteter tilpasset familier med barn i alle aldre.`,
    address: 'Ålgårdsveien 150, 4330 Ålgård',
    audience: ['Familier', 'Barn', 'Ungdom'],
    tags: ['familiepark', 'berg-og-dal-bane', 'vannattraksjoner', 'stavanger-regionen'],
    featured: true,
    tips: [
      'Parken ligger ca. 30 minutter fra Stavanger sentrum med bil.',
      'Sesongkort kan lønne seg om du bor i nærheten og planlegger flere besøk.',
      'Ta med ekstra klær til barna – vannattraksjoner kan gi våte klær.',
      'Parken har gratis parkering.',
      'Sjekk nettsidene for informasjon om sesongåpning og spesielle arrangementer.'
    ],
    faq: [
      { question: 'Hvor er Kongeparken?', answer: 'Kongeparken ligger på Ålgård i Gjesdal kommune, omtrent 30 minutter sør for Stavanger sentrum med bil.' },
      { question: 'Er Kongeparken bra for småbarn?', answer: 'Ja, parken har et eget område kalt Kongen & Dronninga som er spesielt tilpasset de minste barna, i tillegg til mange familievennlige attraksjoner.' },
      { question: 'Hva koster Kongeparken?', answer: 'Prisene varierer etter sesong. Det er ofte billigere å kjøpe billetter på forhånd via parkens nettsider.' }
    ]
  },
  {
    id: 'dyreparken',
    name: 'Dyreparken i Kristiansand',
    slug: 'dyreparken-kristiansand',
    city: 'Kristiansand',
    citySlug: 'kristiansand',
    county: 'Agder',
    category: 'familieparker',
    categories: ['familieparker', 'dyrepark', 'opplevelsesparker'],
    shortDescription: 'Norges mest besøkte familiepark med dyrehage, Kardemomme by, Kaptein Sabeltanns Verden og badeland.',
    description: `Dyreparken i Kristiansand er Norges mest besøkte familiepark med nærmere en million besøkende i året. Parken kombinerer dyrehage, fornøyelsespark, badeland og temaområder i ett stort anlegg øst for Kristiansand sentrum.

Parken er kanskje mest kjent for Kardemomme by, en fullskala gjenskapning av Thorbjørn Egners berømte by med levende forestillinger og interaktive opplevelser. Like populært er Kaptein Sabeltanns Verden, et pirattemert område med attraksjoner og daglige show.

Dyrehagen har dyr fra hele verden, inkludert afrikanske savannedyr, nordiske rovdyr og tropiske arter. Badeland-delen tilbyr vannrutsjebaner og bassenger som er populære blant barn og unge.

Parken har også et eget overnattingstilbud med Dyreparken Hotell og Abra Havn ferieleiligheter, noe som gjør det mulig å tilbringe flere dager i området. Dyreparken er et helårsdestinasjon med juleaktiviteter om vinteren.`,
    address: 'Kardemomme by 4609 Kristiansand',
    audience: ['Familier', 'Barn', 'Turister', 'Voksne'],
    tags: ['dyrehage', 'kardemomme-by', 'kaptein-sabeltann', 'badeland', 'overnatting'],
    featured: true,
    tips: [
      'Planlegg minst to dager for å rekke alt parken har å tilby.',
      'Kjøp kombinasjonsbilletter for dyrepark og badeland for best verdi.',
      'Kardemomme by-forestillingene har faste tider – sjekk programmet tidlig.',
      'Overnattingsmulighetene i parken er populære og bør bookes i god tid.',
      'Buss 1 fra Kristiansand sentrum går direkte til parken.'
    ],
    faq: [
      { question: 'Hva er Dyreparken i Kristiansand?', answer: 'Dyreparken er Norges mest besøkte familiepark som kombinerer dyrehage, fornøyelsespark, Kardemomme by, Kaptein Sabeltanns Verden og badeland i ett anlegg.' },
      { question: 'Når er Dyreparken åpen?', answer: 'Dyreparken har åpent store deler av året, med hovedsesong fra mai til september. Vinterstid er det julaktiviteter og redusert program.' },
      { question: 'Kan man overnatte i Dyreparken?', answer: 'Ja, parken har Dyreparken Hotell og Abra Havn ferieleiligheter som ligger inne på parkens område.' }
    ]
  },
  {
    id: 'badelandet-bergen',
    name: 'Badelandet i Bergen',
    slug: 'badelandet-bergen',
    city: 'Bergen',
    citySlug: 'bergen',
    county: 'Vestland',
    category: 'badeland',
    categories: ['badeland', 'vannparker', 'aktivitetsparker'],
    shortDescription: 'Bergens største badeland med vannrutsjebaner, bølgebasseng og velværeavdeling. Et populært helårstilbud for familier.',
    description: `Badelandet i Bergen er et av Vestlandets største innendørs badeanlegg og ligger sentralt i Bergen kommune. Anlegget tilbyr et bredt utvalg av vannaktiviteter for hele familien, fra rolige barneområder til spennende vannrutsjebaner.

Badelandet har flere vannrutsjebaner i ulike vanskelighetsgrader, et stort bølgebasseng, strømkanal og et eget barneområde med grunt basseng og vannskulpturer. For voksne finnes det en velværeavdeling med badstuer, dampbad og avslapningsområder.

Som et innendørs anlegg er Badelandet et populært helårstilbud, og det er spesielt godt besøkt i høst- og vinterhalvåret når utendørsaktiviteter er begrenset. Anlegget er enkelt å nå med kollektivtransport fra Bergen sentrum.

Badelandet arrangerer jevnlig familiedager og spesielle arrangementer, og tilbyr svømmekurs for barn og voksne.`,
    address: 'Bergen, Vestland',
    audience: ['Familier', 'Barn', 'Ungdom', 'Voksne'],
    tags: ['badeland', 'innendørs', 'vannrutsjebane', 'bølgebasseng', 'bergen'],
    featured: false,
    tips: [
      'Besøk på formiddagen midt i uken for færrest besøkende.',
      'Sjekk nettsidene for oppdaterte åpningstider og priser.',
      'Velværeavdelingen er kun for voksne over 18 år.',
      'Ta med egen hengelås til garderobeskapene.',
      'Familiekort kan lønne seg for familier med flere barn.'
    ],
    faq: [
      { question: 'Hva er Badelandet i Bergen?', answer: 'Badelandet er et stort innendørs badeanlegg i Bergen med vannrutsjebaner, bølgebasseng, barneområde og velværeavdeling.' },
      { question: 'Er Badelandet åpent hele året?', answer: 'Ja, som et innendørs anlegg er Badelandet åpent hele året, men åpningstidene kan variere etter sesong og helligdager.' }
    ]
  },
  {
    id: 'badeland-bodo',
    name: 'Nordlandsbadet',
    slug: 'nordlandsbadet',
    city: 'Bodø',
    citySlug: 'bodo',
    county: 'Nordland',
    category: 'badeland',
    categories: ['badeland', 'vannparker'],
    shortDescription: 'Nord-Norges største badeland med tropisk badeavdeling, vannrutsjebaner og et bredt velværetilbud.',
    description: `Nordlandsbadet er Nord-Norges største og mest moderne badeanlegg, beliggende i Bodø. Anlegget kombinerer tropisk badeavdeling med vannrutsjebaner, barnebasseng og et omfattende velværetilbud.

Badeavdelingen har et tropisk klima med temperaturer rundt 34 grader og tilbyr flere vannrutsjebaner, strømkanal, bølgebasseng og et stort barnebasseng med vannskulpturer. Velværeavdelingen inkluderer badstuer, dampbad, kaldtvannskilde og avslapningssoner.

Nordlandsbadet er et helårstilbud som er spesielt populært i vinterhalvåret. Anlegget er et viktig kultur- og fritidstilbud for hele Salten-regionen og tiltrekker seg besøkende fra et stort omland.`,
    address: 'Plassmyra 3, 8005 Bodø',
    audience: ['Familier', 'Barn', 'Voksne'],
    tags: ['badeland', 'nord-norge', 'tropisk', 'velvære', 'helår'],
    featured: false,
    tips: [
      'Helgene er mest populære – besøk på en ukedag for en roligere opplevelse.',
      'Velværeavdelingen har egne åpningstider.',
      'Familiekort gir god rabatt for familier med barn.',
      'Anlegget ligger sentralt i Bodø og er enkelt å nå med buss.'
    ],
    faq: [
      { question: 'Hva er Nordlandsbadet?', answer: 'Nordlandsbadet er Nord-Norges største badeland med tropisk badeavdeling, vannrutsjebaner og velværetilbud. Det ligger i Bodø.' },
      { question: 'Er Nordlandsbadet bra for barn?', answer: 'Ja, anlegget har et eget barneområde med grunt basseng og vannleker, i tillegg til vannrutsjebaner for litt eldre barn.' }
    ]
  },
  {
    id: 'leos-lekeland-oslo',
    name: 'Leos Lekeland Oslo',
    slug: 'leos-lekeland-oslo',
    city: 'Oslo',
    citySlug: 'oslo',
    county: 'Oslo',
    category: 'aktivitetsparker',
    categories: ['aktivitetsparker', 'familieparker'],
    shortDescription: 'Stort innendørs lekeland i Oslo med klatrevegger, trampoliner, ballrom og aktiviteter for barn i alle aldre.',
    description: `Leos Lekeland i Oslo er et av Norges største innendørs lekeland og en populær aktivitetspark for barnefamilier. Anlegget tilbyr et bredt utvalg av aktiviteter for barn fra småbarnsalder og opp til 12 år.

Lekelandet har store klatrekonstruksjoner, trampolinepark, ballrom, rutsjebaner og kreative lekeområder. Det finnes egne soner tilpasset ulike aldersgrupper, slik at både småbarn og eldre barn kan leke trygt.

Som et innendørs anlegg er Leos Lekeland et godt alternativ i dårlig vær og er åpent hele året. Det finnes en kafé der foreldre kan slappe av mens barna leker, og anlegget tilbyr også bursdagspakker.

Leos Lekeland har flere avdelinger i Norge, og Oslo-avdelingen er en av de mest besøkte.`,
    address: 'Oslo, Oslo',
    audience: ['Familier', 'Barn'],
    tags: ['innendørs', 'lekeland', 'trampoline', 'klatring', 'bursdag'],
    featured: false,
    tips: [
      'Sokker er obligatorisk – husk å ta med egne eller kjøp på stedet.',
      'Bestill bursdagspakke i god tid – populære tidspunkter fyller seg raskt.',
      'Formiddager på hverdager er roligst.',
      'Barn under 1 år kommer vanligvis inn gratis.',
      'Det finnes en egen sone for de aller minste barna.'
    ],
    faq: [
      { question: 'Hva er Leos Lekeland?', answer: 'Leos Lekeland er en kjede med innendørs lekeland for barn med klatrekonstruksjoner, trampoliner, ballrom og andre aktiviteter.' },
      { question: 'Hvilken aldersgruppe passer Leos Lekeland for?', answer: 'Anlegget passer for barn fra 0 til 12 år, med egne soner tilpasset ulike aldersgrupper.' }
    ]
  },
  {
    id: 'lilleputthammer',
    name: 'Lilleputthammer',
    slug: 'lilleputthammer',
    city: 'Lillehammer',
    citySlug: 'lillehammer',
    county: 'Innlandet',
    category: 'familieparker',
    categories: ['familieparker', 'opplevelsesparker'],
    shortDescription: 'Sjarmerende miniatyrpark ved Lillehammer med Nils Holgerssons Eventyrreise, sirkus og aktiviteter for de yngste barna.',
    description: `Lilleputthammer er en sjarmerende familiepark som ligger like ved Hunderfossen, nord for Lillehammer. Parken er spesielt rettet mot de yngste barna og tilbyr opplevelser i et rolig og trygt miljø.

Parken er kjent for Nils Holgerssons Eventyrreise, en populær båttur gjennom miniaturlandskap av kjente norske steder. Andre attraksjoner inkluderer Lilleputthammer Sirkus med daglige forestillinger, miniaturtog, karruseller og diverse klatreaktiviteter.

Lilleputthammer har en mer rolig og intim atmosfære sammenlignet med større fornøyelsesparker, noe som gjør den ideell for familier med barn mellom 2 og 8 år. Parken ligger i naturskjønne omgivelser langs Gudbrandsdalslågen.

Det er enkelt å kombinere et besøk til Lilleputthammer med naboliggende Hunderfossen Eventyrpark, og mange familier besøker begge parkene i løpet av en ferie i Lillehammer-området.`,
    address: 'Fåbergvegen 622, 2625 Fåberg',
    audience: ['Familier', 'Småbarn'],
    tags: ['miniatyrpark', 'småbarn', 'lillehammer', 'rolig', 'sirkus'],
    featured: false,
    tips: [
      'Ideell for barn mellom 2 og 8 år.',
      'Kombiner besøket med Hunderfossen som ligger like ved.',
      'Parken er mindre enn mange andre – beregn 3-4 timer.',
      'Sirkusforestillingene har faste klokkeslett – sjekk programmet.'
    ],
    faq: [
      { question: 'Hva er Lilleputthammer?', answer: 'Lilleputthammer er en familiepark ved Lillehammer som er spesielt tilpasset de yngste barna, med miniatyrlandskap, sirkus og rolige attraksjoner.' },
      { question: 'Hva er forskjellen på Lilleputthammer og Hunderfossen?', answer: 'Lilleputthammer er rettet mot de aller minste barna med roligere attraksjoner, mens Hunderfossen har et bredere tilbud som passer for litt eldre barn og voksne også.' }
    ]
  },
  {
    id: 'namsskogan-familiepark',
    name: 'Namsskogan Familiepark',
    slug: 'namsskogan-familiepark',
    city: 'Namsskogan',
    citySlug: 'trondheim',
    county: 'Trøndelag',
    category: 'familieparker',
    categories: ['familieparker', 'dyrepark', 'opplevelsesparker'],
    shortDescription: 'Nordlig familiepark med nordiske rovdyr, lekeplasser og naturopplevelser midt i Namdalen.',
    description: `Namsskogan Familiepark ligger midt i Namdalen i Trøndelag og er en av Nord-Trøndelags mest populære attraksjoner. Parken kombinerer dyrepark med familieaktiviteter i naturskjønne omgivelser.

I parken kan du se nordiske rovdyr som bjørn, ulv, gaupe og jerv i store, naturlige innhegninger. Det finnes også elg, rein og andre nordiske dyrearter. Parken legger vekt på formidling om norsk natur og dyreliv.

I tillegg til dyreopplevelsene har Namsskogan Familiepark lekeplasser, grillområder og stier for turer i naturen. Parken er et godt utfluktsmål for familier som ønsker en kombinasjon av dyr og utendørsaktiviteter.

Parken tilbyr overnattingsmuligheter og er åpen store deler av året, med ulike aktiviteter tilpasset sesong.`,
    address: 'Trones, 7890 Namsskogan',
    audience: ['Familier', 'Barn', 'Naturinteresserte'],
    tags: ['dyrepark', 'rovdyr', 'natur', 'trøndelag', 'nordlig'],
    featured: false,
    tips: [
      'Beregn en hel dag for å få med deg alt.',
      'Fôringstidene for rovdyrene er de mest populære tidspunktene.',
      'Ta med gode sko – mye av parken er utendørs på stier.',
      'Overnattingsmulighetene bør bookes i forkant i sommersesongen.'
    ],
    faq: [
      { question: 'Hva kan man se i Namsskogan Familiepark?', answer: 'Parken har nordiske rovdyr som bjørn, ulv, gaupe og jerv, i tillegg til elg og rein. Det er også lekeplasser og turområder.' },
      { question: 'Hvor ligger Namsskogan Familiepark?', answer: 'Parken ligger i Namsskogan kommune i Trøndelag, langs E6 i Namdalen.' }
    ]
  },
  {
    id: 'badeland-kristiansand',
    name: 'Aquarama Bad',
    slug: 'aquarama-kristiansand',
    city: 'Kristiansand',
    citySlug: 'kristiansand',
    county: 'Agder',
    category: 'badeland',
    categories: ['badeland', 'vannparker', 'aktivitetsparker'],
    shortDescription: 'Moderne badeanlegg i Kristiansand med vannrutsjebaner, stupetårn, 50-meters basseng og velværeavdeling.',
    description: `Aquarama Bad er Kristiansands moderne badeanlegg som åpnet i 2013. Anlegget er et av Sør-Norges mest populære badeland og ligger sentralt ved Bystranda i Kristiansand.

Aquarama tilbyr et bredt spekter av vannaktiviteter, inkludert flere vannrutsjebaner, et 50-meters svømmebasseng, stupetårn med ulike høyder, bølgebasseng og et eget barneområde. Velværeavdelingen har badstuer, dampbad og avslapningsrom.

Anlegget er et helårstilbud og er spesielt populært i vinterhalvåret. Om sommeren er det enkelt å kombinere et besøk med aktiviteter ved Bystranda rett utenfor. Aquarama arrangerer også svømmekurs og har fasiliteter for organisert svømmetrening.`,
    address: 'Østre Strandgate 35, 4610 Kristiansand',
    audience: ['Familier', 'Barn', 'Ungdom', 'Svømmere'],
    tags: ['badeland', 'svømmebasseng', 'vannrutsjebane', 'kristiansand', 'helår'],
    featured: false,
    tips: [
      'Ligger rett ved Bystranda – kombiner med strandbesøk om sommeren.',
      'Formiddagstimer er roligst for barnefamilier.',
      'Velværeavdelingen krever separat billett.',
      'Sjekk programmet for eventuelle svømmestevner som kan påvirke tilgjengelighet.'
    ],
    faq: [
      { question: 'Hva er Aquarama?', answer: 'Aquarama er et moderne badeanlegg i Kristiansand med vannrutsjebaner, 50-meters basseng, stupetårn og velværeavdeling.' },
      { question: 'Passer Aquarama for barn?', answer: 'Ja, anlegget har et eget barneområde og familievennlige vannrutsjebaner i tillegg til det store bassenget.' }
    ]
  },
  {
    id: 'kristiansand-dyrepark-badeland',
    name: 'Badelandet i Dyreparken',
    slug: 'badelandet-dyreparken',
    city: 'Kristiansand',
    citySlug: 'kristiansand',
    county: 'Agder',
    category: 'badeland',
    categories: ['badeland', 'vannparker'],
    shortDescription: 'Badeland inne i Dyreparken i Kristiansand med vannrutsjebaner og barnebassenger.',
    description: `Badelandet i Dyreparken er en del av Kristiansand Dyrepark-komplekset og tilbyr vannopplevelser for hele familien. Badelandet har flere vannrutsjebaner, barnebassenger og lekeområder i vannet.

Som en del av Dyreparken kan Badelandet besøkes som en egen attraksjon eller som del av et større parkbesøk. Det er spesielt populært i sommersesongen som et supplement til de andre aktivitetene i Dyreparken.

Anlegget er innendørs og kan derfor brukes uavhengig av vær, noe som er praktisk for familier som besøker Dyreparken på dager med dårlig vær.`,
    address: 'Kardemomme by 4609 Kristiansand',
    audience: ['Familier', 'Barn'],
    tags: ['badeland', 'dyreparken', 'kristiansand', 'innendørs'],
    featured: false,
    tips: [
      'Kan kombineres med besøk i Dyreparken for en komplett dag.',
      'Sjekk om kombinasjonsbilletter er tilgjengelige.',
      'Mest populært på varme sommerdager og i skoleferier.'
    ],
    faq: [
      { question: 'Er Badelandet inkludert i Dyreparken-billetten?', answer: 'Badelandet har vanligvis en egen billett, men det finnes kombinasjonsbilletter som dekker begge deler. Sjekk Dyreparkens nettsider for oppdatert informasjon.' }
    ]
  },
  {
    id: 'sommarland',
    name: 'Bø Sommarland',
    slug: 'bo-sommarland',
    city: 'Bø i Telemark',
    citySlug: 'bo-i-telemark',
    county: 'Vestfold og Telemark',
    category: 'vannparker',
    categories: ['vannparker', 'badeland', 'fornoyelsesparker', 'familieparker'],
    shortDescription: 'Norges største vannpark med over 100 vannattraksjoner, badeland og fornøyelsespark-attraksjoner. Ligger i Bø i Telemark.',
    description: `Bø Sommarland er Skandinavias største vannpark og Norges fremste destinasjon for vannbaserte opplevelser. Parken ligger i Bø i Vestfold og Telemark fylke og har over 100 vannattraksjoner fordelt på utendørs og innendørs områder.

Utendørsdelen har Norges største bølgebasseng, en rekke vannrutsjebaner i ulike vanskelighetsgrader, strømkanal, sandstrand og lekebassenger. Noen av de mest populære attraksjonene er Magasuget, SpinPipe og The Nightmare – høye vannrutsjebaner som gir store fartsfølelser.

Innendørsdelen, kalt BadeLandet, er åpen hele året og tilbyr tropisk klima med vannrutsjebaner, barnebasseng og velværeområde. Utendørsdelen er åpen i sommersesongen, vanligvis fra juni til august.

Bø Sommarland har også en fornøyelsespark-del med berg-og-dal-bane, tivoli-attraksjoner og aktiviteter på land. Parken er et av Norges mest populære feriemål og tiltrekker seg flere hundre tusen besøkende i sommersesongen.`,
    address: 'Lundedalen, 3800 Bø i Telemark',
    audience: ['Familier', 'Barn', 'Ungdom', 'Voksne'],
    tags: ['vannpark', 'badeland', 'vannrutsjebane', 'sommerpark', 'norges-største'],
    featured: true,
    tips: [
      'Utendørsparken er kun åpen om sommeren – innendørs BadeLandet er åpent hele året.',
      'Weekender og ferieperioder er mest travle – besøk på hverdager for en roligere opplevelse.',
      'Det finnes overnatting i nærheten, inkludert camping og hytter.',
      'Ta med solkrem og badetøy – du blir garantert våt.',
      'Beregn en hel dag for utendørsparken, minst halv dag for innendørs.'
    ],
    faq: [
      { question: 'Hva er Bø Sommarland?', answer: 'Bø Sommarland er Norges og Skandinavias største vannpark med over 100 vannattraksjoner. Parken ligger i Bø i Telemark og har både utendørs og innendørs vannopplevelser.' },
      { question: 'Når er Bø Sommarland åpent?', answer: 'Utendørsparken er åpen fra juni til august. Innendørsdelen BadeLandet er åpen hele året.' },
      { question: 'Passer Bø Sommarland for småbarn?', answer: 'Ja, parken har egne barneområder med grunne bassenger og tilpassede vannleker for de minste.' }
    ]
  },
  {
    id: 'tryvann-vinterpark',
    name: 'Oslo Vinterpark Tryvann',
    slug: 'tryvann-vinterpark',
    city: 'Oslo',
    citySlug: 'oslo',
    county: 'Oslo',
    category: 'aktivitetsparker',
    categories: ['aktivitetsparker', 'opplevelsesparker'],
    shortDescription: 'Oslos nærmeste alpinanlegg med skibakker, akebakker og sommeraktiviteter. Ligger i Nordmarka.',
    description: `Oslo Vinterpark, også kjent som Tryvann, er hovedstadens nærmeste alpinanlegg og ligger i Nordmarka, bare 30 minutter fra Oslo sentrum med T-bane. Anlegget tilbyr skibakker i ulike vanskelighetsgrader, terrain park og akemuligheter.

Om vinteren er Tryvann et populært mål for familier og unge med sine godt preparerte bakker, skiskole og barneområder. Anlegget har også kveldskjøring med flomlys og er lett tilgjengelig med kollektivtransport.

Om sommeren tilbyr Oslo Vinterpark aktiviteter som downhill-sykling, klatrepark og turløyper i marka. Anlegget er et viktig friluftstilbud for Oslos befolkning og besøkende.`,
    address: 'Tryvannsveien 64, 0791 Oslo',
    audience: ['Familier', 'Barn', 'Ungdom', 'Sportsentusiaster'],
    tags: ['vinterpark', 'ski', 'akebakke', 'oslo', 'sommer-aktiviteter'],
    featured: false,
    tips: [
      'T-bane til Frognerseteren er den enkleste måten å komme seg hit.',
      'Helgene kan være svært travle – kveldskjøring gir kortere køer.',
      'Sjekk snøforhold og åpne bakker på nettsidene før besøk.',
      'Om sommeren er sykkelparken et morsomt alternativ.'
    ],
    faq: [
      { question: 'Hvordan kommer man seg til Tryvann?', answer: 'Enkleste vei er T-bane linje 1 til Frognerseteren, deretter kort gange til anlegget. Det er også mulig å kjøre bil.' },
      { question: 'Er Tryvann bra for nybegynnere?', answer: 'Ja, anlegget har bakker i ulike vanskelighetsgrader og tilbyr skiskole for både barn og voksne.' }
    ]
  },
  {
    id: 'atlanterhavsparken',
    name: 'Atlanterhavsparken',
    slug: 'atlanterhavsparken',
    city: 'Ålesund',
    citySlug: 'alesund',
    county: 'Møre og Romsdal',
    category: 'opplevelsesparker',
    categories: ['opplevelsesparker', 'dyrepark'],
    shortDescription: 'Norges største saltvannsakvarium med havdyr, sjøfugler og undervannsopplevelser i Ålesund.',
    description: `Atlanterhavsparken er Norges største saltvannsakvarium og ligger på Tueneset i Ålesund. Parken gir besøkende et innblikk i livet langs norskekysten og i Atlanterhavet gjennom store akvarier, utendørs bassenger og interaktive utstillinger.

Hovedattraksjonen er det store Atlanterhavstanken som rommer flere millioner liter sjøvann og huser et mangfold av fisk og sjødyr. Besøkende kan oppleve fôring av fisk, se sel og sjøfugler, og lære om marint liv gjennom interaktive stasjoner.

Utendørsområdet inkluderer en natursti langs kysten med bassenger der du kan studere tidevannssonens dyreliv på nært hold. Atlanterhavsparken er et viktig formidlingssenter for marin kunnskap og er et populært utfluktsmål for familier og skolegrupper.

Parken er åpen hele året og er et godt alternativ på dager med dårlig vær, da store deler av anlegget er innendørs.`,
    address: 'Tueneset, 6006 Ålesund',
    audience: ['Familier', 'Barn', 'Naturinteresserte', 'Turister'],
    tags: ['akvarium', 'marin', 'sjødyr', 'ålesund', 'helår'],
    featured: false,
    tips: [
      'Sjekk tidspunktene for fôring – det er det mest spennende for barna.',
      'Kombiner med en tur langs kystnaturen rundt Tueneset.',
      'Parken er stort sett innendørs og fungerer godt i regnvær.',
      'Beregn 2-3 timer for et grundig besøk.'
    ],
    faq: [
      { question: 'Hva er Atlanterhavsparken?', answer: 'Atlanterhavsparken er Norges største saltvannsakvarium, beliggende i Ålesund. Parken viser marint liv fra norskekysten og Atlanterhavet.' },
      { question: 'Er Atlanterhavsparken åpen hele året?', answer: 'Ja, parken er åpen hele året med varierende åpningstider etter sesong.' }
    ]
  },
  {
    id: 'lund-aktivitetspark',
    name: 'Lund Aktivitetspark',
    slug: 'lund-aktivitetspark',
    city: 'Kristiansand',
    citySlug: 'kristiansand',
    county: 'Agder',
    category: 'aktivitetsparker',
    categories: ['aktivitetsparker', 'familieparker'],
    shortDescription: 'Moderne aktivitetspark i Kristiansand med klatrepark, trampoliner og utendørsaktiviteter for hele familien.',
    description: `Lund Aktivitetspark er en utendørs aktivitetspark i Kristiansand som tilbyr et bredt utvalg av fysiske aktiviteter for hele familien. Parken har klatrevegg, trampoliner, hinderløype og diverse sportsfasiliteter.

Aktivitetsparken er et populært utfluktsmål for familier i Kristiansand-området og tilbyr en alternativ opplevelse til de tradisjonelle fornøyelsesparkene. Fokuset ligger på fysisk aktivitet og utendørslek i trygge omgivelser.`,
    address: 'Kristiansand, Agder',
    audience: ['Familier', 'Barn', 'Ungdom'],
    tags: ['aktivitetspark', 'klatring', 'trampoline', 'utendørs', 'kristiansand'],
    featured: false,
    tips: [
      'Sjekk vær og åpningstider før besøk – parken er utendørs.',
      'Ta med gode sko og bekvemme klær.',
      'Passer best for barn fra 5 år og oppover.'
    ],
    faq: [
      { question: 'Hva er Lund Aktivitetspark?', answer: 'Det er en utendørs aktivitetspark i Kristiansand med klatrepark, trampoliner og diverse aktiviteter for familier.' }
    ]
  },
  {
    id: 'norsk-folkemuseum',
    name: 'Norsk Folkemuseum',
    slug: 'norsk-folkemuseum',
    city: 'Oslo',
    citySlug: 'oslo',
    county: 'Oslo',
    category: 'opplevelsesparker',
    categories: ['opplevelsesparker'],
    shortDescription: 'Friluftsmuseum på Bygdøy med over 160 historiske bygninger, stavkirke og levende kulturformidling.',
    description: `Norsk Folkemuseum er et av verdens største friluftsmuseer og ligger på Bygdøy i Oslo. Museet har over 160 historiske bygninger fra ulike tidsepoker og regioner i Norge, inkludert den kjente Gol stavkirke fra 1200-tallet.

Museet gir besøkende en levende opplevelse av norsk kulturhistorie gjennom tradisjonelle bygninger, utstillinger og sesongbaserte arrangementer. Om sommeren er det levende historieformidling med personer i tidsriktige kostymer som demonstrerer tradisjonelle håndverk og skikker.

For familier med barn er Folkemuseet en lærerik og underholdende opplevelse som kombinerer utendørsaktiviteter med kulturformidling. Museet arrangerer også spesielle familiedager og barneaktiviteter gjennom året.`,
    address: 'Museumsveien 10, 0287 Oslo',
    audience: ['Familier', 'Turister', 'Kulturinteresserte', 'Barn'],
    tags: ['museum', 'friluftsmuseum', 'kulturhistorie', 'bygdøy', 'oslo'],
    featured: false,
    tips: [
      'Beregn minst 3-4 timer for et grundig besøk.',
      'Sommersesongen har mest aktiviteter og levende formidling.',
      'Ta med gode sko – mye av museet er utendørs.',
      'Kombiner med andre museer på Bygdøy.'
    ],
    faq: [
      { question: 'Hva er Norsk Folkemuseum?', answer: 'Det er et stort friluftsmuseum på Bygdøy i Oslo med over 160 historiske bygninger fra hele Norge, inkludert en stavkirke fra 1200-tallet.' },
      { question: 'Passer Folkemuseet for barn?', answer: 'Ja, museet har aktiviteter for barn og er en kombinasjon av utendørsopplevelse og kulturformidling som passer godt for familier.' }
    ]
  },
  {
    id: 'bergen-akvariet',
    name: 'Bergen Akvariet',
    slug: 'bergen-akvariet',
    city: 'Bergen',
    citySlug: 'bergen',
    county: 'Vestland',
    category: 'opplevelsesparker',
    categories: ['opplevelsesparker', 'dyrepark'],
    shortDescription: 'Populært akvarium i Bergen sentrum med sjødyr, pingviner, sjøløver og tropisk avdeling.',
    description: `Bergen Akvariet ligger på Nordnes i Bergen sentrum og er et av Norges eldste og mest besøkte akvarier. Anlegget har et bredt utvalg av marine dyr, inkludert fisk fra norske farvann, tropiske arter, pingviner og sjøløver.

Akvariet er delt inn i flere avdelinger som viser ulike marine miljøer. Den tropiske avdelingen har fargerike korallrevsfisker, mens nordsjøavdelingen viser arter fra norskekysten. Sjøløve- og pingvinshowet er blant de mest populære attraksjonene.

Bergen Akvariet er et helårstilbud som passer godt for familier, og er spesielt populært på regnværsdager i Bergen. Anlegget ligger i gangavstand fra Bergen sentrum og er enkelt å nå med kollektivtransport.`,
    address: 'Nordnesbakken 4, 5005 Bergen',
    audience: ['Familier', 'Barn', 'Turister'],
    tags: ['akvarium', 'sjødyr', 'pingviner', 'bergen', 'helår'],
    featured: false,
    tips: [
      'Sjekk tidspunktene for sjøløve- og pingvinshow.',
      'Gangavstand fra Bergen sentrum – kombiner med en tur til Nordnes.',
      'Populært på regnværsdager – beregn litt ventetid i helger.',
      'Beregn 1.5-2 timer for et besøk.'
    ],
    faq: [
      { question: 'Hva kan man se på Bergen Akvariet?', answer: 'Bergen Akvariet har marine dyr fra norske farvann og tropiske havområder, inkludert pingviner, sjøløver og korallrevsfisk.' },
      { question: 'Er Bergen Akvariet bra for barn?', answer: 'Ja, akvariet er svært populært blant barnefamilier, spesielt sjøløve- og pingvinshowet.' }
    ]
  },
  {
    id: 'langedrag-naturpark',
    name: 'Langedrag Naturpark',
    slug: 'langedrag-naturpark',
    city: 'Nore og Uvdal',
    citySlug: 'drammen',
    county: 'Viken',
    category: 'opplevelsesparker',
    categories: ['opplevelsesparker', 'dyrepark', 'familieparker'],
    shortDescription: 'Naturpark i Numedal med ulver, rovdyr, gårdsdyr og unike dyreopplevelser på 1000 meters høyde.',
    description: `Langedrag Naturpark ligger spektakulært til på 1000 meters høyde i Numedal, mellom Hallingdal og Hardangervidda. Parken er kjent for sine unike dyreopplevelser, der besøkende kan komme tett på ulver, gaupe, fjellrev og andre norske dyrearter.

Det mest spesielle med Langedrag er muligheten til å gå inn til ulvene sammen med en guide, en opplevelse som er svært sjelden og ettertraktet. Parken har også gårdsdyr, hester, og tilbyr rideopplevelser og sledekjøring om vinteren.

Langedrag er åpent hele året og tilbyr overnattingsmuligheter i hytter og gamme, noe som gjør det til et komplett feriedestinasjon. Parken kombinerer naturopplevelser med dyreformidling og er et populært mål for familier, grupper og bedrifter.`,
    address: 'Langedrag 24, 3628 Veggli',
    audience: ['Familier', 'Naturinteresserte', 'Grupper', 'Par'],
    tags: ['naturpark', 'ulver', 'rovdyr', 'overnatting', 'numedal'],
    featured: false,
    tips: [
      'Ulvevandring må bestilles i forkant og er svært populært.',
      'Ta med varme klær – parken ligger på 1000 meters høyde.',
      'Overnatting i gamme gir en unik opplevelse.',
      'Parken er åpen hele året med ulike aktiviteter etter sesong.'
    ],
    faq: [
      { question: 'Hva er Langedrag Naturpark?', answer: 'Langedrag er en naturpark på 1000 meters høyde i Numedal med ulver, rovdyr og gårdsdyr, der du kan oppleve unike dyremøter.' },
      { question: 'Kan man gå inn til ulvene?', answer: 'Ja, Langedrag tilbyr guidede ulvevandringer der du kan komme tett på ulvene. Dette må bestilles i forkant.' }
    ]
  },
  {
    id: 'barnas-lekeland-trondheim',
    name: 'Barnas Lekeland Trondheim',
    slug: 'barnas-lekeland-trondheim',
    city: 'Trondheim',
    citySlug: 'trondheim',
    county: 'Trøndelag',
    category: 'aktivitetsparker',
    categories: ['aktivitetsparker', 'familieparker'],
    shortDescription: 'Innendørs lekeland i Trondheim med klatrekonstruksjoner, trampoliner og aktiviteter for barn.',
    description: `Barnas Lekeland i Trondheim er et stort innendørs lekeland som tilbyr et bredt utvalg av aktiviteter for barn. Anlegget har klatrekonstruksjoner, trampoliner, ballbasseng, rutsjebaner og kreative lekeområder.

Lekelandet er delt inn i soner tilpasset ulike aldersgrupper, fra småbarnsavdeling til mer utfordrende aktiviteter for eldre barn. Det finnes en kafé der foreldre kan slappe av, og anlegget tilbyr bursdagspakker.

Som innendørs anlegg er dette et populært alternativ i Trondheim, spesielt i høst- og vintermånedene når utendørsaktiviteter er begrenset.`,
    address: 'Trondheim, Trøndelag',
    audience: ['Familier', 'Barn'],
    tags: ['lekeland', 'innendørs', 'trondheim', 'trampoline', 'klatring'],
    featured: false,
    tips: [
      'Sokker er obligatorisk for alle som skal inn i lekeområdet.',
      'Formiddager midt i uken er roligst.',
      'Bestill bursdagspakke i god tid.'
    ],
    faq: [
      { question: 'Hva er Barnas Lekeland?', answer: 'Det er et innendørs lekeland i Trondheim med klatrekonstruksjoner, trampoliner og aktiviteter tilpasset barn i ulike aldre.' }
    ]
  },
  {
    id: 'polaria-tromso',
    name: 'Polaria',
    slug: 'polaria',
    city: 'Tromsø',
    citySlug: 'tromso',
    county: 'Troms',
    category: 'opplevelsesparker',
    categories: ['opplevelsesparker'],
    shortDescription: 'Arktisk opplevelsessenter i Tromsø med akvarium, arktiske dyr og utstillinger om polarområdene.',
    description: `Polaria er verdens nordligste akvarium og opplevelsessenter, beliggende i Tromsø sentrum. Senteret formidler kunnskap om arktiske og subarktiske områder gjennom akvarier, utstillinger og filmer.

Blant høydepunktene er det store arktiske akvariet med steinbit, torsk og andre nordlige arter, samt selungene som er blant de mest populære attraksjonene. Polaria viser også panoramafilmer om Nord-Norge og Svalbard i sitt eget kino.

Bygningen er et arkitektonisk landemerke med sin unike design som symboliserer dominobrikker som velter – inspirert av isflak som presses opp på land. Polaria er et helårstilbud og et populært mål for turister og familier i Tromsø.`,
    address: 'Hjalmar Johansens gate 12, 9296 Tromsø',
    audience: ['Familier', 'Turister', 'Barn', 'Naturinteresserte'],
    tags: ['akvarium', 'arktisk', 'sel', 'tromsø', 'nord-norge'],
    featured: false,
    tips: [
      'Sjekk tidspunktene for selfôring – det er det mest populære.',
      'Kombiner med andre attraksjoner i Tromsø sentrum.',
      'Beregn 1-2 timer for et besøk.',
      'Åpent hele året – godt alternativ på dager med dårlig vær.'
    ],
    faq: [
      { question: 'Hva er Polaria?', answer: 'Polaria er verdens nordligste akvarium og opplevelsessenter, beliggende i Tromsø. Det formidler kunnskap om arktiske og subarktiske områder.' },
      { question: 'Passer Polaria for barn?', answer: 'Ja, spesielt selungene er populære blant barn, og utstillingene er tilrettelagt for besøkende i alle aldre.' }
    ]
  }
]
