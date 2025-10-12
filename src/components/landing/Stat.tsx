import { type ComponentType } from "react";

type StatProps = {
  icon: ComponentType<{ className?: string }>;
  label: string;
  value: string;
};

export function Stat({ icon: Icon, label, value }: StatProps) {
  return (
    <div className="rounded-2xl bg-white/80 backdrop-blur p-4 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-2 text-slate-500 text-xs">
        <Icon className="w-4 h-4" /> {label}
      </div>
      <div className="mt-1 text-lg font-bold">{value}</div>
    </div>
  );
}
