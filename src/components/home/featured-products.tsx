"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ProductData } from "@/data/products";

export function FeaturedProducts({ products }: { products: ProductData[] }) {
  // Use framer motion container variant for staggered children
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const popIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="py-32 bg-inverse-surface overflow-hidden" id="performance">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="font-headline text-5xl md:text-8xl font-black text-surface leading-none"
          >
            PRESTATIE<br />
            <span className="text-stroke">COLLECTIE</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: 0.3 }}
            className="hidden md:flex gap-4"
          >
            <button className="w-14 h-14 rounded-full border border-surface/20 flex items-center justify-center text-surface hover:bg-surface hover:text-inverse-surface transition-all">
              <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
            </button>
            <button className="w-14 h-14 rounded-full border border-surface/20 flex items-center justify-center text-surface hover:bg-surface hover:text-inverse-surface transition-all">
              <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
            </button>
          </motion.div>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {products.slice(0, 3).map((product) => (
            <motion.div key={product.id} variants={popIn}>
              <Link href={`/products/${product.slug}`} className="block h-full">
                <div className="bg-[#18181b] rounded-xl p-8 group hover:bg-[#27272a] transition-colors duration-500 h-full flex flex-col cursor-pointer">
                  <div className="aspect-[3/4] mb-8 overflow-hidden rounded-lg flex-shrink-0 bg-surface">
                    <img 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                      alt={product.name} 
                      src={product.primaryImage || '/images/placeholder.jpg'}
                    />
                  </div>
                  <div className="flex justify-between items-start mb-4 mt-auto">
                    <div>
                      <h4 className="text-surface font-headline text-2xl font-bold line-clamp-1">{product.name}</h4>
                      <p className="text-on-surface-variant font-label text-xs tracking-widest mt-1 uppercase">
                        {product.badge || 'PRO SERIES'}
                      </p>
                    </div>
                    <span className="text-primary-container font-headline font-black text-xl flex-shrink-0 ml-4">
                      €{product.basePriceIncVat.toFixed(2)}
                    </span>
                  </div>
                  <div className="h-1 w-0 group-hover:w-full bg-primary-container transition-all duration-500 mt-2 rounded"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
