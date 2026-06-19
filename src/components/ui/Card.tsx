import { type HTMLAttributes, forwardRef } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "extruded" | "inset";
  padding?: "sm" | "md" | "lg" | "xl";
  hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "extruded", padding = "lg", hover = false, className = "", children, ...props }, ref) => {
    const base = "rounded-[32px] bg-[var(--bg)] transition-all duration-300 ease-out";

    const paddings = {
      sm: "p-5",
      md: "p-8",
      lg: "p-10 md:p-12",
      xl: "p-12 md:p-16 lg:p-20",
    };

    const variants = {
      extruded: "shadow-[var(--neu-extruded)]",
      inset: "shadow-[var(--neu-inset)]",
    };

    const hoverClass = hover
      ? "hover:shadow-[var(--neu-extruded-hover)] hover:-translate-y-[2px]"
      : "";

    return (
      <div
        ref={ref}
        className={`${base} ${paddings[padding]} ${variants[variant]} ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
