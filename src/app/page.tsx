"use client";

import Image from "next/image";
import { useState } from "react";
import { Droplets, Gauge, Activity, ShieldCheck, Cpu, Network, Zap, LineChart, Server, Lock, Bot, Database, Settings2, Menu, X } from "lucide-react";
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
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f5f7ff] text-[#0a1433]">
      {/* ===== Navbar ===== */}
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex items-center gap-3 font-semibold text-[#0a1433]">
            <div className="relative h-20 w-20">
              <Image src="/logo.svg" alt="HydroSmart logo" fill sizes="48px" className="object-contain" />
            </div>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm">
            <a href="#fitur" className="hover:text-[#3366ff]">Fitur</a>
            <a href="#cara-kerja" className="hover:text-[#3366ff]">Cara Kerja</a>
            <a href="#manfaat" className="hover:text-[#3366ff]">Manfaat</a>
            <a href="#stack" className="hover:text-[#3366ff]">Stack</a>
            <a href="#contact" className="hover:text-[#3366ff]">Kontak</a>
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <a href="#contact" className="px-3 py-2 rounded-xl bg-[#3366ff] text-white hover:bg-[#0a1433] text-sm font-medium transition">Hubungi Kami</a>
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 p-2 text-[#0a1433] transition hover:border-[#3366ff] hover:text-[#3366ff] md:hidden"
            onClick={() => setIsMobileNavOpen((prev) => !prev)}
            aria-expanded={isMobileNavOpen}
            aria-controls="mobile-nav"
            aria-label="Toggle navigation"
          >
            {isMobileNavOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </nav>
        <div
          id="mobile-nav"
          className={`md:hidden overflow-hidden bg-white transition-[max-height,opacity,transform] duration-300 ease-in-out ${isMobileNavOpen ? "max-h-80 border-b border-slate-200 opacity-100 translate-y-0" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}
          aria-hidden={!isMobileNavOpen}
        >
          <div className="space-y-4 px-4 pb-6 pt-4 text-sm text-[#0a1433]">
            <a onClick={() => setIsMobileNavOpen(false)} href="#fitur" className="block rounded-xl bg-[#eef2ff] px-4 py-3 font-medium hover:bg-[#dbe4ff]">Fitur</a>
            <a onClick={() => setIsMobileNavOpen(false)} href="#cara-kerja" className="block rounded-xl bg-[#eef2ff] px-4 py-3 font-medium hover:bg-[#dbe4ff]">Cara Kerja</a>
            <a onClick={() => setIsMobileNavOpen(false)} href="#manfaat" className="block rounded-xl bg-[#eef2ff] px-4 py-3 font-medium hover:bg-[#dbe4ff]">Manfaat</a>
            <a onClick={() => setIsMobileNavOpen(false)} href="#stack" className="block rounded-xl bg-[#eef2ff] px-4 py-3 font-medium hover:bg-[#dbe4ff]">Stack</a>
            <a onClick={() => setIsMobileNavOpen(false)} href="#contact" className="block rounded-xl bg-[#3366ff] px-4 py-3 text-center font-semibold text-white hover:bg-[#0a1433]">Hubungi Kami</a>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#eef2ff] via-[#f1f4ff] to-[#f5f7ff]">
        <div className="absolute inset-x-6 -top-24 h-48 rounded-full bg-[#cdd7ff]/70 blur-[110px] md:hidden" aria-hidden />
        <div className="absolute inset-x-12 top-64 h-56 rounded-full bg-[#d9e2ff]/70 blur-[120px] md:hidden" aria-hidden />
        <div className="absolute -top-32 -right-48 hidden h-[42rem] w-[42rem] rounded-full bg-gradient-to-br from-[#0a1433]/45 via-[#3366ff]/30 to-transparent blur-3xl opacity-80 md:block" aria-hidden />
        <div className="absolute top-64 -left-44 hidden h-[32rem] w-[32rem] rounded-full bg-[#6a8bff]/35 blur-3xl opacity-70 md:block" aria-hidden />
        <div className="absolute top-[28rem] right-1/4 hidden h-[28rem] w-[28rem] rounded-full bg-[#3366ff]/25 blur-3xl opacity-75 md:block" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              AI &amp; IoT Untuk Efisiensi Pendinginan Air Pada Chip AI
            </h1>
            <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl">
              HydroSmart adalah sistem pendinginan cerdas berbasis IoT dan AI yang dirancang untuk mengoptimalkan penggunaan air pada data center. Melalui sensor suhu dan katup pintar, HydroSmart menyalurkan air hanya ke rak server yang membutuhkan pendinginan secara real-time.
            </p>
            <div className="mt-6">
              <a
                href="#cara-kerja"
                className="inline-flex items-center justify-center rounded-2xl bg-[#3366ff] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0a1433] sm:text-base"
              >
                Pelajari HydroSmart
              </a>
            </div>
            <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex flex-col items-center rounded-2xl bg-[#eef2ff] px-6 py-6 text-center shadow-sm">
                <Network className="w-6 h-6 text-[#3366ff]" aria-hidden />
                <span className="mt-3 font-medium text-[#0a1433]">Integrasi WCU, VFD, katup IoT</span>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-[#eef2ff] px-6 py-6 text-center shadow-sm">
                <Bot className="w-6 h-6 text-[#0a1433]" aria-hidden />
                <span className="mt-3 font-medium text-[#0a1433]">Analitik prediktif untuk penentuan debit</span>
              </div>
              <div className="flex flex-col items-center rounded-2xl bg-[#eef2ff] px-6 py-6 text-center shadow-sm">
                <Database className="w-6 h-6 text-[#3366ff]" aria-hidden />
                <span className="mt-3 font-medium text-[#0a1433]">Historis &amp; dashboard real-time</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[2.5rem] shadow-[0_25px_60px_-30px_rgba(10,20,51,0.4)] ring-1 ring-[#d6ddff]/60 lg:p-10">
            <div className="grid grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:gap-6">
              <Stat icon={Droplets} label="Hemat air hingga" value="35%" />
              <Stat icon={Zap} label="Hemat energi hingga" value="40%" />
            </div>
            <div className="mt-8">
              <div className="relative rounded-[2.25rem] bg-gradient-to-tr from-[#eef2ff] via-[#dde6ff] to-[#cbd8ff] px-6 py-6 lg:px-10 lg:py-10">
                <div className="absolute inset-x-10 top-6 h-20 rounded-full bg-white/60 blur-3xl" aria-hidden />
                <Image
                  src="/table-dashboard.svg"
                  alt="Tampilan dashboard HydroSmart"
                  width={720}
                  height={440}
                  className="relative mx-auto w-full max-w-2xl"
                />
              </div>
            </div>
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

      <section id="stack" className="bg-gradient-to-b from-[#eef2ff] to-[#f8f9ff] border-t border-slate-200">
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
              <li className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#0a1433]"/> NDA dua arah untuk data teknis & rencana investasi</li>
              <li className="flex items-center gap-2"><Zap className="w-4 h-4 text-[#3366ff]"/> Respons strategis dalam 1 hari kerja</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 grid md:grid-cols-2 gap-6">
          <div>
            <div className="flex items-center gap-3 font-semibold text-[#0a1433]">
              <div className="relative h-20 w-20">
                <Image src="/logo.svg" alt="HydroSmart logo" fill sizes="48px" className="object-contain" />
              </div>
            </div>
            <p className="mt-2 max-w-md text-[#0a1433]">Platform pendinginan cair dengan kecerdasan prediktif untuk pusat data — menjaga stabilitas termal, menekan energi, dan meningkatkan valuasi aset.</p>
          </div>
          <div className="flex md:justify-end items-start gap-8">
            <div>
              <div className="font-semibold text-slate-800">Tautan</div>
              <ul className="mt-2 space-y-1">
                <li><a className="hover:text-[#3366ff]" href="#fitur">Fitur</a></li>
                <li><a className="hover:text-[#3366ff]" href="#cara-kerja">Cara Kerja</a></li>
                <li><a className="hover:text-[#3366ff]" href="#contact">Kontak</a></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold text-slate-800">Kontak</div>
              <ul className="mt-2 space-y-1">
                <li>Email: <a className="underline hover:text-[#3366ff]" href="mailto:ceo@hydrosmart.pro">ceo@hydrosmart.pro</a></li>
                <li>WA: <a className="underline hover:text-[#3366ff]" href="https://wa.me/6287886863438">+6287886863438</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-slate-500 py-6">© {new Date().getFullYear()} HydroSmart Team. All rights reserved.</div>
      </footer>
    </div>
  );
}
