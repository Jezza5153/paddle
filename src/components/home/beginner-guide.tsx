"use client";

import { motion } from "framer-motion";

export function BeginnerGuide() {
  return (
    <section className="py-32 bg-surface overflow-hidden" id="technology">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="lg:col-span-5"
          >
            <span className="font-label text-primary font-bold tracking-widest text-sm block mb-4">SPECIFICATIES</span>
            <h2 className="font-headline text-5xl md:text-6xl font-black text-inverse-surface leading-none mb-8">
              ONTWORPEN<br />VOOR IMPACT.
            </h2>
            <p className="text-on-surface-variant text-xl leading-relaxed max-w-md">
              Wij bouwen niet zomaar paddles; we smeden kinetische energie. Elk PaddleForge onderdeel wordt getest in ons carbon-lab voor ultieme resonantie.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="aspect-square bg-surface-container-high rounded-xl overflow-hidden group">
              <img 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                alt="Close-up detail of high-tech carbon fiber weave texture" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0djeZN431PcOXkWL1B7t864kUGLUegFnEnBoYZJbXkNIzEQ6KwfJfjMOcX50tPrT9vHlFP1R2Mhdt5mdJvPh_Ohsf_IyqzX36W3PmioBr8K74wLBEhsHQwC-LurAY3FAYwDtSa0-kOWCiynScygw6XkG52JxG5a0dt_gNrSZn32IUZN5UVdvQlpTPvC3iIYeg_XwmBaxjxcS6DsE8acBUCNIJxX5gYU93hSyqPKHCGJYQ_pdoFSMQunQL4qZcnJUS4eh8_HZwc5U" 
              />
            </div>
            <div className="aspect-square sm:aspect-[4/5] bg-primary-container rounded-xl flex items-end p-8">
              <h3 className="font-headline font-black text-4xl text-on-primary-container leading-none">
                AERODYNAMIC CORE<br/>T700
              </h3>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
