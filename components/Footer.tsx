import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif font-semibold mb-4">
              Samantha Baer
            </h3>
            <p className="text-cream/60 mb-6 max-w-sm text-sm leading-relaxed">
              Professional event rider and host of The Elevated Equestrian podcast. 
              Deep conversations about horsemanship, training, and building a life with horses.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://instagram.com/samanthabaerofficial" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                Instagram
              </a>
              <a 
                href="https://open.spotify.com/show/0Z442fy1TDKF0FZPXsVst2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-cream/60 hover:text-gold transition-colors text-sm"
              >
                Spotify
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-gold text-sm tracking-wide">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-cream/60 hover:text-cream transition-colors text-sm">About</Link></li>
              <li><Link href="/podcast" className="text-cream/60 hover:text-cream transition-colors text-sm">Podcast</Link></li>
              <li><Link href="/courses" className="text-cream/60 hover:text-cream transition-colors text-sm">Courses</Link></li>
              <li><Link href="/blog" className="text-cream/60 hover:text-cream transition-colors text-sm">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-gold text-sm tracking-wide">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-cream/60 hover:text-cream transition-colors text-sm">Contact</Link></li>
              <li><Link href="/sponsors" className="text-cream/60 hover:text-cream transition-colors text-sm">Sponsor the Podcast</Link></li>
              <li><a href="mailto:hello@samanthabaer.com" className="text-cream/60 hover:text-cream transition-colors text-sm">hello@samanthabaer.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 mt-12 pt-8 text-center text-cream/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Samantha Baer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
