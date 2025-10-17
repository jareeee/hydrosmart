"use client";

import Image from "next/image";
import { useState } from "react";
import type { LucideProps } from "lucide-react";
import { Droplets, Gauge, Activity, ShieldCheck, Network, Zap, LineChart, Lock, Bot, Database, Menu, X, Phone, Mail } from "lucide-react";
import { Feature } from "@/components/landing/Feature";
import { SectionHeader } from "@/components/landing/SectionHeader";
import { StackCard } from "@/components/landing/StackCard";
import { Stat } from "@/components/landing/Stat";
import { Step } from "@/components/landing/Step";

/**
 * HydroSmart — Single‑file brochure website
 * - React component, TailwindCSS styling
 * - Mobile‑first, responsive
 * - Anchor nav (Fitur, Cara Kerja, Metrik, Teknologi, Kontak)
 * - Replace placeholders (contacts, links, logos) as needed
 */

const ValveIcon = (props: LucideProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 5v4" />
    <path d="M12 15v4" />
    <path d="M5 12h4" />
    <path d="M15 12h4" />
  </svg>
);

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
            <a href="#metrik" className="hover:text-[#3366ff]">Metrik</a>
            <a href="#teknologi" className="hover:text-[#3366ff]">Teknologi</a>
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
            <a onClick={() => setIsMobileNavOpen(false)} href="#metrik" className="block rounded-xl bg-[#eef2ff] px-4 py-3 font-medium hover:bg-[#dbe4ff]">Metrik</a>
            <a onClick={() => setIsMobileNavOpen(false)} href="#teknologi" className="block rounded-xl bg-[#eef2ff] px-4 py-3 font-medium hover:bg-[#dbe4ff]">Teknologi</a>
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
              Melalui sensor suhu dan katup pintar, HydroSmart menyalurkan air hanya ke rak server yang membutuhkan pendinginan secara real-time.
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
                <Bot className="w-6 h-6 text-[#3366ff]" aria-hidden />
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
        <SectionHeader kicker="Fitur" title="Solusi yang Anda peroleh" subtitle="Optimalkan operasional untuk keberlanjutan bisnis tanpa memangkas kualitas" />
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <Feature icon={Gauge} title="Kontrol Debit Dinamis" desc="Teknologi penyesuaian debit air berdasarkan beban server" />
          <Feature icon={ValveIcon} title="Katup per-Rak" desc="Katup IoT membuka/menutup otomatis per-jalur agar distribusi air optimal." />
          <Feature icon={Bot} title="AI Terintegrasi" desc="Prediksi load pada server untuk mengatur mekanisme katup" />
          <Feature icon={LineChart} title="Dashboard Real‑time" desc="Grafik suhu, debit, alarm, dan historis untuk audit & optimasi." />
        </div>
      </section>

      <section id="cara-kerja" className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader kicker="Cara Kerja" title="Sistem terintegrasi" subtitle="Sensor, analitik, dan aktuasi bekerja serempak menjaga performa termal." />
          <ol className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <Step icon={Activity} title="Monitor" desc="Agent membaca suhu, CPU/RAM, dan daya lalu mengirim telemetri terenkripsi ke API." />
            <Step icon={Bot} title="Analitik Prediktif" desc="Model menghitung debit optimal per jalur berdasarkan tren beban & risiko termal." />
            <Step icon={Network} title="Kontrol" desc="API mengatur WCU, VFD, dan katup IoT melalui MQTT/HTTP secara presisi." />
          </ol>
        </div>
      </section>

      <section id="metrik" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <SectionHeader kicker="Metrik" title="Dampak dalam angka" subtitle="Penurunan konsumsi harian pendinginan dengan membandingkan sistem pendingin konvensional (open-loop evaporative cooling)*" />
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] text-center">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-sm text-slate-600">Algoritma prediktif meminimalkan pendinginan tidak perlu.</p>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Droplets className="h-6 w-6 text-[#3366ff]" aria-hidden />
                    <div>
                      <p className="text-2xl font-semibold text-[#0a1433]">1.920 L</p>
                      <p className="text-xs uppercase tracking-wide text-slate-500">per hari</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pl-2">
                  <div
                    className="inline-flex h-16 min-w-[4.5rem] items-end justify-end px-6 pb-3 text-sm font-semibold text-white shadow-md"
                    style={{ backgroundColor: "#3366ff", clipPath: "polygon(30% 0%, 70% 0%, 70% 48%, 100% 48%, 50% 100%, 0% 48%, 30% 48%)" }}
                  >
                    35%*
                  </div>
                </div>
                <div className="rounded-2xl border border-[#3366ff] bg-[#3366ff] px-6 py-5 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <Droplets className="h-6 w-6 text-white" aria-hidden />
                    <div>
                      <p className="text-2xl font-semibold">1.248 L</p>
                      <p className="text-xs uppercase tracking-wide text-slate-200">per hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-sm text-slate-600"><span className="italic">Load balancing</span> memastikan pendinginan bekerja dinamis.</p>
              <div className="flex flex-col gap-4">
                <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-[#3366ff]" aria-hidden />
                    <div>
                      <p className="text-2xl font-semibold text-[#0a1433]">384 kWh</p>
                      <p className="text-xs uppercase tracking-wide text-slate-500">per hari</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center pl-2">
                  <div
                    className="inline-flex h-16 min-w-[4.5rem] items-end justify-end px-6 pb-3 text-sm font-semibold text-white shadow-md"
                    style={{ backgroundColor: "#3366ff", clipPath: "polygon(30% 0%, 70% 0%, 70% 48%, 100% 48%, 50% 100%, 0% 48%, 30% 48%)" }}
                  >
                    40%*
                  </div>
                </div>
                <div className="rounded-2xl border border-[#3366ff] bg-[#3366ff] px-6 py-5 text-white shadow-lg">
                  <div className="flex items-center gap-3">
                    <Zap className="h-6 w-6 text-white" aria-hidden />
                    <div>
                      <p className="text-2xl font-semibold">230 kWh</p>
                      <p className="text-xs uppercase tracking-wide text-slate-200">per hari</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl bg-[#0a1433] px-6 py-7 text-white shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8fa4ff]">Penghematan Air</p>
              <p className="mt-4 text-2xl font-bold leading-snug">12,2 Juta L/tahun</p>
              <p className="mt-1 text-sm text-slate-200">Air bersih yang dapat dialihkan.</p>
            </div>
            <div className="rounded-3xl bg-[#3366ff] px-6 py-7 text-white shadow-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-[#dbe4ff]">Efisiensi Biaya Operasional</p>
              <p className="mt-4 text-2xl font-bold leading-snug">Rp 4,9 Miliar / Tahun</p>
              <p className="mt-1 text-sm text-slate-100">Hasil simulasi untuk 50 rak pendinginan cair.</p>
            </div>
            <p className="text-xs text-slate-500">Proyeksi pada skala besar untuk 50 rak data center.</p>
          </div>
        </div>
        <p className="mt-6 text-xs text-slate-500">*Target Proyeksi&nbsp;&nbsp;**Estimasi dari data berdasarkan data yang diolah dengan metode prediktif dari Hugging Face (2025)</p>
      </section>

      <section id="teknologi" className="bg-gradient-to-b from-[#eef2ff] to-[#f8f9ff] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
          <SectionHeader kicker="Teknologi" title="Teknologi & Integrasi" subtitle="Teknologi menyesuaikan dengan standar industri yang dapat di andalkan." />
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            <StackCard title="API Service" items={["Go", "REST", "MQTT", "TLS"]} icon={Database} />
            <StackCard title="Front‑End" items={["React", "Tailwind", "WebSockets", "PWA"]} icon={LineChart} />
            <StackCard title="Perangkat" items={["WCU", "VFD", "Katup IoT", "Router/LAN"]} icon={Network} />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-white shadow-xl ring-1 ring-slate-200 p-8 md:p-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-lg space-y-4">
            <h3 className="text-2xl font-bold text-[#0a1433]">Siap bahas roadmap pendinginan & investasi?</h3>
            <p className="text-slate-600">HydroSmart, menjadikan AI berkelanjutan tanpa mengorbankan air.</p>
          </div>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-end md:w-auto">
            <a
              href="https://wa.me/6287886863438"
              className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-[#eef2ff] px-5 py-4 text-sm font-semibold text-[#0a1433] transition hover:border-[#0a1433] hover:bg-white sm:w-auto"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#0a1433] shadow-inner">
                <Phone className="h-5 w-5" aria-hidden />
              </span>
              +6287886863438
            </a>
            <a
              href="mailto:ceo@hydrosmart.pro"
              className="flex w-full items-center gap-3 rounded-2xl border border-slate-200 bg-[#eef2ff] px-5 py-4 text-sm font-semibold text-[#0a1433] transition hover:border-[#3366ff] hover:bg-white sm:w-auto"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-[#3366ff] shadow-inner">
                <Mail className="h-5 w-5" aria-hidden />
              </span>
              ceo@hydrosmart.pro
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-slate-600 grid md:grid-cols-2 gap-6">
            <div className="relative h-30 w-30">
              <Image src="/logo.svg" alt="HydroSmart logo" fill sizes="48px" className="object-contain" />
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
