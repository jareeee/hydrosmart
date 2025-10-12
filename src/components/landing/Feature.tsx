import { type ComponentType } from "react";

type FeatureProps = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  desc: string;
};

export function Feature({ icon: Icon, title, desc }: FeatureProps) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 hover:shadow-md transition">
      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="mt-3 font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
