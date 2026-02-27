import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const modernFailures = [
    {
      title: "Charisma Replacing Structure",
      description: "Organizations built on personality collapse when leaders depart. Governance requires architecture, not attraction.",
    },
    {
      title: "Emotion Replacing Law",
      description: "Decisions driven by sentiment produce inconsistent outcomes. Enduring institutions operate on principle, not mood.",
    },
    {
      title: "Expansion Without Order",
      description: "Growth without governance creates fragility. Scale requires structural integrity at every level.",
    },
    {
      title: "Influence Without Accountability",
      description: "Authority exercised without responsibility corrupts. True governance binds power to stewardship.",
    },
  ];

  const sevenLaws = [
    { number: 1, name: "Identity", brief: "Who you are determines what you can govern." },
    { number: 2, name: "Authority", brief: "Legitimate power flows from proper position." },
    { number: 3, name: "Stewardship", brief: "You manage what you do not own." },
    { number: 4, name: "Alignment", brief: "Order requires harmony between levels." },
    { number: 5, name: "Vision", brief: "Direction precedes construction." },
    { number: 6, name: "Incentives", brief: "Behavior follows reward structures." },
    { number: 7, name: "Accountability", brief: "Authority without consequence corrupts." },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Above the Fold */}
      <section className="relative min-h-[80vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />

        <div className="relative mx-auto max-w-4xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#EDB62C]/30 bg-[#EDB62C]/5 px-4 py-2 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#EDB62C]" />
              <span className="text-sm font-medium text-[#EDB62C]">
                Kingdom Governance Philosophy.
              </span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              Leadership Rebuilt
              <br />
              <span className="text-primary">from First Principles</span>
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-muted-foreground sm:text-xl max-w-2xl mx-auto">
              A philosophy of Kingdom governance articulated through first principles
              for founders, leaders, and institutional stewards.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/laws"
                className="flex items-center gap-2 rounded bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90"
              >
                Explore the Seven Laws
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/philosophy"
                className="rounded border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-muted"
              >
                Read the Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Diagnosis of Modern Leadership Failure */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Crisis of Modern Leadership
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Contemporary leadership fails because it treats governance as technique
              rather than architecture. The symptoms are evident.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {modernFailures.map((failure) => (
              <div
                key={failure.title}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {failure.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {failure.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3 - The Seven Laws Grid */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The Seven Laws of Kingdom Governance
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Leadership is governance. Governance operates by law.
              These seven principles form the structural foundation of enduring order.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sevenLaws.map((law) => (
              <Link
                key={law.name}
                href={`/laws/${law.name.toLowerCase()}`}
                className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                    <span className="text-sm font-bold text-primary">{law.number}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      Law of {law.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {law.brief}
                    </p>
                  </div>
                </div>
              </Link>
            ))}

            {/* View All Laws Card */}
            <Link
              href="/laws"
              className="group flex items-center justify-center rounded-lg border border-primary/30 bg-primary/5 p-6 transition-all hover:bg-primary/10"
            >
              <div className="flex items-center gap-2 text-primary font-semibold">
                Explore All Laws
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Core Thesis */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-12">
            <p className="text-2xl font-medium text-foreground leading-relaxed sm:text-3xl">
              Leadership is governance.
            </p>
            <p className="text-2xl font-medium text-foreground leading-relaxed sm:text-3xl mt-2">
              Governance operates by law.
            </p>
            <p className="text-2xl font-medium text-primary leading-relaxed sm:text-3xl mt-2">
              The Kingdom of God reveals the structure of enduring order.
            </p>
          </div>

          <p className="mt-8 text-muted-foreground leading-relaxed">
            This platform exists to articulate, codify, and transmit the governing principles
            that underlie all sustainable authority. Not techniques. Not trends. Structural law.
          </p>
        </div>
      </section>

      {/* Section 5 - Entry Points */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            <Link
              href="/philosophy"
              className="group rounded-lg border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                The Philosophy
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Understand the foundational worldview. Governance as structural order.
                Authority as delegated responsibility.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Read the Manifesto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/essays"
              className="group rounded-lg border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Essays
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Long-form explorations of governance, institutional order, power,
                stewardship, and structural leadership.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                Browse Archive
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="/teaching"
              className="group rounded-lg border border-border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Teaching
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Structured transmission of doctrine. Lecture series, courses,
                and systematic instruction.
              </p>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-primary">
                View Offerings
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Receive New Essays
          </h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to receive long-form essays on governance, institutional order,
            and the structural principles of enduring leadership.
          </p>

          <div className="mt-8">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Subscribe
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
