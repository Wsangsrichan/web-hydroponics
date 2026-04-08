import type { Metadata } from "next";
import { Noto_Sans_Thai, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_Thai({
  variable: "--font-noto",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ไฮโดรโปนิก — คู่มือการปลูกผักไร้ดิน",
  description: "เรียนรู้การปลูกผักไฮโดรโปนิก ตั้งแต่เริ่มต้นจนเก็บเกี่ยว ครบจบในที่เดียว ไม่ต้องใช้ดิน ใช้พื้นที่น้อย เหมาะสำหรับคอนโดและบ้านในเมือง",
  keywords: ["ไฮโดรโปนิก", "hydroponics", "ปลูกผักไร้ดิน", "ปลูกผัก", "ผักสลัด", "เกษตรเมือง"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className={`${noto.variable} ${jetbrains.variable} scroll-smooth`}>
      <body
        className="min-h-screen font-[family-name:var(--font-noto)] antialiased"
        style={{ background: "var(--cyber-bg)", color: "var(--cyber-text)" }}
      >
        {children}
      </body>
    </html>
  );
}
