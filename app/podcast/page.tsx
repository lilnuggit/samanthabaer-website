import Link from 'next/link'
import Image from 'next/image'
import { Play, Headphones, Mic2, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Podcast | The Elevated Equestrian',
  description: 'Weekly conversations with world-class riders, trainers, and equine professionals.',
}

export default function PodcastPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero - Compact */}
      <section className="pt-24 pb-12 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 mb-6">
            <Headphones className="w-5 h-5 text-gold" />
            <span className="text-gold text-sm tracking-widest uppercase">The Podcast</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream mb-4">
            The Elevated Equestrian
          </h1>
          
          <p className="text-cream/70 max-w-xl mx-auto mb-8">
            Weekly conversations with world-class riders, trainers, and equine experts.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <a 
              href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1DB954] text-white px-6 py-3 text-sm font-medium hover:bg-[#1ed760] transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a 
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-6 py-3 text-sm font-medium hover:bg-cream/10 transition-colors"
            >
              Apple Podcasts
            </a>
          </div>
        </div>
      </section>

      {/* Spotify Embedded Player - Full Width, No Scroll */}
      <section className="py-12 bg-charcoal">
        <div className="w-full max-w-3xl mx-auto px-6">
          <iframe 
            className="w-full rounded-xl"
            src="https://open.spotify.com/embed/show/6TlXq9jVia6jQYFGbKBsmm?utm_source=generator&theme=0"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            title="The Elevated Equestrian Podcast"
          />
        </div>
      </section>

      {/* About the Show */}
      <section className="py-16 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-6 text-center">
            What You'll Learn
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-2">Rider Biomechanics</h3>
              <p className="text-slate text-sm">Optimize your position and movement for better communication.</p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-2">Training Philosophy</h3>
              <p className="text-slate text-sm">Methods from Olympic riders and top trainers worldwide.</p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-2">Mental Performance</h3>
              <p className="text-slate text-sm">Competition psychology and confidence building.</p>
            </div>
            <div className="bg-white p-6 shadow-sm">
              <h3 className="font-semibold text-charcoal mb-2">Horse Welfare</h3>
              <p className="text-slate text-sm">Science-based approaches to management and health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About the Host */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="relative aspect-square max-w-xs mx-auto md:max-w-none">
              <Image
                src="/images/about-portrait.jpg"
                alt="Samantha Baer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-gold text-sm tracking-widest uppercase mb-3">Your Host</p>
              <h2 className="text-2xl md:text-3xl font-serif text-cream mb-4">
                Samantha Baer
              </h2>
              <p className="text-cream/70 mb-4 leading-relaxed">
                As a professional event rider, I created this podcast to share the 
                conversations I wish I'd had earlier in my career.
              </p>
              <p className="text-cream/70 mb-6 leading-relaxed">
                Each week, I sit down with riders, trainers, vets, and researchers 
                at the top of their fields.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-all"
              >
                More About Samantha <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Be a Guest CTA */}
      <section className="py-16 bg-gold">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Mic2 className="w-10 h-10 text-charcoal mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
            Want to Be a Guest?
          </h2>
          <p className="text-charcoal/80 mb-6 max-w-lg mx-auto">
            I'm always looking for experts with unique perspectives. 
            If you have knowledge that can elevate riders, let's talk.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 font-medium hover:bg-slate transition-colors"
          >
            Get In Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-serif text-cream mb-4">
            Ready to Elevate Your Riding?
          </h2>
          <p className="text-cream/70 mb-8 max-w-lg mx-auto">
            Subscribe and join thousands of riders committed to continuous improvement.
          </p>
          <a 
            href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-cream transition-colors"
          >
            <Play className="w-4 h-4" />
            Start Listening
          </a>
        </div>
      </section>
    </main>
  )
}
