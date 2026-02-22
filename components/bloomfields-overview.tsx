"use client"

import Image from "next/image"

export default function BloomfieldsOverview() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">نبذة عن المشروع</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">مشروع Hyde Park Central</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              كمبوند سكني راقٍ يجمع بين التصميم العصري والخدمات المتكاملة في موقع استراتيجي بالتجمع السادس، نيو كايرو. من تطوير شركة <span className="text-primary font-semibold">هايد بارك للتطوير العقاري</span>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              يقع المشروع على مساحة 220 فدان تضم تصميمات معمارية عصرية، مساحات خضراء واسعة، وتخطيط ذكي يوفر إطلالات خلابة وحياة هادئة لجميع الوحدات.
            </p>
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              {[
                { value: "220", label: "فدان" },
                { value: "70%", label: "مساحات خضراء" },
                { value: "4", label: "أنواع وحدات" },
              ].map((s, i) => (
                <div key={i} className="bg-muted/30 p-6">
                  <div className="text-4xl font-bold text-primary mb-2">{s.value}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 order-1 lg:order-2">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image src="/images/high3.webp" alt="Hyde Park Central" fill className="object-cover" sizes="50vw" />
            </div>
            <div className="relative aspect-[3/4] overflow-hidden mt-8">
              <Image src="/images/high6.webp" alt="Hyde Park Central" fill className="object-cover" sizes="50vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
