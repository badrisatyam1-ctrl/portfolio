export default function SectionLabel({ label }: { label: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
      {label}
    </p>
  );
}
