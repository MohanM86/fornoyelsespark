import SearchBox from '@/components/SearchBox'
import { getSearchIndex } from '@/lib/search-index'

const items = getSearchIndex()

export function HeaderSearch() {
  return <SearchBox items={items} placeholder="Søk etter parker, byer eller opplevelser..." variant="header" />
}

export function InlineSearch({ placeholder }: { placeholder?: string }) {
  return <SearchBox items={items} placeholder={placeholder || 'Søk etter fornøyelsesparker...'} variant="inline" />
}
