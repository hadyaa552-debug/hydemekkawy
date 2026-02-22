"use client"

import Image from "next/image"

export default function BloomfieldsPayment() {
  const phoneNumber = "+201024383203"
  const whatsappMessage = encodeURIComponent("مرحباً، أنا مهتم بمشروع IL Monte Galala وأريد الاستفسار عن التفاصيل والأسعار")

  return (
    <section id="payment" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        <div className="text-center mb-12">
          <p className="text-primary font-semibold tracking-widest uppercase text-sm mb-3">الأسعار وأنظمة السداد</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">أنظمة سداد مرنة</h2>
          <p className="text-muted-foreground text-lg mb-8">
            للحصول على الأسعار الدقيقة والتفاصيل الكاملة، يرجى التواصل مع فريق المبيعات
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: "أنظمة سداد مرنة", desc: "مقدم 5% + أقساط طويلة الأجل" },
            { label: "تسهيلات متنوعة", desc: "خطط سداد تناسب احتياجاتك" },
            { label: "موعد التسليم", desc: "2028" },
          ].map((item, i) => (
            <div key={i} className="bg-background p-8 text-center">
              <h3 className="text-lg font-bold text-foreground mb-2">{item.label}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="relative w-full max-w-2xl mx-auto aspect-square mb-10 overflow-hidden shadow-2xl">
          <Image
            src="/images/ilmonte/payment-plan.jpeg"
            alt="نظام السداد"
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>

        <div className="text-center">
          <a
            href={`https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-4 font-semibold text-lg hover:bg-primary/90 transition-colors"
          >
            استفسر عن التفاصيل والأسعار
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            الأسعار وأنظمة السداد تختلف حسب نوع الوحدة والمساحة والموقع داخل المشروع
          </p>
        </div>
      </div>
    </section>
  )
}
