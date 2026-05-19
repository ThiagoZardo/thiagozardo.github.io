import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-lg border border-border bg-white/[0.035] shadow-[0_24px_80px_rgba(0,0,0,0.22)]", className)}
      {...props}
    />
  );
}
