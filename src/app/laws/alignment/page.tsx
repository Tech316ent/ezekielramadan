import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Alignment | Seven Laws of Kingdom Governance",
  description: "Order requires harmony between levels. Sustainable governance requires alignment across hierarchical structures.",
};

export default function AlignmentLawPage() {
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
              <span className="text-xl font-bold text-primary">4</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Fourth Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Alignment
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            Order requires harmony between levels.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Sustainable governance requires alignment across hierarchical levels.
              Strategy must align with operations. Operations must align with execution.
              When levels contradict each other, institutional energy dissipates in
              internal friction.
            </p>
            <p>
              The Law of Alignment establishes that effective governance produces
              coherence across organizational layers. Misalignment between what
              leadership says and what the organization does creates credibility gaps,
              wasted resources, and structural dysfunction.
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
              Alignment operates at multiple levels within organizations:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Vertical alignment:</strong> Strategy aligns with tactics aligns with execution</li>
              <li><strong>Horizontal alignment:</strong> Departments coordinate rather than conflict</li>
              <li><strong>Temporal alignment:</strong> Short-term actions serve long-term objectives</li>
              <li><strong>Value alignment:</strong> Stated values match operational reality</li>
              <li><strong>Incentive alignment:</strong> Rewards match desired outcomes</li>
            </ul>
            <p>
              Misalignment at any level creates drag on organizational performance.
              Like an engine with misaligned components, the institution expends
              energy fighting itself rather than producing forward motion.
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
              Kingdom governance demonstrates perfect alignment: divine intent,
              delegated authority, and human execution operating in harmony.
              The prayer "on earth as it is in heaven" expresses alignment as
              the governance ideal.
            </p>
            <p>
              Scripture presents misalignment as the fundamental governance failure.
              When human stewards pursue agendas that contradict delegated mandates,
              disorder follows. The prophetic tradition consistently diagnoses
              societal dysfunction as alignment failure between human governance
              and divine order.
            </p>
            <p>
              This produces a critical insight: alignment is not merely
              organizational efficiency. It is structural integrity. Institutions
              aligned with governing laws operate sustainably. Institutions
              misaligned with these laws experience progressive degradation.
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
              <h3 className="font-semibold text-foreground">Strategy Cascade</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Strategic intent must cascade clearly through organizational levels.
                Each level must understand how their work contributes to overall
                objectives. Without clear cascade, local optimization undermines
                global effectiveness.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Cross-Functional Coordination</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Horizontal alignment requires mechanisms for cross-functional
                coordination. Departments must share information, resolve conflicts,
                and subordinate local interests to institutional objectives.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Values Audit</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Institutions must regularly audit alignment between stated values
                and operational reality. When gaps exist, either values must be
                revised or operations must change. Persistent misalignment destroys
                organizational credibility.
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
              <h3 className="font-semibold text-foreground">Strategy-Execution Gap</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When strategy is developed in isolation from operational reality,
                execution fails. Beautiful strategies that cannot be implemented
                represent alignment failure between leadership vision and
                organizational capability.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Silo Dysfunction</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When departments optimize for local metrics without regard for
                institutional objectives, horizontal misalignment occurs.
                Departments may succeed individually while the organization
                fails collectively.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Values Hypocrisy</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When stated values diverge from operational practice, trust erodes.
                Organizations that espouse values they do not practice create
                cynicism that undermines engagement and performance.
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
              href="/laws/stewardship"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Stewardship
            </Link>
            <Link
              href="/laws/vision"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Vision
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
