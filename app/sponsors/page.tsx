import Link from 'next/link'
import { Users, Mic, TrendingUp, Target, Calendar } from 'lucide-react'

export const metadata = {
  title: 'Sponsor the Podcast | The Elevated Equestrian',
  description: 'Partner with The Elevated Equestrian podcast to reach engaged, educated horse owners and riders.',
}

const stats = [
  { label: 'Episodes', value: '57+', icon: Mic },
  { label: 'Downloads/Month', value: '10K+', icon: TrendingUp },
  { label: 'Engaged Audience', value: 'High', icon: Target },
]

const audienceTraits = [
  'Serious riders (amateur to professional)',
  'Horse owners who invest in quality',
  'Interested in education and improvement',
  'Value welfare-first approaches',
  'Active on social media',
  'Engaged podcast listeners (high completion rates)',
]

const sponsorshipOptions = [
  {
    name: 'Episode Sponsor',
    description: 'Pre-roll and mid-roll mentions, show notes feature, social promotion',
    features: ['60-second read', 'Show notes link', 'Social media mention'],
  },
  {
    name: 'Series Sponsor',
    description: 'Multi-episode commitment with deeper integration and brand alignment',
    features: ['4-8 episode package', 'Custom integration', 'Dedicated social content'],
  },
  {
    name: 'Founding Partner',
    description: 'Long-term partnership with exclusive benefits and co-creation opportunities',
    features: ['Annual commitment', 'Exclusive category', 'Content collaboration'],
  },
]

export default function Sponsors() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-brand-gold font-semibold mb-2">PARTNER WITH US</p>
          <h1 className="text-4xl lg:text-5xl font-display font-semibold mb-4">
            Sponsor The Elevated Equestrian
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Reach engaged, educated horse owners and riders who care about 
            doing things better. Our audience invests in quality.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-brand-cream rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-brand-gold" size={28} />
                </div>
                <p className="text-4xl font-display font-bold text-brand-charcoal mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-16 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-semibold text-brand-charcoal mb-6">
                <span className="gold-underline">Our Audience</span>
              </h2>
              <p className="text-gray-700 mb-6">
                The Elevated Equestrian attracts riders who are serious about 
                improving — not just their riding, but their understanding of 
                horsemanship, welfare, and the business of horses.
              </p>
              <p className="text-gray-700 mb-6">
                They're the riders who read the research, question the status quo, 
                and invest in products and services that align with their values.
              </p>
              <ul className="space-y-3">
                {audienceTraits.map((trait) => (
                  <li key={trait} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-brand-gold rounded-full" />
                    <span className="text-gray-700">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-brand-slate rounded-xl h-80 flex items-center justify-center">
              <p className="text-gray-400">[Audience Graphic]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Options */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-semibold text-brand-charcoal mb-4">
              <span className="gold-underline">Partnership Options</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Flexible packages designed to meet your marketing goals and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipOptions.map((option) => (
              <div
                key={option.name}
                className="border border-gray-200 rounded-xl p-8 hover:border-brand-gold transition-colors"
              >
                <h3 className="font-display text-xl font-semibold mb-3">{option.name}</h3>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2 mb-6">
                  {option.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-charcoal text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-semibold mb-4">
            Ready to Partner?
          </h2>
          <p className="text-gray-300 mb-8">
            Let's talk about how we can create something valuable for your brand 
            and our audience. Every partnership is customized to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://scheduler.zoom.us/samantha-baer/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-charcoal px-8 py-4 rounded font-semibold inline-flex items-center justify-center gap-2 hover:bg-opacity-90 transition-all"
            >
              <Calendar size={20} />
              Schedule a Call
            </a>
            <a
              href="mailto:sponsors@samanthabaer.com"
              className="border-2 border-white text-white px-8 py-4 rounded font-semibold inline-flex items-center justify-center gap-2 hover:bg-white hover:text-brand-charcoal transition-all"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
