import { type ComponentType } from "react";

type MiniCardProps = {
  title: string;
  subtitle: string;
  icon: ComponentType<{ className?: string }>;
};

export function MiniCard({ title, subtitle, icon: Icon }: MiniCardProps) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-200 flex items-center gap-3">
      <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <div className="text-sm font-semibold text-slate-900">{title}</div>
        <div className="text-xs text-slate-500">{subtitle}</div>
      </div>
    </div>
  );
}
