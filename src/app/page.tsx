import Image from "next/image";
import { Droplets, Gauge, Activity, ShieldCheck, Cpu, Network, Zap, LineChart, Server, Lock, Bot, Database, Settings2 } from "lucide-react";
import { ContactForm } from "@/components/landing/ContactForm";
import { Feature } from "@/components/landing/Feature";
import { MiniCard } from "@/components/landing/MiniCard";
import { Outcome } from "@/components/landing/Outcome";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { StackCard } from "@/components/landing/StackCard";
import { Stat } from "@/components/landing/Stat";
import { Step } from "@/components/landing/Step";

/**
 * HydroSmart — Single‑file brochure website
 * - React component, TailwindCSS styling
 * - Mobile‑first, responsive
 * - Anchor nav (Fitur, Cara Kerja, Manfaat, Stack, Kontak)
 * - Replace placeholders (contacts, links, logos) as needed
 */

export default function HydroSmartLanding() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* ===== Navbar ===== */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-slate-200">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold">
            <div className="relative h-20 w-20">
              <Image src="/logo.svg" alt="HydroSmart logo" fill sizes="40px" className="object-contain" />
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fitur" className="hover:text-blue-700">Fitur</a>
            <a href="#cara-kerja" className="hover:text-blue-700">Cara Kerja</a>
            <a href="#manfaat" className="hover:text-blue-700">Manfaat</a>
            <a href="#stack" className="hover:text-blue-700">Stack</a>
            <a href="#contact" className="hover:text-blue-700">Kontak</a>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <a href="#contact" className="px-3 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium">Hubungi Kami</a>
          </div>
        </nav>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-48 w-[42rem] h-[42rem] rounded-full bg-gradient-to-br from-sky-300/70 via-blue-200/50 to-transparent blur-3xl opacity-80" aria-hidden />
        <div className="absolute top-64 -left-44 w-[32rem] h-[32rem] rounded-full bg-cyan-200/45 blur-3xl opacity-70" aria-hidden />
        <div className="absolute top-[28rem] right-1/4 w-[28rem] h-[28rem] rounded-full bg-indigo-200/35 blur-3xl opacity-75" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              Pendinginan Air dengan <span className="text-blue-700">Intelijen Prediktif</span> untuk Pusat Data
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
              HydroSmart memadukan telemetri suhu, beban komputasi, dan konsumsi daya untuk memprediksi kebutuhan termal secara real-time. Sistem otomatis menyesuaikan debit air melalui WCU &amp; VFD sehingga suhu terjaga, energi hemat hingga 30%, dan risiko downtime menurun drastis.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-semibold text-sm sm:text-base">Hubungi Kami</a>
              <a href="#fitur" className="px-5 py-3 rounded-2xl border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-sm sm:text-base">Lihat Fitur</a>
            </div>
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
              <Stat icon={Zap} label="Hemat Energi" value="15–30%" />
              <Stat icon={Gauge} label="Suhu Stabil" value="±1.0°C" />
              <Stat icon={Activity} label="Respons Kontrol" value="&lt; 500 ms" />
              <Stat icon={ShieldCheck} label="Keamanan" value="TLS + RBAC" />
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl ring-1 ring-slate-200 p-6 lg:p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-600">
                <span className="w-2 h-2 bg-emerald-500 rounded-full" aria-hidden></span>
                <span className="text-xs">Realtime link</span>
              </div>
              <span className="text-xs text-slate-500">API: MQTT/HTTP</span>
            </div>
            <div className="mt-5 grid sm:grid-cols-3 gap-4">
              <MiniCard title="Server Rack" subtitle="24 node" icon={Server} />
              <MiniCard title="Debit Air" subtitle="120 LPM" icon={Droplets} />
              <MiniCard title="Load" subtitle="64% avg" icon={Cpu} />
            </div>
            <div className="mt-6">
              <div className="h-44 rounded-2xl bg-gradient-to-tr from-sky-100 to-blue-100 grid place-items-center text-slate-500">
                <LineChart className="w-6 h-6" />
                <p className="text-xs mt-2">Grafik suhu, debit, dan beban — contoh mockup</p>
              </div>
            </div>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600"/> TLS in‑transit • Audit log</li>
              <li className="flex items-center gap-2"><Network className="w-4 h-4 text-blue-600"/> Integrasi WCU, VFD, katup IoT</li>
              <li className="flex items-center gap-2"><Bot className="w-4 h-4 text-indigo-600"/> Analitik prediktif—penentuan debit</li>
              <li className="flex items-center gap-2"><Database className="w-4 h-4 text-cyan-600"/> Historis &amp; dashboard real‑time</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="fitur" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <SectionHeader kicker="Fitur" title="Solusi yang Anda peroleh" subtitle="Dirancang untuk menekan capex/opex sekaligus menjaga ketersediaan layanan." />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <Feature icon={Gauge} title="Kontrol Debit Dinamis" desc="VFD menyesuaikan kecepatan pompa sesuai beban server — bukan sekadar ON/OFF." />
          <Feature icon={Droplets} title="Katup per‑Rak" desc="Katup IoT membuka/menutup otomatis per‑jalur agar distribusi air optimal." />
          <Feature icon={Cpu} title="Monitoring 24/7" desc="Agent membaca suhu, CPU/RAM, dan daya — dikirim ke API secara real‑time." />
          <Feature icon={LineChart} title="Dashboard Real‑time" desc="Grafik suhu, debit, alarm, dan historis untuk audit & optimasi." />
          <Feature icon={Settings2} title="API Terbuka" desc="HTTP/MQTT, mudah diintegrasikan ke sistem BMS/DCIM dan SCADA." />
          <Feature icon={ShieldCheck} title="Keamanan Enterprise" desc="TLS, RBAC, rate limiting, dan audit trail." />
        </div>
      </section>

      <section id="cara-kerja" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader kicker="Cara Kerja" title="Arsitektur kendali tertutup" subtitle="Sensor, analitik, dan aktuasi bekerja serempak menjaga performa termal." />
          <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Step no={1} icon={Activity} title="Monitor" desc="Agent membaca suhu, CPU/RAM, dan daya lalu mengirim telemetri terenkripsi ke API." />
            <Step no={2} icon={Bot} title="Analitik Prediktif" desc="Model menghitung debit optimal per jalur berdasarkan tren beban & risiko termal." />
            <Step no={3} icon={Network} title="Kontrol" desc="API mengatur WCU, VFD, dan katup IoT melalui MQTT/HTTP secara presisi." />
            <Step no={4} icon={Lock} title="Umpan Balik" desc="Status perangkat dan metrik tervalidasi; alarm otomatis bila ada penyimpangan." />
          </ol>
        </div>
      </section>

      <section id="manfaat" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <SectionHeader kicker="Manfaat" title="Dampak yang terukur" subtitle="Angka berasal dari proyek pilot — siap dikalibrasi dengan data site Anda." />
        <div className="mt-8 grid md:grid-cols-3 gap-5">
          <Outcome title="Penghematan Energi" value="15–30%" desc="Optimasi debit via VFD mengurangi beban listrik pompa." />
          <Outcome title="Suhu Lebih Stabil" value="±1.0°C" desc="Adaptasi terhadap beban kerja mencegah over‑/under‑cooling." />
          <Outcome title="Waktu Pemulihan" value="&lt; 5 menit" desc="Dari alarm ke stabil kembali pada beban normal." />
        </div>
      </section>

      <section id="stack" className="bg-gradient-to-b from-slate-100 to-slate-50 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
            <SectionHeader kicker="Stack" title="Teknologi & Integrasi" subtitle="Terbuka untuk otomasi industri maupun orkestrasi cloud Anda." />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <StackCard title="API Service" items={["Go", "REST", "MQTT", "TLS"]} icon={Database} />
            <StackCard title="Front‑End" items={["React", "Tailwind", "WebSockets", "PWA"]} icon={LineChart} />
            <StackCard title="Perangkat" items={["WCU", "VFD", "Katup IoT", "Router/LAN"]} icon={Network} />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-8 md:p-10 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold">Siap bahas roadmap pendinginan & investasi?</h3>
            <p className="mt-3 text-slate-600">Tim HydroSmart membantu kajian kapasitas, menghitung ROI terukur, dan menyiapkan rencana implementasi bertahap bagi operator maupun investor infrastruktur.</p>
            <ul className="mt-4 text-sm text-slate-700 space-y-2">
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-emerald-600"/> NDA dua arah untuk data teknis & rencana investasi</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-yellow-600"/> Respons strategis dalam 1 hari kerja</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <div className="relative h-20 w-20">
                <Image src="/logo.svg" alt="HydroSmart logo" fill sizes="40px" className="object-contain" />
              </div>
            </div>
            <p className="mt-2 max-w-md">Platform pendinginan cair dengan kecerdasan prediktif untuk pusat data — menjaga stabilitas termal, menekan energi, dan meningkatkan valuasi aset.</p>
          </div>
          <div className="flex md:justify-end items-start gap-8">
            <div>
              <div className="font-semibold text-slate-800">Tautan</div>
              <ul className="mt-2 space-y-1">
                <li><a className="hover:text-blue-700" href="#fitur">Fitur</a></li>
                <li><a className="hover:text-blue-700" href="#cara-kerja">Cara Kerja</a></li>
                <li><a className="hover:text-blue-700" href="#contact">Kontak</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Kontak</div>
              <ul className="mt-2 space-y-1">
                <li>Email: <a className="underline hover:text-blue-700" href="mailto:sales@hydrosmart.io">sales@hydrosmart.io</a></li>
                <li>WA: <a className="underline hover:text-blue-700" href="https://wa.me/6281234567890">+62 812‑3456‑7890</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-6">© {new Date().getFullYear()} HydroSmart Team. All rights reserved.</div>
      </footer>
    </div>
  );
}
