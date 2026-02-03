import Link from 'next/link'
import Image from 'next/image'
import { Play, Headphones, Mic2, Users, Star, ArrowRight, Volume2, Clock, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Podcast | The Elevated Equestrian',
  description: 'Weekly conversations with world-class riders, trainers, and equine professionals. Elevate your riding with insights you won\'t find anywhere else.',
}

const topics = [
  { icon: TrendingUp, title: 'Rider Biomechanics', desc: 'Optimize your position and movement for better communication with your horse.' },
  { icon: Users, title: 'Training Philosophy', desc: 'Methods and mindsets from Olympic riders and top trainers worldwide.' },
  { icon: Star, title: 'Mental Performance', desc: 'Competition psychology, confidence building, and peak performance strategies.' },
  { icon: Clock, title: 'Horse Welfare', desc: 'Science-based approaches to management, health, and ethical training.' },
]

const features = [
  { stat: 'Weekly', label: 'New Episodes' },
  { stat: '45-60', label: 'Minutes Each' },
  { stat: '100%', label: 'Free to Listen' },
]

export default function PodcastPage() {
  return (
    <main>
      {/* Hero Section - Dramatic & Bold */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden">
        {/* Background Pattern/Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate/20 via-charcoal to-charcoal" />
        
        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-gold/5 blur-3xl" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Podcast Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gold flex items-center justify-center">
              <Headphones className="w-6 h-6 text-charcoal" />
            </div>
            <span className="text-gold font-serif text-lg tracking-wider uppercase">The Podcast</span>
          </div>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-cream mb-6 leading-[0.95]">
            The Elevated<br />
            <span className="text-gold">Equestrian</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-cream/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Deep conversations with world-class riders, trainers, and equine experts. 
            Insights that transform how you ride.
          </p>
          
          {/* Primary CTA - Spotify */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a 
              href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-[#1DB954] text-white px-10 py-5 font-medium text-lg hover:bg-[#1ed760] transition-all hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Listen on Spotify
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cream/30 text-cream px-8 py-5 font-medium hover:bg-cream/10 transition-colors"
            >
              Apple Podcasts
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="flex justify-center gap-8 md:gap-16">
            {features.map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-3xl md:text-4xl font-serif text-gold mb-1">{item.stat}</p>
                <p className="text-sm text-cream/60 uppercase tracking-wider">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cream/30 flex items-start justify-center pt-2">
            <div className="w-1 h-2 bg-cream/50" />
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-serif text-lg mb-4 tracking-wider">TOPICS WE EXPLORE</p>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Go Beyond Surface-Level Tips
            </h2>
            <p className="text-slate max-w-2xl mx-auto text-lg">
              Each episode dives deep into the science, philosophy, and practical strategies 
              that separate good riders from great ones.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <div key={topic.title} className="bg-white p-8 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-6 group-hover:bg-gold transition-colors">
                  <topic.icon className="w-7 h-7 text-cream group-hover:text-charcoal transition-colors" />
                </div>
                <h3 className="text-xl font-serif text-charcoal mb-3">{topic.title}</h3>
                <p className="text-slate">{topic.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spotify Embedded Player */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gold font-serif text-lg mb-4 tracking-wider">LATEST EPISODES</p>
            <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
              Start Listening Now
            </h2>
            <p className="text-cream/70 text-lg max-w-2xl mx-auto">
              From Olympic medalists sharing their training secrets to equine veterinarians 
              breaking down the latest research — every episode is packed with actionable insights.
            </p>
          </div>
          
          {/* Spotify Embed */}
          <div className="bg-slate/20 p-4 md:p-6">
            <iframe 
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/show/6TlXq9jVia6jQYFGbKBsmm?utm_source=generator&theme=0"
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              title="The Elevated Equestrian Podcast"
            />
          </div>
          
          <div className="text-center mt-8">
            <a 
              href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
            >
              View All Episodes on Spotify
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* About the Host */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Image */}
            <div className="lg:col-span-2 relative aspect-[3/4]">
              <div className="absolute inset-0 bg-charcoal">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Samantha Baer - Host of The Elevated Equestrian"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold -z-10" />
            </div>
            
            {/* Content */}
            <div className="lg:col-span-3">
              <p className="text-gold font-serif text-lg mb-4 tracking-wider">YOUR HOST</p>
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
                Samantha Baer
              </h2>
              <p className="text-slate text-lg mb-6 leading-relaxed">
                As a professional event rider and educator, I created this podcast to bring you 
                the conversations I wish I'd had access to earlier in my career. Real talk with 
                real experts — no fluff, no gatekeeping.
              </p>
              <p className="text-slate text-lg mb-8 leading-relaxed">
                Each week, I sit down with riders, trainers, veterinarians, and researchers who 
                are at the top of their fields. We go beyond the basics to explore what truly 
                makes the horse-human partnership thrive.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/about" 
                  className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
                >
                  More About Samantha <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Listen Everywhere */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-8">
            <Headphones className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
            Listen Wherever You Are
          </h2>
          <p className="text-cream/70 text-lg mb-12 max-w-2xl mx-auto">
            The Elevated Equestrian is available on all major podcast platforms. 
            Subscribe once, never miss an episode.
          </p>
          
          {/* Platform Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a 
              href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#1DB954] text-white px-8 py-4 font-medium hover:bg-[#1ed760] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Spotify
            </a>
            <a 
              href="https://podcasts.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-b from-[#F452FF] to-[#833AB4] text-white px-8 py-4 font-medium hover:opacity-90 transition-opacity"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.025 2.564 1.578 1.662 2.378 3.756 2.378 6.282 0 1.392-.324 2.694-.972 3.906-.648 1.212-1.542 2.226-2.682 3.042l-.81-.99c1.038-.78 1.83-1.686 2.376-2.718.546-1.032.834-2.16.834-3.384 0-2.22-.702-4.056-2.106-5.508-1.404-1.452-3.186-2.178-5.346-2.178-2.112 0-3.87.726-5.274 2.178-1.404 1.452-2.106 3.288-2.106 5.508 0 1.236.288 2.37.864 3.402.576 1.032 1.368 1.932 2.376 2.7l-.81.99c-1.116-.816-2.004-1.83-2.664-3.042-.66-1.212-.99-2.514-.99-3.906 0-2.478.798-4.548 2.394-6.21 1.596-1.662 3.666-2.58 6.21-2.58 2.544 0 4.614.918 6.21 2.58 1.596 1.662 2.394 3.732 2.394 6.21 0 2.478-.798 4.572-2.394 6.282-1.596 1.71-3.666 2.616-6.21 2.616s-4.614-.906-6.21-2.616c-1.596-1.71-2.394-3.804-2.394-6.282 0-1.518.318-2.904.954-4.158.636-1.254 1.494-2.292 2.574-3.114 1.08-.822 2.28-1.44 3.6-1.854 1.32-.414 2.658-.504 4.014-.27.054 0 .108-.018.162-.054.054-.036.09-.09.108-.162l-.018-.126c-.018-.072-.054-.126-.108-.162-.054-.036-.114-.054-.18-.054-1.44-.252-2.868-.168-4.284.252-1.416.42-2.7 1.074-3.852 1.962-1.152.888-2.07 2.004-2.754 3.348-.684 1.344-1.026 2.82-1.026 4.428 0 2.712.87 4.986 2.61 6.822 1.74 1.836 3.996 2.754 6.768 2.754s5.028-.918 6.768-2.754c1.74-1.836 2.61-4.11 2.61-6.822 0-2.712-.87-4.962-2.61-6.75-1.74-1.788-3.996-2.682-6.768-2.682zm-.198 5.688c.99 0 1.836.342 2.538 1.026.702.684 1.053 1.512 1.053 2.484 0 .972-.351 1.8-1.053 2.484-.702.684-1.548 1.026-2.538 1.026-.99 0-1.836-.342-2.538-1.026-.702-.684-1.053-1.512-1.053-2.484 0-.972.351-1.8 1.053-2.484.702-.684 1.548-1.026 2.538-1.026zm0 9.216c.594 0 1.107.054 1.539.162.432.108.801.252 1.107.432.306.18.549.378.729.594.18.216.306.432.378.648.072.216.108.42.108.612v4.716h-1.296v-1.134c-.36.414-.792.738-1.296.972-.504.234-1.062.351-1.674.351-.756 0-1.386-.198-1.89-.594-.504-.396-.756-.936-.756-1.62 0-.684.252-1.224.756-1.62.504-.396 1.134-.594 1.89-.594.612 0 1.17.117 1.674.351.504.234.936.558 1.296.972v-.378c0-.576-.216-1.026-.648-1.35-.432-.324-.99-.486-1.674-.486-.594 0-1.116.12-1.566.36-.45.24-.828.576-1.134 1.008l-.936-.774c.378-.504.864-.906 1.458-1.206.594-.3 1.242-.45 1.944-.45z"/>
              </svg>
              Apple Podcasts
            </a>
            <a 
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#FF0000] text-white px-8 py-4 font-medium hover:bg-[#CC0000] transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
          
          <p className="text-cream/50 text-sm">
            Also available on Google Podcasts, Amazon Music, and more
          </p>
        </div>
      </section>

      {/* Guest CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-6">
                <Mic2 className="w-7 h-7 text-gold" />
              </div>
              <h2 className="text-4xl font-serif text-charcoal mb-6">
                Want to Be a Guest?
              </h2>
              <p className="text-charcoal/80 text-lg mb-8 leading-relaxed">
                I'm always looking for passionate experts with unique perspectives to share 
                with our community. Veterinarians, trainers, researchers, athletes — if you 
                have knowledge that can elevate riders, let's talk.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-4 font-medium hover:bg-charcoal/90 transition-colors"
              >
                Pitch Yourself
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="text-charcoal/60 space-y-4">
              <p className="flex items-start gap-3">
                <span className="text-charcoal font-serif text-xl">✓</span>
                <span>Share your expertise with thousands of engaged listeners</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-charcoal font-serif text-xl">✓</span>
                <span>Professional production and editing</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-charcoal font-serif text-xl">✓</span>
                <span>Promotion across our social channels</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-charcoal font-serif text-xl">✓</span>
                <span>Connect with a passionate equestrian community</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6">
            Ready to <span className="text-gold">Elevate</span> Your Riding?
          </h2>
          <p className="text-cream/70 text-lg mb-10 max-w-2xl mx-auto">
            Hit subscribe and join thousands of riders committed to continuous improvement.
          </p>
          <a 
            href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gold text-charcoal px-10 py-5 font-medium text-lg hover:bg-gold/90 transition-colors"
          >
            <Play className="w-5 h-5" />
            Start Listening Now
          </a>
        </div>
      </section>
    </main>
  )
}
