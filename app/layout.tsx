import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: { default: 'Fornøyelsespark.no – Norges guide til fornøyelsesparker', template: '%s | Fornøyelsespark.no' },
  description: 'Norges mest komplette guide til fornøyelsesparker, familieparker, badeland og aktivitetsparker.',
  metadataBase: new URL('https://fornoyelsespark.no'),
  alternates: { canonical: '/' },
  openGraph: { siteName: 'Fornøyelsespark.no', locale: 'nb_NO', type: 'website' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nb">
      <body className="min-h-screen antialiased">
        <Header />
        <main className="mx-auto max-w-4xl px-5 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
