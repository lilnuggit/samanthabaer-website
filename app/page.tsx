import Link from 'next/link'
import Image from 'next/image'
import { Play, Mic, BookOpen, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section - Editorial Luxury */}
      <section className="relative min-h-[100svh] flex items-end md:items-center bg-deep overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-xc.jpg"
            alt="Samantha Baer jumping cross-country"
            fill
            className="object-cover object-center scale-105 animate-scale-in"
            priority
            sizes="100vw"
          />
          {/* Dramatic gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/70 to-deep/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-deep/80 via-transparent to-transparent" />
        </div>
        
        {/* Grain texture */}
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />
        
        {/* Vertical accent text - desktop only */}
        <div 
          className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 animate-fade-in delay-500"
          aria-hidden="true"
        >
          <span className="text-gold/30 text-xs tracking-[0.4em] uppercase writing-mode-vertical rotate-180"
                style={{ writingMode: 'vertical-rl' }}>
            EST. 2024 — The Elevated Equestrian
          </span>
        </div>
        
        {/* Main content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pb-16 pt-32 md:py-24">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="animate-fade-up opacity-0 delay-100">
              <span className="inline-block text-gold text-xs md:text-sm font-medium tracking-[0.2em] uppercase mb-6 md:mb-8">
                Professional Event Rider & Educator
              </span>
            </div>
            
            {/* Main headline - dramatic sizing */}
            <h1 className="animate-fade-up opacity-0 delay-200">
              <span className="block text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] mb-2">
                Elevate Your
              </span>
              <span className="block text-cream text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1]">
                Partnership
              </span>
              <span className="block text-gold text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-semibold leading-[1.1] italic">
                With Your Horse
              </span>
            </h1>
            
            {/* Subhead */}
            <p className="animate-fade-up opacity-0 delay-300 text-cream/70 text-base md:text-lg mt-6 md:mt-8 max-w-xl leading-relaxed">
              Biomechanics. Mindset. Ethical horsemanship. Join thousands of riders 
              transforming their connection with their horses.
            </p>
            
            {/* CTA buttons */}
            <div className="animate-fade-up opacity-0 delay-400 flex flex-col sm:flex-row gap-4 mt-8 md:mt-10">
              <Link 
                href="/courses" 
                className="group inline-flex items-center justify-center gap-3 bg-gold text-deep px-8 py-4 font-semibold hover:bg-cream transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
              >
                Explore Courses
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <Link 
                href="/podcast" 
                className="group inline-flex items-center justify-center gap-3 border border-cream/30 text-cream px-8 py-4 font-medium hover:bg-cream/10 hover:border-cream/50 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-deep"
              >
                <Play className="w-4 h-4" aria-hidden="true" />
                Listen to Podcast
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" aria-hidden="true" />
      </section>

      {/* What I Offer */}
      <section className="py-20 md:py-32 bg-cream relative">
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
              What I Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-4">
              Your Journey to Excellence
            </h2>
            <p className="text-slate max-w-xl mx-auto">
              Whether you're just starting out or competing at the highest levels, 
              there's always room to grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {/* Podcast */}
            <div className="group bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-charcoal mb-3">
                The Elevated Equestrian
              </h3>
              <p className="text-slate text-sm mb-6 leading-relaxed">
                Weekly conversations with world-class riders, trainers, and equine 
                professionals sharing insights you won't find anywhere else.
              </p>
              <Link href="/podcast" className="text-gold font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Listen Now <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Courses */}
            <div className="group bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-charcoal mb-3">
                Online Courses
              </h3>
              <p className="text-slate text-sm mb-6 leading-relaxed">
                Deep-dive programs on biomechanics, rider fitness, and horse welfare. 
                Learn at your own pace with lifetime access.
              </p>
              <Link href="/courses" className="text-gold font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Browse Courses <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>

            {/* Work Together */}
            <div className="group bg-white p-8 md:p-10 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true" />
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-gold" aria-hidden="true" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-semibold text-charcoal mb-3">
                Work With Me
              </h3>
              <p className="text-slate text-sm mb-6 leading-relaxed">
                From clinics to one-on-one coaching, let's create a personalized 
                path to help you and your horse thrive together.
              </p>
              <Link href="/contact" className="text-gold font-medium text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                Get In Touch <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />
        
        {/* Decorative element */}
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-64 border border-gold/10" aria-hidden="true" />
        
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="order-2 md:order-1">
              <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase mb-4 block">
                Meet Samantha
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-cream mb-6 leading-tight">
                Rider. Educator.<br />
                <span className="text-gold italic">Advocate.</span>
              </h2>
              <p className="text-cream/70 mb-4 leading-relaxed">
                As a professional event rider and host of The Elevated Equestrian podcast, 
                I've dedicated my career to understanding what makes the horse-human 
                partnership truly thrive.
              </p>
              <p className="text-cream/70 mb-8 leading-relaxed">
                My approach combines classical principles with modern sport science, 
                always keeping the horse's welfare at the center of everything we do.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                Read My Story <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] max-w-sm mx-auto md:max-w-none">
                {/* Frame accent */}
                <div className="absolute -inset-4 border border-gold/20" aria-hidden="true" />
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Samantha with her horse"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gold relative overflow-hidden">
        <div className="grain absolute inset-0 pointer-events-none" aria-hidden="true" />
        
        {/* Decorative lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-charcoal/10" aria-hidden="true" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-charcoal/10" aria-hidden="true" />
        
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-charcoal mb-6">
            Ready to Transform<br />Your Riding?
          </h2>
          <p className="text-charcoal/70 mb-10 max-w-xl mx-auto">
            Join our community of riders committed to excellence, ethical horsemanship, 
            and continuous growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-8 py-4 font-semibold hover:bg-deep transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
            >
              Start Learning Today
            </Link>
            <Link 
              href="/podcast" 
              className="inline-flex items-center justify-center gap-2 border border-charcoal/30 text-charcoal px-8 py-4 font-medium hover:bg-charcoal/10 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-charcoal focus-visible:ring-offset-2 focus-visible:ring-offset-gold"
            >
              Free Podcast Episodes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
