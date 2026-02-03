import type { Metadata, Viewport } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Samantha Baer | The Elevated Equestrian',
  description: 'Professional event rider, podcast host, and equestrian educator. Deep conversations about horsemanship, training, and building a life with horses.',
  keywords: ['equestrian', 'podcast', 'horse training', 'eventing', 'dressage', 'horsemanship'],
}

export const viewport: Viewport = {
  themeColor: '#2A2D35',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.fontshare.com" />
      </head>
      <body className="bg-cream min-h-screen flex flex-col">
        {/* Skip link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:text-charcoal focus:px-4 focus:py-2 focus:font-medium"
        >
          Skip to main content
        </a>
        <Navigation />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
