import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Authority | Seven Laws of Kingdom Governance",
  description: "Legitimate power flows from proper position. Authority is not self-granted. A governance principle for institutional leadership.",
};

export default function AuthorityLawPage() {
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
              <span className="text-xl font-bold text-primary">2</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Second Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Authority
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            Legitimate power flows from proper position.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Authority is not self-granted. It derives from recognized position within
              established structures. Authority seized without proper delegation creates
              instability. Authority exercised outside defined boundaries produces resistance.
            </p>
            <p>
              The Law of Authority establishes that power operates legitimately only when
              it flows through proper channels. A person may possess capability, intelligence,
              and vision, but without delegated authority from recognized sources, their
              exercise of power lacks institutional legitimacy.
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
              Authority and power are distinct concepts often conflated in contemporary
              discourse. Power is the capacity to produce effects. Authority is the right
              to exercise that capacity within defined domains.
            </p>
            <p>
              A person may have the power to make decisions without having the authority
              to do so. Conversely, a person may have authority without corresponding power.
              Sustainable governance requires alignment between authority and power: the
              right to act must be matched with the capacity to act effectively.
            </p>
            <p>
              Authority derives legitimacy from several sources:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Delegation from higher authority</li>
              <li>Constitutional or charter definition</li>
              <li>Organizational hierarchy</li>
              <li>Earned trust over time</li>
              <li>Demonstrated competence in domain</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Kingdom Grounding */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Kingdom Grounding</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Kingdom governance establishes a hierarchical model of authority where all
              power ultimately derives from the sovereign. The king delegates authority
              to governors, who delegate to administrators, who delegate to local officials.
              At each level, authority is bounded and accountable.
            </p>
            <p>
              This model produces several critical insights. First, no human authority is
              ultimate. All delegated authority operates under constraints. Second, authority
              carries accountability to the delegating source. Third, authority exercised
              beyond delegated bounds is illegitimate, regardless of the exerciser's
              intentions or capabilities.
            </p>
            <p>
              The centurion in the Gospel narrative demonstrates this understanding: "I am
              a man under authority, with soldiers under me." He recognized that his
              authority to command derived from his submission to higher authority.
              Authority flows down through aligned structures.
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
              <h3 className="font-semibold text-foreground">Clear Authority Structures</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Organizations must establish explicit authority chains. Every position
                must have defined decision rights, reporting relationships, and
                jurisdictional boundaries. Ambiguity creates conflict.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Delegation Protocols</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Authority must be formally delegated, not assumed. The act of delegation
                should specify scope, duration, and accountability requirements.
                Undocumented delegation creates disputes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Boundary Enforcement</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Authority boundaries must be actively enforced. When leaders overstep
                their authority without consequence, organizational structure degrades.
                Boundary violations should be addressed systematically.
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
              <h3 className="font-semibold text-foreground">Usurped Authority</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When individuals seize authority without proper delegation, they create
                parallel power structures that conflict with legitimate governance. Even
                if their decisions are sound, the process corruption undermines institutional
                integrity.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Authority Vacuum</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When authority is not clearly delegated, multiple parties may claim
                jurisdiction over the same decisions. The resulting conflict consumes
                organizational energy and produces inconsistent outcomes.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Authority Without Capacity</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When authority is delegated without corresponding resources, training,
                or support, the authority becomes meaningless. The gap between formal
                authority and actual capacity creates frustration and ineffectiveness.
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
              href="/laws/identity"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Identity
            </Link>
            <Link
              href="/laws/stewardship"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Stewardship
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
