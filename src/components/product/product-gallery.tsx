"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
  images: string[];
  alt: string;
  badge?: string | null;
}

export function ProductGallery({ images, alt, badge }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface-container-low group">
        <Image
          src={images[selected]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 60vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {badge && (
          <div className="absolute top-6 left-6">
            <span className="bg-primary text-on-primary font-label px-4 py-1 text-xs font-bold tracking-tighter rounded-full uppercase">
              {badge}
            </span>
          </div>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={cn(
                "relative aspect-square bg-surface-container-high rounded-lg overflow-hidden cursor-pointer transition-all",
                i === selected ? "ring-2 ring-primary" : "hover:ring-2 ring-primary/50"
              )}
            >
              <Image
                src={img}
                alt={`${alt} ${i + 1}`}
                fill
                sizes="15vw"
                className={cn(
                  "object-cover transition-opacity",
                  i === selected ? "opacity-100" : "opacity-60 hover:opacity-100"
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
