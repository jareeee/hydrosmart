import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HydroSmart | Pendinginan Air Berbasis AI",
  description:
    "HydroSmart mengoptimalkan pendinginan air untuk pusat data dengan monitoring real-time, analitik AI, serta integrasi perangkat industri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f5f7ff] text-[#0a1433]`}>
        {children}
      </body>
    </html>
  );
}
