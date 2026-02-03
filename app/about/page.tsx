import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Heart, Target, Mic, BookOpen, Users } from 'lucide-react'

export const metadata = {
  title: 'About | Samantha Baer',
  description: 'Professional event rider, educator, and host of The Elevated Equestrian podcast.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero — Full Viewport Dramatic */}
      <section className="relative min-h-[85svh] flex items-center justify-center bg-deep grain overflow-hidden">
        {/* Geometric background */}
        <div className="absolute inset-0 opacity-[0.04]" aria-hidden="true">
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 border border-cream/20 rotate-45 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 border border-cream/20 rotate-45 translate-x-1/2 translate-y-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-gold/10 rotate-12" />
        </div>

        {/* Ambient glow */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gold/[0.03] blur-3xl" aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 text-center">
          <p className="opacity-0 animate-fade-up text-gold font-medium text-xs sm:text-sm uppercase tracking-[0.3em] mb-6 sm:mb-8">
            The Story
          </p>
          <h1 className="opacity-0 animate-fade-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-cream mb-6 sm:mb-8 leading-[0.9] text-balance">
            Rider.<br />
            <span className="text-gold italic">Educator.</span><br />
            Advocate.
          </h1>
          <p className="opacity-0 animate-fade-up delay-200 text-lg sm:text-xl md:text-2xl text-cream/60 max-w-2xl mx-auto font-light leading-relaxed">
            Transforming the way we understand the horse–human partnership—one rider at a time.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in delay-600" aria-hidden="true">
          <span className="text-cream/30 text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <div className="w-px h-10 sm:h-12 bg-gradient-to-b from-gold/60 to-transparent" />
        </div>
      </section>

      {/* Portrait + Opening Story — Asymmetric Split */}
      <section className="bg-cream grain">
        <div className="grid lg:grid-cols-2 min-h-[80vh] lg:min-h-screen">
          {/* Photo Side */}
          <div className="relative min-h-[50vh] sm:min-h-[60vh] lg:min-h-full order-2 lg:order-1">
            <Image
              src="/images/about-portrait.jpg"
              alt="Samantha Baer with her horse"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Gold accent bar */}
            <div className="absolute bottom-0 left-0 w-20 sm:w-24 h-1 bg-gold" aria-hidden="true" />
            {/* Overlay fade for text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent lg:hidden" aria-hidden="true" />
          </div>

          {/* Story Side */}
          <div className="flex items-center order-1 lg:order-2 py-16 sm:py-20 lg:py-32">
            <div className="max-w-xl mx-auto px-6 sm:px-8 lg:px-16">
              <span className="opacity-0 animate-slide-in text-gold font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-4 sm:mb-6 block">
                My Journey
              </span>
              <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-6 sm:mb-8 leading-tight text-balance">
                I wasn't born into this world—<br />
                <span className="text-slate italic">I fell into it.</span>
              </h2>
              <div className="opacity-0 animate-fade-up delay-200 space-y-5 sm:space-y-6 text-base sm:text-lg text-slate leading-relaxed">
                <p>
                  There was no family farm, no legacy of riders before me. Just a kid who
                  couldn't stop staring at horses in fields and begging for lessons until
                  my parents finally gave in.
                </p>
                <p>
                  That obsession never faded. It evolved. From pony club to eventing, from
                  local shows to national competitions, each step revealed something new about
                  what's possible when you truly listen to your horse.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pull Quote — Dramatic Break */}
      <section className="py-20 sm:py-28 md:py-32 bg-charcoal grain relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[12rem] sm:text-[16rem] md:text-[20rem] font-serif text-cream/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
          &ldquo;
        </div>
        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <blockquote className="opacity-0 animate-scale-in text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-cream leading-snug mb-6 sm:mb-8">
            &ldquo;Success isn't about the ribbons on the wall. It's about the <span className="text-gold italic">partnership</span> you build in the arena.&rdquo;
          </blockquote>
          <cite className="opacity-0 animate-fade-in delay-300 text-cream/40 font-medium tracking-wide not-italic block">— Samantha Baer</cite>
        </div>
      </section>

      {/* Deeper Story — Text Heavy with Visual Interest */}
      <section className="py-16 sm:py-24 lg:py-32 bg-white grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Sidebar Stats */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <div className="space-y-6 sm:space-y-8 border-l-2 border-gold pl-6 sm:pl-8" role="list" aria-label="Key statistics">
                <div role="listitem" className="opacity-0 animate-slide-in">
                  <span className="text-4xl sm:text-5xl font-serif text-charcoal font-semibold" aria-label="Over 15 years competing">15+</span>
                  <p className="text-slate mt-1 text-sm sm:text-base">Years competing</p>
                </div>
                <div role="listitem" className="opacity-0 animate-slide-in delay-100">
                  <span className="text-4xl sm:text-5xl font-serif text-charcoal font-semibold" aria-label="Over 200 podcast episodes">200+</span>
                  <p className="text-slate mt-1 text-sm sm:text-base">Podcast episodes</p>
                </div>
                <div role="listitem" className="opacity-0 animate-slide-in delay-200">
                  <span className="text-4xl sm:text-5xl font-serif text-charcoal font-semibold" aria-label="Over 50 thousand community members">50K+</span>
                  <p className="text-slate mt-1 text-sm sm:text-base">Community members</p>
                </div>
              </div>
            </div>

            {/* Main Story */}
            <div className="lg:col-span-8">
              <h2 className="opacity-0 animate-fade-up text-3xl sm:text-4xl font-serif font-semibold text-charcoal mb-6 sm:mb-8 text-balance">
                From Rider to Educator
              </h2>
              <div className="opacity-0 animate-fade-up delay-100 space-y-5 sm:space-y-6 text-slate">
                <p className="text-lg sm:text-xl leading-relaxed">
                  As a professional event rider, I've lived the highs—the clear rounds, the
                  personal bests, the moments where everything clicks. But I've also lived
                  the lows. The injuries. The doubt. The days when nothing seems to work.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  Those struggles taught me something important: <strong className="text-charcoal">the answer isn't always
                  to push harder.</strong> Sometimes it's to understand deeper. That realization
                  changed everything.
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  I started studying biomechanics—not just equine, but human. How does my
                  body affect my horse? I dove into sports psychology. How does my mindset
                  show up in my riding? I researched welfare science. What does my horse
                  actually need to thrive?
                </p>
                <p className="text-base sm:text-lg leading-relaxed">
                  The answers I found were too important to keep to myself. So I started
                  talking about them. First in clinics. Then on social media. Eventually,
                  through The Elevated Equestrian podcast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars — Dynamic Cards */}
      <section className="py-16 sm:py-24 lg:py-32 bg-deep grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="opacity-0 animate-fade-in text-gold font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
              My Approach
            </span>
            <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-cream text-balance">
              Three Pillars of Excellence
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-cream/10">
            {/* Pillar 1 */}
            <div className="opacity-0 animate-fade-up delay-100 bg-deep p-8 sm:p-10 lg:p-12 group hover:bg-charcoal transition-colors duration-200">
              <div className="w-12 sm:w-14 h-12 sm:h-14 border border-gold/40 flex items-center justify-center mb-6 sm:mb-8 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                <Target className="w-6 sm:w-7 h-6 sm:h-7 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-cream mb-3 sm:mb-4">Biomechanics</h3>
              <p className="text-cream/60 leading-relaxed mb-6 text-sm sm:text-base">
                Understanding how both horse and rider move. When you know the mechanics,
                you can solve problems at their source—not just mask symptoms.
              </p>
              <span className="text-gold/40 text-xs font-medium uppercase tracking-[0.3em]" aria-hidden="true">
                01
              </span>
            </div>

            {/* Pillar 2 */}
            <div className="opacity-0 animate-fade-up delay-200 bg-deep p-8 sm:p-10 lg:p-12 group hover:bg-charcoal transition-colors duration-200">
              <div className="w-12 sm:w-14 h-12 sm:h-14 border border-gold/40 flex items-center justify-center mb-6 sm:mb-8 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                <BookOpen className="w-6 sm:w-7 h-6 sm:h-7 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-cream mb-3 sm:mb-4">Mindset</h3>
              <p className="text-cream/60 leading-relaxed mb-6 text-sm sm:text-base">
                The mental game is half the battle. Competition nerves, confidence, focus—your
                brain is either your greatest asset or your biggest obstacle.
              </p>
              <span className="text-gold/40 text-xs font-medium uppercase tracking-[0.3em]" aria-hidden="true">
                02
              </span>
            </div>

            {/* Pillar 3 */}
            <div className="opacity-0 animate-fade-up delay-300 bg-deep p-8 sm:p-10 lg:p-12 group hover:bg-charcoal transition-colors duration-200">
              <div className="w-12 sm:w-14 h-12 sm:h-14 border border-gold/40 flex items-center justify-center mb-6 sm:mb-8 group-hover:border-gold group-hover:bg-gold/5 transition-colors duration-200">
                <Heart className="w-6 sm:w-7 h-6 sm:h-7 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif text-cream mb-3 sm:mb-4">Welfare</h3>
              <p className="text-cream/60 leading-relaxed mb-6 text-sm sm:text-base">
                Happy horses perform better. Period. Physical health, mental wellbeing,
                and ethical training aren't optional—they're the foundation.
              </p>
              <span className="text-gold/40 text-xs font-medium uppercase tracking-[0.3em]" aria-hidden="true">
                03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Podcast — Feature Section */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            <div>
              <div className="opacity-0 animate-slide-in inline-flex items-center gap-3 bg-charcoal text-cream px-4 py-2 mb-6 sm:mb-8">
                <Mic className="w-4 h-4 text-gold" aria-hidden="true" />
                <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">The Podcast</span>
              </div>
              <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-5 sm:mb-6 leading-tight text-balance">
                The Elevated Equestrian
              </h2>
              <p className="opacity-0 animate-fade-up delay-200 text-lg sm:text-xl text-slate mb-5 sm:mb-6 leading-relaxed">
                Conversations with the brilliant minds shaping our sport. Olympic riders,
                equine scientists, biomechanics experts, and mental performance coaches—sharing
                wisdom you won't find anywhere else.
              </p>
              <p className="opacity-0 animate-fade-up delay-300 text-slate mb-6 sm:mb-8 text-sm sm:text-base">
                What started as curiosity became a community. Thousands of riders tuning
                in each week, hungry for the same knowledge I was.
              </p>
              <Link
                href="/podcast"
                className="opacity-0 animate-fade-up delay-400 inline-flex items-center gap-2 text-gold font-medium group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Listen to Episodes
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
              </Link>
            </div>

            {/* Visual Element */}
            <div className="relative opacity-0 animate-scale-in delay-200">
              <div className="aspect-square bg-charcoal flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-3 sm:inset-4 border border-cream/10" aria-hidden="true" />
                <div className="text-center relative z-10 p-6 sm:p-8">
                  <span className="text-6xl sm:text-7xl md:text-8xl font-serif text-gold font-semibold" aria-label="Over 200 episodes and growing">200+</span>
                  <p className="text-cream/70 text-base sm:text-lg md:text-xl mt-3 sm:mt-4">Episodes &amp; Growing</p>
                </div>
                <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-24 sm:w-32 h-24 sm:h-32 bg-gold/20" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values — Offset Grid */}
      <section className="py-16 sm:py-24 lg:py-32 bg-cream/50 grain">
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <span className="opacity-0 animate-fade-in text-gold font-medium text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4 block">
              What Drives Me
            </span>
            <h2 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-charcoal text-balance">
              My Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
            <div className="opacity-0 animate-fade-up delay-100 bg-white p-6 sm:p-8 border-t-2 border-gold hover:border-gold/80 transition-colors duration-200">
              <Award className="w-7 sm:w-8 h-7 sm:h-8 text-gold mb-3 sm:mb-4" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-serif text-charcoal mb-2">Excellence</h3>
              <p className="text-slate text-xs sm:text-sm">Never settling. Always growing.</p>
            </div>
            <div className="opacity-0 animate-fade-up delay-200 bg-white p-6 sm:p-8 border-t-2 border-gold hover:border-gold/80 transition-colors duration-200 lg:translate-y-4">
              <Heart className="w-7 sm:w-8 h-7 sm:h-8 text-gold mb-3 sm:mb-4" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-serif text-charcoal mb-2">Compassion</h3>
              <p className="text-slate text-xs sm:text-sm">For horses. For riders. For the journey.</p>
            </div>
            <div className="opacity-0 animate-fade-up delay-300 bg-white p-6 sm:p-8 border-t-2 border-gold hover:border-gold/80 transition-colors duration-200">
              <Target className="w-7 sm:w-8 h-7 sm:h-8 text-gold mb-3 sm:mb-4" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-serif text-charcoal mb-2">Integrity</h3>
              <p className="text-slate text-xs sm:text-sm">Honest methods. Ethical practices.</p>
            </div>
            <div className="opacity-0 animate-fade-up delay-400 bg-white p-6 sm:p-8 border-t-2 border-gold hover:border-gold/80 transition-colors duration-200 lg:translate-y-4">
              <Users className="w-7 sm:w-8 h-7 sm:h-8 text-gold mb-3 sm:mb-4" aria-hidden="true" />
              <h3 className="text-lg sm:text-xl font-serif text-charcoal mb-2">Community</h3>
              <p className="text-slate text-xs sm:text-sm">We rise by lifting others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Bold Gold Band */}
      <section className="py-16 sm:py-24 lg:py-32 bg-gold relative overflow-hidden grain">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 h-48 sm:h-64 border border-charcoal/10 rotate-45 translate-x-1/2 -translate-y-1/2" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-36 sm:w-48 h-36 sm:h-48 border border-charcoal/10 rotate-45 -translate-x-1/2 translate-y-1/2" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-5 sm:px-6 text-center relative z-10">
          <h2 className="opacity-0 animate-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal mb-5 sm:mb-6 leading-tight text-balance">
            Let's Build Something<br />Together
          </h2>
          <p className="opacity-0 animate-fade-up delay-100 text-base sm:text-lg md:text-xl text-charcoal/70 mb-8 sm:mb-10 max-w-2xl mx-auto">
            Whether you want to work together, be a guest on the podcast, or just
            say hi—I'd love to hear from you.
          </p>
          <div className="opacity-0 animate-fade-up delay-200 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-8 sm:px-10 py-4 sm:py-5 font-medium hover:bg-deep transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
            <Link
              href="/podcast"
              className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal px-8 sm:px-10 py-4 sm:py-5 font-medium hover:bg-charcoal/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal"
            >
              Listen to the Podcast
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
