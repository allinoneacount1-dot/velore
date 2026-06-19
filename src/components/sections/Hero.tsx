import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 md:py-32 lg:py-40">
      {/* Decorative floating elements — hidden on mobile to prevent overlap */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="animate-float absolute left-[5%] top-[15%] hidden h-24 w-24 rounded-[24px] bg-[var(--bg)] shadow-[var(--neu-extruded)] opacity-60 lg:block" />
        <div className="animate-float-delayed absolute right-[8%] top-[25%] hidden h-16 w-16 rounded-full bg-[var(--bg)] shadow-[var(--neu-extruded)] opacity-40 lg:block" />
        <div className="animate-float absolute bottom-[25%] left-[8%] hidden h-20 w-20 rounded-[20px] bg-[var(--bg)] shadow-[var(--neu-inset)] opacity-50 lg:block" />
        <div className="animate-float-delayed absolute bottom-[20%] right-[5%] hidden h-12 w-12 rounded-full bg-[var(--bg)] shadow-[var(--neu-inset-deep)] opacity-30 lg:block" />
      </div>

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <Badge variant="accent" className="mb-8">
          Now in Public Beta
        </Badge>

        <h1 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl md:text-6xl lg:text-7xl">
          Interfaces that
          <br />
          <span className="text-[var(--accent)]">feel real</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--fg-muted)] font-body md:text-lg lg:text-xl">
          Neumorphic design system with tactile depth, soft shadows, and
          physical presence. Every element feels molded from the same surface —
          raised, pressed, alive.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button variant="primary" size="lg">
            Start Building
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="8" x2="13" y2="8" />
              <polyline points="9,4 13,8 9,12" />
            </svg>
          </Button>
          <Button variant="secondary" size="lg">
            View Documentation
          </Button>
        </div>

        {/* Neumorphic visual showcase */}
        <div className="mt-20 grid w-full max-w-lg grid-cols-3 gap-8 md:gap-12">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[var(--bg)] shadow-[var(--neu-extruded)] transition-all duration-300 hover:shadow-[var(--neu-extruded-hover)] hover:-translate-y-[2px] sm:h-20 sm:w-20 sm:rounded-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:h-7 sm:w-7">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <span className="text-xs font-medium text-[var(--fg-muted)] font-body">Soft Depth</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[var(--bg)] shadow-[var(--neu-inset-deep)] transition-all duration-300 sm:h-20 sm:w-20 sm:rounded-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-secondary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:h-7 sm:w-7">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xs font-medium text-[var(--fg-muted)] font-body">Nested Layers</span>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-[20px] bg-[var(--bg)] shadow-[var(--neu-extruded)] transition-all duration-300 hover:shadow-[var(--neu-extruded-hover)] hover:-translate-y-[2px] sm:h-20 sm:w-20 sm:rounded-[24px]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="sm:h-7 sm:w-7">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18" />
                <path d="M9 21V9" />
              </svg>
            </div>
            <span className="text-xs font-medium text-[var(--fg-muted)] font-body">Physical UI</span>
          </div>
        </div>
      </div>
    </section>
  );
}
