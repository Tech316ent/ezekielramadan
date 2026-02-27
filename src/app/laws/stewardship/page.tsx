import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Stewardship | Seven Laws of Kingdom Governance",
  description: "You manage what you do not own. All authority is delegated. A governance principle for institutional leadership.",
};

export default function StewardshipLawPage() {
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
              <span className="text-xl font-bold text-primary">3</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Third Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Stewardship
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            You manage what you do not own.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              All authority is delegated. Leaders do not own the organizations, resources,
              or people they lead. They steward these on behalf of something greater than
              themselves. This distinction transforms decision-making from self-interest
              to faithful administration.
            </p>
            <p>
              The Law of Stewardship establishes that governance is fundamentally a trust
              relationship. The leader has been entrusted with resources, relationships,
              and responsibilities that belong to others. The measure of leadership is not
              personal gain but faithful administration.
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
              Stewardship represents a fundamentally different framework than ownership.
              The owner asks: "What do I want?" The steward asks: "What does faithful
              administration require?"
            </p>
            <p>
              This distinction has profound implications for decision-making:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Time horizon extends beyond personal tenure</li>
              <li>Success metrics include succession quality</li>
              <li>Resource decisions prioritize institutional health</li>
              <li>Personal benefit becomes subordinate to mandate</li>
              <li>Accountability to delegating authority is active</li>
            </ul>
            <p>
              The steward recognizes that their position is temporary. Others came before;
              others will come after. The question is not "What can I extract during my
              tenure?" but "What can I transmit to those who follow?"
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
              Kingdom governance is built on stewardship as a foundational principle.
              The parable of the talents illustrates this directly: resources are
              entrusted to servants who are expected to produce return. The measure
              is not the size of the endowment but the faithfulness of administration.
            </p>
            <p>
              Scripture establishes that humanity's original mandate was stewardship
              of creation, not ownership. "Fill the earth and subdue it" is a
              stewardship commission, not an ownership grant. The earth belongs to
              the Lord; humanity administers it on behalf of the true owner.
            </p>
            <p>
              This framework produces accountability that extends beyond human
              relationships. The steward answers not only to organizational
              stakeholders but to the ultimate source of delegated authority.
              This creates ethical constraints that operate even when human
              oversight is absent.
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
              <h3 className="font-semibold text-foreground">Long-Term Orientation</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Stewardship thinking extends decision horizons beyond quarterly results.
                Institutions must evaluate choices against multi-generational impact,
                not just immediate outcomes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Succession Focus</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                If leadership is stewardship, then succession planning is not optional.
                The steward must prepare the institution for the next steward.
                Indispensability is a leadership failure, not a success.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Resource Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Stewardship requires transparent accounting of resources. The steward
                must be able to demonstrate that entrusted resources have been
                administered faithfully and productively.
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
              <h3 className="font-semibold text-foreground">Ownership Mentality</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When leaders treat organizations as personal possessions, they make
                decisions that benefit themselves at institutional expense. Resources
                are extracted rather than multiplied. Legacy becomes ego rather than
                institutional health.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Short-Term Extraction</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Leaders who maximize short-term personal benefit often do so by
                depleting institutional reserves. They may show strong personal
                results while leaving the institution structurally weakened for
                successors.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Succession Neglect</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Leaders who make themselves indispensable violate stewardship. When
                they depart, the institution suffers because necessary capabilities
                were not developed in others. The steward's departure should not
                threaten institutional survival.
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
              href="/laws/authority"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Authority
            </Link>
            <Link
              href="/laws/alignment"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Alignment
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
