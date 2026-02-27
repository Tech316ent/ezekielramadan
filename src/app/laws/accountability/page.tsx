import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Accountability | Seven Laws of Kingdom Governance",
  description: "Authority without consequence corrupts. Accountability binds authority to responsibility.",
};

export default function AccountabilityLawPage() {
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
              <span className="text-xl font-bold text-primary">7</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Seventh Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Accountability
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            Authority without consequence corrupts.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Accountability is the structural binding of authority to responsibility.
              Where authority exists without accountability, corruption follows. Where
              responsibility exists without authority, frustration follows. Both must
              be calibrated together.
            </p>
            <p>
              The Law of Accountability establishes that every grant of authority
              requires corresponding mechanisms of accountability. Unaccountable
              authority is structurally unsound authority. It will degrade over time,
              regardless of the character of those who hold it.
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
              Accountability operates through multiple mechanisms:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Reporting:</strong> Regular disclosure of actions and outcomes</li>
              <li><strong>Review:</strong> Systematic evaluation of performance</li>
              <li><strong>Consequence:</strong> Real outcomes attached to performance</li>
              <li><strong>Removal:</strong> Authority withdrawal for failure</li>
              <li><strong>Transparency:</strong> Visibility that enables external evaluation</li>
            </ul>
            <p>
              Without these mechanisms, authority becomes insulated from feedback. The
              authority holder receives benefits of position without bearing costs of
              poor performance. This structural imbalance incentivizes self-serving
              behavior.
            </p>
            <p>
              The history of institutional corruption consistently shows the same
              pattern: accountability mechanisms are weakened or circumvented,
              authority becomes unaccountable, and corruption follows. This is not
              because leaders are uniquely flawed but because the structure no longer
              constrains behavior.
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
              Kingdom governance establishes ultimate accountability. All delegated
              authority ultimately answers to the delegating source. The parable of
              the talents explicitly describes a day of accounting: "After a long
              time the master of those servants returned and settled accounts with them."
            </p>
            <p>
              This establishes that accountability is not optional in governance but
              fundamental. The question is not whether accountability exists but
              whether governing structures recognize and implement it effectively.
            </p>
            <p>
              Scripture presents accountability as protective, not punitive. Structures
              that hold leaders accountable protect both the institution and the leaders
              themselves from the corrupting effects of unaccountable power.
              Accountability is governance hygiene.
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
              <h3 className="font-semibold text-foreground">Authority-Accountability Pairing</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Every delegation of authority must include corresponding
                accountability mechanisms. The question "to whom does this
                position answer?" must have a clear answer.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Real Consequences</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Accountability without consequence is theater. Performance
                reviews that do not affect outcomes, boards that do not remove
                failing executives, feedback that produces no change: these are
                accountability failures.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Upward Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Accountability must function at every level, including senior
                leadership. Boards must hold executives accountable. Shareholders
                must hold boards accountable. Accountability that stops at middle
                management protects those with most power to corrupt.
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
              <h3 className="font-semibold text-foreground">Accountability Theater</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Organizations may have formal accountability structures that
                produce no actual accountability. Reports are filed, meetings
                are held, reviews are conducted, but nothing changes. The
                appearance of accountability substitutes for the reality.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Captured Oversight</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When accountability bodies are captured by those they oversee,
                accountability fails. Boards populated with allies, regulators
                who anticipate industry employment, auditors dependent on client
                renewal: these represent structural accountability failure.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Delayed Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When accountability arrives only after catastrophic failure,
                damage is already done. Effective accountability operates
                continuously, identifying problems before they become crises.
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
              href="/laws/incentives"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Incentives
            </Link>
            <Link
              href="/laws"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              View All Laws
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
