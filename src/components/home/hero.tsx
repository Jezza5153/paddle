"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax effect for the background image
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section 
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-inverse-surface"
    >
      <motion.div 
        className="absolute inset-0 opacity-40"
        style={{ y: backgroundY }}
      >
        <img
          className="w-full h-full object-cover scale-110"
          alt="High-speed action shot of a padel match in a dark minimalist indoor court"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZCELGR_exMyE6bPnjFhnJv3fsnLIUHm23HKWOAwHoGV5-58f5RNQqj4S9qMzgP-MU3FlPLQA7cmHWxQWn14_6tdUF64NaKCQ4IvoGcaYBu4AvtZAG6ALxhE8IxNVQomY1LsCV8hv2fm4fC999QXzoLWjDJcpylnWNI9mR-UzbuOY5lxSh2glJUitEqoKSJpaixDJtFswhjmODGhY-41apqjc5GjugbF3ug4uMeMQK_EaL6CPJN6U15SeNUIXI9ed4Q0R_HyrPV0A"
        />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="font-headline text-8xl md:text-[12rem] font-black text-surface leading-[0.85] tracking-tighter mb-8">
          KINETIC<br />
          <span className="text-primary-container italic">PRECISION</span>
        </h1>
        <p className="font-label text-surface/60 tracking-[0.2em] text-sm md:text-base uppercase mb-12">
          Het Hoogtepunt van Competitieve Padel Engineering
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link href="/shop">
            <button className="bg-primary text-on-primary px-12 py-5 rounded-full font-headline font-bold text-lg hover:scale-105 transition-transform duration-300 active:scale-95 shadow-2xl shadow-primary/20">
              ONTDEK DE ELITE SERIE
            </button>
          </Link>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <span className="material-symbols-outlined text-primary-container text-4xl" data-icon="keyboard_double_arrow_down">
          keyboard_double_arrow_down
        </span>
      </motion.div>
    </section>
  );
}
