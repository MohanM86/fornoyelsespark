export type Park = {
  id: string
  name: string
  slug: string
  city: string
  citySlug: string
  county: string
  category: ParkCategory
  categories: ParkCategory[]
  shortDescription: string
  description: string
  address: string
  audience: string[]
  tags: string[]
  featured: boolean
  tips: string[]
  faq: { question: string; answer: string }[]
}

export type ParkCategory =
  | 'fornoyelsesparker'
  | 'familieparker'
  | 'badeland'
  | 'vannparker'
  | 'aktivitetsparker'
  | 'opplevelsesparker'
  | 'dyrepark'

export type City = {
  name: string
  slug: string
  county: string
  description: string
  metaTitle: string
  metaDescription: string
  faq: { question: string; answer: string }[]
}

export type Category = {
  name: string
  slug: string
  description: string
  longDescription: string
  metaTitle: string
  metaDescription: string
  faq: { question: string; answer: string }[]
}

export type Guide = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  intro: string
  sections: { heading: string; content: string }[]
  faq: { question: string; answer: string }[]
  relatedParks: string[]
  relatedGuides: string[]
}

export type BrregEntry = {
  navn: string
  orgnr: string
  nace: string
  naceDesc: string
  kommune: string
  poststed: string
  adresse: string
  ansatte: number
  hjemmeside: string
  aktivitet: string
}
