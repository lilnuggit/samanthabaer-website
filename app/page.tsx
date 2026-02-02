import Link from 'next/link'
import Image from 'next/image'
import { Play, Mic, BookOpen, ArrowRight, Star, ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section - Full Impact */}
      <section className="relative min-h-screen flex flex-col justify-center bg-deepBlack">
        <Image
          src="/images/hero-xc.jpg"
          alt="Samantha Baer jumping cross-country"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deepBlack/80 via-deepBlack/60 to-deepBlack/90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-8">
            Professional Event Rider & Educator
          </p>
          
          <h1 className="font-serif text-cream leading-[0.95] mb-8">
            <span className="block text-6xl md:text-8xl lg:text-9xl font-bold">
              Elevate Your
            </span>
            <span className="block text-6xl md:text-8xl lg:text-9xl font-bold text-gold">
              Partnership
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cream/70 mb-12 max-w-xl leading-relaxed font-light">
            Biomechanics. Mindset. Ethical horsemanship. 
            Transform your connection with your horse.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/courses" 
              className="group inline-flex items-center justify-center gap-3 bg-gold text-deepBlack px-10 py-5 text-lg font-semibold hover:bg-cream transition-colors"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/podcast" 
              className="group inline-flex items-center justify-center gap-3 border-2 border-cream/40 text-cream px-10 py-5 text-lg font-medium hover:bg-cream/10 hover:border-cream/60 transition-all"
            >
              <Play className="w-5 h-5" />
              Listen to Podcast
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <ChevronDown className="w-8 h-8 text-cream/40 animate-bounce" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20">
            <p className="text-gold text-sm font-medium tracking-[0.25em] uppercase mb-4">
              What We Offer
            </p>
            <h2 className="text-5xl md:text-6xl font-serif font-bold text-charcoal leading-tight">
              Your Journey to<br />Excellence
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {/* Podcast */}
            <div className="group bg-white p-10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-8">
                <Mic className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                The Elevated Equestrian
              </h3>
              <p className="text-slate mb-6 leading-relaxed">
                Weekly conversations with world-class riders, trainers, and equine 
                professionals sharing insights you won't find anywhere else.
              </p>
              <Link href="/podcast" className="inline-flex items-center gap-2 text-charcoal font-semibold group-hover:text-gold transition-colors">
                Listen Now 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Courses */}
            <div className="group bg-white p-10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-8">
                <BookOpen className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Online Courses
              </h3>
              <p className="text-slate mb-6 leading-relaxed">
                Deep-dive programs on biomechanics, rider fitness, and horse welfare. 
                Learn at your own pace with lifetime access.
              </p>
              <Link href="/courses" className="inline-flex items-center gap-2 text-charcoal font-semibold group-hover:text-gold transition-colors">
                Browse Courses 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Work Together */}
            <div className="group bg-white p-10 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-charcoal flex items-center justify-center mb-8">
                <Star className="w-7 h-7 text-gold" />
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal mb-4">
                Work With Me
              </h3>
              <p className="text-slate mb-6 leading-relaxed">
                From clinics to one-on-one coaching, let's create a personalized 
                path to help you and your horse thrive together.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-charcoal font-semibold group-hover:text-gold transition-colors">
                Get In Touch 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview - Bold Split */}
      <section className="bg-deepBlack">
        <div className="grid lg:grid-cols-2">
          {/* Image Side */}
          <div className="relative min-h-[600px] lg:min-h-[800px]">
            <Image
              src="/images/about-portrait.jpg"
              alt="Samantha with her horse"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-deepBlack/20 lg:to-deepBlack/40" />
          </div>
          
          {/* Content Side */}
          <div className="flex items-center py-20 lg:py-32 px-8 lg:px-16">
            <div className="max-w-lg">
              <p className="text-gold text-sm font-medium tracking-[0.25em] uppercase mb-6">
                Meet Samantha
              </p>
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-cream leading-tight mb-8">
                Rider.<br />
                Educator.<br />
                Advocate.
              </h2>
              <div className="space-y-6 mb-10">
                <p className="text-cream/70 text-lg leading-relaxed">
                  As a professional event rider and host of The Elevated Equestrian podcast, 
                  I've dedicated my career to understanding what makes the horse-human 
                  partnership truly thrive.
                </p>
                <p className="text-cream/70 text-lg leading-relaxed">
                  My approach combines classical principles with modern sport science, 
                  always keeping the horse's welfare at the center of everything we do.
                </p>
              </div>
              <Link 
                href="/about" 
                className="group inline-flex items-center gap-3 text-gold text-lg font-semibold"
              >
                Read My Story 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - High Impact Gold */}
      <section className="py-32 bg-gold">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-charcoal/60 text-sm font-medium tracking-[0.25em] uppercase mb-6">
            Join the Movement
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-charcoal leading-tight mb-8">
            Ready to Transform<br />Your Riding?
          </h2>
          <p className="text-xl text-charcoal/70 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our community of riders committed to excellence, ethical horsemanship, 
            and continuous growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="group inline-flex items-center justify-center gap-3 bg-charcoal text-cream px-10 py-5 text-lg font-semibold hover:bg-deepBlack transition-colors"
            >
              Start Learning Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/podcast" 
              className="inline-flex items-center justify-center gap-3 border-2 border-charcoal/40 text-charcoal px-10 py-5 text-lg font-semibold hover:bg-charcoal/10 hover:border-charcoal/60 transition-all"
            >
              Free Podcast Episodes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
