import { type HTMLAttributes, forwardRef } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent" | "success";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", className = "", children, ...props }, ref) => {
    const base =
      "inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-semibold font-display tracking-tight";

    const variants = {
      default:
        "bg-[var(--bg)] text-[var(--fg-muted)] shadow-[var(--neu-inset-sm)]",
      accent:
        "bg-[var(--accent)] text-white shadow-[3px_3px_6px_rgb(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.4)]",
      success:
        "bg-[var(--accent-secondary)] text-white shadow-[3px_3px_6px_rgb(163,177,198,0.5),-3px_-3px_6px_rgba(255,255,255,0.4)]",
    };

    return (
      <span
        ref={ref}
        className={`${base} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";

export default Badge;
