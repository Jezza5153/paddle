import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact & Info | PaddleForge",
  description: "Neem contact op met PaddleForge voor al je padel accessoires.",
};

export default function ContactPage() {
  return (
    <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto min-h-[80vh]">
      {/* Hero Section */}
      <header className="mb-24">
        <h1 className="font-headline text-5xl md:text-8xl font-black tracking-[-0.04em] text-on-surface leading-none uppercase">
          CONTACT <span className="text-primary italic">&amp;</span> INFO
        </h1>
        <p className="mt-8 text-xl text-on-surface-variant max-w-xl font-body leading-relaxed">
          Wij staan klaar voor al je vragen over kinetische precisie en padel gear. Krijg binnen 24 uur antwoord van ons team.
        </p>
      </header>
      
      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left Side: Contact Form */}
        <section className="lg:col-span-7">
          <div className="bg-surface-container-low p-10 rounded-xl border border-border/50 backdrop-blur-sm">
            <h2 className="font-headline text-3xl font-bold mb-8 tracking-tight uppercase">STUUR EEN BERICHT</h2>
            <form action="#" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Naam</label>
                  <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/50 font-body transition-all" placeholder="Je volledige naam" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Email</label>
                  <input className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/50 font-body transition-all" placeholder="email@voorbeeld.nl" type="email"/>
                </div>
              </div>
              <div className="space-y-2">
                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Bericht</label>
                <textarea className="w-full bg-surface-container-highest border-none focus:ring-2 focus:ring-primary rounded-lg py-4 px-6 text-on-surface placeholder:text-on-surface-variant/50 font-body transition-all resize-none" placeholder="Hoe kunnen we je helpen?" rows={6}></textarea>
              </div>
              <button className="w-full bg-primary text-on-primary font-headline font-bold py-5 rounded-full hover:scale-[1.02] active:scale-95 transition-all duration-300 uppercase tracking-wider" type="button">
                Verzenden
              </button>
            </form>
          </div>
        </section>
        
        {/* Right Side: Company Info & Shipping */}
        <aside className="lg:col-span-5 space-y-16">
          <div className="space-y-8">
            <h2 className="font-headline text-3xl font-bold tracking-tight flex items-center gap-4 uppercase">
              <span className="w-12 h-[2px] bg-primary"></span>
              BEDRIJFSDETAILS
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary" data-icon="location_on">location_on</span>
                <div>
                  <p className="font-bold text-on-surface mb-1">Online Store</p>
                  <p>PaddleForge</p>
                  <p>Nederland</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary" data-icon="schedule">schedule</span>
                <div>
                  <p className="font-bold text-on-surface mb-1">Levertijden</p>
                  <p>Maandag - Vrijdag: 09:00 - 17:00</p>
                  <p className="text-primary mt-2 text-sm font-medium italic">Gemiddelde levertijd: 1-3 werkdagen</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary" data-icon="mail">mail</span>
                <div>
                  <p className="font-bold text-on-surface mb-1">Email</p>
                  <a href="mailto:info@paddleforge.nl" className="hover:text-primary transition-colors">info@paddleforge.nl</a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative group overflow-hidden rounded-xl aspect-video bg-surface-container-highest">
            <Image 
              alt="Interior" 
              className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsfuwv4KC3SDw-tr30uh2idlXxcigi2Fpbt51tXf7MLgGV1lFWYBcfQef8qL7v1jrR8-hoFhmc_aUNb7kpWFhuEWjIRMavo5UkQ6zlpDjNnVb5ALo5neokSZYDIYlhoHV627eer5O0jo1dF0mOE4oksUqAbhLwHnwJOJ4wqIWpOuQV3i4GkzhURLcF8KvD3h2Us79xJTUQKCbPs9gA3NBDt2x4CZhmFyQLJ6u8pwujsW402inNZWGPbXf1cMwkMGeKMHstZFoGY14"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-6 left-6">
              <span className="font-label text-xs uppercase tracking-widest text-primary bg-surface/50 px-3 py-1 backdrop-blur-md rounded">PaddleForge View</span>
            </div>
          </div>
        </aside>
      </div>
      
      {/* Editorial Section: Terms & Returns */}
      <section className="mt-40 border-t border-border/50 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <article className="space-y-8">
            <h3 className="font-headline text-3xl md:text-4xl font-black tracking-tight text-on-surface uppercase">Onze Missie</h3>
            <div className="max-w-[65ch] text-on-surface-variant font-body leading-[1.8] space-y-6">
              <p>
                Welkom bij PaddleForge. Onze focus ligt op het leveren van kinetische precisie in al onze padel producten, speciaal ontworpen voor beginners en intermediate spelers in Nederland.
              </p>
              <p>
                Wij garanderen de hoogste kwaliteit van onze performance gear. Mocht een product niet voldoen aan de technische specificaties zoals vermeld, verzoeken wij je direct contact op te nemen met onze klantenservice.
              </p>
            </div>
          </article>
          <article className="space-y-8">
            <h3 className="font-headline text-3xl md:text-4xl font-black tracking-tight text-on-surface uppercase">Retourbeleid</h3>
            <div className="max-w-[65ch] text-on-surface-variant font-body leading-[1.8] space-y-6">
              <p>
                Niet volledig tevreden met je aankoop? Geen probleem. Bij PaddleForge hanteren we een retourtermijn van 14 dagen voor alle ongebruikte artikelen in originele verpakking.
              </p>
              <ul className="space-y-4 list-none text-sm">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Retourneren binnen 14 dagen
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Terugbetaling binnen 3-5 werkdagen na ontvangst
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                  Neem contact op voor een retourlabel
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
