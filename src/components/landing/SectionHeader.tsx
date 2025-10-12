type SectionHeaderProps = {
  kicker: string;
  title: string;
  subtitle?: string;
};

export function SectionHeader({ kicker, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs tracking-widest uppercase text-blue-700 font-semibold">{kicker}</p>
      <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-slate-900">{title}</h2>
      {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
    </div>
  );
}
