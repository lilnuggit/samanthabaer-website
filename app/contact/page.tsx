import { Mail, Instagram, Calendar, ArrowRight, Send } from 'lucide-react'

export const metadata = {
  title: 'Contact | Samantha Baer',
  description: 'Get in touch for collaborations, podcast guesting, or coaching inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero - Bold & Dramatic */}
      <section className="py-32 bg-charcoal relative overflow-hidden">
        {/* Subtle decorative element */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/20 to-transparent" />
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <p className="text-gold font-sans text-sm uppercase tracking-widest mb-6">
            Let's Connect
          </p>
          <h1 className="text-5xl md:text-7xl font-serif font-semibold text-cream mb-8">
            Start the Conversation
          </h1>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto leading-relaxed">
            Whether it's a collaboration, podcast appearance, or coaching inquiry—
            I'm here and ready to connect.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            
            {/* Contact Form - Main Focus */}
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-serif font-semibold text-charcoal mb-2">
                Send a Message
              </h2>
              <p className="text-slate mb-8">
                Fill out the form below and I'll get back to you within 48 hours.
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
                      required
                      className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                      Email
                    </label>
                    <input 
                      type="email" 
                      id="email"
                      required
                      className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                    What's this about?
                  </label>
                  <select 
                    id="subject"
                    required
                    className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors appearance-none cursor-pointer"
                  >
                    <option value="">Select an option</option>
                    <option value="podcast">Podcast Guesting</option>
                    <option value="sponsorship">Sponsorship Inquiry</option>
                    <option value="coaching">Coaching & Training</option>
                    <option value="collaboration">Brand Collaboration</option>
                    <option value="media">Media & Press</option>
                    <option value="other">Something Else</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal uppercase tracking-wide mb-3">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-4 bg-white border border-charcoal/20 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-colors resize-none"
                    placeholder="Tell me what you have in mind..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="inline-flex items-center gap-3 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 transition-colors group"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </form>
            </div>

            {/* Quick Connect Options */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-semibold text-charcoal mb-2">
                Quick Connect
              </h2>
              <p className="text-slate mb-8">
                Prefer a direct line? Here's how to reach me.
              </p>
              
              <div className="space-y-4">
                {/* Email */}
                <a 
                  href="mailto:hello@samanthabaer.com"
                  className="flex items-center gap-4 p-5 bg-white border border-charcoal/10 hover:border-gold/50 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-charcoal text-sm uppercase tracking-wide mb-0.5">Email</h3>
                    <p className="text-slate truncate">hello@samanthabaer.com</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/samanthabaerofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-white border border-charcoal/10 hover:border-gold/50 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-charcoal flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-5 h-5 text-gold" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-charcoal text-sm uppercase tracking-wide mb-0.5">Instagram</h3>
                    <p className="text-slate">@samanthabaerofficial</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate group-hover:text-gold group-hover:translate-x-1 transition-all" />
                </a>

                {/* Book a Call - Highlighted */}
                <a 
                  href="https://scheduler.zoom.us/samantha-baer/chat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 bg-charcoal hover:bg-charcoal/95 transition-all group"
                >
                  <div className="w-12 h-12 bg-gold flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-charcoal" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-cream text-sm uppercase tracking-wide mb-0.5">Schedule a Call</h3>
                    <p className="text-cream/70 text-sm">Let's chat face-to-face</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Response Note */}
              <div className="mt-8 p-6 border-l-4 border-gold bg-gold/5">
                <p className="text-charcoal font-medium mb-1">Quick Response Promise</p>
                <p className="text-slate text-sm">
                  I typically respond within 48 hours. For urgent matters, 
                  DM me on Instagram—I'm always checking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="py-16 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-cream/60 text-sm uppercase tracking-widest mb-4">Ready to collaborate?</p>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-cream mb-6">
            Let's Create Something Remarkable
          </h2>
          <a 
            href="https://scheduler.zoom.us/samantha-baer/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold text-charcoal px-8 py-4 font-medium hover:bg-gold/90 transition-colors group"
          >
            Book a Call
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>
    </main>
  )
}
