import Link from "next/link";
import { ArrowRight, Scale, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The Mandate of Responsibility | First Principles Leadership",
  description: "Authority without accountability corrupts. Stewardship is mandatory.",
};

export default function ResponsibilityPage() {
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
                <Scale className="h-6 w-6 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">4</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Mandate of Responsibility
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Authority without accountability corrupts. Stewardship is mandatory.
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
              <strong>Responsibility is the reciprocal law to authority.</strong> Every grant of authority
              carries a corresponding mandate to steward resources, relationships, and results with integrity.
              You cannot claim authority without accepting accountability for outcomes within your domain.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              In functional systems, accountability is structural, not optional. A bridge engineer is
              responsible for the bridge's integrity. A CFO is responsible for financial accuracy and
              compliance. A team leader is responsible for team performance and culture. Responsibility
              is the weight that balances the leverage of authority.
            </p>
            <p>
              Stewardship means managing what belongs to others: stakeholders, shareholders, team members,
              customers. Leaders are trustees, not owners. You're accountable for maximizing value, protecting
              assets, and delivering promised outcomes to those who've entrusted you with authority.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Logic */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Root-Cause Logic</h2>
          <p className="mt-4 text-muted-foreground">
            Why is the mandate of responsibility non-negotiable? Because it creates the accountability structure that prevents abuse:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">1. Responsibility Prevents Authority Abuse</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When leaders know they'll be held accountable for outcomes, they exercise authority with
                restraint and intentionality. Accountability is the governance mechanism that keeps power in check.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">2. Responsibility Creates Performance Pressure</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Clear accountability generates the pressure required for excellence. When you know you'll
                answer for results, you optimize systems, eliminate waste, and drive toward outcomes.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">3. Responsibility Builds Trust</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Teams trust leaders who accept full accountability for failures and share credit for successes.
                Stewardship demonstrated over time creates the relational capital required for influence.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">4. Responsibility Enables Measurement</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Defined responsibility makes performance measurable. You can assess effectiveness, identify
                gaps, and implement improvements when accountability is clear and quantifiable.
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
            How do you apply the Mandate of Responsibility in practical leadership?
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Organizational Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Define explicit success metrics for every leadership role</li>
                <li>• Conduct quarterly accountability reviews against commitments</li>
                <li>• Link compensation and advancement to stewardship outcomes</li>
                <li>• Create transparent reporting on resource utilization and results</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Personal Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Document your commitments and track completion rates</li>
                <li>• Own failures publicly before claiming successes</li>
                <li>• Maintain audit trails for major decisions and resource allocation</li>
                <li>• Regularly report progress to stakeholders unprompted</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Team/Department Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Establish clear ownership for every deliverable and metric</li>
                <li>• Create systems for measuring and reporting team performance</li>
                <li>• Hold regular retrospectives focused on accountability and learning</li>
                <li>• Build a culture where accepting responsibility is rewarded, not punished</li>
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
            When the Mandate of Responsibility is violated, these structural problems emerge:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Authority Without Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders exercise power without facing consequences for poor outcomes. This creates tyranny,
                waste, and organizational decay as unchecked authority trends toward self-interest.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Blame-Shifting and Excuse-Making</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When leaders deflect responsibility for failures while claiming credit for successes, trust
                erodes and teams become defensive rather than performance-oriented.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Responsibility Without Authority</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Holding people accountable for outcomes they can't control creates learned helplessness and
                resignation. People disengage when responsibility exceeds their decision-making power.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Performative Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Organizations create the appearance of accountability (reports, meetings, dashboards) without
                actual consequences for failure, resulting in bureaucracy without improvement.
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
              href="/framework/vision"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Vision
            </Link>
            <Link
              href="/framework/service"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Structure of Service
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
