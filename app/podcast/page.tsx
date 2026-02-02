import Link from 'next/link'
import { ExternalLink, Headphones } from 'lucide-react'

export const metadata = {
  title: 'Podcast | The Elevated Equestrian',
  description: 'Weekly conversations with world-class riders, trainers, and equine professionals.',
}

export default function PodcastPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-gold/10 flex items-center justify-center mx-auto mb-8">
            <Headphones className="w-10 h-10 text-gold" />
          </div>
          <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6">
            The Elevated Equestrian
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto mb-10">
            Weekly conversations with world-class riders, trainers, and equine 
            professionals sharing insights you won't find anywhere else.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://open.spotify.com/show/0Z442fy1TDKF0FZPXsVst2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1DB954] text-white px-6 py-3 font-medium hover:bg-[#1DB954]/90 transition-colors"
            >
              Listen on Spotify
              <ExternalLink className="w-4 h-4" />
            </a>
            <a 
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#D56DFB] text-white px-6 py-3 font-medium hover:bg-[#D56DFB]/90 transition-colors"
            >
              Apple Podcasts
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About the Show */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-charcoal mb-8 text-center">About the Show</h2>
          <div className="prose prose-lg text-slate mx-auto">
            <p>
              The Elevated Equestrian podcast was born from a simple idea: what if we could 
              bring together the best minds in the equestrian world and have real, in-depth 
              conversations about what actually works?
            </p>
            <p>
              Each week, I sit down with Olympic riders, equine veterinarians, biomechanics 
              researchers, mental performance coaches, and industry innovators. We go beyond 
              surface-level tips to explore the science, philosophy, and practical strategies 
              that can transform your riding.
            </p>
            <p>
              Topics we cover include:
            </p>
            <ul>
              <li>Rider biomechanics and position</li>
              <li>Horse training methodology</li>
              <li>Equine welfare and management</li>
              <li>Mental performance and competition mindset</li>
              <li>Career paths in the equestrian industry</li>
              <li>Sport horse development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Episodes Placeholder */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-cream text-center mb-12">Featured Episodes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-slate/20 p-6">
                <div className="bg-charcoal/50 aspect-square mb-4 flex items-center justify-center">
                  <Headphones className="w-12 h-12 text-gold/50" />
                </div>
                <p className="text-gold text-sm mb-2">Episode {i}</p>
                <h3 className="text-lg font-serif text-cream mb-2">Coming Soon</h3>
                <p className="text-cream/60 text-sm">
                  Episode details will appear here once connected to podcast feed.
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a 
              href="https://open.spotify.com/show/0Z442fy1TDKF0FZPXsVst2"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-3 font-medium hover:bg-cream/10 transition-colors"
            >
              View All Episodes
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Guest CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-6">Be a Guest</h2>
          <p className="text-charcoal/80 mb-8 max-w-2xl mx-auto">
            Have a unique perspective to share with the equestrian community? 
            I'm always looking for passionate experts to feature on the show.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-4 font-medium hover:bg-charcoal/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
