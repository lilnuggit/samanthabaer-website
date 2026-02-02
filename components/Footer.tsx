import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-display font-semibold mb-4">
              Samantha Baer
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              Professional event rider and host of The Elevated Equestrian podcast. 
              Deep conversations about horsemanship, training, and building a life with horses.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/samanthabaerofficial" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold">
                Instagram
              </a>
              <a href="https://open.spotify.com/show/0Z442fy1TDKF0FZPXsVst2" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-gold">
                Spotify
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white">About</Link></li>
              <li><Link href="/podcast" className="text-gray-400 hover:text-white">Podcast</Link></li>
              <li><Link href="/courses" className="text-gray-400 hover:text-white">Courses</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-brand-gold">Connect</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              <li><Link href="/sponsors" className="text-gray-400 hover:text-white">Sponsor the Podcast</Link></li>
              <li><a href="mailto:hello@samanthabaer.com" className="text-gray-400 hover:text-white">hello@samanthabaer.com</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Samantha Baer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
