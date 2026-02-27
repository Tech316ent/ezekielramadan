import Link from "next/link";
import { ArrowRight, Target, Layers, Zap } from "lucide-react";

export const metadata = {
  title: "Leadership Methodology | First Principles Thinking Approach to Management",
  description: "Learn how First Principles Leadership methodology works. Our systematic approach to rebuilding leadership from universal laws combines systems thinking, engineering principles, and proven governance frameworks.",
  keywords: "leadership methodology, first principles thinking, systems thinking approach, leadership framework methodology, organizational design method, strategic leadership approach",
  openGraph: {
    title: "Leadership Methodology | How First Principles Works",
    description: "Systematic approach to rebuilding leadership from universal laws",
    url: "https://ezekielramadan.com/methodology",
  },
};

export default function MethodologyPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">Methodology</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            How First Principles <br />Leadership Works
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            A systematic approach to rebuilding leadership from universal laws,
            combining first principles thinking, systems engineering, and proven governance frameworks.
          </p>
        </div>
      </section>

      {/* Core Methodology */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">The Three-Part Methodology</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our approach integrates three distinct but complementary disciplines to create
            a comprehensive leadership framework.
          </p>

          <div className="mt-12 space-y-12">
            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">1. First Principles Thinking</h3>
                  <p className="mt-3 text-muted-foreground">
                    We deconstruct leadership concepts to their fundamental truths, removing assumptions,
                    cultural biases, and inherited frameworks. This allows us to rebuild from universal laws
                    rather than conventional wisdom.
                  </p>
                  <div className="mt-6 rounded border border-primary/30 bg-primary/5 p-4">
                    <p className="text-sm font-semibold text-foreground">Key Question:</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      "What is absolutely true about this, independent of context, culture, or current practice?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <Layers className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">2. Systems Engineering</h3>
                  <p className="mt-3 text-muted-foreground">
                    Leadership is treated as designed infrastructure, similar to networks, architectures,
                    or secure systems. We apply engineering principles: feedback loops, structural diagnostics,
                    resilience design, and scalability frameworks.
                  </p>
                  <div className="mt-6 rounded border border-primary/30 bg-primary/5 p-4">
                    <p className="text-sm font-semibold text-foreground">Key Question:</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      "How do we design systems that function consistently, regardless of individual capacity or charisma?"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-card p-8">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">3. Kingdom Governance Principles</h3>
                  <p className="mt-3 text-muted-foreground">
                    We extract universal governance laws from kingdom leadership models (authority, stewardship,
                    delegation, service) and translate them into secular, globally applicable frameworks.
                    This provides time-tested wisdom without religious context.
                  </p>
                  <div className="mt-6 rounded border border-primary/30 bg-primary/5 p-4">
                    <p className="text-sm font-semibold text-foreground">Key Question:</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      "What governing principles have proven effective across millennia, independent of religious interpretation?"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">How We Apply the Methodology</h2>
          <p className="mt-4 text-muted-foreground">
            A structured process for transforming abstract principles into actionable leadership systems.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Deconstruction</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Break down the leadership challenge to its fundamental components. Remove assumptions and inherited models.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Identification of Universal Laws</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Determine which of the six governing laws apply to this specific context and challenge.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Systems Design</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Design structural solutions that align with governing laws, creating frameworks, not just strategies.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Implementation & Validation</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Test frameworks against real-world conditions. Measure effectiveness. Iterate based on feedback loops.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">5</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Codification</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Document frameworks for repeatability and transfer. Build intellectual property that scales beyond individual leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Apply This Methodology to Your Leadership
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Learn how to rebuild your leadership approach from first principles.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/framework"
              className="flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow"
            >
              Explore the Framework
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/advisory"
              className="rounded border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              Work With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
