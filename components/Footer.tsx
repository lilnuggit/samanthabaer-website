import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="relative bg-deep text-cream overflow-hidden">
      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px',
        }}
      />

      {/* Decorative gold line at top */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Main footer content */}
        <div className="pt-20 pb-16">
          {/* Top section: Brand + tagline */}
          <div className="mb-16">
            <h3 className="text-3xl font-serif font-semibold tracking-[0.04em] mb-4">
              Samantha Baer
            </h3>
            <p className="text-cream/50 max-w-md text-[15px] leading-relaxed">
              Professional event rider and host of The Elevated Equestrian podcast.
              Deep conversations about horsemanship, training, and building a life with horses.
            </p>
          </div>

          {/* Grid: Links + Social */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6 font-medium">
                Quick Links
              </h4>
              <ul className="space-y-3.5">
                {[
                  { href: '/about', label: 'About' },
                  { href: '/podcast', label: 'Podcast' },
                  { href: '/courses', label: 'Courses' },
                  { href: '/blog', label: 'Blog' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/60 hover:text-cream transition-colors duration-200 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6 font-medium">
                Connect
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <Link
                    href="/contact"
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sponsors"
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Sponsor the Podcast
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:hello@samanthabaer.com"
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    hello@samanthabaer.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div className="md:col-span-3 md:col-start-10">
              <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-6 font-medium">
                Follow Along
              </h4>
              <ul className="space-y-3.5">
                <li>
                  <a
                    href="https://instagram.com/samanthabaerofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://open.spotify.com/show/6TlXq9jVia6jQYFGbKBsmm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cream/60 hover:text-cream transition-colors duration-200 text-[14px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  >
                    Spotify
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/[0.06] py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-cream/30 text-[13px] tracking-wide">
            &copy; {new Date().getFullYear()} Samantha Baer. All rights reserved.
          </p>
          <p className="text-cream/20 text-[12px] font-serif italic tracking-wide">
            The Elevated Equestrian
          </p>
        </div>
      </div>
    </footer>
  )
}
