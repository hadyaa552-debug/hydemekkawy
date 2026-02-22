"use client"

import Image from "next/image"

export default function BloomfieldsAmenities() {
  const amenities = [
    "حدائق ومساحات خضراء",
    "مرافق خدمية وتجارية",
    "أمن وحراسة 24/7",
    "مناطق لعب الأطفال",
    "مقاهي ومطاعم",
    "مسارات مشي ودراجات",
    "نوادي رياضية",
    "حمامات سباحة",
    "موقع استراتيجي",
  ]

  return (
    <section id="amenities" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">المميزات والخدمات</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">حياة متكاملة من الرفاهية</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            خدمات ومرافق متكاملة توفر أعلى مستويات الراحة والرفاهية لك ولعائلتك
          </p>
        </div>

        <div className="relative aspect-[16/7] overflow-hidden mb-12 shadow-2xl">
          <Image src="/images/high6.webp" alt="مميزات Hyde Park Central" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {amenities.map((amenity, i) => (
            <div key={i} className="p-6 border-b border-l border-border hover:bg-muted/30 transition-colors text-right">
              <div className="flex items-center gap-3 justify-end">
                <span className="font-medium text-foreground">{amenity}</span>
                <div className="w-2 h-2 bg-primary flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "موقع استراتيجي", desc: "في قلب التجمع السادس قريب من الطرق الرئيسية" },
            { title: "تخطيط ذكي", desc: "بتصميمات عصرية ومساحات خضراء كبيرة على 220 فدان" },
            { title: "راحة وخصوصية", desc: "تجمع بين الراحة والخصوصية مع خدمات متكاملة" },
          ].map((item, i) => (
            <div key={i} className="bg-muted/20 p-8 text-right border-r-4 border-primary">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
