import Link from 'next/link'
import { Check, Star, Play, Clock, BookOpen, Zap, ArrowRight, ArrowUpRight } from 'lucide-react'

export const metadata = {
  title: 'Courses | Samantha Baer',
  description: 'Premium online courses on biomechanics, rider fitness, and horse welfare.',
}

const courses = [
  {
    id: 'rider-position',
    category: 'Biomechanics',
    title: 'Rider Position Fundamentals',
    description: 'Master the building blocks of an effective, balanced seat. Transform your riding from the core out.',
    price: 149,
    duration: '6 modules',
    lessons: '24 lessons',
    highlights: [
      'Core stability & pelvic positioning',
      'Independent seat development',
      'Common faults & corrections',
      'Practice exercises for home'
    ]
  },
  {
    id: 'mental-game',
    category: 'Mindset',
    title: 'Competition Mental Game',
    description: 'Build unshakeable confidence and razor-sharp focus under pressure. Compete at your best, every time.',
    price: 99,
    duration: '4 modules',
    lessons: '16 lessons',
    highlights: [
      'Pre-competition routines',
      'Managing show-ring nerves',
      'Focus & visualization techniques',
      'Building mental resilience'
    ]
  },
  {
    id: 'reading-horse',
    category: 'Horse Welfare',
    title: 'Reading Your Horse',
    description: 'Understand behavior, body language, and what your horse is really telling you. Deepen the partnership.',
    price: 79,
    duration: '5 modules',
    lessons: '20 lessons',
    highlights: [
      'Body language decoded',
      'Stress signals & calming cues',
      'Building trust & connection',
      'Observational skills training'
    ]
  }
]

const totalCourseValue = courses.reduce((sum, c) => sum + c.price, 0)

export default function CoursesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="min-h-[70vh] bg-deep flex items-center relative overflow-hidden grain">
        {/* Gradient accents */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-deep to-deep" aria-hidden="true" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/[0.04] to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-64 h-px bg-gradient-to-r from-gold/30 to-transparent" aria-hidden="true" />

        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-24 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="opacity-0 animate-fade-in text-gold font-medium tracking-[0.25em] text-xs uppercase mb-6">
              Online Education
            </p>
            <h1 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-cream mb-8 leading-[1.1]">
              Elevate Your Riding.<br />
              <span className="text-gold">On Your Schedule.</span>
            </h1>
            <p className="opacity-0 animate-fade-up delay-200 text-base sm:text-lg md:text-xl text-cream/60 mb-10 max-w-2xl leading-relaxed">
              Deep-dive programs that transform your understanding of biomechanics,
              mindset, and ethical horsemanship — taught by an Olympic-level coach.
            </p>
            <div className="opacity-0 animate-fade-up delay-300 flex flex-col sm:flex-row gap-4">
              <a
                href="#membership"
                className="bg-gold text-charcoal px-8 py-4 font-medium hover:bg-cream transition-colors duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Get All-Access for $29/mo
              </a>
              <a
                href="#courses"
                className="border border-cream/20 text-cream px-8 py-4 font-medium hover:bg-cream/5 transition-colors duration-200 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className="bg-charcoal border-t border-cream/10 grain relative">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 py-8 md:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[
              { value: '60+', label: 'Video Lessons' },
              { value: '15+', label: 'Modules' },
              { value: '∞', label: 'Lifetime Access' },
              { value: '24/7', label: 'Learn Anytime' },
            ].map((stat, i) => (
              <div key={stat.label} className={`opacity-0 animate-fade-up delay-${(i + 1) * 100}`}>
                <p className="text-2xl md:text-3xl font-serif text-gold mb-1">{stat.value}</p>
                <p className="text-cream/50 text-xs tracking-wide uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 md:py-28 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.05),transparent_50%)]" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
          <div className="bg-deep p-6 sm:p-10 md:p-16 grain relative">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-gold/20" aria-hidden="true" />
            <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-gold/20" aria-hidden="true" />

            <div className="grid lg:grid-cols-2 gap-10 md:gap-14 items-center">
              {/* Left: Value Story */}
              <div className="opacity-0 animate-fade-up">
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 text-xs font-medium tracking-[0.2em] uppercase mb-8">
                  <Star className="w-3.5 h-3.5" aria-hidden="true" />
                  Best Value
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream mb-6 leading-tight">
                  All-Access<br />Membership
                </h2>
                <p className="text-cream/60 text-base md:text-lg mb-8 leading-relaxed">
                  Why buy one course when you can have them all? Unlock the entire library
                  plus every future course — for less than a single private lesson.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    'Unlimited access to all courses',
                    'Every future course included automatically',
                    'Downloadable worksheets & resources',
                    'Private community access',
                    'Cancel anytime — no contracts'
                  ].map((feature) => (
                    <div key={feature} className="flex items-start gap-3 text-cream/70">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Pricing Card */}
              <div className="opacity-0 animate-fade-up delay-200 bg-charcoal p-6 sm:p-8 md:p-10 text-center relative">
                {/* Subtle top gold line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 bg-gold" aria-hidden="true" />

                <p className="text-cream/40 text-sm mb-3 line-through">${totalCourseValue} value</p>
                <div className="mb-2">
                  <span className="text-5xl sm:text-6xl md:text-7xl font-serif text-cream">$29</span>
                  <span className="text-cream/50 text-lg md:text-xl">/month</span>
                </div>
                <p className="text-gold text-sm font-medium mb-8">
                  Save ${totalCourseValue - 29} vs buying separately
                </p>

                <button className="bg-gold text-charcoal px-8 py-5 font-medium hover:bg-cream transition-colors duration-200 w-full text-base md:text-lg mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream">
                  Start 7-Day Free Trial
                </button>
                <p className="text-cream/30 text-sm">
                  No credit card required to start
                </p>

                <div className="mt-8 pt-8 border-t border-cream/10">
                  <p className="text-cream/50 text-sm">
                    Join <span className="text-cream font-medium">500+</span> riders already learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Divider */}
      <section className="py-12 md:py-16 bg-cream relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-8 bg-gold/30" aria-hidden="true" />
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center">
          <p className="opacity-0 animate-fade-in text-slate text-base md:text-lg">
            Prefer to own individual courses? Explore each program below.
          </p>
        </div>
      </section>

      {/* Individual Courses */}
      <section id="courses" className="py-16 md:py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <p className="opacity-0 animate-fade-in text-gold font-medium tracking-[0.25em] text-xs uppercase mb-4">
              The Curriculum
            </p>
            <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal mb-5">
              Individual Courses
            </h2>
            <p className="opacity-0 animate-fade-up delay-200 text-slate text-base md:text-lg max-w-2xl mx-auto">
              Each course is a complete transformation program. Buy once, own forever.
            </p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {courses.map((course, index) => (
              <div
                key={course.id}
                className={`opacity-0 animate-fade-up delay-${(index + 1) * 100} bg-white shadow-sm hover:shadow-lg transition-colors duration-200 group`}
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Course Visual */}
                  <div className="lg:col-span-2 bg-charcoal min-h-[240px] sm:min-h-[300px] lg:min-h-full flex items-center justify-center relative overflow-hidden grain">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate/20 to-charcoal" aria-hidden="true" />
                    {/* Large course number */}
                    <span className="absolute bottom-4 right-6 text-cream/[0.04] font-serif text-[120px] leading-none select-none" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="relative z-10 text-center p-8">
                      <div className="w-14 h-14 mx-auto mb-4 border border-gold/30 flex items-center justify-center">
                        <Play className="w-5 h-5 text-gold" aria-hidden="true" />
                      </div>
                      <p className="text-cream/40 text-xs tracking-widest uppercase">Course Preview</p>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="lg:col-span-3 p-6 sm:p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-4">
                      <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
                        {course.category}
                      </span>
                      <span className="text-slate/30" aria-hidden="true">·</span>
                      <span className="text-slate text-sm flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" aria-hidden="true" /> {course.duration}
                      </span>
                      <span className="text-slate/30" aria-hidden="true">·</span>
                      <span className="text-slate text-sm flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" aria-hidden="true" /> {course.lessons}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-charcoal mb-3">
                      {course.title}
                    </h3>

                    <p className="text-slate text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-2.5 mb-8">
                      {course.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-charcoal/70 text-sm">
                          <Zap className="w-3.5 h-3.5 text-gold flex-shrink-0" aria-hidden="true" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6 border-t border-cream">
                      <div>
                        <span className="text-2xl sm:text-3xl font-serif text-charcoal">${course.price}</span>
                        <span className="text-slate/60 ml-2 text-sm">one-time</span>
                      </div>
                      <div className="flex gap-4 items-center">
                        <button
                          className="bg-charcoal text-cream px-6 py-3 text-sm font-medium hover:bg-slate transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                          disabled
                        >
                          Coming Soon
                        </button>
                        <button className="text-gold text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                          Notify Me <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="opacity-0 animate-fade-up mt-12 md:mt-16 text-center p-6 sm:p-8 bg-charcoal relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gold" aria-hidden="true" />
            <p className="text-cream font-serif text-lg md:text-xl mb-2">
              All 3 courses = <span className="line-through text-cream/40">${totalCourseValue}</span>
            </p>
            <p className="text-cream/50 text-sm">
              Or get everything for just <span className="text-gold font-medium">$29/month</span> with membership.{' '}
              <a
                href="#membership"
                className="text-gold font-medium ml-1 hover:text-cream transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Start free trial&nbsp;→
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-deep grain relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-px bg-gradient-to-l from-gold/20 to-transparent" aria-hidden="true" />
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <p className="opacity-0 animate-fade-in text-gold font-medium tracking-[0.25em] text-xs uppercase text-center mb-4">
            Questions
          </p>
          <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl font-serif text-cream text-center mb-14 md:mb-16">
            Frequently Asked
          </h2>

          <div className="space-y-0">
            {[
              {
                q: 'What\u2019s the difference between membership and buying a course?',
                a: 'Membership gives you access to everything for $29/month — all current courses plus every future release. Buying a course means you own it forever with a one-time payment. If you want it all, membership is the best value. If you only need one topic, buy that course.'
              },
              {
                q: 'Can I cancel my membership anytime?',
                a: 'Absolutely. No contracts, no commitments, no cancellation fees. Cancel from your account dashboard in two clicks. Your access continues until the end of your billing period.'
              },
              {
                q: 'How long do I have access to purchased courses?',
                a: 'Forever. Once you buy a course, it\u2019s yours. Revisit the material whenever you want, as many times as you want. All future updates to that course are included at no extra cost.'
              },
              {
                q: 'What format are the courses in?',
                a: 'Each course includes HD video lessons, downloadable PDF worksheets, and practical exercises you can do at home or at the barn. Watch on any device — desktop, tablet, or phone.'
              },
              {
                q: 'I\u2019m a beginner. Are these courses for me?',
                a: 'Yes. While I coach at the highest levels, these courses are designed to meet you where you are. The fundamentals apply whether you\u2019re just starting out or preparing for grand prix. Better foundations = better riding at every level.'
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`opacity-0 animate-fade-up delay-${Math.min((i + 1) * 100, 600)} border-b border-cream/10 py-8 ${i === 0 ? 'border-t' : ''}`}
              >
                <h3 className="text-lg md:text-xl font-medium text-cream mb-4">
                  {faq.q}
                </h3>
                <p className="text-cream/50 leading-relaxed text-sm md:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gold relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(0,0,0,0.04),transparent_60%)]" aria-hidden="true" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-12 bg-charcoal/20" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="opacity-0 animate-fade-up text-3xl sm:text-4xl md:text-5xl font-serif text-charcoal mb-6 leading-tight">
            Ready to Transform<br className="hidden sm:block" /> Your Riding?
          </h2>
          <p className="opacity-0 animate-fade-up delay-100 text-charcoal/60 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Start your 7-day free trial today. Full access to everything.
            No credit card required.
          </p>
          <div className="opacity-0 animate-fade-up delay-200">
            <a
              href="#membership"
              className="inline-block bg-charcoal text-cream px-10 py-5 font-medium hover:bg-deep transition-colors duration-200 text-base md:text-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
