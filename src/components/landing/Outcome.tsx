type OutcomeProps = {
  title: string;
  value: string;
  desc: string;
};

export function Outcome({ title, value, desc }: OutcomeProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
      <div className="text-3xl font-extrabold text-blue-700">{value}</div>
      <div className="mt-1 font-semibold text-slate-900">{title}</div>
      <p className="mt-1 text-sm text-slate-600">{desc}</p>
    </div>
  );
}
