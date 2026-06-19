import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";

export default function CTA() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Card padding="xl" className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--accent)] font-display">
            Get Early Access
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-[var(--fg)] sm:text-4xl md:text-5xl font-display">
            Ready to build something
            <br />
            <span className="text-[var(--accent)]">tactile</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--fg-muted)] font-body">
            Join the waitlist and be the first to experience neumorphic design
            that feels like real materials.
          </p>

          <div className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="you@company.com"
                aria-label="Email address"
              />
            </div>
            <Button variant="primary" size="md" className="shrink-0 sm:h-12">
              Join Waitlist
            </Button>
          </div>

          <p className="mt-4 text-xs text-[var(--fg-muted)] font-body">
            No spam. Unsubscribe anytime. We respect your inbox.
          </p>
        </Card>
      </div>
    </section>
  );
}
