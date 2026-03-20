import Link from "next/link";
import { ArrowRight, Box, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Law of Purpose | Discover Your Leadership Purpose & Organizational Mission",
  description: "Purpose is the foundational law governing why you exist and what you're designed to accomplish. Learn how to discover and align with your organizational purpose for effective leadership. First principles approach to purpose-driven leadership.",
  keywords: "law of purpose, leadership purpose, organizational purpose, purpose-driven leadership, discovering purpose, mission and purpose, why leadership matters, foundational leadership principles, purpose clarity",
  openGraph: {
    title: "The Law of Purpose | First Principles Leadership",
    description: "The foundational law governing why you exist and what you're designed to accomplish",
    url: "https://ezekielramadan.com/framework/purpose",
  },
};

export default function PurposePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Framework
          </Link>

          <div className="mt-8">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                <Box className="h-6 w-6 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Law of Purpose
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Design precedes function. Every entity exists for a specific reason.
            </p>
          </div>
        </div>
      </section>

      {/* First Principle Definition */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">First Principle Definition</h2>
          <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
            <p className="text-lg leading-8 text-foreground">
              <strong>Purpose is the original intent behind design.</strong> It answers the question:
              "Why does this exist?" Purpose is not self-determined. It is inherent to design.
              A hammer exists to drive nails; a leader exists to serve a specific function within a system.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              In systems engineering, every component has a designed purpose. A circuit breaker doesn't decide
              to protect or destroy. It's designed to interrupt current under specific conditions. Similarly,
              leadership effectiveness begins with understanding the designed function you're meant to serve.
            </p>
            <p>
              Purpose is not "what you want to do" or "what feels fulfilling." Purpose is structural.
              It's what you're designed to accomplish based on your unique composition, position, and capacities.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Logic */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Root-Cause Logic</h2>
          <p className="mt-4 text-muted-foreground">
            Why does purpose come first? Because it establishes the foundation for all other leadership functions:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">1. Purpose Defines Identity</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                You cannot know who you are until you know why you exist. Identity flows from purpose,
                not the other way around.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">2. Purpose Determines Direction</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Without a clear "why," all strategic planning becomes arbitrary. Purpose provides the
                North Star for decision-making.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">3. Purpose Generates Motivation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Intrinsic motivation comes from alignment with purpose, not external rewards.
                Purpose-driven work sustains energy over decades.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">4. Purpose Attracts Resources</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clarity of purpose signals to others what you're building, attracting aligned
                people, capital, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Application */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Real-World Application</h2>
          <p className="mt-4 text-muted-foreground">
            How do you apply the Law of Purpose in practical leadership?
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Organizational Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Define the core reason your organization exists</li>
                <li>• Align all initiatives to that central purpose</li>
                <li>• Eliminate activities that don't serve the purpose</li>
                <li>• Use purpose as the filter for strategic decisions</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Personal Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Identify your unique design and capacities</li>
                <li>• Clarify what problem you're meant to solve</li>
                <li>• Say "no" to opportunities outside your purpose</li>
                <li>• Build systems that amplify your core function</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Team/Department Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Ensure every team member knows why their role exists</li>
                <li>• Connect individual purposes to organizational purpose</li>
                <li>• Measure performance against purpose fulfillment, not just activity</li>
                <li>• Restructure roles that lack clear purpose or alignment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Failure Modes */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Failure Modes</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            When the Law of Purpose is violated, these structural problems emerge:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Activity Without Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Organizations become busy but ineffective, generating motion without meaningful outcomes.
                Teams work hard but produce little lasting value.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Mission Drift</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Without a clear purpose anchor, organizations gradually shift toward whatever is trending,
                profitable, or exciting, losing their core identity over time.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Burnout and Disengagement</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                People cannot sustain effort without meaning. Purpose-less work drains energy and
                leads to cynicism, turnover, and psychological exhaustion.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Resource Misallocation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Without purpose as a decision filter, resources (time, money, talent) get spread across
                too many initiatives, creating inefficiency and weak results everywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/framework"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Back to Framework
            </Link>
            <Link
              href="/framework/identity"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Identity & Authority
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
