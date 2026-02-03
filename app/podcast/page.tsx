import Link from 'next/link'
import Image from 'next/image'
import { Play, Headphones, Mic2, ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Podcast | The Elevated Equestrian',
  description: 'Weekly conversations with world-class riders, trainers, and equine professionals.',
}

export default function PodcastPage() {
  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-charcoal grain overflow-hidden">
        {/* Subtle gold gradient wash */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.03] to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-48 h-px bg-gradient-to-r from-gold/40 to-transparent" aria-hidden="true" />

        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <div className="opacity-0 animate-fade-in inline-flex items-center gap-2.5 mb-8">
            <Headphones className="w-4 h-4 text-gold" aria-hidden="true" />
            <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">The Podcast</span>
          </div>

          <h1 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-cream mb-5 leading-[1.1]">
            The Elevated<br />
            <span className="text-gold">Equestrian</span>
          </h1>

          <p className="opacity-0 animate-fade-up delay-200 text-cream/60 max-w-lg mx-auto mb-10 text-base md:text-lg leading-relaxed">
            Weekly conversations with world-class riders, trainers, and equine experts — distilled into insights you can use today.
          </p>

          <div className="opacity-0 animate-fade-up delay-300 flex flex-wrap gap-3 justify-center">
            <a
              href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#1DB954] text-white px-7 py-3.5 text-sm font-medium hover:bg-[#1ed760] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Listen on Spotify
            </a>
            <a
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/20 text-cream px-7 py-3.5 text-sm font-medium hover:bg-cream/5 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Apple Podcasts
              <ArrowUpRight className="w-3.5 h-3.5 opacity-50" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Spotify Embedded Player */}
      <section className="py-10 md:py-14 bg-charcoal grain relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-px bg-gold/20" aria-hidden="true" />
        <div className="w-full max-w-3xl mx-auto px-5 sm:px-6">
          <div className="opacity-0 animate-fade-up delay-100">
            <iframe
              className="w-full"
              src="https://open.spotify.com/embed/show/6TlXq9jVia6jQYFGbKBsmm?utm_source=generator&theme=0"
              height="352"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="The Elevated Equestrian Podcast on Spotify"
              style={{ borderRadius: 0 }}
            />
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 md:py-24 bg-cream relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="opacity-0 animate-fade-in text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">Inside Each Episode</p>
            <h2 className="opacity-0 animate-fade-up delay-100 text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal">
              What You&rsquo;ll Learn
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                num: '01',
                title: 'Rider Biomechanics',
                desc: 'Optimize your position and movement for better communication with your horse.'
              },
              {
                num: '02',
                title: 'Training Philosophy',
                desc: 'Methods from Olympic riders and top trainers around the world.'
              },
              {
                num: '03',
                title: 'Mental Performance',
                desc: 'Competition psychology, confidence building, and peak-state focus.'
              },
              {
                num: '04',
                title: 'Horse Welfare',
                desc: 'Science-based approaches to management, nutrition, and long-term health.'
              },
            ].map((item, i) => (
              <div
                key={item.num}
                className={`opacity-0 animate-fade-up delay-${(i + 1) * 100} bg-white p-7 md:p-8 shadow-sm group hover:shadow-md transition-colors duration-200 relative`}
              >
                <span className="absolute top-6 right-6 text-gold/20 font-serif text-4xl leading-none select-none" aria-hidden="true">
                  {item.num}
                </span>
                <h3 className="font-semibold text-charcoal mb-2.5 text-lg">{item.title}</h3>
                <p className="text-slate text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Host */}
      <section className="py-16 md:py-24 bg-deep grain relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-64 h-px bg-gradient-to-l from-gold/30 to-transparent" aria-hidden="true" />
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="opacity-0 animate-slide-in relative aspect-[3/4] max-w-xs mx-auto md:max-w-sm">
              <Image
                src="/images/about-portrait.jpg"
                alt="Samantha Baer, host of The Elevated Equestrian podcast"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 280px, 384px"
              />
              {/* Gold corner accent */}
              <div className="absolute -bottom-3 -right-3 w-24 h-24 border-b-2 border-r-2 border-gold/30" aria-hidden="true" />
            </div>
            <div className="opacity-0 animate-fade-up delay-200">
              <p className="text-gold text-xs tracking-[0.25em] uppercase font-medium mb-4">Your Host</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-cream mb-5 leading-tight">
                Samantha Baer
              </h2>
              <p className="text-cream/60 mb-4 leading-relaxed">
                As a professional event rider, I created this podcast to share the
                conversations I wish I&rsquo;d had earlier in my career.
              </p>
              <p className="text-cream/60 mb-8 leading-relaxed">
                Each week, I sit down with riders, trainers, vets, and researchers
                at the top of their fields — pulling out the details that actually
                change how you ride.
              </p>
              <div className="flex flex-wrap items-center gap-6">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-gold text-sm font-medium hover:gap-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  More About Samantha
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
                <a
                  href="https://instagram.com/samanthabaerofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/40 text-sm hover:text-cream/70 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                >
                  @samanthabaerofficial
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Be a Guest CTA */}
      <section className="py-16 md:py-20 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,0,0,0.04),transparent_50%)]" aria-hidden="true" />
        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <div className="opacity-0 animate-scale-in">
            <Mic2 className="w-9 h-9 text-charcoal mx-auto mb-5" aria-hidden="true" />
          </div>
          <h2 className="opacity-0 animate-fade-up delay-100 text-2xl sm:text-3xl md:text-4xl font-serif text-charcoal mb-4">
            Want to Be a Guest?
          </h2>
          <p className="opacity-0 animate-fade-up delay-200 text-charcoal/70 mb-8 max-w-md mx-auto leading-relaxed">
            I&rsquo;m always looking for experts with unique perspectives.
            If you have knowledge that can elevate riders, let&rsquo;s talk.
          </p>
          <div className="opacity-0 animate-fade-up delay-300">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-4 font-medium hover:bg-deep transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-charcoal grain relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-px bg-gradient-to-r from-gold/20 to-transparent" aria-hidden="true" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-32 h-px bg-gradient-to-l from-gold/20 to-transparent" aria-hidden="true" />

        <div className="max-w-3xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="opacity-0 animate-fade-up text-2xl sm:text-3xl md:text-4xl font-serif text-cream mb-5">
            Ready to Elevate Your Riding?
          </h2>
          <p className="opacity-0 animate-fade-up delay-100 text-cream/50 mb-10 max-w-md mx-auto">
            Subscribe and join thousands of riders committed to continuous improvement.
          </p>
          <div className="opacity-0 animate-fade-up delay-200">
            <a
              href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-gold text-charcoal px-10 py-4 font-medium hover:bg-cream transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <Play className="w-4 h-4" aria-hidden="true" />
              Start Listening
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
