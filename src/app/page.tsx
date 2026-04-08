import type { ReactNode } from "react";

/* ─── Reusable Components ─── */

function Section({
  id,
  children,
  className = "",
  bg = "",
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  bg?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 px-4 sm:px-6 lg:px-8 ${bg} ${className}`}>
      <div className="max-w-5xl mx-auto">{children}</div>
    </section>
  );
}

function SectionTitle({ icon, title, subtitle }: { icon: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <span className="text-4xl sm:text-5xl mb-4 block float">{icon}</span>
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--green-800)]">{title}</h2>
      {subtitle && <p className="mt-2 text-[var(--green-600)] max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}

function Card({
  icon,
  title,
  children,
  className = "",
}: {
  icon?: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-sm border border-[var(--green-100)] hover:shadow-md hover:border-[var(--green-200)] transition-all ${className}`}>
      {icon && <span className="text-3xl mb-3 block">{icon}</span>}
      <h3 className="text-lg font-semibold text-[var(--green-800)] mb-2">{title}</h3>
      <div className="text-[#4a6a5a] text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--green-500)] text-white flex items-center justify-center font-bold text-lg">
      {n}
    </span>
  );
}

/* ─── Navigation ─── */

function Nav() {
  const links = [
    { href: "#hero", label: "หน้าแรก" },
    { href: "#getting-started", label: "เริ่มต้น" },
    { href: "#basics", label: "หลักการ" },
    { href: "#steps", label: "ขั้นตอน" },
    { href: "#systems", label: "ระบบปลูก" },
    { href: "#problems", label: "ปัญหาที่พบ" },
    { href: "#tips", label: "เคล็ดลับ" },
  ];
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[var(--green-100)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <a href="#hero" className="font-bold text-[var(--green-700)] text-lg tracking-wide">
          &#127793; ไฮโดรโปนิก
        </a>
        <div className="hidden md:flex items-center gap-5 text-sm text-[var(--green-700)]">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[var(--green-500)] transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <details className="md:hidden">
          <summary className="list-none cursor-pointer p-2 text-[var(--green-700)] font-bold text-xl">&#9776;</summary>
          <div className="absolute top-14 left-0 right-0 bg-white border-b border-[var(--green-100)] shadow-lg">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-6 py-3 text-sm text-[var(--green-700)] hover:bg-[var(--green-50)] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </details>
      </div>
    </nav>
  );
}

/* ─── Footer ─── */

function Footer() {
  return (
    <footer className="bg-[var(--green-900)] text-[var(--green-200)] py-10 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-2xl mb-2">&#127793;</p>
        <p className="font-semibold text-lg text-[var(--green-100)]">ไฮโดรโปนิก — ปลูกผักไร้ดิน</p>
        <p className="text-sm mt-2 text-[var(--green-300)]">hydroponics.ipptt.com</p>
        <p className="text-xs mt-4 text-[var(--green-400)]">&copy; {new Date().getFullYear()} HAOCOMM</p>
      </div>
    </footer>
  );
}

/* ─── Page ─── */

export default function Home() {
  return (
    <>
      <Nav />

      {/* ═══ HERO ═══ */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-14 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #ecfdf5 0%, #e0f2fe 40%, #dcfce7 100%)" }}
      >
        <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
          <svg className="absolute bottom-0 w-[200%] h-24 wave-animation" viewBox="0 0 1440 100" preserveAspectRatio="none">
            <path d="M0,40 C360,100 720,0 1080,60 C1260,90 1380,50 1440,40 L1440,100 L0,100 Z" fill="#f0fdf4" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center px-4 relative z-10">
          <span className="text-7xl sm:text-8xl block mb-6 fade-in">&#127793;</span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--green-900)] mb-4 fade-in fade-in-delay-1">
            ปลูกผักไฮโดรโปนิก
          </h1>
          <p className="text-lg sm:text-xl text-[var(--green-700)] mb-8 fade-in fade-in-delay-2 leading-relaxed">
            การปลูกพืชโดยไม่ใช้ดิน ใช้&ldquo;น้ำที่มีสารอาหารละลาย&rdquo; แทน
            <br />
            เหมาะสำหรับคนที่มีพื้นที่จำกัด — คอนโด หรือบ้านในเมือง
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-10 fade-in fade-in-delay-3">
            {[
              { icon: "&#127807;", label: "ไม่ต้องใช้ดิน" },
              { icon: "&#9889;", label: "โตเร็วกว่า" },
              { icon: "&#9989;", label: "สะอาด ปลอดสาร" },
              { icon: "&#128200;", label: "ใช้พื้นที่น้อย" },
            ].map((b) => (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-2 text-sm font-medium text-[var(--green-700)] border border-[var(--green-200)] shadow-sm"
              >
                <span dangerouslySetInnerHTML={{ __html: b.icon }} />
                {b.label}
              </span>
            ))}
          </div>
          <a
            href="#getting-started"
            className="inline-block bg-[var(--green-500)] hover:bg-[var(--green-600)] text-white font-semibold px-8 py-3 rounded-full transition-colors shadow-lg shadow-[var(--green-200)] fade-in fade-in-delay-4"
          >
            เริ่มต้นปลูก &#8595;
          </a>
        </div>
      </section>

      {/* ═══ GETTING STARTED ═══ */}
      <Section id="getting-started">
        <SectionTitle icon="&#129716;" title="เริ่มต้นปลูก" subtitle="มือใหม่ควรเริ่มจากผักโตไว อุปกรณ์พื้นฐานไม่ซับซ้อน" />

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          <Card icon="&#127807;" title="ผักที่เหมาะสำหรับเริ่มต้น">
            <ul className="space-y-2">
              {["ผักสลัด (กรีนโอ๊ค / เรดโอ๊ค / บัตเตอร์เฮด)", "คะน้า", "กวางตุ้ง", "ผักบุ้ง"].map((v) => (
                <li key={v} className="flex items-start gap-2">
                  <span className="text-[var(--green-400)] mt-0.5">&#10003;</span>
                  {v}
                </li>
              ))}
            </ul>
          </Card>
          <Card icon="&#9881;" title="อุปกรณ์พื้นฐาน">
            <ul className="space-y-2">
              {[
                "รางปลูก / กล่องปลูก",
                "ปั๊มน้ำ + สายยาง",
                "ถังน้ำผสมสารอาหาร",
                "ฟองน้ำ / วัสดุปลูก",
                "เมล็ดพันธุ์",
                "สารละลายธาตุอาหาร (A+B)",
                "เครื่องวัด pH และ EC (แนะนำ)",
              ].map((v) => (
                <li key={v} className="flex items-start gap-2">
                  <span className="text-[var(--water-400)] mt-0.5">&#9679;</span>
                  {v}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* ═══ BASICS ═══ */}
      <Section id="basics" bg="bg-[var(--water-50)]">
        <SectionTitle icon="&#128167;" title="หลักการสำคัญ" subtitle="พืชต้องการ 3 สิ่งเพื่อเติบโต" />

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            {
              icon: "&#128167;",
              title: "น้ำ + สารอาหาร",
              desc: "น้ำที่มีธาตุอาหารละลาย (N-P-K) เป็นหลัก ค่า EC 1.2-1.8",
              color: "border-[var(--water-200)] bg-[var(--water-50)]",
              iconColor: "text-[var(--water-500)]",
            },
            {
              icon: "&#127758;",
              title: "ออกซิเจนที่ราก",
              desc: "รากต้องได้รับออกซิเจนเพียงพอ ใช้ปั๊มเป่าหรือน้ำไหลผ่านราก",
              color: "border-[var(--green-200)] bg-[var(--green-50)]",
              iconColor: "text-[var(--green-500)]",
            },
            {
              icon: "&#9728;&#65039;",
              title: "แสงแดด",
              desc: "อย่างน้อย 4-6 ชั่วโมง/วัน ในที่ร่มใช้ grow light เสริมได้",
              color: "border-[var(--earth-200)] bg-[var(--earth-50)]",
              iconColor: "text-[var(--earth-600)]",
            },
          ].map((item) => (
            <div key={item.title} className={`rounded-2xl p-6 border-2 ${item.color} text-center`}>
              <span className={`text-5xl block mb-3 ${item.iconColor}`} dangerouslySetInnerHTML={{ __html: item.icon }} />
              <h3 className="text-lg font-bold mb-2 text-[var(--green-800)]">{item.title}</h3>
              <p className="text-sm text-[#4a6a5a]">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ STEPS ═══ */}
      <Section id="steps">
        <SectionTitle icon="&#129712;" title="ขั้นตอนการปลูก" subtitle="5 ขั้นตอนง่ายๆ จากเมล็ดจนเก็บเกี่ยว" />

        <div className="space-y-6">
          {[
            { n: 1, title: "เพาะเมล็ด", desc: "ใช้ฟองน้ำชุบน้ำ หยอดเมล็ดลงไป รอ 2-5 วันให้เริ่มงอก เก็บไว้ในที่มีแสงระแรง", icon: "&#127793;" },
            { n: 2, title: "ย้ายลงระบบ", desc: "เมื่อมีใบจริง 2-3 ใบ นำไปใส่ในรางปลูก ยึดรากด้วยฟองน้ำให้แน่น", icon: "&#128230;" },
            { n: 3, title: "เติมสารอาหาร", desc: "ผสมปุ๋ย A+B ในน้ำ ค่า EC 1.2-1.8 | ค่า pH 5.5-6.5", icon: "&#129514;" },
            { n: 4, title: "ดูแลรักษา", desc: "เช็คระดับน้ำทุกวัน | เปลี่ยนน้ำทุก 7-14 วัน | ป้องกันแมลง", icon: "&#128065;" },
            { n: 5, title: "เก็บเกี่ยว", desc: "ใช้เวลาประมาณ 25-40 วัน ขึ้นอยู่กับชนิดผัก ตัดที่โคนต้น", icon: "&#127806;" },
          ].map((step) => (
            <div key={step.n} className="flex items-start gap-4 bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-[var(--green-100)]">
              <StepNumber n={step.n} />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span dangerouslySetInnerHTML={{ __html: step.icon }} />
                  <h3 className="text-lg font-bold text-[var(--green-800)]">{step.title}</h3>
                </div>
                <p className="text-[#4a6a5a] text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ SYSTEMS ═══ */}
      <Section id="systems" bg="bg-[var(--water-50)]">
        <SectionTitle icon="&#128260;" title="ระบบไฮโดรโปนิกยอดนิยม" subtitle="3 ระบบหลักที่นิยมใช้ เลือกตามความเหมาะสม" />

        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { name: "NFT", full: "Nutrient Film Technique", desc: "น้ำไหลผ่านรากตลอดเวลา เป็นแผ่นบางๆ นิยมที่สุด", pros: ["ประหยัดน้ำ", "รากได้ออกซิเจนดี", "เหมาะผักใบเขียว"], tag: "นิยมมาก", tagColor: "bg-[var(--green-500)]" },
            { name: "DWC", full: "Deep Water Culture", desc: "รากแช่น้ำลึกตลอดเวลา ใช้อากาศเป่า", pros: ["ทำง่าย", "ต้นทุนต่ำ", "เหมาะมือใหม่"], tag: "เริ่มต้น", tagColor: "bg-[var(--water-500)]" },
            { name: "Drip", full: "Drip System", desc: "น้ำหยดเลี้ยงทีละหยด ผ่านสายยางไปยังรากพืช", pros: ["ใช้กับพืชใหญ่ได้", "ควบคุมปริมาณได้", "ประหยัดน้ำมาก"], tag: "หลากหลาย", tagColor: "bg-[var(--earth-600)]" },
          ].map((sys) => (
            <div key={sys.name} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[var(--green-100)]">
              <div className={`${sys.tagColor} text-white text-xs font-bold px-3 py-1 text-right`}>{sys.tag}</div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[var(--green-800)] mb-1">{sys.name}</h3>
                <p className="text-xs text-[#6a8a7a] mb-3">{sys.full}</p>
                <p className="text-sm text-[#4a6a5a] mb-4">{sys.desc}</p>
                <div className="space-y-1.5">
                  {sys.pros.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-sm">
                      <span className="text-[var(--green-400)]">&#10003;</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ PROBLEMS ═══ */}
      <Section id="problems">
        <SectionTitle icon="&#9888;&#65039;" title="ปัญหาที่พบบ่อย" subtitle="รู้สาเหตุ แก้ไขได้ทัน" />

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { symptom: "&#128163; รากเน่า", cause: "น้ำไม่ไหล / ออกซิเจนไม่พอ", fix: "เปิดปั๊มให้น้ำไหลตลอด เพิ่มการระบายอากาศ" },
            { symptom: "&#128308; ใบเหลือง", cause: "สารอาหารไม่พอ / ค่า pH เพี้ยน", fix: "เติมสารอาหาร ปรับ pH ให้อยู่ 5.5-6.5" },
            { symptom: "&#128528; ผักไม่โต", cause: "แสงไม่พอ / อุณหภูมิต่ำเกิน", fix: "ย้ายไปที่มีแสงมากขึ้น / เพิ่ม grow light" },
            { symptom: "&#128168; ค่า pH เพี้ยน", cause: "น้ำไม่เปลี่ยนนานเกิน / สารอาหารเกิน", fix: "เปลี่ยนน้ำใหม่ทุก 7-14 วัน วัด pH ทุกวัน" },
          ].map((p) => (
            <div key={p.symptom} className="bg-white rounded-xl p-5 shadow-sm border border-red-100 hover:border-red-200 transition-colors">
              <h3 className="font-bold text-[var(--green-800)] mb-2" dangerouslySetInnerHTML={{ __html: p.symptom }} />
              <div className="space-y-1 text-sm">
                <p><span className="text-red-400 font-semibold">สาเหตุ:</span> <span className="text-[#4a6a5a]">{p.cause}</span></p>
                <p><span className="text-[var(--green-500)] font-semibold">แก้ไข:</span> <span className="text-[#4a6a5a]">{p.fix}</span></p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ═══ TIPS ═══ */}
      <Section id="tips" bg="bg-[var(--earth-50)]">
        <SectionTitle icon="&#128161;" title="เคล็ดลับ" subtitle="สิ่งที่ควรรู้ก่อนเริ่มต้น" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: "&#127793;", tip: "เริ่มจากชุดเล็กก่อน — ทดลอง 3-4 ชนิด จนคุ้นเคยแล้วค่อยขยาย" },
            { icon: "&#128167;", tip: "ใช้น้ำสะอาด — น้ำกรอง หรือน้ำพักคลอรีน อย่างน้อย 24 ชม." },
            { icon: "&#9728;&#65039;", tip: "อย่าให้แดดแรงเกิน — อาจต้องพรางแสงด้วยมุ้งหรือ shading net" },
            { icon: "&#128221;", tip: "จดบันทึกการปลูก — วันที่ เมล็ด ค่า pH/EC ผลผลิต ช่วยพัฒนาได้เร็ว" },
            { icon: "&#128736;&#65039;", tip: "ซื้อเครื่องวัด pH + EC — เป็นการลงทุนที่คุ้มค่า ปรับค่าได้แม่นยำ" },
            { icon: "&#129309;", tip: "เข้าชมรมหรือคอมมูนิตี — แลกเปลี่ยนประสบการณ์กับคนอื่นช่วยได้เยอะ" },
          ].map((t) => (
            <div key={t.tip} className="bg-white rounded-xl p-4 shadow-sm border border-[var(--earth-200)] flex items-start gap-3">
              <span className="text-2xl flex-shrink-0" dangerouslySetInnerHTML={{ __html: t.icon }} />
              <p className="text-sm text-[#4a6a5a] leading-relaxed">{t.tip}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </>
  );
}
