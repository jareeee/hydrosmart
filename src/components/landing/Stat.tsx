import { type ComponentType } from "react";

type StatProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export function Stat({ icon: Icon, label, value }: StatProps) {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center rounded-3xl border border-[#d6ddff] bg-white px-3 py-3 text-center shadow-[0_20px_40px_-28px_rgba(10,20,51,0.35)] transition-shadow duration-300 hover:shadow-[0_25px_55px_-24px_rgba(10,20,51,0.35)]">
      <div className="flex flex-col items-center gap-3 text-base font-medium text-slate-500">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3366ff] shadow-inner">
          <Icon className="h-6 w-6" aria-hidden />
        </span>
        <span className="leading-snug">{label}</span>
      </div>
      <div className="mt-5 text-3xl font-extrabold text-[#0a1433]">{value}</div>
    </div>
  );
}
