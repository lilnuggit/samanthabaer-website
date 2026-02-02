import Link from 'next/link'
import { Check, Star, Play, Clock, BookOpen, Zap, ArrowRight } from 'lucide-react'

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
      <section className="min-h-[70vh] bg-deep-black flex items-center relative overflow-hidden">
        {/* Subtle gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-deep-black to-deep-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-6 py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold font-medium tracking-widest text-sm uppercase mb-6">
              Online Education
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-cream mb-8 leading-[1.1]">
              Elevate Your Riding.<br />
              <span className="text-gold">On Your Schedule.</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/70 mb-10 max-w-2xl leading-relaxed">
              Deep-dive programs that transform your understanding of biomechanics, 
              mindset, and ethical horsemanship — taught by an Olympic-level coach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#membership" className="bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 transition-colors text-center">
                Get All-Access for $29/mo
              </a>
              <a href="#courses" className="border border-cream/30 text-cream px-8 py-4 font-medium hover:bg-cream/10 transition-colors text-center">
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Bar */}
      <section className="bg-charcoal border-t border-cream/10">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif text-gold mb-1">60+</p>
              <p className="text-cream/60 text-sm">Video Lessons</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-gold mb-1">15+</p>
              <p className="text-cream/60 text-sm">Modules</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-gold mb-1">∞</p>
              <p className="text-cream/60 text-sm">Lifetime Access</p>
            </div>
            <div>
              <p className="text-3xl font-serif text-gold mb-1">24/7</p>
              <p className="text-cream/60 text-sm">Learn Anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-24 bg-gold relative overflow-hidden">
        {/* Texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,0,0,0.05),transparent_50%)]" />
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-deep-black p-8 md:p-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Value Story */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/10 text-gold px-4 py-2 text-sm font-medium tracking-wide uppercase mb-8">
                  <Star className="w-4 h-4" />
                  Best Value
                </div>
                <h2 className="text-4xl md:text-5xl font-serif text-cream mb-6 leading-tight">
                  All-Access<br />Membership
                </h2>
                <p className="text-cream/70 text-lg mb-8 leading-relaxed">
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
                    <div key={feature} className="flex items-center gap-3 text-cream/80">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Pricing Card */}
              <div className="bg-charcoal p-8 md:p-10 text-center">
                <p className="text-cream/50 text-sm mb-2 line-through">${totalCourseValue} value</p>
                <div className="mb-2">
                  <span className="text-6xl md:text-7xl font-serif text-cream">$29</span>
                  <span className="text-cream/60 text-xl">/month</span>
                </div>
                <p className="text-gold text-sm font-medium mb-8">
                  Save ${totalCourseValue - 29} vs buying separately
                </p>
                
                <button className="bg-gold text-charcoal px-8 py-5 font-medium hover:bg-gold/90 transition-colors w-full text-lg mb-4">
                  Start 7-Day Free Trial
                </button>
                <p className="text-cream/40 text-sm">
                  No credit card required to start
                </p>

                <div className="mt-8 pt-8 border-t border-cream/10">
                  <p className="text-cream/60 text-sm">
                    Join <span className="text-cream">500+</span> riders already learning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Divider */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-slate text-lg">
            Prefer to own individual courses? Scroll down to explore each program in detail.
          </p>
        </div>
      </section>

      {/* Individual Courses */}
      <section id="courses" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-gold font-medium tracking-widest text-sm uppercase mb-4">
              The Curriculum
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
              Individual Courses
            </h2>
            <p className="text-slate text-lg max-w-2xl mx-auto">
              Each course is a complete transformation program. Buy once, own forever.
            </p>
          </div>
          
          <div className="space-y-8">
            {courses.map((course, index) => (
              <div key={course.id} className="bg-white shadow-sm hover:shadow-lg transition-all group">
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Course Image Placeholder */}
                  <div className="lg:col-span-2 bg-charcoal min-h-[300px] lg:min-h-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-slate to-charcoal opacity-50" />
                    <div className="relative z-10 text-center p-8">
                      <div className="w-16 h-16 mx-auto mb-4 border border-gold/30 flex items-center justify-center">
                        <Play className="w-6 h-6 text-gold" />
                      </div>
                      <p className="text-cream/50 text-sm">Course Preview</p>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="lg:col-span-3 p-8 md:p-10">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="text-gold text-sm font-medium tracking-wide uppercase">
                        {course.category}
                      </span>
                      <span className="text-slate/40">•</span>
                      <span className="text-slate text-sm flex items-center gap-1">
                        <BookOpen className="w-4 h-4" /> {course.duration}
                      </span>
                      <span className="text-slate/40">•</span>
                      <span className="text-slate text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {course.lessons}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-serif text-charcoal mb-4">
                      {course.title}
                    </h3>
                    
                    <p className="text-slate text-lg mb-6 leading-relaxed">
                      {course.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      {course.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-charcoal/80 text-sm">
                          <Zap className="w-4 h-4 text-gold flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                      <div>
                        <span className="text-3xl font-serif text-charcoal">${course.price}</span>
                        <span className="text-slate ml-2">one-time</span>
                      </div>
                      <div className="flex gap-4">
                        <button className="bg-charcoal text-cream px-6 py-3 font-medium hover:bg-slate transition-colors">
                          Coming Soon
                        </button>
                        <button className="text-gold font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                          Notify Me <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Note */}
          <div className="mt-16 text-center p-8 bg-charcoal/5">
            <p className="text-charcoal font-serif text-xl mb-2">
              All 3 courses = <span className="line-through text-slate">${totalCourseValue}</span>
            </p>
            <p className="text-slate">
              Or get everything for just <span className="text-gold font-medium">$29/month</span> with membership.
              <a href="#membership" className="text-gold font-medium ml-2 hover:underline">
                Start free trial →
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-deep-black">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-gold font-medium tracking-widest text-sm uppercase text-center mb-4">
            Questions
          </p>
          <h2 className="text-4xl font-serif text-cream text-center mb-16">
            Frequently Asked
          </h2>
          
          <div className="space-y-10">
            <div className="border-b border-cream/10 pb-10">
              <h3 className="text-xl font-medium text-cream mb-4">
                What's the difference between membership and buying a course?
              </h3>
              <p className="text-cream/60 leading-relaxed">
                Membership gives you access to everything for $29/month — all current courses 
                plus every future release. Buying a course means you own it forever with a 
                one-time payment. If you want it all, membership is the best value. If you 
                only need one topic, buy that course.
              </p>
            </div>
            
            <div className="border-b border-cream/10 pb-10">
              <h3 className="text-xl font-medium text-cream mb-4">
                Can I cancel my membership anytime?
              </h3>
              <p className="text-cream/60 leading-relaxed">
                Absolutely. No contracts, no commitments, no cancellation fees. Cancel 
                from your account dashboard in two clicks. Your access continues until 
                the end of your billing period.
              </p>
            </div>
            
            <div className="border-b border-cream/10 pb-10">
              <h3 className="text-xl font-medium text-cream mb-4">
                How long do I have access to purchased courses?
              </h3>
              <p className="text-cream/60 leading-relaxed">
                Forever. Once you buy a course, it's yours. Revisit the material whenever 
                you want, as many times as you want. All future updates to that course 
                are included at no extra cost.
              </p>
            </div>

            <div className="border-b border-cream/10 pb-10">
              <h3 className="text-xl font-medium text-cream mb-4">
                What format are the courses in?
              </h3>
              <p className="text-cream/60 leading-relaxed">
                Each course includes HD video lessons, downloadable PDF worksheets, 
                and practical exercises you can do at home or at the barn. Watch on 
                any device — desktop, tablet, or phone.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium text-cream mb-4">
                I'm a beginner. Are these courses for me?
              </h3>
              <p className="text-cream/60 leading-relaxed">
                Yes. While I coach at the highest levels, these courses are designed 
                to meet you where you are. The fundamentals apply whether you're just 
                starting out or preparing for grand prix. Better foundations = better 
                riding at every level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">
            Ready to Transform Your Riding?
          </h2>
          <p className="text-charcoal/70 text-lg mb-10 max-w-2xl mx-auto">
            Start your 7-day free trial today. Full access to everything. 
            No credit card required.
          </p>
          <a href="#membership" className="inline-block bg-charcoal text-cream px-10 py-5 font-medium hover:bg-deep-black transition-colors text-lg">
            Start Free Trial
          </a>
        </div>
      </section>
    </main>
  )
}
