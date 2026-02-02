import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Blog | Samantha Baer',
  description: 'Insights on biomechanics, horse welfare, rider mindset, and the equestrian life.',
}

export default function BlogPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-serif text-lg mb-4">Insights</p>
          <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6">
            Blog
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Thoughts on biomechanics, horse welfare, rider mindset, and navigating 
            the equestrian life.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          {/* Coming Soon State */}
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-charcoal/10 flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">✍️</span>
            </div>
            <h2 className="text-2xl font-serif text-charcoal mb-4">Coming Soon</h2>
            <p className="text-slate max-w-md mx-auto mb-8">
              I'm working on some great content for you. In the meantime, catch up 
              on the latest podcast episodes.
            </p>
            <Link 
              href="/podcast"
              className="inline-flex items-center gap-2 bg-charcoal text-cream px-6 py-3 font-medium hover:bg-charcoal/90 transition-colors"
            >
              Listen to Podcast <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Example Blog Post Layout (hidden for now)
          <div className="space-y-12">
            <article className="border-b border-charcoal/10 pb-12">
              <p className="text-gold text-sm font-medium mb-2">Biomechanics</p>
              <h2 className="text-2xl font-serif text-charcoal mb-3">
                <Link href="/blog/post-slug" className="hover:text-gold transition-colors">
                  Why Your Seat Matters More Than Your Hands
                </Link>
              </h2>
              <p className="text-slate mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center gap-4 text-sm text-slate">
                <span>January 15, 2026</span>
                <span>•</span>
                <span>5 min read</span>
              </div>
            </article>
          </div>
          */}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-cream mb-4">Stay in the Loop</h2>
          <p className="text-cream/80 mb-8">
            Get notified when new articles drop, plus exclusive insights I don't share anywhere else.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 bg-cream/10 border border-cream/20 text-cream placeholder:text-cream/50 focus:outline-none focus:border-gold"
            />
            <button 
              type="submit"
              className="bg-gold text-charcoal px-6 py-3 font-medium hover:bg-gold/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-cream/50 text-sm mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>
    </main>
  )
}
