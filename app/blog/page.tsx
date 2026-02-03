import Link from 'next/link'
import { ArrowRight, Mail, Sparkles } from 'lucide-react'

export const metadata = {
  title: 'Blog | Samantha Baer',
  description: 'Insights on biomechanics, horse welfare, rider mindset, and the equestrian life.',
}

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
      {/* Hero — Dark & Dramatic */}
      <section className="min-h-[60svh] flex items-center justify-center bg-deep grain relative overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-deep via-charcoal/80 to-deep" aria-hidden="true" />

        {/* Ambient blobs */}
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gold/[0.04] blur-3xl" aria-hidden="true" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gold/[0.02] blur-2xl" aria-hidden="true" />

        {/* Geometric accent */}
        <div className="absolute top-12 right-8 sm:right-16 w-24 sm:w-32 h-24 sm:h-32 border border-gold/[0.08] rotate-12" aria-hidden="true" />
        <div className="absolute bottom-16 left-8 sm:left-12 w-16 sm:w-20 h-16 sm:h-20 border border-cream/[0.05] -rotate-6" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center py-20 sm:py-24">
          <p className="opacity-0 animate-fade-up text-gold font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-5 sm:mb-6">
            The Journal
          </p>
          <h1 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream mb-6 sm:mb-8 leading-tight text-balance">
            Insights for the<br />
            <span className="text-gold italic">Modern Equestrian</span>
          </h1>
          <p className="opacity-0 animate-fade-up delay-200 text-base sm:text-lg md:text-xl text-cream/60 max-w-2xl mx-auto leading-relaxed">
            Biomechanics, horse welfare, rider mindset, and unfiltered thoughts
            on navigating the equestrian world.
          </p>
        </div>
      </section>

      {/* Coming Soon — Premium State */}
      <section className="py-20 sm:py-28 md:py-32 bg-cream grain">
        <div className="max-w-5xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-14 sm:mb-20">
            {/* Icon */}
            <div className="opacity-0 animate-scale-in inline-flex items-center justify-center w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-2 border-charcoal/10 mb-8 sm:mb-10">
              <Sparkles className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-gold" aria-hidden="true" />
            </div>

            <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-5 sm:mb-6 text-balance">
              Something Good is Brewing
            </h2>
            <p className="opacity-0 animate-fade-up delay-200 text-base sm:text-lg text-slate max-w-xl mx-auto leading-relaxed">
              I'm crafting content that actually matters — no filler, no fluff.
              Real insights from the arena, backed by science and experience.
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
            {upcomingTopics.map((topic, index) => (
              <div
                key={topic.title}
                className={`opacity-0 animate-fade-up delay-${(index + 1) * 100} group bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition-colors duration-200 border-t-2 border-gold`}
              >
                <p className="text-gold text-xs sm:text-sm font-medium tracking-wide uppercase mb-2 sm:mb-3">
                  {topic.category}
                </p>
                <h3 className="text-lg sm:text-xl font-serif text-charcoal mb-2 sm:mb-3 leading-snug text-balance">
                  {topic.title}
                </h3>
                <p className="text-slate text-xs sm:text-sm">
                  {topic.teaser}
                </p>
                <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-charcoal/10">
                  <span className="text-[10px] sm:text-xs text-slate/50 uppercase tracking-[0.2em]">Coming Soon</span>
                </div>
              </div>
            ))}
          </div>

          {/* Podcast CTA */}
          <div className="opacity-0 animate-fade-in delay-400 text-center">
            <p className="text-slate mb-3 sm:mb-4 text-sm sm:text-base">Can't wait? Catch up on the podcast instead.</p>
            <Link
              href="/podcast"
              className="inline-flex items-center gap-2 text-charcoal font-medium hover:text-gold transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Browse Episodes
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter — Premium Signup */}
      <section className="py-20 sm:py-28 md:py-32 bg-charcoal grain relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gold/[0.03] blur-3xl" />
        </div>

        {/* Geometric accents */}
        <div className="absolute top-8 right-8 sm:top-16 sm:right-16 w-32 sm:w-48 h-32 sm:h-48 border border-cream/[0.03] rotate-45" aria-hidden="true" />
        <div className="absolute bottom-12 left-8 sm:bottom-20 sm:left-16 w-20 sm:w-28 h-20 sm:h-28 border border-gold/[0.06] -rotate-12" aria-hidden="true" />

        <div className="relative z-10 max-w-2xl mx-auto px-5 sm:px-6 text-center">
          {/* Icon */}
          <div className="opacity-0 animate-scale-in inline-flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 border border-gold/30 mb-8 sm:mb-10">
            <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-gold" aria-hidden="true" />
          </div>

          <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-cream mb-5 sm:mb-6 text-balance">
            Be the First to Know
          </h2>
          <p className="opacity-0 animate-fade-up delay-200 text-base sm:text-lg text-cream/60 mb-10 sm:mb-12 leading-relaxed">
            Join the inner circle. Get new articles, exclusive insights, and behind-the-scenes
            content I don't share anywhere else.
          </p>

          {/* Signup Form */}
          <form className="opacity-0 animate-fade-up delay-300 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                spellCheck={false}
                placeholder="Enter your email"
                className="flex-1 px-5 sm:px-6 py-3.5 sm:py-4 bg-cream/5 border border-cream/20 text-cream placeholder:text-cream/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:border-transparent transition-colors duration-200 text-center sm:text-left text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="bg-gold text-charcoal px-6 sm:px-8 py-3.5 sm:py-4 font-medium hover:bg-gold/90 transition-colors duration-200 inline-flex items-center justify-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                Subscribe
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </button>
            </div>
            <p className="text-cream/30 text-xs sm:text-sm">
              No spam, ever. Unsubscribe with one click.
            </p>
          </form>

          {/* Social proof */}
          <div className="opacity-0 animate-fade-in delay-500 mt-12 sm:mt-16 pt-10 sm:pt-12 border-t border-cream/[0.06]">
            <p className="text-cream/40 text-xs sm:text-sm tracking-wide">
              Join riders who are serious about improvement
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA Band */}
      <section className="py-12 sm:py-16 bg-gold grain relative overflow-hidden">
        {/* Subtle geometry */}
        <div className="absolute right-0 top-0 w-32 h-32 border border-charcoal/[0.06] rotate-45 translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <p className="text-charcoal/70 text-base sm:text-lg mb-3 sm:mb-4">
            Ready to transform your riding?
          </p>
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 text-charcoal font-semibold text-base sm:text-lg hover:text-deep transition-colors duration-200 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
          >
            Explore Programs
            <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  )
}
