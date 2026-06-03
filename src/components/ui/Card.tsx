import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  children,
  className,
  hoverable = false,
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-surface p-5",
        hoverable && "transition-colors duration-300 hover:border-accent/30",
        className
      )}
    >
      {children}
    </div>
  );
}
