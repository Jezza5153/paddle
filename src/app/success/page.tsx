import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bestelling bevestigd | PaddleForge",
  robots: "noindex",
};

export default function SuccessPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden bg-surface text-on-surface pt-20 pb-20">
      {/* Background Aesthetic Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,252,0,0.1)_0%,rgba(14,14,14,0)_70%)] pointer-events-none"></div>
      <div className="absolute -top-[10%] -left-[5%] opacity-5 pointer-events-none">
        <span className="font-headline text-[25vw] font-black italic tracking-tighter leading-none select-none text-on-surface">PADDLEFORGE</span>
      </div>

      {/* Success Module */}
      <div className="z-10 flex flex-col items-center text-center max-w-3xl w-full">
        {/* Animated Visual Anchor */}
        <div className="mb-12 relative">
          <div className="w-32 h-32 rounded-full border border-primary-container flex items-center justify-center opacity-80">
            <div className="w-24 h-24 bg-primary-container rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(209,252,0,0.3)] transform transition-transform duration-700 hover:scale-110">
              <span className="material-symbols-outlined text-on-primary-container text-5xl">check_circle</span>
            </div>
          </div>
          {/* Precision Lines Decorative */}
          <div className="absolute -top-4 -right-4 w-8 h-[1px] bg-primary-container/50"></div>
          <div className="absolute -top-4 -right-4 h-8 w-[1px] bg-primary-container/50"></div>
        </div>

        {/* Content Hierarchy */}
        <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 -tracking-[0.04em] drop-shadow-[0_0_30px_rgba(209,252,0,0.2)]">
          Bedankt voor je bestelling!
        </h1>
        
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-surface-container-highest/50 rounded-full border border-white/5 mb-8">
          <span className="font-label text-xs uppercase tracking-[0.1em] text-zinc-400">Status</span>
          <span className="font-headline font-bold text-primary-container tracking-wider">ONTVANGEN</span>
        </div>
        
        <p className="font-body text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-12">
          We hebben je order in goede orde ontvangen. Een bevestiging met alle details is zojuist verzonden naar je e-mailadres. Je padel uitrusting wordt klaargemaakt voor verzending.
        </p>

        {/* Action Grid */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
          <Link 
            href="/shop"
            className="group relative px-10 py-5 bg-primary-container text-on-primary-container font-headline font-bold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
          >
            <span className="relative z-10">Terug naar de shop</span>
            <span className="material-symbols-outlined relative z-10 text-xl transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
          </Link>
          <a 
            href="mailto:info@paddleforge.nl"
            className="px-10 py-5 border border-white/10 hover:bg-white/5 text-white font-headline font-medium rounded-full transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-widest text-sm"
          >
            <span className="material-symbols-outlined text-xl">support_agent</span>
            Klantenservice
          </a>
        </div>
      </div>

      {/* Bento Utility Grid */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full relative z-10">
        <div className="bg-surface-container-lowest/40 p-8 rounded-xl border border-white/5 backdrop-blur-sm group hover:border-primary-container/20 transition-colors">
          <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">local_shipping</span>
          <h3 className="font-headline font-bold text-white mb-2 uppercase tracking-tight">Snelle levering</h3>
          <p className="text-sm text-zinc-400 font-body leading-relaxed">Verwachte bezorging binnen 1-3 werkdagen via onze premium koeriersdienst.</p>
        </div>
        <div className="bg-surface-container-lowest/40 p-8 rounded-xl border border-white/5 backdrop-blur-sm group hover:border-primary-container/20 transition-colors">
          <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">mark_email_read</span>
          <h3 className="font-headline font-bold text-white mb-2 uppercase tracking-tight">Bevestigingsmail</h3>
          <p className="text-sm text-zinc-400 font-body leading-relaxed">Je ontvangt binnen enkele minuten een e-mail met je bestelgegevens en een BTW-factuur.</p>
        </div>
        <div className="bg-surface-container-lowest/40 p-8 rounded-xl border border-white/5 backdrop-blur-sm group hover:border-primary-container/20 transition-colors">
          <span className="material-symbols-outlined text-primary-container mb-4 text-3xl">assignment_return</span>
          <h3 className="font-headline font-bold text-white mb-2 uppercase tracking-tight">14 Dagen Retour</h3>
          <p className="text-sm text-zinc-400 font-body leading-relaxed">Niet helemaal tevreden? Geen probleem. Retourneer eenvoudig binnen 14 dagen.</p>
        </div>
      </div>
      
      {/* Asymmetric Background Image */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-10 pointer-events-none filter grayscale mix-blend-screen overflow-hidden">
        <Image 
          alt="abstract artistic shot of a high performance sports textile" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzfQPWGLUT76yA-Tc9Zxz739-NGRoPaJ98ZDngbO5vyPfgBOZlQ9gI_ok5nNKPbY0SV-P4iNApMjjFqUkHGoDZqtr4Okuc2NSrvLJ3sSKd6Ip7OhqZYRK35zVr9PAftiKofykOZjAAAo-lI8GtZlVZfDiEoHZDsKXr2X4ml1X-gKYg_Bzxz5_0Hcfru6wGvbupu40xlZ3FCvcEfTiCkq7WrRdPha8VZelZS3yVG8N20XhvLu7YdQchEgHwwMk6q0VoWJPuJZLeQAU"
          fill
          className="object-cover object-bottom translate-x-1/4 translate-y-1/4 scale-150 rotate-12"
        />
      </div>
    </div>
  );
}
