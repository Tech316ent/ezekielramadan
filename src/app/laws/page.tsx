import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "The Seven Laws of Kingdom Governance | Ezekiel Ramadan",
  description: "Seven governing principles for institutional leadership: Identity, Authority, Stewardship, Alignment, Vision, Incentives, and Accountability. Structural law for enduring governance.",
  keywords: "seven laws governance, kingdom governance laws, institutional leadership principles, governance framework, leadership law",
  openGraph: {
    title: "The Seven Laws of Kingdom Governance",
    description: "Seven governing principles for sustainable institutional leadership",
    url: "https://ezekielramadan.com/laws",
  },
};

export default function LawsPage() {
  const laws = [
    {
      number: 1,
      name: "Identity",
      slug: "identity",
      principle: "Who you are determines what you can govern.",
      description: "Identity precedes authority. Before you can lead others, you must understand your own position within larger structures. Identity is not self-expression; it is positional clarity. You govern from where you stand, not from where you wish to stand.",
      governance: "Institutions must establish clear identity before pursuing expansion. Organizations without defined identity lack the structural foundation for sustainable growth.",
    },
    {
      number: 2,
      name: "Authority",
      slug: "authority",
      principle: "Legitimate power flows from proper position.",
      description: "Authority is not self-granted. It derives from recognized position within established structures. Authority seized without proper delegation creates instability. Authority exercised outside defined boundaries produces resistance.",
      governance: "Governance requires clearly defined authority structures. Every role must have explicit boundaries, reporting relationships, and decision rights.",
    },
    {
      number: 3,
      name: "Stewardship",
      slug: "stewardship",
      principle: "You manage what you do not own.",
      description: "All authority is delegated. Leaders do not own the organizations, resources, or people they lead. They steward these on behalf of something greater. This distinction transforms decision-making from self-interest to faithful administration.",
      governance: "Stewardship creates accountability to outcomes beyond personal benefit. Institutions built on ownership mentality extract value; institutions built on stewardship generate value.",
    },
    {
      number: 4,
      name: "Alignment",
      slug: "alignment",
      principle: "Order requires harmony between levels.",
      description: "Sustainable governance requires alignment across hierarchical levels. Strategy must align with operations. Operations must align with execution. When levels contradict each other, institutional energy dissipates in internal friction.",
      governance: "Governance structures must create mechanisms for vertical alignment. Misaligned institutions work against themselves.",
    },
    {
      number: 5,
      name: "Vision",
      slug: "vision",
      principle: "Direction precedes construction.",
      description: "Vision is not motivation. It is architectural specification. Vision defines what will be built before resources are committed. Without vision, activity multiplies without convergence. With vision, effort compounds toward defined outcomes.",
      governance: "Institutions require articulated vision before strategic planning. Vision provides the criteria by which all subsequent decisions are evaluated.",
    },
    {
      number: 6,
      name: "Incentives",
      slug: "incentives",
      principle: "Behavior follows reward structures.",
      description: "People do what they are rewarded for doing. No amount of mission statements, values declarations, or leadership speeches overrides this reality. If incentives contradict stated values, incentives win.",
      governance: "Governance must align incentive structures with desired outcomes. Misaligned incentives produce misaligned behavior, regardless of intention.",
    },
    {
      number: 7,
      name: "Accountability",
      slug: "accountability",
      principle: "Authority without consequence corrupts.",
      description: "Accountability is the structural binding of authority to responsibility. Where authority exists without accountability, corruption follows. Where responsibility exists without authority, frustration follows. Both must be calibrated together.",
      governance: "Every grant of authority requires corresponding mechanisms of accountability. Unaccountable authority is structurally unsound authority.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            The Seven Laws of Kingdom Governance
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Leadership is governance. Governance operates by law. These seven principles
            form the structural foundation of enduring institutional order.
          </p>
        </div>
      </section>

      {/* Laws Grid */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="space-y-8">
            {laws.map((law) => (
              <div
                key={law.slug}
                className="rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-6">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                    <span className="text-xl font-bold text-primary">{law.number}</span>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-foreground">
                      The Law of {law.name}
                    </h2>
                    <p className="mt-2 text-lg font-medium text-primary">
                      {law.principle}
                    </p>
                    <p className="mt-4 text-muted-foreground leading-relaxed">
                      {law.description}
                    </p>
                    <div className="mt-4 rounded border-l-4 border-muted bg-muted/30 p-4">
                      <p className="text-sm font-medium text-foreground">Governance Implication:</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {law.governance}
                      </p>
                    </div>
                    <Link
                      href={`/laws/${law.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                    >
                      Full Exposition
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center">
            How the Laws Integrate
          </h2>
          <p className="mt-4 text-muted-foreground text-center">
            The seven laws form an integrated system. Each reinforces and constrains the others.
          </p>

          <div className="mt-12 space-y-4">
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Identity → Authority:</span>{" "}
                You cannot exercise legitimate authority without clear positional identity.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Authority → Stewardship:</span>{" "}
                All authority is delegated, which creates the stewardship framework.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Stewardship → Alignment:</span>{" "}
                Stewards must align their work with the intentions of those who delegated authority.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Alignment → Vision:</span>{" "}
                Alignment requires vision that specifies what aligned activity produces.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Vision → Incentives:</span>{" "}
                Vision without aligned incentives remains aspirational, not operational.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Incentives → Accountability:</span>{" "}
                Incentives require accountability to prevent gaming and corruption.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Accountability → Identity:</span>{" "}
                Accountability reinforces identity by defining role boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Understand the Foundation
          </h2>
          <p className="mt-4 text-muted-foreground">
            The seven laws emerge from a coherent philosophical framework.
            Explore the underlying worldview.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/philosophy"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Read the Philosophy
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/essays"
              className="rounded border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              Browse Essays
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
