import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-semibold transition duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary !text-[#120d05] shadow-[0_0_0_1px_rgba(18,13,5,0.18)_inset] hover:bg-[#ffd982]",
        secondary: "border border-border bg-white/[0.04] text-foreground hover:bg-white/[0.08]",
        ghost: "text-muted-foreground hover:bg-white/[0.06] hover:text-foreground"
      },
      size: {
        default: "h-11 px-5",
        icon: "h-11 w-11 px-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);

Button.displayName = "Button";
