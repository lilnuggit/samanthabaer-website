import { Mic, TrendingUp, Target, Calendar, ArrowRight, Mail, CheckCircle, Users, Star } from 'lucide-react'

export const metadata = {
  title: 'Sponsor the Podcast | The Elevated Equestrian',
  description: 'Partner with The Elevated Equestrian podcast to reach engaged, educated horse owners and riders.',
}

const stats = [
  { label: 'Episodes', value: '57+', icon: Mic },
  { label: 'Downloads / Month', value: '10K+', icon: TrendingUp },
  { label: 'Engaged Audience', value: 'High', icon: Target },
]

const audienceTraits = [
  'Serious riders — amateur to professional',
  'Horse owners who invest in quality',
  'Interested in education and improvement',
  'Value welfare-first approaches',
  'Active on social media',
  'Engaged listeners with high completion rates',
]

const sponsorshipOptions = [
  {
    name: 'Episode Sponsor',
    tagline: 'Single-episode visibility',
    description: 'Pre-roll and mid-roll mentions, show notes feature, and social promotion for maximum reach.',
    features: ['60-second host-read ad', 'Show notes link + logo', 'Social media mention', 'Performance recap'],
    accent: false,
  },
  {
    name: 'Series Sponsor',
    tagline: 'Multi-episode commitment',
    description: 'Deeper integration across a run of episodes with custom brand alignment and dedicated content.',
    features: ['4–8 episode package', 'Custom integration format', 'Dedicated social content', 'Mid-roll + outro placement'],
    accent: true,
  },
  {
    name: 'Founding Partner',
    tagline: 'Long-term partnership',
    description: 'An exclusive annual partnership with co-creation opportunities and category ownership.',
    features: ['Annual commitment', 'Exclusive category rights', 'Content collaboration', 'Priority ad placement'],
    accent: false,
  },
]

export default function SponsorsPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="grain relative py-32 md:py-40 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gold/20 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/10 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="opacity-0 animate-fade-in text-gold font-sans text-sm uppercase tracking-widest mb-6">
            Partner With Us
          </p>
          <h1 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-cream mb-8 leading-tight">
            Sponsor The Elevated Equestrian
          </h1>
          <p className="opacity-0 animate-fade-up delay-200 text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Reach engaged, educated horse owners and riders who care about doing things better.
            Our audience invests in quality—and remembers who shows up for the community.
          </p>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="py-20 bg-cream">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, i) => {
              const delay = i === 0 ? 'delay-100' : i === 1 ? 'delay-200' : 'delay-300'
              return (
                <div key={stat.label} className={`opacity-0 animate-fade-up ${delay} text-center`}>
                  <div className="w-16 h-16 bg-charcoal flex items-center justify-center mx-auto mb-5" aria-hidden="true">
                    <stat.icon className="w-7 h-7 text-gold" aria-hidden="true" />
                  </div>
                  <p className="text-4xl md:text-5xl font-serif font-bold text-charcoal mb-1">
                    {stat.value}
                  </p>
                  <p className="text-slate text-sm uppercase tracking-wide">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Audience ── */}
      <section className="grain py-24 bg-deep">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="opacity-0 animate-fade-up delay-100">
              <p className="text-gold font-sans text-sm uppercase tracking-widest mb-4">
                Who&rsquo;s Listening
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-cream mb-6">
                An Audience That Acts
              </h2>
              <p className="text-cream/70 mb-6 leading-relaxed">
                The Elevated Equestrian attracts riders who are serious about improving—not just their riding, but their understanding of horsemanship, welfare, and the business of horses.
              </p>
              <p className="text-cream/70 mb-8 leading-relaxed">
                They read the research, question the status quo, and invest in products and services that align with their values.
              </p>
              <ul className="space-y-3">
                {audienceTraits.map((trait, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 bg-gold flex-shrink-0" aria-hidden="true" />
                    <span className="text-cream/80">{trait}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="opacity-0 animate-scale-in delay-300">
              <div className="relative bg-charcoal aspect-[4/3] flex items-center justify-center overflow-hidden border border-cream/10">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" aria-hidden="true" />
                <div className="text-center px-8 relative z-10">
                  <Users className="w-12 h-12 text-gold/40 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-cream/40 text-sm uppercase tracking-widest">Audience Insights</p>
                  <p className="text-cream/25 text-xs mt-2">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sponsorship Tiers ── */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 opacity-0 animate-fade-up">
            <p className="text-gold font-sans text-sm uppercase tracking-widest mb-4">
              Flexible Packages
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-charcoal mb-4">
              Partnership Options
            </h2>
            <p className="text-slate max-w-2xl mx-auto leading-relaxed">
              Every partnership is tailored to your goals. Choose a starting point and we&rsquo;ll craft something that fits.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {sponsorshipOptions.map((option, i) => {
              const delay = i === 0 ? 'delay-100' : i === 1 ? 'delay-200' : 'delay-300'
              return (
                <div
                  key={option.name}
                  className={`opacity-0 animate-fade-up ${delay} relative flex flex-col p-8 border ${
                    option.accent
                      ? 'border-gold bg-charcoal text-cream'
                      : 'border-charcoal/15 bg-white text-charcoal'
                  } transition-colors duration-200 hover:border-gold`}
                >
                  {option.accent && (
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-gold" aria-hidden="true" />
                  )}

                  <div className="mb-6">
                    <p className={`text-xs uppercase tracking-widest mb-2 ${option.accent ? 'text-gold' : 'text-gold'}`}>
                      {option.tagline}
                    </p>
                    <h3 className="text-xl font-serif font-semibold">{option.name}</h3>
                  </div>

                  <p className={`text-sm leading-relaxed mb-8 ${option.accent ? 'text-cream/70' : 'text-slate'}`}>
                    {option.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {option.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${option.accent ? 'text-gold' : 'text-gold'}`} aria-hidden="true" />
                        <span className={option.accent ? 'text-cream/80' : 'text-slate'}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Why Partner ── */}
      <section className="grain py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="opacity-0 animate-fade-in text-gold font-sans text-sm uppercase tracking-widest mb-4">
            Why The Elevated Equestrian?
          </p>
          <h2 className="opacity-0 animate-fade-up delay-100 text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-cream mb-10">
            More Than an Ad Read
          </h2>

          <div className="grid sm:grid-cols-3 gap-8 text-left opacity-0 animate-fade-up delay-200">
            {[
              {
                icon: Star,
                title: 'Authentic Integration',
                body: 'Every sponsor mention is personally woven into the episode—no generic scripts.',
              },
              {
                icon: Users,
                title: 'Loyal Community',
                body: "Listeners who trust Samantha\u2019s recommendations and act on them.",
              },
              {
                icon: TrendingUp,
                title: 'Measurable Impact',
                body: 'Detailed recaps on reach, engagement, and listener response after every campaign.',
              },
            ].map((item) => (
              <div key={item.title} className="p-6 border border-cream/10">
                <item.icon className="w-6 h-6 text-gold mb-4" aria-hidden="true" />
                <h3 className="font-serif text-lg font-semibold text-cream mb-2">{item.title}</h3>
                <p className="text-cream/60 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-deep">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="opacity-0 animate-fade-in text-gold font-sans text-sm uppercase tracking-widest mb-4">
            Ready to reach riders who care?
          </p>
          <h2 className="opacity-0 animate-fade-up delay-100 text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-cream mb-4">
            Let&rsquo;s Build Something Together
          </h2>
          <p className="opacity-0 animate-fade-up delay-200 text-cream/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Every partnership is customized to your goals. Book a call or send an email—I&rsquo;d love to explore what&rsquo;s possible.
          </p>

          <div className="opacity-0 animate-scale-in delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://scheduler.zoom.us/samantha-baer/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep transition-colors duration-200 group"
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Schedule a Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <a
              href="mailto:sponsors@samanthabaer.com"
              className="inline-flex items-center justify-center gap-3 border border-cream/30 text-cream px-8 py-4 font-medium hover:border-gold hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-deep transition-colors duration-200 group"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
