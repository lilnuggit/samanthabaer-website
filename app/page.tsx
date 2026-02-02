import Link from 'next/link'
import Image from 'next/image'
import { Play, Mic, BookOpen, ArrowRight, Star } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-charcoal">
        <Image
          src="/images/hero-xc.jpg"
          alt="Samantha Baer jumping cross-country"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-serif text-lg mb-4 tracking-wider">
            Professional Event Rider & Educator
          </p>
          <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6 leading-tight">
            Elevate Your <span className="text-gold">Partnership</span> With Your Horse
          </h1>
          <p className="text-xl text-cream/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Biomechanics. Mindset. Ethical horsemanship. Join thousands of riders 
            transforming their connection with their horses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 transition-colors"
            >
              Explore Courses
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              href="/podcast" 
              className="inline-flex items-center justify-center gap-2 border border-cream/30 text-cream px-8 py-4 font-medium hover:bg-cream/10 transition-colors"
            >
              <Play className="w-4 h-4" />
              Listen to Podcast
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">
              Your Journey to Excellence
            </h2>
            <p className="text-slate max-w-2xl mx-auto">
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
              <h3 className="text-xl font-serif text-charcoal mb-3">
                The Elevated Equestrian
              </h3>
              <p className="text-slate mb-4">
                Weekly conversations with world-class riders, trainers, and equine 
                professionals sharing insights you won't find anywhere else.
              </p>
              <Link href="/podcast" className="text-gold font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Listen Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Courses */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-3">
                Online Courses
              </h3>
              <p className="text-slate mb-4">
                Deep-dive programs on biomechanics, rider fitness, and horse welfare. 
                Learn at your own pace with lifetime access.
              </p>
              <Link href="/courses" className="text-gold font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Browse Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Work Together */}
            <div className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gold/10 flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-3">
                Work With Me
              </h3>
              <p className="text-slate mb-4">
                From clinics to one-on-one coaching, let's create a personalized 
                path to help you and your horse thrive together.
              </p>
              <Link href="/contact" className="text-gold font-medium inline-flex items-center gap-1 hover:gap-2 transition-all">
                Get In Touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gold font-serif text-lg mb-4">Meet Samantha</p>
              <h2 className="text-4xl font-serif text-cream mb-6">
                Rider. Educator. Advocate.
              </h2>
              <p className="text-cream/80 mb-6 leading-relaxed">
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
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/about-portrait.jpg"
                alt="Samantha with her horse"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif text-charcoal mb-6">
            Ready to Transform Your Riding?
          </h2>
          <p className="text-charcoal/80 mb-10 max-w-2xl mx-auto">
            Join our community of riders committed to excellence, ethical horsemanship, 
            and continuous growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses" 
              className="inline-flex items-center justify-center gap-2 bg-charcoal text-cream px-8 py-4 font-medium hover:bg-charcoal/90 transition-colors"
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
