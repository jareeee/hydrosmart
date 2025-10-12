import { type ComponentType } from "react";

type StatProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export function Stat({ icon: Icon, label, value }: StatProps) {
  return (
    <div className="flex flex-col items-center rounded-3xl border border-[#d6ddff] bg-white px-1 py-6 text-center shadow-[0_15px_30px_-18px_rgba(10,20,51,0.35)]">
      <div className="flex items-center gap-2 flex-col text-slate-500 text-base font-medium">
        <Icon className="w-5 h-5 text-[#3366ff]" aria-hidden /> {label}
      </div>
      <div className="mt-3 text-2xl font-extrabold text-[#0a1433]">{value}</div>
    </div>
  );
}
