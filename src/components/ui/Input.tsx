import { type InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = "", id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--fg-muted)] font-body"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full rounded-2xl bg-[var(--bg)] px-5 py-3.5
            text-[var(--fg)] placeholder-[var(--fg-placeholder)]
            font-body text-base
            shadow-[var(--neu-inset)]
            focus:shadow-[var(--neu-inset-deep)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]
            transition-all duration-300 ease-out
            ${error ? "ring-2 ring-red-400 ring-offset-2 ring-offset-[var(--bg)]" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-sm text-red-500 font-body">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
