import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";

export const metadata = {
  title: "Essays | Governance, Power, and Institutional Order",
  description: "Long-form essays on governance, institutional order, power, leadership failure analysis, stewardship economics, and Kingdom structure. Not trend commentary. Structural analysis.",
  keywords: "governance essays, institutional order, power analysis, leadership essays, stewardship, kingdom governance essays",
  openGraph: {
    title: "Essays on Governance and Institutional Order",
    description: "Long-form structural analysis of governance, power, and institutional leadership",
    url: "https://ezekielramadan.com/essays",
  },
};

export default function EssaysPage() {
  const categories = [
    "All Essays",
    "Governance",
    "Institutional Order",
    "Power",
    "Leadership Failure Analysis",
    "Stewardship Economics",
    "Kingdom Structure",
  ];

  // Placeholder for future essays - these would come from a CMS or database
  const essays: {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
    slug: string;
  }[] = [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Essays
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Long-form explorations of governance, institutional order, power,
            and the structural principles of enduring leadership. Not trend commentary.
            Not reactive content. Structural analysis.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border bg-card py-6">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                className={`shrink-0 rounded px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All Essays"
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Essays List */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          {essays.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">
                Essays Forthcoming
              </h2>
              <p className="text-muted-foreground max-w-md mx-auto leading-relaxed">
                The essay archive is being developed. Subscribe to receive notification
                when new essays are published.
              </p>
              <div className="mt-8">
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Subscribe for Updates
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              {essays.map((essay) => (
                <article
                  key={essay.slug}
                  className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/30"
                >
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">{essay.category}</span>
                    <span>·</span>
                    <span>{essay.readTime}</span>
                    <span>·</span>
                    <span>{essay.date}</span>
                  </div>

                  <h2 className="mt-4 text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {essay.title}
                  </h2>

                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {essay.excerpt}
                  </p>

                  <Link
                    href={`/essays/${essay.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2"
                  >
                    Read Essay
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Planned Topics */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Forthcoming Topics
          </h2>
          <p className="mt-4 text-muted-foreground text-center">
            Essays in development addressing these governance questions.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">What Is Governance?</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Foundational essay distinguishing governance from management.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">The Architecture of Authority</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                How legitimate power structures are designed and maintained.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">Institutional Decay Patterns</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Analysis of how institutions degrade when governance laws are violated.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">Stewardship vs. Ownership</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                The fundamental distinction that shapes institutional health.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">The Problem of Succession</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Why most organizations fail the succession test.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-4">
              <h3 className="font-semibold text-foreground">Kingdom and Corporation</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                What modern organizations can learn from ancient governance models.
              </p>
            </div>
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
            Subscribe to receive long-form essays when published.
            No promotional content. No trend commentary.
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
