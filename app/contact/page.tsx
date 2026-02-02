import { Mail, Instagram, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Contact | Samantha Baer',
  description: 'Get in touch for collaborations, podcast guesting, or coaching inquiries.',
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gold font-serif text-lg mb-4">Connect</p>
          <h1 className="text-5xl md:text-6xl font-serif text-cream mb-6">
            Get in Touch
          </h1>
          <p className="text-xl text-cream/80 max-w-2xl mx-auto">
            Whether you want to collaborate, be a guest on the podcast, or just say 
            hi—I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif text-charcoal mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-2">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    className="w-full px-4 py-3 border border-charcoal/20 focus:outline-none focus:border-gold"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    className="w-full px-4 py-3 border border-charcoal/20 focus:outline-none focus:border-gold"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                    What's this about?
                  </label>
                  <select 
                    id="subject"
                    className="w-full px-4 py-3 border border-charcoal/20 focus:outline-none focus:border-gold bg-white"
                  >
                    <option value="">Select an option</option>
                    <option value="podcast">Podcast Guesting</option>
                    <option value="sponsorship">Sponsorship</option>
                    <option value="coaching">Coaching Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                    Message
                  </label>
                  <textarea 
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-charcoal/20 focus:outline-none focus:border-gold resize-none"
                    placeholder="Tell me more..."
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-charcoal text-cream py-4 font-medium hover:bg-charcoal/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Other Ways to Connect */}
            <div>
              <h2 className="text-2xl font-serif text-charcoal mb-6">Other Ways to Connect</h2>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:hello@samanthabaer.com"
                  className="flex items-start gap-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Email</h3>
                    <p className="text-slate">hello@samanthabaer.com</p>
                  </div>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/samanthabaerofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal mb-1">Instagram</h3>
                    <p className="text-slate">@samanthabaerofficial</p>
                  </div>
                </a>

                {/* Scheduling */}
                <div className="p-6 bg-charcoal">
                  <h3 className="font-medium text-cream mb-2">Book a Call</h3>
                  <p className="text-cream/70 text-sm mb-4">
                    Want to discuss sponsorship opportunities or working together?
                  </p>
                  <a 
                    href="https://scheduler.zoom.us/samantha-baer/chat"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gold font-medium hover:underline"
                  >
                    Schedule a Chat <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="mt-8 p-6 bg-gold/10 border border-gold/20">
                <p className="text-charcoal text-sm">
                  <strong>Response time:</strong> I typically respond within 48 hours. 
                  If it's urgent, DM me on Instagram.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
