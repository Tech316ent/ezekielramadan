import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "The Law of Incentives | Seven Laws of Kingdom Governance",
  description: "Behavior follows reward structures. Incentives shape organizational behavior regardless of stated values.",
};

export default function IncentivesLawPage() {
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
              <span className="text-xl font-bold text-primary">6</span>
            </div>
            <span className="text-sm font-medium text-muted-foreground">Sixth Law</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Law of Incentives
          </h1>
          <p className="mt-6 text-xl font-medium text-primary">
            Behavior follows reward structures.
          </p>
        </div>
      </section>

      {/* Definition */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Definition</h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              People do what they are rewarded for doing. No amount of mission statements,
              values declarations, or leadership speeches overrides this reality. If
              incentives contradict stated values, incentives win.
            </p>
            <p>
              The Law of Incentives establishes that governance must align reward
              structures with desired outcomes. Organizations get the behavior they
              incentivize, not the behavior they request. This is not cynicism about
              human nature; it is recognition of structural reality.
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
              Incentives operate through multiple channels:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Financial:</strong> Compensation, bonuses, equity</li>
              <li><strong>Career:</strong> Promotion, responsibility, title</li>
              <li><strong>Social:</strong> Recognition, status, belonging</li>
              <li><strong>Psychological:</strong> Autonomy, mastery, purpose</li>
              <li><strong>Negative:</strong> Consequences avoided through compliance</li>
            </ul>
            <p>
              Effective governance requires understanding which incentives are actually
              operating, not merely which incentives are officially stated. The formal
              incentive structure may differ significantly from the actual rewards that
              shape behavior.
            </p>
            <p>
              Consider an organization that claims to value innovation but promotes
              only those who avoid risk. The formal value says innovation; the actual
              incentive says safety. Behavior follows the actual incentive.
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
              Kingdom governance explicitly addresses incentives. Scripture presents
              reward structures as legitimate motivators: "Well done, good and
              faithful servant" is an incentive. The parable of the talents explicitly
              describes differential rewards based on stewardship faithfulness.
            </p>
            <p>
              The wisdom literature consistently connects behavior to outcomes. This
              is not transactional manipulation but structural reality: actions produce
              consequences. Governance that ignores this connection fails to account
              for how human behavior actually operates.
            </p>
            <p>
              However, Kingdom governance also addresses incentive corruption. When
              incentives serve self-interest at the expense of stewardship, the
              structure is misaligned. The goal is not maximum personal reward but
              rewards aligned with faithful service.
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
              <h3 className="font-semibold text-foreground">Incentive Audit</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Organizations must regularly audit actual incentives against
                stated objectives. What behaviors are actually being rewarded?
                Do these behaviors align with vision and values?
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Multi-dimensional Design</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Effective incentive design addresses multiple channels.
                Compensation alone is insufficient. Career paths, recognition
                systems, and cultural rewards must all align with desired outcomes.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Gaming Prevention</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Any incentive system will be optimized by participants.
                Governance must anticipate gaming and design incentives that
                produce desired outcomes even when aggressively optimized.
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
              <h3 className="font-semibold text-foreground">Metric Fixation</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                When incentives attach to specific metrics, people optimize for
                those metrics even at the expense of underlying goals. The metric
                becomes the target rather than the indicator it was designed to be.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Short-Term Bias</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Incentive structures that reward short-term results produce
                short-term behavior. Leaders maximize their tenure's metrics while
                depleting institutional resources their successors will need.
              </p>
            </div>
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Individual vs. Collective</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Incentives that reward individual achievement can undermine
                collective performance. When my success requires your failure,
                collaboration becomes irrational. The organization fragments.
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
              href="/laws/vision"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Vision
            </Link>
            <Link
              href="/laws/accountability"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Accountability
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
