import Link from "next/link";
import { ArrowRight, FileText, Filter } from "lucide-react";
import SocialShare from "@/components/SocialShare";

export const metadata = {
  title: "Leadership Blog | Expert Insights on Management & Organizational Design",
  description: "Long-form essays and thought leadership on First Principles Leadership, systems thinking, and organizational design. Expert insights for CEOs, executives, and managers on purpose-driven leadership, authority, governance, and strategic vision.",
  keywords: "leadership blog, management insights, leadership articles, executive insights, organizational design blog, systems thinking articles, leadership thought leadership, CEO blog, management blog, leadership development articles",
  openGraph: {
    title: "Leadership Blog & Insights",
    description: "Expert thought leadership on first principles and organizational systems",
    url: "https://ezekielramadan.com/blog",
  },
};

export default function BlogPage() {
  const categories = [
    "All Articles",
    "Leadership Theory",
    "Organizational Design",
    "Systems Thinking",
    "Authority & Governance",
    "Purpose & Vision",
  ];

  interface Article {
    title: string;
    excerpt: string;
    category: string;
    readTime: string;
    date: string;
  }

  const articles: Article[] = [];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <FileText className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Blog & Insights</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Thought Leadership on <br />First Principles
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Long-form essays on leadership rebuilt from universal laws, exploring purpose, authority,
            vision, and systems thinking.
          </p>

          {/* Social Share */}
          <div className="mt-8 flex justify-center">
            <SocialShare
              title="Leadership Blog - First Principles Insights"
              description="Long-form essays on leadership rebuilt from universal laws"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-border bg-card py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-4 overflow-x-auto">
            <Filter className="h-5 w-5 shrink-0 text-muted-foreground" />
            {categories.map((category) => (
              <button
                key={category}
                className={`shrink-0 rounded px-4 py-2 text-sm font-medium transition-colors ${
                  category === "All Articles"
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

      {/* Articles Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-foreground mb-2">No Articles Yet</h2>
              <p className="text-muted-foreground max-w-md mx-auto">
                Check back soon for thought-provoking essays on First Principles Leadership, systems thinking, and organizational design.
              </p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <article
                    key={article.title}
                    className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
                  >
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-semibold text-primary">{article.category}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{article.readTime}</span>
                    </div>

                    <h2 className="mt-4 text-xl font-bold text-foreground group-hover:text-primary">
                      {article.title}
                    </h2>

                    <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-all group-hover:gap-2"
                      >
                        Read Article
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-12 text-center">
                <button className="rounded border border-border bg-card px-8 py-3 font-semibold text-foreground transition-all hover:bg-muted">
                  Load More Articles
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get New Articles Weekly
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to The First Principles Dispatch for weekly essays and frameworks on leadership.
          </p>

          <div className="mt-10">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow"
            >
              Subscribe to Newsletter
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
