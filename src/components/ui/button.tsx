import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          "rounded-[var(--radius-btn)]", // Sharp edges as requested
          {
            "bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 shadow-md shadow-primary/20": variant === "default",
            "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground": variant === "outline",
            "hover:bg-secondary hover:text-secondary-foreground": variant === "ghost",
            "bg-secondary text-secondary-foreground hover:bg-secondary/80": variant === "secondary",
            "h-11 px-6 py-2": size === "default",
            "h-9 px-4": size === "sm",
            "h-14 px-8 text-base": size === "lg",
            "h-11 w-11": size === "icon",
          },
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
