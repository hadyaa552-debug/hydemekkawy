"use client"

import Image from "next/image"

export default function BloomfieldsUnits() {
  const units = [
    { type: "ستوديو", area: "60 م²", image: "/images/ilmonte/villa-1.webp" },
    { type: "غرفة نوم واحدة", area: "90 - 120 م²", image: "/images/ilmonte/villa-2.webp" },
    { type: "غرفتين نوم", area: "120 - 145 م²", image: "/images/ilmonte/amenities.webp" },
    { type: "لوفت", area: "105 - 145 م²", image: "/images/ilmonte/gallery-main.webp" },
    { type: "3 غرف نوم", area: "230 م²", image: "/images/ilmonte/aerial-sunset.webp" },
    { type: "بنتهاوس", area: "415 - 450 م²", image: "/images/ilmonte/villa-1.webp" },
  ]

  return (
    <section id="units" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">الوحدات المتاحة</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">تنوع يلبي جميع الاحتياجات</h2>
          <p className="text-muted-foreground text-lg">وحدات سكنية فندقية فاخرة بتشطيب كامل وإطلالة على البحر</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {units.map((unit, i) => (
            <div key={i} className="group overflow-hidden bg-muted/20 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={unit.image}
                  alt={unit.type}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-foreground mb-1">{unit.type}</h3>
                <p className="text-muted-foreground text-sm mb-4">{unit.area}</p>
                <p className="text-xs text-muted-foreground">المساحات متنوعة حسب نوع وموقع الوحدة</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          للتفاصيل الدقيقة يرجى التواصل مع فريق المبيعات
        </p>
      </div>
    </section>
  )
}
