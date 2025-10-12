"use client";

import { FormEvent } from "react";

export function ContactForm() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <label className="text-sm">
          Nama
          <input
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Nama lengkap"
          />
        </label>
        <label className="text-sm">
          Email
          <input
            type="email"
            className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="email@perusahaan.com"
          />
        </label>
      </div>
      <label className="text-sm">
        Pesan
        <textarea
          className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 h-28 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ceritakan singkat kebutuhan site Anda"
        />
      </label>
      <button className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-semibold">
        Kirim Pesan
      </button>
      <p className="text-xs text-slate-500">
        Atau hubungi langsung:{" "}
        <a className="underline hover:text-blue-700" href="mailto:sales@hydrosmart.io">
          sales@hydrosmart.io
        </a>
      </p>
    </form>
  );
}
