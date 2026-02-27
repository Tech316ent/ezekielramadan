import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Vision | Seven Laws of Kingdom Governance",
  description: "Direction precedes construction. Vision is architectural specification, not motivation.",
};

export default function VisionLawPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 border-b border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/laws"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Seven Laws
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-14 w-14 items-center justify-center rounded border border-primary/30 bg-primary/10">
              <span className="text-xl font-bold text-primary">5</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Fifth Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Vision
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            Direction precedes construction.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Vision is not motivation. It is architectural specification. Vision defines
              what will be built before resources are committed. Without vision, activity
              multiplies without convergence. With vision, effort compounds toward defined
              outcomes.
            </p>
            <p>
              The Law of Vision establishes that effective governance requires articulated
              destination before strategic planning. Vision provides the criteria by which
              all subsequent decisions are evaluated. Without this criterion, decisions
              become arbitrary.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophical Grounding */}
      <section className="py-16 border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Philosophical Grounding</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Vision operates as organizational blueprint. Just as architects specify
              structures before construction begins, leaders must articulate outcomes
              before committing resources.
            </p>
            <p>
              Effective vision contains several elements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Specificity:</strong> Clear enough to guide decisions</li>
              <li><strong>Measurability:</strong> Defined enough to evaluate progress</li>
              <li><strong>Temporal horizon:</strong> Bounded by realistic timeframe</li>
              <li><strong>Alignment:</strong> Consistent with identity and authority</li>
              <li><strong>Communicability:</strong> Transferable to others who must execute</li>
            </ul>
            <p>
              Vision that lacks these elements becomes aspirational language rather
              than operational guidance. The organization may feel inspired but
              lacks direction.
            </p>
          </div>
        </div>
      </section>

      {/* Kingdom Grounding */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Kingdom Grounding</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Scripture establishes that creation itself proceeded from vision: "Let
              there be" precedes existence. The pattern is clear: articulation precedes
              manifestation. Vision is the bridge between intention and reality.
            </p>
            <p>
              The prophetic tradition consistently emphasizes vision as governance
              necessity. "Where there is no vision, the people perish" is not
              motivational rhetoric but structural observation. Without articulated
              direction, collective action becomes incoherent.
            </p>
            <p>
              Kingdom governance demonstrates vision operating across scales: from
              creation mandate to covenant promises to prophetic announcements. Each
              represents vision articulated before fulfillment, providing framework
              for aligned effort across time.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Implications */}
      <section className="py-16 border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Governance Implications</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Vision Before Strategy</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Strategic planning must follow vision articulation, not precede it.
                Strategy answers "how" only after vision has answered "what" and
                purpose has answered "why."
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Decision Criteria</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Vision provides the filter for resource allocation. Initiatives that
                advance vision receive priority. Initiatives that do not advance
                vision, regardless of other merits, should be deprioritized or
                eliminated.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Progress Measurement</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Vision enables meaningful progress tracking. The question is not
                simply "Are we busy?" but "Are we closer to the defined destination
                than before?" Activity without vision convergence is not progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Failure Cases */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Failure Cases</h2>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Vision Absence</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Organizations without articulated vision engage in reactive
                decision-making. Each choice is evaluated in isolation rather
                than against a coherent direction. The result is drift rather
                than progress.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Vision Vagueness</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Vague vision provides no operational guidance. "Be the best" or
                "maximize value" do not enable decision-making. They allow any
                action to be justified, which is functionally the same as no
                vision at all.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Vision-Action Gap</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When articulated vision differs from actual priorities, credibility
                erodes. Organizations that claim one vision while pursuing another
                create cynicism that undermines future vision communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-16 border-t border-border bg-card">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/laws/alignment"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Alignment
            </Link>
            <Link
              href="/laws/incentives"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Incentives
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
