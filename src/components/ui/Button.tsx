"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-tight rounded-2xl transition-all duration-300 ease-out cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

    const sizes = {
      sm: "h-10 px-5 text-sm",
      md: "h-12 px-7 text-base",
      lg: "h-14 px-9 text-lg",
    };

    const variants = {
      primary:
        "bg-[var(--accent)] text-white shadow-[5px_5px_10px_rgb(163,177,198,0.6),-5px_-5px_10px_rgba(255,255,255,0.5)] hover:shadow-[8px_8px_16px_rgb(163,177,198,0.7),-8px_-8px_16px_rgba(255,255,255,0.6)] hover:-translate-y-[1px] active:shadow-[inset_3px_3px_6px_rgb(163,177,198,0.6),inset_-3px_-3px_6px_rgba(255,255,255,0.5)] active:translate-y-[0.5px]",
      secondary:
        "bg-[var(--bg)] text-[var(--fg)] shadow-[var(--neu-extruded)] hover:shadow-[var(--neu-extruded-hover)] hover:-translate-y-[1px] active:shadow-[var(--neu-inset-sm)] active:translate-y-[0.5px]",
      ghost:
        "bg-transparent text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[rgba(163,177,198,0.1)]",
    };

    return (
      <button
        ref={ref}
        className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
