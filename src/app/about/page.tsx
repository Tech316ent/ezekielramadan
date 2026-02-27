import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Linkedin, Twitter, Youtube } from "lucide-react";

export const metadata = {
  title: "About | Ezekiel Ramadan - Governance Philosopher",
  description: "Ezekiel Ramadan is a governance philosopher exploring leadership, institutional order, and stewardship through the lens of Kingdom first principles and structural law.",
  keywords: "governance philosopher, kingdom governance, institutional leadership, structural law, first principles governance",
  openGraph: {
    title: "About Ezekiel Ramadan | Governance Philosopher",
    description: "Exploring leadership, institutional order, and stewardship through Kingdom first principles",
    url: "https://ezekielramadan.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About
          </h1>
        </div>
      </section>

      {/* Profile Section */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Photo */}
            <div className="shrink-0">
              <div className="relative w-48 h-48 md:w-56 md:h-56 overflow-hidden rounded-full border-2 border-primary/30">
                <Image
                  src="/ezekiel-ramadan.jpg"
                  alt="Ezekiel Ramadan"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Ezekiel Ramadan
              </h2>
              <p className="mt-2 text-muted-foreground">
                Governance Philosopher
              </p>

              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  This platform exists to articulate, codify, and transmit the governing
                  principles that underlie all sustainable authority. The work emerges
                  from a conviction that leadership is governance, governance operates
                  by law, and the Kingdom of God reveals the structure of enduring order.
                </p>
                <p>
                  The approach is philosophical, not motivational. The goal is structural
                  understanding, not emotional inspiration. The method is first principles
                  analysis applied to the domain of institutional leadership.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                <a
                  href="https://www.linkedin.com/in/eramadan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card transition-all hover:border-primary/50 hover:bg-muted"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href="https://x.com/ezekielramadan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card transition-all hover:border-primary/50 hover:bg-muted"
                  aria-label="Twitter/X"
                >
                  <Twitter className="h-5 w-5 text-foreground" />
                </a>
                <a
                  href="https://youtube.com/@EzekielRamadan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded border border-border bg-card transition-all hover:border-primary/50 hover:bg-muted"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Governance Matters */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Why Governance Matters
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Most leadership fails because it confuses governance with management.
              Management concerns efficiency, processes, and operational outcomes.
              Governance addresses something more fundamental: the architecture of
              authority itself.
            </p>
            <p>
              Contemporary leadership literature is dominated by tactical advice:
              communication techniques, productivity systems, organizational charts.
              These have their place. But they operate at the wrong level of abstraction.
              They treat symptoms while ignoring structural causes.
            </p>
            <p>
              Institutions that flourish across generations are not distinguished by
              superior tactics. They are distinguished by superior governance: clear
              identity, legitimate authority, faithful stewardship, structural alignment,
              articulated vision, proper incentives, and robust accountability.
            </p>
            <p>
              These are not management principles. They are governance laws. And they
              operate whether leaders acknowledge them or not.
            </p>
          </div>
        </div>
      </section>

      {/* Why Kingdom */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Why Kingdom
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The term "Kingdom" is used precisely, not devotionally. A kingdom represents
              the most complete model of governance: a sovereign establishes law, delegates
              authority, defines boundaries, and holds stewards accountable. All elements
              of sustainable governance are present in concentrated form.
            </p>
            <p>
              The Kingdom of God, as articulated in Scripture, provides a template for
              understanding how authority properly functions. This is not a claim requiring
              faith acceptance to evaluate. It is an analytical observation: the governance
              principles embedded in Kingdom teaching align with the structural requirements
              for institutional durability.
            </p>
            <p>
              Whether one accepts the theological premises or not, the governance framework
              remains valuable. The principles of delegated authority, bounded stewardship,
              hierarchical accountability, and institutional succession that emerge from
              Kingdom teaching have demonstrated effectiveness across millennia and cultures.
            </p>
          </div>
        </div>
      </section>

      {/* Intellectual Evolution */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            Intellectual Evolution
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The governance framework presented here emerges from the integration of
              several intellectual traditions: first principles reasoning, systems
              thinking, classical political philosophy, and Kingdom teaching on authority
              and stewardship.
            </p>
            <p>
              The work builds on foundations established by thinkers who treated
              governance as structural reality rather than personality expression.
              From Aristotle's analysis of political constitutions to contemporary
              systems theory, a consistent thread emerges: sustainable order requires
              alignment with governing principles that exist independent of human
              preference.
            </p>
            <p>
              The Kingdom contribution is distinctive: it provides a coherent account
              of why these principles work. They are not arbitrary conventions but
              reflections of created order. This grounding enables confidence that
              the principles will continue to function across changing circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* What This Platform Builds */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">
            What This Platform Exists to Build
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              A body of work that codifies governance principles for serious students
              of institutional leadership. Not motivational content for mass consumption.
              Not tactical advice for immediate application. Structural doctrine for
              those building institutions designed to endure.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Philosophical Foundation</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A coherent articulation of governance as structural order, with the
                Seven Laws providing the analytical framework.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Doctrinal Archive</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Long-form essays exploring governance principles in depth, creating
                a permanent intellectual resource.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Structured Teaching</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Systematic instruction for those seeking to understand and apply
                governance principles to their institutional contexts.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Long-Term Authority</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                A platform designed for durability, not virality. Building intellectual
                authority that compounds over decades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore the Framework
          </h2>
          <p className="mt-4 text-muted-foreground">
            Begin with the Seven Laws that form the structural foundation of
            Kingdom governance.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/laws"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              The Seven Laws
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/philosophy"
              className="rounded border border-border bg-background px-8 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              Read the Philosophy
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
