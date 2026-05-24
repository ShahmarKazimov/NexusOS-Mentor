import type { PropsWithChildren } from "react";

type GlassProps = PropsWithChildren<{
  className?: string;
  intensity?: "soft" | "strong";
}>;

export function GlassPanel({ children, className = "", intensity = "soft" }: GlassProps) {
  return (
    <div
      className={`glass-panel ${intensity === "strong" ? "glass-strong" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
