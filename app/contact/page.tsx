import { Mail, Instagram, Calendar, ArrowRight, Send } from 'lucide-react'

export const metadata = {
  title: 'Contact | Samantha Baer',
  description: 'Get in touch for collaborations, podcast guesting, or coaching inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero — Bold & Dramatic */}
      <section className="grain py-32 bg-charcoal relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/20 to-transparent" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="opacity-0 animate-fade-in text-gold font-sans text-sm uppercase tracking-widest mb-6">
            Let&rsquo;s Connect
          </p>
          <h1 className="opacity-0 animate-fade-up delay-100 text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-semibold text-cream mb-8">
            Start the Conversation
          </h1>
          <p className="opacity-0 animate-fade-up delay-200 text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Whether it&rsquo;s a collaboration, podcast appearance, or coaching inquiry—I&rsquo;m here and ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">

            {/* Contact Form — Main Focus */}
            <div className="lg:col-span-3 opacity-0 animate-fade-up delay-100">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-2">
                Send a Message
              </h2>
              <p className="text-slate mb-8">
                Fill out the form below and I&rsquo;ll get back to you within 48 hours.
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      required
                      className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200"
                      placeholder="Your name…"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      spellCheck={false}
                      required
                      className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200"
                      placeholder="your@email.com…"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                    What&rsquo;s this about?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select an option…</option>
                    <option value="podcast">Podcast Guesting</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="coaching">Coaching &amp; Training</option>
                    <option value="collaboration">Brand Collaboration</option>
                    <option value="media">Media &amp; Press</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200 resize-none"
                    placeholder="Tell me what you have in mind…"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-cream transition-colors duration-200 group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </button>
              </form>
            </div>

            {/* Quick Connect Options */}
            <div className="lg:col-span-2 opacity-0 animate-fade-up delay-300">
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-charcoal mb-2">
                Quick Connect
              </h2>
              <p className="text-slate mb-8">
                Prefer a direct line? Here&rsquo;s how to reach me.
              </p>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href="mailto:hello@samanthabaer.com"
                  className="flex items-center gap-4 p-5 bg-white border border-charcoal/10 hover:border-gold/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Mail className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-charcoal text-sm uppercase tracking-wide mb-0.5">Email</h3>
                    <p className="text-slate truncate">hello@samanthabaer.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate group-hover:text-gold group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/samanthabaerofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white border border-charcoal/10 hover:border-gold/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Instagram className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-charcoal text-sm uppercase tracking-wide mb-0.5">Instagram</h3>
                    <p className="text-slate">@samanthabaerofficial</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate group-hover:text-gold group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </a>

                {/* Book a Call — Highlighted */}
                <a
                  href="https://scheduler.zoom.us/samantha-baer/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-charcoal hover:bg-charcoal/95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold transition-colors duration-200 group"
                >
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Calendar className="w-5 h-5 text-charcoal" aria-hidden="true" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-cream text-sm uppercase tracking-wide mb-0.5">Schedule a Call</h3>
                    <p className="text-cream/70 text-sm">Let&rsquo;s chat face-to-face</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
                </a>
              </div>

              {/* Response Note */}
              <div className="mt-8 p-6 border-l-4 border-gold bg-gold/5 opacity-0 animate-fade-in delay-400">
                <p className="text-charcoal font-medium mb-1">Quick Response Promise</p>
                <p className="text-slate text-sm">
                  I typically respond within 48 hours. For urgent matters,
                  DM me on Instagram—I&rsquo;m always checking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="grain py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="opacity-0 animate-fade-in text-cream/60 text-sm uppercase tracking-widest mb-4">
            Ready to collaborate?
          </p>
          <h2 className="opacity-0 animate-fade-up delay-100 text-2xl sm:text-3xl md:text-4xl font-serif font-semibold text-cream mb-6">
            Let&rsquo;s Create Something Remarkable
          </h2>
          <a
            href="https://scheduler.zoom.us/samantha-baer/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-0 animate-scale-in delay-200 inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal transition-colors duration-200 group"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  )
}
