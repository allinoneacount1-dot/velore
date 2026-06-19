import Card from "@/components/ui/Card";
import IconWell from "@/components/ui/IconWell";

const FEATURES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Dual Shadow System",
    description:
      "Every element uses opposing light and dark shadows to create realistic depth. Top-left illumination, bottom-right shadow — like real physics.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    title: "Inset Depth States",
    description:
      "Inputs and wells are carved into the surface with deep inset shadows. Elements feel pressed into the material, not placed on top.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    title: "Same-Surface Illusion",
    description:
      "Cards, buttons, and containers all share the same base color. Depth comes from shadows alone — no borders, no flat backgrounds.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Smooth Micro-Interactions",
    description:
      "300ms transitions with scale, translateY, and shadow depth changes. Buttons lift on hover and press down on click. Everything responds physically.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    title: "Complex Nested Depth",
    description:
      "Stack extruded inside inset inside extruded to create visual depth hierarchies. The system handles unlimited nesting without losing coherence.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: "WCAG AA Accessible",
    description:
      "Primary text at 7.5:1 contrast ratio, visible focus rings on all interactive elements, 44px minimum touch targets. Soft never means inaccessible.",
  },
];

export default function Features() {
  return (
    <section id="features" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)] font-display">
            Features
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl font-display">
            Built for tactile depth
          </h2>
          <p className="mt-4 text-lg text-[var(--fg-muted)] font-body">
            Every component follows the same physics. Shadows, not borders,
            define every edge.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {FEATURES.map((feature) => (
            <Card key={feature.title} hover padding="lg" className="flex flex-col gap-5">
              <IconWell size="md" depth="deep">
                {feature.icon}
              </IconWell>
              <h3 className="text-lg font-bold tracking-tight text-[var(--fg)] font-display">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--fg-muted)] font-body">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
