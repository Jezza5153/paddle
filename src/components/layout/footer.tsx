import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-inverse-surface w-full py-20 px-10">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-end w-full">
        <div className="space-y-8">
          <div className="text-4xl sm:text-5xl font-black text-surface opacity-10 font-headline italic tracking-tighter">
            PADDLEFORGE
          </div>
          <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-3xl" data-icon="public">
                public
              </span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-3xl" data-icon="podcasts">
                podcasts
              </span>
            </a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-3xl" data-icon="play_circle">
                play_circle
              </span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-8 justify-center md:justify-start">
          <Link
            href="/privacy"
            className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant hover:text-surface transition-colors hover:underline decoration-primary underline-offset-8"
          >
            Privacy
          </Link>
          <Link
            href="/algemene-voorwaarden"
            className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant hover:text-surface transition-colors hover:underline decoration-primary underline-offset-8"
          >
            Algemene Voorwaarden
          </Link>
          <Link
            href="/verzending"
            className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant hover:text-surface transition-colors hover:underline decoration-primary underline-offset-8"
          >
            Verzending
          </Link>
          <Link
            href="/contact"
            className="font-label uppercase tracking-widest text-[10px] text-on-surface-variant hover:text-surface transition-colors hover:underline decoration-primary underline-offset-8"
          >
            Contact
          </Link>
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
