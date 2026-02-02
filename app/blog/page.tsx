import Link from 'next/link'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Blog | Samantha Baer',
  description: 'Insights on biomechanics, horse welfare, rider mindset, and the equestrian life.',
}

// Upcoming topics to build anticipation
const upcomingTopics = [
  {
    category: 'Biomechanics',
    title: 'Why Your Seat Matters More Than Your Hands',
    teaser: 'The science behind effective aids.',
  },
  {
    category: 'Mindset',
    title: 'Competition Nerves: Friend or Foe?',
    teaser: 'Reframing anxiety into performance.',
  },
  {
    category: 'Horse Welfare',
    title: 'Reading the Subtle Signs',
    teaser: 'What your horse is really telling you.',
  },
]

export default function BlogPage() {
  return (
    <main>
      {/* Hero - Dark & Dramatic */}
      <section className="min-h-[60vh] flex items-center justify-center bg-charcoal relative overflow-hidden">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-slate/20" />
        
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/3 blur-2xl" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-24">
          <p className="text-gold font-medium tracking-[0.2em] uppercase text-sm mb-6">
            The Journal
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-cream mb-8 leading-tight">
            Insights for the<br />
            <span className="text-gold">Modern Equestrian</span>
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Biomechanics, horse welfare, rider mindset, and unfiltered thoughts 
            on navigating the equestrian world.
          </p>
        </div>
      </section>

      {/* Coming Soon - Premium State */}
      <section className="py-32 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-20">
            {/* Elegant icon treatment */}
            <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-charcoal/10 mb-10">
              <Sparkles className="w-10 h-10 text-gold" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-6">
              Something Good is Brewing
            </h2>
            <p className="text-lg text-slate max-w-xl mx-auto leading-relaxed">
              I'm crafting content that actually matters — no filler, no fluff. 
              Real insights from the arena, backed by science and experience.
            </p>
          </div>

          {/* Preview Cards - What's Coming */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {upcomingTopics.map((topic, index) => (
              <div 
                key={index}
                className="group bg-white p-8 shadow-sm hover:shadow-md transition-shadow border-t-2 border-gold"
              >
                <p className="text-gold text-sm font-medium tracking-wide uppercase mb-3">
                  {topic.category}
                </p>
                <h3 className="text-xl font-serif text-charcoal mb-3 leading-snug">
                  {topic.title}
                </h3>
                <p className="text-slate text-sm">
                  {topic.teaser}
                </p>
                <div className="mt-6 pt-4 border-t border-charcoal/10">
                  <span className="text-xs text-slate/60 uppercase tracking-wide">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>

          {/* Podcast CTA */}
          <div className="text-center">
            <p className="text-slate mb-4">Can't wait? Catch up on the podcast instead.</p>
            <Link 
              href="/podcast"
              className="inline-flex items-center gap-2 text-charcoal font-medium hover:text-gold transition-colors group"
            >
              Browse Episodes 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter - Premium Signup */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 border border-gold/30 mb-10">
            <Mail className="w-6 h-6 text-gold" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-cream mb-6">
            Be the First to Know
          </h2>
          <p className="text-lg text-cream/70 mb-12 leading-relaxed">
            Join the inner circle. Get new articles, exclusive insights, and behind-the-scenes 
            content I don't share anywhere else.
          </p>

          {/* Signup Form */}
          <form className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-cream/5 border border-cream/20 text-cream placeholder:text-cream/40 focus:outline-none focus:border-gold transition-colors text-center sm:text-left"
                required
              />
              <button 
                type="submit"
                className="bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 transition-colors inline-flex items-center justify-center gap-2 group"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <p className="text-cream/40 text-sm">
              No spam, ever. Unsubscribe with one click.
            </p>
          </form>

          {/* Social proof hint */}
          <div className="mt-16 pt-12 border-t border-cream/10">
            <p className="text-cream/50 text-sm">
              Join riders who are serious about improvement
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="py-16 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-charcoal/80 text-lg mb-4">
            Ready to transform your riding?
          </p>
          <Link 
            href="/programs"
            className="inline-flex items-center gap-2 text-charcoal font-semibold text-lg hover:gap-3 transition-all group"
          >
            Explore Programs
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </main>
  )
}
