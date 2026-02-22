"use client"

import Image from "next/image"

export default function BloomfieldsUnits() {
  const units = [
    { type: "فيلات مستقلة", subtype: "Independent Villas", desc: "فيلات مستقلة فاخرة مع حدائق خاصة وتصميمات عصرية توفر الخصوصية والراحة", image: "/images/high5.webp" },
    { type: "توين هاوس", subtype: "Twin Houses", desc: "وحدات توين هاوس واسعة بتصميمات مودرن تجمع بين الأناقة والعملية", image: "/images/high4.webp" },
    { type: "تاون هاوس", subtype: "Townhouses", desc: "تاون هاوس عصري بمساحات مريحة وحدائق خاصة لأسلوب حياة متميز", image: "/images/high1.webp" },
    { type: "شقق سكنية", subtype: "Apartments", desc: "شقق سكنية بتصميمات فاخرة توفر الراحة والعملية في قلب الكمبوند", image: "/images/high3.webp" },
  ]

  return (
    <section id="units" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">الوحدات المتاحة</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">تنوع يلبي جميع الاحتياجات</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {units.map((unit, i) => (
            <div key={i} className="group overflow-hidden bg-muted/10 hover:shadow-xl transition-all duration-300">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={unit.image} alt={unit.type} fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-700">
                  {unit.subtype}
                </div>
              </div>
              <div className="p-6 text-right">
                <h3 className="text-xl font-bold text-foreground mb-2">{unit.type}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">{unit.desc}</p>
                <p className="text-xs text-muted-foreground">متنوعة حسب التصميم</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          المساحات متنوعة حسب نوع وموقع الوحدة داخل المشروع - للتفاصيل الدقيقة يرجى التواصل مع فريق المبيعات
        </p>
      </div>
    </section>
  )
}
