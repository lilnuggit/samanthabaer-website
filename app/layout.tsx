import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Samantha Baer | The Elevated Equestrian',
  description: 'Professional event rider, podcast host, and equestrian educator. Deep conversations about horsemanship, training, and building a life with horses.',
  keywords: ['equestrian', 'podcast', 'horse training', 'eventing', 'dressage', 'horsemanship'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-cream min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
