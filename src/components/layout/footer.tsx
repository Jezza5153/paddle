import Link from "next/link";

const footerLinks = {
  shop: [
    { href: "/shop", label: "Alle producten" },
    { href: "/products/driveway-court-kit", label: "Driveway Court Kit" },
    { href: "/products/paddle-grip-refresh-kit", label: "Paddle Grip Refresh Kit" },
    { href: "/products/paddle-armor-kit", label: "Paddle Armor Kit" },
  ],
  info: [
    { href: "/verzending", label: "Verzending" },
    { href: "/retouren", label: "Retouren" },
    { href: "/contact", label: "Contact" },
  ],
  legal: [
    { href: "/privacy", label: "Privacybeleid" },
    { href: "/algemene-voorwaarden", label: "Algemene voorwaarden" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-auto">
      <div className="page-width section-padding">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-lg font-semibold tracking-tight text-text-primary">
              CourtStart <span className="text-brand-green">NL</span>
            </Link>
            <p className="mt-3 text-sm text-text-secondary leading-6">
              Slim starten met pickleball.
            </p>
            <p className="mt-4 text-xs text-muted-foreground">
              KVK-geregistreerd bedrijf
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Shop</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Klantenservice</h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary mb-4">Juridisch</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} CourtStart NL. Alle rechten voorbehouden.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span>iDEAL</span>
            <span>•</span>
            <span>Visa / Mastercard</span>
            <span>•</span>
            <span>Apple Pay</span>
            <span>•</span>
            <span>Google Pay</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
