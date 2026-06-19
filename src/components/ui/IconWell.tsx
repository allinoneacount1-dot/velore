import { type HTMLAttributes, forwardRef } from "react";

interface IconWellProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  depth?: "inset" | "deep";
}

const IconWell = forwardRef<HTMLDivElement, IconWellProps>(
  ({ size = "md", depth = "deep", className = "", children, ...props }, ref) => {
    const base = "rounded-2xl flex items-center justify-center bg-[var(--bg)]";

    const sizes = {
      sm: "h-10 w-10",
      md: "h-14 w-14",
      lg: "h-18 w-18",
    };

    const depths = {
      inset: "shadow-[var(--neu-inset)]",
      deep: "shadow-[var(--neu-inset-deep)]",
    };

    return (
      <div
        ref={ref}
        className={`${base} ${sizes[size]} ${depths[depth]} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

IconWell.displayName = "IconWell";

export default IconWell;
