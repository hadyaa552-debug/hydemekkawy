"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

export default function BloomfieldsGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/images/ilmonte/gallery-main.webp", alt: "منظر جوي لـ IL Monte Galala" },
    { src: "/images/ilmonte/aerial-sunset.webp", alt: "منظر غروب الشمس" },
    { src: "/images/ilmonte/villa-1.webp", alt: "فيلا فاخرة بإطلالة بحرية" },
    { src: "/images/ilmonte/villa-2.webp", alt: "فيلا مع حمام سباحة خاص" },
    { src: "/images/ilmonte/amenities.webp", alt: "المرافق الفاخرة" },
    { src: "/images/ilmonte/payment-plan.jpeg", alt: "نظام السداد" },
  ]

  return (
    <section id="gallery" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">معرض الصور</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">اكتشف IL Monte Galala</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(i)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                  عرض
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-4 left-4 text-white hover:text-primary" onClick={() => setSelectedImage(null)}>
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[4/3]">
            <Image src={images[selectedImage].src} alt={images[selectedImage].alt} fill className="object-contain" sizes="100vw" />
          </div>
        </div>
      )}
    </section>
  )
}
