"use client";

import { motion } from "framer-motion";

export function WhyBuyHere() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const popIn = {
    hidden: { opacity: 0, scale: 0.5 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-40 bg-surface overflow-hidden relative">
      <div className="absolute -right-20 top-0 text-[10rem] md:text-[20rem] font-black text-surface-container-high leading-none select-none opacity-50">
        BASS
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={slideRight}
            className="relative"
          >
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl"></div>
            <img 
              className="w-full rounded-xl shadow-2xl relative z-10" 
              alt="High-tech cross section diagram of a carbon fiber paddle showing honeycomb core layers" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdS-vmWiDkMG5fh-b1S0Y77rPCj4oxPLzh3iMiA2wLy3yF7t1aN2axNsqXYEjxOkynlK_HZlIJVA0Ew_2971YB5DxYMRzjDqs59yrEZlsFj-sQA9TTGkU_TuJrI69dXWGN30x_g3aaHWta4AwJ0SSzv29zCvHAgk5FwBthlvfSaKcSzTEUGp_Yc8hZXqrTWGPLZ2xcKjOF2YHUf4w45XKO0VwhXqxY0p_miziVoBprRdIEuQiXiNWfXIGNz-_Dl4LrvR4rPAL4cuw" 
            />
            
            <motion.div 
              variants={popIn}
              className="absolute bottom-6 right-6 bg-surface p-6 shadow-xl rounded-lg z-20 max-w-[200px]"
            >
              <p className="font-headline font-bold text-xs uppercase tracking-widest text-primary mb-2">
                Kerntechnologie
              </p>
              <p className="text-sm font-medium leading-tight text-on-surface">
                Geavanceerde Polymeer Honingraat voor 22% meer trillingsdemping.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2 
              variants={slideLeft}
              className="font-headline text-5xl md:text-7xl font-black mb-8 leading-[0.9] text-inverse-surface"
            >
              PRECISIE<br />
              VOORBIJ HET<br />
              ZICHTBARE.
            </motion.h2>
            
            <motion.div variants={container} className="space-y-12">
              <div className="flex gap-6">
                <motion.span variants={popIn} className="material-symbols-outlined text-primary text-4xl" data-icon="bolt">
                  bolt
                </motion.span>
                <div className="flex-1">
                  <h5 className="font-headline font-bold text-xl mb-2 text-inverse-surface">Directe Respons</h5>
                  <p className="text-on-surface-variant text-sm md:text-base">
                    Reactieve oppervlaktetechnologie biedt een 0,2ms snellere rebound dan standaard paddles.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <motion.span variants={popIn} className="material-symbols-outlined text-primary text-4xl" data-icon="shield">
                  shield
                </motion.span>
                <div className="flex-1">
                  <h5 className="font-headline font-bold text-xl mb-2 text-inverse-surface">Edge Guard Pro</h5>
                  <p className="text-on-surface-variant text-sm md:text-base">
                    Laag profiel aërodynamische randbescherming minimaliseert luchtweerstand en maximaliseert de zwaaisnelheid.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <motion.span variants={popIn} className="material-symbols-outlined text-primary text-4xl" data-icon="fitness_center">
                  fitness_center
                </motion.span>
                <div className="flex-1">
                  <h5 className="font-headline font-bold text-xl mb-2 text-inverse-surface">Gebalanceerde Weegverhouding</h5>
                  <p className="text-on-surface-variant text-sm md:text-base">
                    Nauwkeurig gekalibreerd zwaartepunt voor moeiteloze wendbaarheid en kracht.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
