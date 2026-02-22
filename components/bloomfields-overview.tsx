"use client"

import Image from "next/image"

export default function BloomfieldsOverview() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-4">
            <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">نبذة عن المشروع</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">مشروع IL Monte Galala</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-primary font-semibold">IL Monte Galala</span> - مشروع غير مسبوق على البحر الأحمر! أول أبراج سكنية فندقية فاخرة على البحر مباشرة بارتفاع يصل لـ 22 دور على جبل الجلالة.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                المشروع يضم فندق تحت إدارة <span className="font-semibold text-foreground">Marriott International</span>، Branded Residences، وخدمات فندقية عالمية مع مارينا IGY Marinas.
              </p>

              <div className="grid grid-cols-3 gap-6 pt-4 text-center">
                {[
                  { value: "10", label: "أبراج" },
                  { value: "22", label: "دور" },
                  { value: "2028", label: "التسليم" },
                ].map((s, i) => (
                  <div key={i} className="bg-muted/30 p-6">
                    <div className="text-4xl font-bold text-primary mb-2">{s.value}</div>
                    <div className="text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/ilmonte/villa-1.webp" alt="IL Monte Galala" fill className="object-cover" sizes="50vw" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden mt-8">
                <Image src="/images/ilmonte/villa-2.webp" alt="IL Monte Galala" fill className="object-cover" sizes="50vw" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
