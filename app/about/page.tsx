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
      {/* Hero - Full Viewport Dramatic */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 border border-cream/20 rotate-45 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 border border-cream/20 rotate-45 translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <p className="text-gold font-medium text-sm uppercase tracking-[0.3em] mb-8">
            The Story
          </p>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif font-semibold text-cream mb-8 leading-[0.9]">
            Rider.<br />
            <span className="text-gold">Educator.</span><br />
            Advocate.
          </h1>
          <p className="text-xl md:text-2xl text-cream/70 max-w-2xl mx-auto font-light">
            Transforming the way we understand the horse-human partnership—one rider at a time.
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-cream/40 text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* Portrait + Opening Story - Asymmetric Split */}
      <section className="bg-cream">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Photo Side */}
          <div className="relative min-h-[60vh] lg:min-h-full order-2 lg:order-1">
            <Image
              src="/images/about-portrait.jpg"
              alt="Samantha Baer with her horse"
              fill
              className="object-cover"
              priority
            />
            {/* Subtle Gold Accent */}
            <div className="absolute bottom-0 left-0 w-24 h-1 bg-gold" />
          </div>
          
          {/* Story Side */}
          <div className="flex items-center order-1 lg:order-2 py-24 lg:py-32">
            <div className="max-w-xl mx-auto px-8 lg:px-16">
              <span className="text-gold font-medium text-sm uppercase tracking-[0.2em] mb-6 block">
                My Journey
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-8 leading-tight">
                I wasn't born into this world—<br />
                <span className="text-slate">I fell into it.</span>
              </h2>
              <div className="space-y-6 text-lg text-slate leading-relaxed">
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

      {/* Pull Quote - Dramatic Break */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[20rem] font-serif text-cream/[0.02] leading-none select-none">
          "
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <blockquote className="text-3xl md:text-4xl lg:text-5xl font-serif text-cream leading-snug mb-8">
            "Success isn't about the ribbons on the wall. It's about the <span className="text-gold">partnership</span> you build in the arena."
          </blockquote>
          <cite className="text-cream/50 font-medium tracking-wide">— Samantha Baer</cite>
        </div>
      </section>

      {/* Deeper Story - Text Heavy with Visual Interest */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sidebar Stats */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 self-start">
              <div className="space-y-8 border-l-2 border-gold pl-8">
                <div>
                  <span className="text-5xl font-serif text-charcoal font-semibold">15+</span>
                  <p className="text-slate mt-1">Years competing</p>
                </div>
                <div>
                  <span className="text-5xl font-serif text-charcoal font-semibold">200+</span>
                  <p className="text-slate mt-1">Podcast episodes</p>
                </div>
                <div>
                  <span className="text-5xl font-serif text-charcoal font-semibold">50K+</span>
                  <p className="text-slate mt-1">Community members</p>
                </div>
              </div>
            </div>
            
            {/* Main Story */}
            <div className="lg:col-span-8">
              <h2 className="text-4xl font-serif font-semibold text-charcoal mb-8">
                From Rider to Educator
              </h2>
              <div className="prose prose-lg text-slate max-w-none space-y-6">
                <p className="text-xl leading-relaxed">
                  As a professional event rider, I've lived the highs—the clear rounds, the 
                  personal bests, the moments where everything clicks. But I've also lived 
                  the lows. The injuries. The doubt. The days when nothing seems to work.
                </p>
                <p>
                  Those struggles taught me something important: <strong className="text-charcoal">the answer isn't always 
                  to push harder.</strong> Sometimes it's to understand deeper. That realization 
                  changed everything.
                </p>
                <p>
                  I started studying biomechanics—not just equine, but human. How does my 
                  body affect my horse? I dove into sports psychology. How does my mindset 
                  show up in my riding? I researched welfare science. What does my horse 
                  actually need to thrive?
                </p>
                <p>
                  The answers I found were too important to keep to myself. So I started 
                  talking about them. First in clinics. Then on social media. Eventually, 
                  through The Elevated Equestrian podcast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars - Dynamic Cards */}
      <section className="py-24 lg:py-32 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm uppercase tracking-[0.2em] mb-4 block">
              My Approach
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-cream">
              Three Pillars of Excellence
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-px bg-cream/10">
            {/* Pillar 1 */}
            <div className="bg-charcoal p-10 lg:p-12 group hover:bg-slate/20 transition-colors">
              <div className="w-14 h-14 border border-gold flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                <Target className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-cream mb-4">Biomechanics</h3>
              <p className="text-cream/70 leading-relaxed mb-6">
                Understanding how both horse and rider move. When you know the mechanics, 
                you can solve problems at their source—not just mask symptoms.
              </p>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">
                01
              </span>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-charcoal p-10 lg:p-12 group hover:bg-slate/20 transition-colors">
              <div className="w-14 h-14 border border-gold flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                <BookOpen className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-cream mb-4">Mindset</h3>
              <p className="text-cream/70 leading-relaxed mb-6">
                The mental game is half the battle. Competition nerves, confidence, focus—
                your brain is either your greatest asset or your biggest obstacle.
              </p>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">
                02
              </span>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-charcoal p-10 lg:p-12 group hover:bg-slate/20 transition-colors">
              <div className="w-14 h-14 border border-gold flex items-center justify-center mb-8 group-hover:bg-gold/10 transition-colors">
                <Heart className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif text-cream mb-4">Welfare</h3>
              <p className="text-cream/70 leading-relaxed mb-6">
                Happy horses perform better. Period. Physical health, mental wellbeing, 
                and ethical training aren't optional—they're the foundation.
              </p>
              <span className="text-gold text-sm font-medium uppercase tracking-wider">
                03
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Podcast - Feature Section */}
      <section className="py-24 lg:py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 bg-charcoal text-cream px-4 py-2 mb-8">
                <Mic className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium uppercase tracking-wider">The Podcast</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal mb-6 leading-tight">
                The Elevated Equestrian
              </h2>
              <p className="text-xl text-slate mb-6 leading-relaxed">
                Conversations with the brilliant minds shaping our sport. Olympic riders, 
                equine scientists, biomechanics experts, and mental performance coaches—
                sharing wisdom you won't find anywhere else.
              </p>
              <p className="text-slate mb-8">
                What started as curiosity became a community. Thousands of riders tuning 
                in each week, hungry for the same knowledge I was.
              </p>
              <Link 
                href="/podcast" 
                className="inline-flex items-center gap-2 text-gold font-medium group"
              >
                Listen to Episodes 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="aspect-square bg-charcoal flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-4 border border-cream/10" />
                <div className="text-center relative z-10 p-8">
                  <span className="text-8xl font-serif text-gold font-semibold">200+</span>
                  <p className="text-cream/80 text-xl mt-4">Episodes & Growing</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values - Horizontal Scroll on Mobile */}
      <section className="py-24 lg:py-32 bg-slate/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold font-medium text-sm uppercase tracking-[0.2em] mb-4 block">
              What Drives Me
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-charcoal">
              My Values
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 border-t-2 border-gold">
              <Award className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-serif text-charcoal mb-2">Excellence</h3>
              <p className="text-slate text-sm">Never settling. Always growing.</p>
            </div>
            <div className="bg-white p-8 border-t-2 border-gold">
              <Heart className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-serif text-charcoal mb-2">Compassion</h3>
              <p className="text-slate text-sm">For horses. For riders. For the journey.</p>
            </div>
            <div className="bg-white p-8 border-t-2 border-gold">
              <Target className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-serif text-charcoal mb-2">Integrity</h3>
              <p className="text-slate text-sm">Honest methods. Ethical practices.</p>
            </div>
            <div className="bg-white p-8 border-t-2 border-gold">
              <Users className="w-8 h-8 text-gold mb-4" />
              <h3 className="text-xl font-serif text-charcoal mb-2">Community</h3>
              <p className="text-slate text-sm">We rise by lifting others.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Bold Gold Band */}
      <section className="py-24 lg:py-32 bg-gold relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 border border-charcoal/10 rotate-45 translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-48 h-48 border border-charcoal/10 rotate-45 -translate-x-1/2 translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-charcoal mb-6 leading-tight">
            Let's Build Something<br />Together
          </h2>
          <p className="text-xl text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Whether you want to work together, be a guest on the podcast, or just 
            say hi—I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-10 py-5 font-medium hover:bg-charcoal/90 transition-colors"
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/podcast" 
              className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal px-10 py-5 font-medium hover:bg-charcoal/10 transition-colors"
            >
              Listen to the Podcast
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
