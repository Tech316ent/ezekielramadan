import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Identity | Seven Laws of Kingdom Governance",
  description: "Who you are determines what you can govern. Identity precedes authority. A governance principle for institutional leadership.",
};

export default function IdentityLawPage() {
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
              <span className="text-xl font-bold text-primary">1</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">First Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Identity
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            Who you are determines what you can govern.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Identity precedes authority. Before you can effectively lead others, you must
              possess clarity about your own position within larger structures. Identity in
              governance is not self-expression or personal branding. It is positional clarity.
              You govern from where you stand, not from where you wish to stand.
            </p>
            <p>
              The Law of Identity establishes that legitimate governance begins with accurate
              self-understanding. A leader who misunderstands their position will inevitably
              overstep boundaries, create friction with other authority structures, and produce
              institutional instability.
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
              Identity in the governance context is fundamentally relational and structural.
              It answers the question: "What is my position within the systems I operate in?"
              This differs from psychological identity, which concerns internal self-perception.
            </p>
            <p>
              Governance identity is determined externally by:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Position within hierarchical structures</li>
              <li>Delegated authority from higher authorities</li>
              <li>Defined boundaries and jurisdiction</li>
              <li>Relationships with parallel authority structures</li>
              <li>Accountability to those who delegated authority</li>
            </ul>
            <p>
              A CEO's identity is defined not by personal ambition but by the board that
              appointed them, the charter that defines their role, and the stakeholders
              they serve. A department head's identity is defined by their position within
              organizational hierarchy, not by their personal vision for the organization.
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
              In Kingdom governance, identity is always derivative. No human possesses
              original identity that grants self-derived authority. All identity flows
              from delegation by higher authority.
            </p>
            <p>
              Scripture establishes this principle in the creation narrative: humanity
              is given dominion, but that dominion is delegated. The authority to govern
              creation does not originate in humanity but is granted by the Creator.
              This established the template: all governance identity is received, not
              self-generated.
            </p>
            <p>
              The practical implication is profound. If identity is delegated, then identity
              can also be withdrawn. Governance positions are not possessions but trusts.
              The leader holds identity as a steward, not as an owner.
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
              <h3 className="font-semibold text-foreground">Institutional Identity</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Organizations must establish clear identity before pursuing expansion.
                An organization that does not know what it is will struggle to determine
                what it should do. Identity provides the filter for strategy.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Role Definition</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Every role within an institution must have clearly articulated identity:
                position, boundaries, authority, and accountability. Ambiguous roles
                produce conflict and inefficiency.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Succession Planning</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                If identity is positional rather than personal, then succession becomes
                possible. The position has identity; different people can occupy that
                position over time. Personality-based identity makes succession impossible.
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
              <h3 className="font-semibold text-foreground">Identity Confusion</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Leaders who confuse personal identity with positional identity build
                organizations around themselves rather than around institutional structures.
                When they depart, the organization lacks transferable identity.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Identity Overreach</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Leaders who claim identity beyond their actual position create conflict
                with other authority structures. A department head who acts as CEO violates
                both their own positional identity and the CEO's jurisdiction.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Identity Abdication</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Leaders who fail to exercise authority appropriate to their position create
                leadership vacuums. Others will fill these vacuums, often inappropriately.
                The result is structural disorder.
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
              href="/laws"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← All Seven Laws
            </Link>
            <Link
              href="/laws/authority"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Authority
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
