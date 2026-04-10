import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-inverse-surface w-full py-20 px-10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-3xl font-black text-inverse-on-surface opacity-20 font-headline italic tracking-tighter">
            PADDLEFORGE
          </div>
          <p className="text-inverse-on-surface-variant text-xs leading-relaxed">
            Nederlandse webshop voor padel, sport en seizoensproducten. Veilig betalen met iDEAL. 14 dagen retourneren.
          </p>
          <div className="text-inverse-on-surface-variant text-[10px] font-label tracking-wider uppercase space-y-1">
            <p>KvK: in registratie</p>
            <p>BTW: NL-pending</p>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-label uppercase tracking-widest text-[10px] text-inverse-on-surface mb-4 font-bold">Winkelen</h4>
          <div className="flex flex-col gap-2">
            <Link href="/shop" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Alle Producten</Link>
            <Link href="/koningsdag" className="text-inverse-on-surface-variant text-xs hover:text-orange-500 transition-colors">Koningsdag 2026</Link>
            <Link href="/moederdag" className="text-inverse-on-surface-variant text-xs hover:text-pink-500 transition-colors">Moederdag Cadeaus</Link>
            <Link href="/wk-2026" className="text-inverse-on-surface-variant text-xs hover:text-primary-dim transition-colors">WK 2026</Link>
          </div>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="font-label uppercase tracking-widest text-[10px] text-inverse-on-surface mb-4 font-bold">Klantenservice</h4>
          <div className="flex flex-col gap-2">
            <Link href="/over-ons" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Over Ons</Link>
            <Link href="/verzending" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Verzending & Levering</Link>
            <Link href="/retouren" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Retourneren</Link>
            <Link href="/contact" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Contact</Link>
            <Link href="/privacy" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="text-inverse-on-surface-variant text-xs hover:text-inverse-on-surface transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>

        <div className="text-left md:text-right space-y-4">
          {/* Payment & Trust Signals */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <span className="bg-surface text-on-surface text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">iDEAL</span>
            <span className="bg-surface text-on-surface text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">Visa</span>
            <span className="bg-surface text-on-surface text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">Mastercard</span>
            <span className="bg-surface text-on-surface text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">Apple Pay</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end text-inverse-on-surface-variant text-[10px] font-label tracking-wider uppercase">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">undo</span>
              14 dagen retour
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">verified</span>
              Veilig betalen
            </span>
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">local_shipping</span>
              Levering in NL
            </span>
          </div>
          <p className="font-label uppercase tracking-widest text-[10px] text-inverse-on-surface-variant">
            &copy; {new Date().getFullYear()} PADDLEFORGE. ALLE RECHTEN VOORBEHOUDEN.
          </p>
        </div>
      </div>
    </footer>
  );
}
