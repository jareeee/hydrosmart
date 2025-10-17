import { type ComponentType } from "react";

type StepProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

export function Step({ icon: Icon, title, desc }: StepProps) {
  return (
    <li className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-[#d3dcff] text-[#3366ff] grid place-items-center">
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <h4 className="mt-3 font-semibold text-slate-900">{title}</h4>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </li>
  );
}
