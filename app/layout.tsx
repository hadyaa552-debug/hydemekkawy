import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/toaster"
import "./globals.css"

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700"],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "Hyde Park Central New Cairo هايد بارك سنترال | كمبوند سكني راقي في التجمع السادس",
  description: "Hyde Park Central New Cairo - كمبوند سكني راقٍ في التجمع السادس من هايد بارك للتطوير العقاري. فيلات، توين هاوس، تاون هاوس وشقق فاخرة على 220 فدان بأنظمة سداد مرنة.",
  keywords: ["Hyde Park Central", "هايد بارك سنترال", "كمبوند التجمع السادس", "Hyde Park Developments", "فيلات للبيع القاهرة الجديدة", "نيو كايرو"],
  authors: [{ name: "Hyde Park Developments" }],
  metadataBase: new URL("https://hydeparkproperties.org"),
  openGraph: {
    type: "website",
    locale: "ar_EG",
    title: "Hyde Park Central New Cairo | كمبوند سكني راقي في التجمع السادس",
    description: "كمبوند سكني راقٍ في التجمع السادس من هايد بارك للتطوير العقاري. فيلات، توين هاوس، تاون هاوس وشقق فاخرة.",
    siteName: "Hyde Park Central",
    images: [{ url: "/images/high1.webp", width: 1200, height: 630, alt: "Hyde Park Central New Cairo" }],
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>
        {children}
        <Toaster />
        <Analytics />
      </body>
    </html>
  )
}
