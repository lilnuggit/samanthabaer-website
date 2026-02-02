import Link from 'next/link'
import { Check, Star } from 'lucide-react'

export const metadata = {
  title: 'Courses | Samantha Baer',
  description: 'Online courses on biomechanics, rider fitness, and horse welfare.',
}

export default function CoursesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-serif text-lg mb-4">Learn</p>
          <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6">
            Online Courses
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Deep-dive programs designed to transform your understanding of 
            biomechanics, mindset, and ethical horsemanship.
          </p>
        </div>
      </section>

      {/* Membership Option */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-charcoal p-8 md:p-12 text-center">
            <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Best Value
            </div>
            <h2 className="text-3xl font-serif text-cream mb-4">All-Access Membership</h2>
            <p className="text-cream/80 mb-8 max-w-xl mx-auto">
              Get unlimited access to every course in the library, plus all future releases. 
              Cancel anytime.
            </p>
            <div className="mb-8">
              <span className="text-5xl font-serif text-cream">$29</span>
              <span className="text-cream/60">/month</span>
            </div>
            <ul className="text-left max-w-sm mx-auto mb-8 space-y-3">
              {[
                'Access to all current courses',
                'All future courses included',
                'Downloadable resources',
                'Community access',
                'Cancel anytime'
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-cream/80">
                  <Check className="w-5 h-5 text-gold flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 transition-colors w-full sm:w-auto">
              Start Your Membership
            </button>
            <p className="text-cream/50 text-sm mt-4">7-day free trial included</p>
          </div>
        </div>
      </section>

      {/* Individual Courses */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-charcoal mb-4">Or Buy Individual Courses</h2>
            <p className="text-slate">Prefer to own a single course? No problem.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Course Placeholder 1 */}
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-charcoal/10 aspect-video flex items-center justify-center">
                <p className="text-charcoal/40 text-sm">Course Image</p>
              </div>
              <div className="p-6">
                <p className="text-gold text-sm font-medium mb-2">Biomechanics</p>
                <h3 className="text-xl font-serif text-charcoal mb-3">
                  Rider Position Fundamentals
                </h3>
                <p className="text-slate text-sm mb-4">
                  Master the building blocks of an effective, balanced seat.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal font-medium">$149</span>
                  <button className="text-gold text-sm font-medium hover:underline">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>

            {/* Course Placeholder 2 */}
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-charcoal/10 aspect-video flex items-center justify-center">
                <p className="text-charcoal/40 text-sm">Course Image</p>
              </div>
              <div className="p-6">
                <p className="text-gold text-sm font-medium mb-2">Mindset</p>
                <h3 className="text-xl font-serif text-charcoal mb-3">
                  Competition Mental Game
                </h3>
                <p className="text-slate text-sm mb-4">
                  Build unshakeable confidence and focus under pressure.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal font-medium">$99</span>
                  <button className="text-gold text-sm font-medium hover:underline">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>

            {/* Course Placeholder 3 */}
            <div className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-charcoal/10 aspect-video flex items-center justify-center">
                <p className="text-charcoal/40 text-sm">Course Image</p>
              </div>
              <div className="p-6">
                <p className="text-gold text-sm font-medium mb-2">Horse Welfare</p>
                <h3 className="text-xl font-serif text-charcoal mb-3">
                  Reading Your Horse
                </h3>
                <p className="text-slate text-sm mb-4">
                  Understand behavior, body language, and what your horse is telling you.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-charcoal font-medium">$79</span>
                  <button className="text-gold text-sm font-medium hover:underline">
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-cream text-center mb-12">Questions?</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">
                What's the difference between membership and buying a course?
              </h3>
              <p className="text-cream/70">
                Membership gives you access to everything for a monthly fee. Buying a course 
                means you own it forever with a one-time payment. Choose what works for your learning style.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">
                Can I cancel my membership anytime?
              </h3>
              <p className="text-cream/70">
                Yes! No contracts, no commitments. Cancel anytime from your account dashboard.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-cream mb-2">
                How long do I have access to purchased courses?
              </h3>
              <p className="text-cream/70">
                Forever. Once you buy a course, it's yours to keep and revisit whenever you want.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
