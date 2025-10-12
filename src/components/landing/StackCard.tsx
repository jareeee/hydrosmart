import { type ComponentType } from "react";

type StackCardProps = {
  title: string;
  items: string[];
  icon: ComponentType<{ className?: string }>;
};

export function StackCard({ title, items, icon: Icon }: StackCardProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-xl bg-[#e6ecff] text-[#3366ff] grid place-items-center">
          <Icon className="w-5 h-5" />
        </div>
        <h4 className="font-semibold text-slate-900">{title}</h4>
      </div>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((item, idx) => (
          <span key={idx} className="px-3 py-1 rounded-full border border-slate-300 text-xs text-slate-700 bg-white">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
