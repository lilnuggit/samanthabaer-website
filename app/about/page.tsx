import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Award, Heart, Target } from 'lucide-react'

export const metadata = {
  title: 'About | Samantha Baer',
  description: 'Professional event rider, educator, and host of The Elevated Equestrian podcast.',
}

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-serif text-lg mb-4">About</p>
          <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6">
            Samantha Baer
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Professional event rider, educator, and advocate for ethical horsemanship.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Photo */}
            <div className="relative aspect-[3/4] sticky top-24">
              <Image
                src="/images/about-portrait.jpg"
                alt="Samantha with her horse"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Bio */}
            <div>
              <h2 className="text-3xl font-serif text-charcoal mb-6">My Story</h2>
              <div className="prose prose-lg text-slate">
                <p>
                  I've been obsessed with horses for as long as I can remember. What started 
                  as a childhood passion has evolved into a lifelong commitment to understanding 
                  and improving the way we work with these incredible animals.
                </p>
                <p>
                  As a professional event rider, I've experienced firsthand the challenges 
                  and triumphs that come with competitive riding. But more importantly, I've 
                  learned that success isn't just about ribbons—it's about the partnership 
                  you build with your horse.
                </p>
                <p>
                  Through The Elevated Equestrian podcast, I've had the privilege of speaking 
                  with some of the most brilliant minds in our sport. Olympic riders, equine 
                  scientists, biomechanics experts, and mental performance coaches have all 
                  shared their wisdom, and I'm passionate about passing that knowledge on to you.
                </p>
                <p>
                  My approach centers on three pillars: biomechanics (understanding how both 
                  horse and rider move), mindset (the mental game is half the battle), and 
                  welfare (happy horses perform better, period).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-cream text-center mb-16">What I Stand For</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-3">Excellence</h3>
              <p className="text-cream/70">
                Always striving to improve, learn, and grow as both a rider and educator.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-3">Horse Welfare</h3>
              <p className="text-cream/70">
                The horse's physical and mental wellbeing comes first, always.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold/10 flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-serif text-cream mb-3">Integrity</h3>
              <p className="text-cream/70">
                Honest, ethical training methods that respect the horse-human partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gold">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-charcoal mb-6">Let's Connect</h2>
          <p className="text-charcoal/80 mb-8">
            Whether you want to work together, be a guest on the podcast, or just say hi—I'd love to hear from you.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-charcoal text-cream px-8 py-4 font-medium hover:bg-charcoal/90 transition-colors"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  )
}
