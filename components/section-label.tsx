export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-mono font-medium uppercase tracking-normal text-foreground mb-3.5">
      {children}
    </h2>
  );
}
