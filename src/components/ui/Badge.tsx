import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent";
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full border px-2.5 py-0.5 font-mono text-[11px]",
        variant === "accent"
          ? "border-accent/30 bg-accent/5 text-accent"
          : "border-border bg-surface text-muted"
      )}
    >
      {children}
    </span>
  );
}
