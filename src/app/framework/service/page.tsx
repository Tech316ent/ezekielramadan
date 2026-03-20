import Link from "next/link";
import { ArrowRight, Heart, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The Structure of Service | First Principles Leadership",
  description: "Leadership exists to serve the system, not the self.",
};

export default function ServicePage() {
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
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">5</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Structure of Service
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Leadership exists to serve the system, not the self.
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
              <strong>Leadership is a service function within a larger system.</strong> True leadership
              exists to maximize the health, performance, and sustainability of the people and processes
              it oversees, not to extract value for personal benefit. The measure of leadership effectiveness
              is what you build, not what you accumulate.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              In engineering, a pump exists to move fluid through a system. It serves the system's function,
              not its own. Similarly, leaders exist to enable others to perform optimally. Your role is to
              remove obstacles, provide resources, create clarity, and build capability in those you lead.
            </p>
            <p>
              Service-oriented leadership is structural, not emotional. It's not about being nice or making
              people feel good. It's about designing systems that enable peak performance. You serve by
              creating conditions for excellence, even when that requires difficult decisions or confronting dysfunction.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Logic */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Root-Cause Logic</h2>
          <p className="mt-4 text-muted-foreground">
            Why must leadership function as service? Because extractive leadership destroys systems over time:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">1. Service Generates Sustainable Value</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When leaders optimize for system health rather than personal gain, organizations grow stronger
                over time. Service creates compound returns through improved culture, capabilities, and outcomes.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">2. Service Builds Organizational Capacity</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders who develop others create multiplier effects. One person serving ten creates more total
                output than one person doing the work of ten. Service-oriented leadership scales.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">3. Service Earns Voluntary Followership</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                People willingly follow leaders who demonstrably serve their interests. Service creates the
                trust and loyalty that positional authority alone cannot command.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">4. Service Aligns Individual and Collective Good</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When leadership serves the system, personal success becomes aligned with organizational success.
                This eliminates the zero-sum dynamics that create politics and infighting.
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
            How do you apply the Structure of Service in practical leadership?
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Organizational Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Design leadership roles around enabling team performance</li>
                <li>• Measure leaders by team outcomes, not personal achievements</li>
                <li>• Create systems that distribute authority and develop capability</li>
                <li>• Reward leaders who build successors and make themselves replaceable</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Personal Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Spend 50%+ of time developing others' capabilities</li>
                <li>• Make decisions that benefit the team over personal convenience</li>
                <li>• Actively remove obstacles blocking team performance</li>
                <li>• Share credit for successes; accept responsibility for failures</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Team/Department Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Establish "serving leaders" as the cultural standard</li>
                <li>• Create feedback loops where teams evaluate leadership effectiveness</li>
                <li>• Build systems that make leaders accountable to those they serve</li>
                <li>• Celebrate leaders who sacrifice personal visibility for team success</li>
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
            When the Structure of Service is violated, these structural problems emerge:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Self-Serving Leadership</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders optimize for personal advancement, visibility, or compensation at the expense of team
                health. This creates extraction dynamics that deplete organizational capital over time.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Empire-Building and Hoarding</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders accumulate resources, authority, and talent for territorial purposes rather than
                organizational effectiveness, creating silos and preventing optimal resource allocation.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Learned Helplessness in Teams</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When leaders don't serve by developing capability, teams become dependent and incapable of
                autonomous performance, creating bottlenecks and limiting organizational scalability.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Performative Service Without Impact</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders engage in visible "servant leadership" gestures without actually improving system
                performance, creating theater instead of transformation, sentiment instead of results.
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
              href="/framework/responsibility"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Mandate of Responsibility
            </Link>
            <Link
              href="/framework/influence"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Principle of Influence
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
