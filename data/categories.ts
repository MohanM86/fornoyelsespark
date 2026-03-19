import { Category } from '@/lib/types'

export const categories: Category[] = [
  {
    name: 'Fornøyelsesparker',
    slug: 'fornoyelsesparker',
    description: 'Fornøyelsesparker tilbyr mekaniske attraksjoner, berg-og-dal-baner og underholdning for alle aldre. Norge har flere store fornøyelsesparker spredt over hele landet.',
    longDescription: `Fornøyelsesparker er anlegg med mekaniske attraksjoner som berg-og-dal-baner, karuseller, tivoli-attraksjoner og annen underholdning. I Norge er fornøyelsesparker blant de mest populære utfluktsmålene for familier, spesielt i sommersesongen.

De største fornøyelsesparkene i Norge er TusenFryd ved Oslo, som er landets største med over 30 attraksjoner, og Kongeparken ved Stavanger. Begge tilbyr et bredt spekter av opplevelser fra rolige familieattraksjoner til intense berg-og-dal-baner.

Fornøyelsesparker i Norge har vanligvis sesong fra mai til september, med noen som tilbyr utvidede sesongopplevelser som halloweenfestivaler og julearrangementer. Priser varierer, men de fleste parker tilbyr rabatter ved nettkjøp og sesongkort for gjentatte besøk.`,
    metaTitle: 'Fornøyelsesparker i Norge – Komplett oversikt og guide',
    metaDescription: 'Finn de beste fornøyelsesparkene i Norge. Oversikt over TusenFryd, Kongeparken og alle fornøyelsesparker med attraksjoner, priser og tips.',
    faq: [
      { question: 'Hva er den største fornøyelsesparken i Norge?', answer: 'TusenFryd ved Oslo er Norges største fornøyelsespark med over 30 attraksjoner, inkludert flere berg-og-dal-baner og vannattraksjoner.' },
      { question: 'Hvor mange fornøyelsesparker finnes i Norge?', answer: 'Norge har flere større fornøyelsesparker, inkludert TusenFryd, Kongeparken og Bø Sommarland, i tillegg til en rekke mindre familieparker og aktivitetssentre.' },
      { question: 'Når er fornøyelsesparkene i Norge åpne?', answer: 'De fleste norske fornøyelsesparker har sesong fra mai til september, med enkelte som har utvidet sesong for spesielle arrangementer.' }
    ]
  },
  {
    name: 'Familieparker',
    slug: 'familieparker',
    description: 'Familieparker er rettet mot barnefamilier med et bredt tilbud av attraksjoner og opplevelser tilpasset barn i ulike aldre. Norges familieparker kombinerer ofte underholdning med læring.',
    longDescription: `Familieparker skiller seg fra tradisjonelle fornøyelsesparker ved å legge større vekt på opplevelser som passer for hele familien, med spesielt fokus på barn. I Norge er familieparker blant de mest besøkte attraksjonene, og mange har et tematisk innhold knyttet til norsk kultur og natur.

De mest kjente famileparkene i Norge er Dyreparken i Kristiansand, som er landets mest besøkte med nesten en million besøkende årlig, og Hunderfossen Eventyrpark ved Lillehammer. Begge kombinerer underholdning med kulturformidling.

Andre populære familieparker inkluderer Kongeparken ved Stavanger, Lilleputthammer ved Lillehammer og Namsskogan Familiepark i Trøndelag. Familier har et bredt utvalg å velge mellom, uansett hvor i Norge de befinner seg.`,
    metaTitle: 'Familieparker i Norge – De beste parkene for barnefamilier',
    metaDescription: 'Finn de beste famileparkene i Norge. Oversikt over Dyreparken, Hunderfossen, Kongeparken og alle familieparker med tips og informasjon.',
    faq: [
      { question: 'Hva er den beste familieparken i Norge?', answer: 'Dyreparken i Kristiansand regnes ofte som Norges beste familiepark, med dyrehage, Kardemomme by, Kaptein Sabeltanns Verden og badeland. Hunderfossen ved Lillehammer er også svært populær.' },
      { question: 'Hva er forskjellen på en familiepark og en fornøyelsespark?', answer: 'En familiepark fokuserer på opplevelser for hele familien med vekt på barn, mens en fornøyelsespark ofte har mer fokus på mekaniske attraksjoner og berg-og-dal-baner. Mange parker er en kombinasjon av begge.' },
      { question: 'Hvilke familieparker passer for småbarn?', answer: 'Lilleputthammer ved Lillehammer er spesielt tilrettelagt for de yngste, mens Hunderfossen og Dyreparken har egne områder for småbarn.' }
    ]
  },
  {
    name: 'Badeland',
    slug: 'badeland',
    description: 'Badeland tilbyr innendørs vannopplevelser med vannrutsjebaner, bølgebasseng og barnebasseng. Norges badeland er populære helårstilbud for familier.',
    longDescription: `Badeland er innendørs vannparker som tilbyr vannrutsjebaner, bølgebasseng, barnebassenger og ofte velværeavdelinger med badstuer og dampbad. I Norge er badeland spesielt populære fordi de tilbyr vannglede uavhengig av vær og sesong.

Norge har badeland spredt over hele landet, fra Nordlandsbadet i Bodø til Aquarama i Kristiansand. Mange norske byer har egne badeanlegg som fungerer som viktige fritidstilbud for lokalbefolkningen, spesielt i vinterhalvåret.

Bø Sommarland i Telemark skiller seg ut med å tilby både innendørs badeland og Norges største utendørs vannpark. Dyreparken i Kristiansand har også et eget badeland som del av parkkomplekset.

Badeland i Norge tilbyr vanligvis familiekort og sesongkort som gjør gjentatte besøk rimeligere.`,
    metaTitle: 'Badeland i Norge – Oversikt over de beste badelandene',
    metaDescription: 'Finn de beste badelandene i Norge. Guide til vannrutsjebaner, bølgebasseng og badeanlegg over hele landet. Priser, tips og informasjon.',
    faq: [
      { question: 'Hva er det beste badelandet i Norge?', answer: 'Bø Sommarland er Norges og Skandinavias største vannpark. Andre populære badeland er Nordlandsbadet i Bodø, Aquarama i Kristiansand og Badelandet i Bergen.' },
      { question: 'Er badeland åpne hele året?', answer: 'Ja, de fleste innendørs badeland i Norge er åpne hele året. Utendørs vannparker som Bø Sommarland har kun sommersesong.' },
      { question: 'Hva koster det å besøke et badeland?', answer: 'Prisene varierer mellom anleggene, men ligger vanligvis mellom 200 og 400 kroner for voksne. Familiekort og sesongkort gir rabatter.' }
    ]
  },
  {
    name: 'Vannparker',
    slug: 'vannparker',
    description: 'Vannparker tilbyr vannbaserte opplevelser som vannrutsjebaner, bølgebasseng og vannlek. Norges vannparker spenner fra store utendørsanlegg til innendørs badeland.',
    longDescription: `Vannparker er anlegg som fokuserer på vannbaserte aktiviteter og opplevelser. I Norge finnes vannparker i mange former, fra store utendørs vannparker som Bø Sommarland til innendørs badeland i de fleste større byer.

Bø Sommarland i Telemark er Norges desidert største vannpark med over 100 vannattraksjoner. Parken tilbyr alt fra rolige barneområder til intense vannrutsjebaner som SpinPipe og Magasuget. Utendørsdelen er åpen om sommeren, mens innendørsdelen BadeLandet er åpent hele året.

Vannparker er spesielt populære om sommeren, men innendørs vannparker og badeland er etterspurte hele året. Norge har et godt utbygd tilbud av vannbaserte opplevelser fra nord til sør.`,
    metaTitle: 'Vannparker i Norge – Oversikt over de beste vannparkene',
    metaDescription: 'Finn de beste vannparkene i Norge. Guide til Bø Sommarland, badeland og vannattraksjoner over hele landet.',
    faq: [
      { question: 'Hva er den største vannparken i Norge?', answer: 'Bø Sommarland i Telemark er Norges og Skandinavias største vannpark med over 100 vannattraksjoner.' },
      { question: 'Hva er forskjellen på en vannpark og et badeland?', answer: 'En vannpark fokuserer på vannbaserte attraksjoner og opplevelser, ofte utendørs, mens et badeland typisk er et innendørs svømmeanlegg med vannrutsjebaner og bassenger. I praksis overlapper begrepene ofte.' }
    ]
  },
  {
    name: 'Aktivitetsparker',
    slug: 'aktivitetsparker',
    description: 'Aktivitetsparker tilbyr fysiske aktiviteter som klatring, trampoliner, hinderløyper og utendørsopplevelser. Populært for familier, barn og ungdom.',
    longDescription: `Aktivitetsparker fokuserer på fysisk aktivitet og lek, med tilbud som klatrevegger, trampoliner, hinderløyper og diverse sportsaktiviteter. I Norge har denne typen parker vokst kraftig de siste årene, med både innendørs og utendørs varianter.

Innendørs aktivitetsparker som Leos Lekeland og lignende konsepter finnes i de fleste norske byer og er populære helårstilbud, spesielt for barnefamilier. Disse tilbyr et trygt miljø for fysisk lek og er godt egnet for barnebursdager.

Utendørs aktivitetsparker inkluderer klatreparker, sykkelparker og hinderløyper som benytter naturen. Oslo Vinterpark Tryvann tilbyr for eksempel både ski om vinteren og sykkelpark om sommeren.`,
    metaTitle: 'Aktivitetsparker i Norge – Klatring, trampoliner og mer',
    metaDescription: 'Finn de beste aktivitetsparkene i Norge. Oversikt over lekeland, klatreparker, trampolineparker og utendørsaktiviteter for familier.',
    faq: [
      { question: 'Hva er en aktivitetspark?', answer: 'En aktivitetspark er et anlegg med fysiske aktiviteter som klatring, trampoliner, hinderløyper og lek. De finnes som innendørs lekeland og utendørs klatreparker.' },
      { question: 'Finnes det innendørs aktivitetsparker i Norge?', answer: 'Ja, de fleste norske byer har innendørs lekeland og aktivitetssentre som er åpne hele året. Leos Lekeland er en av de mest kjente kjedene.' }
    ]
  },
  {
    name: 'Opplevelsesparker',
    slug: 'opplevelsesparker',
    description: 'Opplevelsesparker gir unike opplevelser utover tradisjonelle attraksjoner, som akvarier, naturparker, museer og arktiske opplevelsessentre.',
    longDescription: `Opplevelsesparker er en bred kategori som dekker attraksjoner og anlegg som gir besøkende unike opplevelser utover tradisjonelle fornøyelsespark-konsepter. I Norge inkluderer dette akvarier, naturparker, friluftsmuseer og opplevelsessentre.

Eksempler på norske opplevelsesparker er Atlanterhavsparken i Ålesund (Norges største saltvannsakvarium), Polaria i Tromsø (arktisk opplevelsessenter), Langedrag Naturpark i Numedal (naturpark med ulver og rovdyr) og Norsk Folkemuseum på Bygdøy.

Opplevelsesparker fokuserer ofte på formidling og læring i kombinasjon med underholdning, og mange er åpne hele året. De gir besøkende mulighet til å oppleve norsk natur, kultur og dyreliv på nært hold.`,
    metaTitle: 'Opplevelsesparker i Norge – Akvarier, naturparker og mer',
    metaDescription: 'Finn de beste opplevelsesparkene i Norge. Guide til akvarier, naturparker, museer og unike opplevelser for familier.',
    faq: [
      { question: 'Hva er en opplevelsespark?', answer: 'En opplevelsespark er et sted som tilbyr unike opplevelser som akvarier, naturparker eller kulturattraksjoner, i motsetning til tradisjonelle fornøyelsesparker med mekaniske attraksjoner.' },
      { question: 'Hvilke opplevelsesparker finnes i Norge?', answer: 'Norge har mange opplevelsesparker, inkludert Atlanterhavsparken i Ålesund, Polaria i Tromsø, Langedrag Naturpark og Norsk Folkemuseum.' }
    ]
  },
  {
    name: 'Dyreparker',
    slug: 'dyrepark',
    description: 'Dyreparker lar deg oppleve dyr fra hele verden og fra norsk natur. Fra Dyreparken i Kristiansand til små gårdsparker – Norge har et godt tilbud for dyreinteresserte familier.',
    longDescription: `Dyreparker gir besøkende mulighet til å se og lære om dyr fra ulike deler av verden og fra norsk natur. Norges mest kjente dyrepark er Dyreparken i Kristiansand, som kombinerer dyrehage med familiepark og er landets mest besøkte attraksjon.

I tillegg til Kristiansand Dyrepark finnes det flere naturparker og dyreopplevelser i Norge. Langedrag Naturpark tilbyr nære møter med ulver og rovdyr, Namsskogan Familiepark har nordiske arter, og Bergen Akvariet og Atlanterhavsparken fokuserer på marine dyr.

Dyreparker i Norge legger vekt på dyrevelferd, formidling og bevaring, og mange har programmer for truede arter og forskning.`,
    metaTitle: 'Dyreparker i Norge – Dyrehager og naturparker',
    metaDescription: 'Finn dyreparker i Norge. Guide til Dyreparken i Kristiansand, Langedrag, akvarier og naturparker med dyr for hele familien.',
    faq: [
      { question: 'Hva er den beste dyreparken i Norge?', answer: 'Dyreparken i Kristiansand er Norges mest besøkte og mest kjente dyrepark, med dyr fra hele verden i tillegg til Kardemomme by og Kaptein Sabeltanns Verden.' },
      { question: 'Hvor kan man se ulver i Norge?', answer: 'Langedrag Naturpark i Numedal tilbyr guidede ulvevandringer der du kan komme tett på ulver. Namsskogan Familiepark i Trøndelag har også ulver.' }
    ]
  }
]
