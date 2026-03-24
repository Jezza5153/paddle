"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FinalCta() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-primary">
        <img 
          className="w-full h-full object-cover opacity-30 mix-blend-multiply" 
          alt="Dynamic wide-angle shot of elite athletes on a modern blue padel court" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1rFM5Rd8hFr-NahS714-vnRW37eyUFvs8hTydtO8bnU1xHfLKulOGYEnuU7kc9tk2XvvvKY8CbSc-3tWLorLPHVzYANZKtev1hgPFXNu7evnLD45AZ9snDwseSbDHLtZwB3I94Qvum6_KksX0jQOxw8KtY7KwCJUt8d3WIEkWWvv3EEvdIf37VTbUqdP8tbwxEMTUlINPPjOm5e8cFCxTQDg6PvgAgIEuajTwfjrqy4ROWCWgFGcUXTAj-8iPhrcP7mdiDXXtGcE" 
        />
      </div>
      
      <div className="relative z-10 text-center flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          className="font-headline text-5xl md:text-9xl font-black text-on-primary mb-12 tracking-tighter mix-blend-plus-lighter"
        >
          WORD DEEL VAN DE ELITE.
        </motion.h2>
        
        <Link href="/shop">
          <motion.button 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
            animate={{ boxShadow: ["0px 0px 0px 0px rgba(212, 255, 0, 0.4)", "0px 0px 0px 20px rgba(212, 255, 0, 0)", "0px 0px 0px 0px rgba(212, 255, 0, 0)"] }}
            className="bg-inverse-surface text-surface px-12 md:px-16 py-5 md:py-6 rounded-full font-headline font-black text-xl md:text-2xl hover:bg-black transition-all hover:scale-110 active:scale-95 shadow-2xl"
          >
            BEKIJK DE COLLECTIE
          </motion.button>
        </Link>
      </div>
    </section>
  );
}
