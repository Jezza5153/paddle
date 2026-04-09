import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-inverse-surface w-full py-20 px-10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 w-full">
        {/* Brand */}
        <div className="space-y-6">
          <div className="text-3xl font-black text-surface opacity-20 font-headline italic tracking-tighter">
            PADDLEFORGE
          </div>
          <p className="text-on-surface-variant text-xs leading-relaxed">
            Nederlandse webshop voor padel, sport en seizoensproducten. Veilig betalen met iDEAL. 14 dagen retourneren.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h4 className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-4 font-bold">Winkelen</h4>
          <div className="flex flex-col gap-2">
            <Link href="/shop" className="text-on-surface-variant text-xs hover:text-surface transition-colors">Alle Producten</Link>
            <Link href="/koningsdag" className="text-on-surface-variant text-xs hover:text-orange-400 transition-colors">Koningsdag 2026</Link>
            <Link href="/moederdag" className="text-on-surface-variant text-xs hover:text-pink-400 transition-colors">Moederdag Cadeaus</Link>
            <Link href="/wk-2026" className="text-on-surface-variant text-xs hover:text-primary transition-colors">WK 2026</Link>
          </div>
        </div>

        {/* Info Links */}
        <div>
          <h4 className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant mb-4 font-bold">Klantenservice</h4>
          <div className="flex flex-col gap-2">
            <Link href="/verzending" className="text-on-surface-variant text-xs hover:text-surface transition-colors">Verzending & Levering</Link>
            <Link href="/retouren" className="text-on-surface-variant text-xs hover:text-surface transition-colors">Retourneren</Link>
            <Link href="/contact" className="text-on-surface-variant text-xs hover:text-surface transition-colors">Contact</Link>
            <Link href="/privacy" className="text-on-surface-variant text-xs hover:text-surface transition-colors">Privacybeleid</Link>
            <Link href="/algemene-voorwaarden" className="text-on-surface-variant text-xs hover:text-surface transition-colors">Algemene Voorwaarden</Link>
          </div>
        </div>
        
        <div className="text-left md:text-right space-y-4">
          {/* Payment & Trust Signals */}
          <div className="flex flex-wrap gap-3 justify-start md:justify-end">
            <span className="bg-surface-container-low text-on-surface-variant text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">iDEAL</span>
            <span className="bg-surface-container-low text-on-surface-variant text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">Visa</span>
            <span className="bg-surface-container-low text-on-surface-variant text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">Mastercard</span>
            <span className="bg-surface-container-low text-on-surface-variant text-[10px] font-label tracking-wider uppercase px-3 py-1.5 rounded border border-outline-variant/20">Apple Pay</span>
          </div>
          <div className="flex flex-wrap gap-4 justify-start md:justify-end text-on-surface-variant text-[10px] font-label tracking-wider uppercase">
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
          <p className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant">
            &copy; {new Date().getFullYear()} PADDLEFORGE. ALLE RECHTEN VOORBEHOUDEN.
          </p>
        </div>
      </div>
    </footer>
  );
}
