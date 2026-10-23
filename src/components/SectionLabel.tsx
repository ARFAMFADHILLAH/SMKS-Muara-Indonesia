export default function SectionLabel({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`mb-3 flex items-center gap-2 text-sm uppercase tracking-[0.2em] ${
        light ? "text-slate-400" : "text-slate-500"
      }`}
    >
      <span className="h-px w-6 bg-amber-500" />
      {children}
    </p>
  );
}
