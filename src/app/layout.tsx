import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_Thai({
  variable: "--font-noto",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="th" className={`${noto.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#f0fdf4] text-[#1a3a2a] font-[family-name:var(--font-noto)] antialiased">
        {children}
      </body>
    </html>
  );
}
