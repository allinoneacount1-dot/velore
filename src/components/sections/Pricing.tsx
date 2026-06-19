import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const PLANS = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for exploring neumorphic design.",
    badge: null,
    features: [
      "5 neumorphic components",
      "Basic shadow tokens",
      "Community support",
      "Personal projects",
    ],
    cta: "Get Started",
    ctaVariant: "secondary" as const,
  },
  {
    name: "Pro",
    price: "$29",
    period: "/month",
    description: "For teams building production interfaces.",
    badge: "Popular",
    features: [
      "40+ neumorphic components",
      "Full shadow system",
      "Dark mode tokens",
      "Priority support",
      "Figma file included",
    ],
    cta: "Start Free Trial",
    ctaVariant: "primary" as const,
  },
  {
    name: "Enterprise",
    price: "$99",
    period: "/month",
    description: "Custom design system for large organizations.",
    badge: null,
    features: [
      "Everything in Pro",
      "Custom component builder",
      "Dedicated design tokens",
      "SSO & team management",
      "SLA guarantee",
      "Onboarding support",
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="px-6 py-28 md:py-36 lg:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-2xl text-center md:mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)] font-display">
            Pricing
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl font-display">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-[var(--fg-muted)] font-body">
            Start free. Upgrade when you need more depth.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {PLANS.map((plan) => (
            <Card
              key={plan.name}
              hover
              padding="xl"
              className={`relative flex flex-col ${
                plan.badge ? "ring-2 ring-[var(--accent)] ring-offset-4 ring-offset-[var(--bg)]" : ""
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">{plan.badge}</Badge>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-bold text-[var(--fg)] font-display">
                  {plan.name}
                </h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold tracking-tight text-[var(--fg)] font-display">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-[var(--fg-muted)] font-body">
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm text-[var(--fg-muted)] font-body">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-[var(--fg)] font-body">
                    <svg
                      className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-secondary)]"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="3,8 7,12 13,4" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button variant={plan.ctaVariant} size="md" className="w-full">
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
