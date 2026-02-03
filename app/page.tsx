import Link from 'next/link'
import Image from 'next/image'
import { Play, Mic, BookOpen, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section - Mobile-First, Readable */}
      <section className="relative min-h-[85vh] md:min-h-screen flex items-center bg-charcoal">
        {/* Background Image with Heavy Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-xc.jpg"
            alt="Samantha Baer jumping cross-country"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        </div>
        
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-16 md:py-24 text-center">
          <p className="text-gold text-sm tracking-widest uppercase mb-4 md:mb-6">
            Professional Event Rider & Educator
          </p>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-cream leading-tight mb-4 md:mb-6">
            Elevate Your Partnership With Your Horse
          </h1>
          
          <p className="text-base md:text-lg text-cream/80 mb-8 md:mb-10 max-w-2xl mx-auto leading-relaxed">
            Biomechanics. Mindset. Ethical horsemanship. Join thousands of riders 
            transforming their connection with their horses.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-6 py-3 md:px-8 md:py-4 font-semibold hover:bg-cream transition-colors"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/podcast" 
              className="inline-flex items-center justify-center gap-2 border border-cream/50 text-cream px-6 py-3 md:px-8 md:py-4 font-medium hover:bg-cream/10 transition-colors"
            >
              <Play className="w-4 h-4" />
              Listen to Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* What I Offer */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
              Your Journey to Excellence
            </h2>
            <p className="text-slate max-w-xl mx-auto">
              Whether you're just starting out or competing at the highest levels, 
              there's always room to grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Podcast */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <Mic className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                The Elevated Equestrian
              </h3>
              <p className="text-slate text-sm mb-4 leading-relaxed">
                Weekly conversations with world-class riders, trainers, and equine 
                professionals sharing insights you won't find anywhere else.
              </p>
              <Link href="/podcast" className="text-gold font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Listen Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Courses */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                Online Courses
              </h3>
              <p className="text-slate text-sm mb-4 leading-relaxed">
                Deep-dive programs on biomechanics, rider fitness, and horse welfare. 
                Learn at your own pace with lifetime access.
              </p>
              <Link href="/courses" className="text-gold font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Browse Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Work Together */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal mb-3">
                Work With Me
              </h3>
              <p className="text-slate text-sm mb-4 leading-relaxed">
                From clinics to one-on-one coaching, let's create a personalized 
                path to help you and your horse thrive together.
              </p>
              <Link href="/contact" className="text-gold font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-gold text-sm tracking-widest uppercase mb-4">Meet Samantha</p>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream mb-6">
                Rider. Educator. Advocate.
              </h2>
              <p className="text-cream/80 mb-4 leading-relaxed">
                As a professional event rider and host of The Elevated Equestrian podcast, 
                I've dedicated my career to understanding what makes the horse-human 
                partnership truly thrive.
              </p>
              <p className="text-cream/80 mb-8 leading-relaxed">
                My approach combines classical principles with modern sport science, 
                always keeping the horse's welfare at the center of everything we do.
              </p>
              <Link 
                href="/about" 
                className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all"
              >
                Read My Story <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative aspect-[4/5] max-w-sm mx-auto md:max-w-none">
                <Image
                  src="/images/about-portrait.jpg"
                  alt="Samantha with her horse"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gold">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-6">
            Ready to Transform Your Riding?
          </h2>
          <p className="text-charcoal/80 mb-10 max-w-xl mx-auto">
            Join our community of riders committed to excellence, ethical horsemanship, 
            and continuous growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-8 py-4 font-semibold hover:bg-slate transition-colors"
            >
              Start Learning Today
            </Link>
            <Link 
              href="/podcast" 
              className="inline-flex items-center justify-center gap-2 border border-charcoal/30 text-charcoal px-8 py-4 font-medium hover:bg-charcoal/10 transition-colors"
            >
              Free Podcast Episodes
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
