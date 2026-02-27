import Link from "next/link";
import { ArrowRight, FileText, Video, Mic, Download } from "lucide-react";

export const metadata = {
  title: "Leadership Resources | Free Frameworks, Tools & Templates for Executives",
  description: "Free leadership frameworks, tools, articles, videos, and podcasts on First Principles Leadership. Downloadable templates for purpose discovery, vision planning, authority mapping, and organizational design. Resources for CEOs, executives, and managers.",
  keywords: "leadership resources, free leadership tools, leadership frameworks, leadership templates, management tools, executive resources, organizational design templates, leadership videos, leadership podcast, leadership articles",
  openGraph: {
    title: "Leadership Resources | Tools & Frameworks",
    description: "Free frameworks, tools, and content for leadership development",
    url: "https://ezekielramadan.com/resources",
  },
};

export default function ResourcesPage() {
  const resourceCategories = [
    {
      icon: FileText,
      title: "Frameworks & Templates",
      count: "12+ Tools",
      description: "Downloadable frameworks, diagnostic tools, and templates for applying first principles thinking.",
      items: [
        "The Purpose Diagnostic Template",
        "Authority Mapping Framework",
        "Vision Architecture Worksheet",
        "Responsibility Matrix Builder",
        "Leadership System Audit",
      ],
    },
    {
      icon: Video,
      title: "Video Library",
      count: "20+ Videos",
      description: "Video explanations, framework breakdowns, and case studies on leadership systems.",
      items: [
        "The Six Laws Explained",
        "Systems Thinking for Leaders",
        "Governance Framework Design",
        "Purpose Discovery Method",
        "Authority vs Power Dynamics",
      ],
    },
    {
      icon: Mic,
      title: "Podcast & Media",
      count: "30+ Episodes",
      description: "Interviews, guest appearances, and deep dives on first principles leadership topics.",
      items: [
        "First Principles Podcast",
        "Leadership Systems Series",
        "Guest Appearances",
        "Conference Talks",
        "Expert Interviews",
      ],
    },
  ];

  const featuredArticles = [
    {
      title: "Why Most Leadership Training Fails",
      description: "The structural problems with personality-based and motivational approaches to leadership development.",
      category: "Leadership Theory",
      readTime: "8 min read",
    },
    {
      title: "The Architecture of Organizational Clarity",
      description: "How to design governance structures that create alignment, not confusion.",
      category: "Organizational Design",
      readTime: "12 min read",
    },
    {
      title: "Authority Is Not a Title",
      description: "Understanding the difference between positional authority and legitimate influence.",
      category: "Authority & Governance",
      readTime: "10 min read",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">Resources</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Leadership Tools & <br />Knowledge Library
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Frameworks, articles, videos, and tools for building leadership systems from first principles.
          </p>
        </div>
      </section>

      {/* Resource Categories */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {resourceCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-border bg-card p-8 md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-2xl font-bold text-foreground">{category.title}</h3>
                      <span className="rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        {category.count}
                      </span>
                    </div>
                    <p className="mt-3 text-lg text-muted-foreground">{category.description}</p>

                    <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/newsletter"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
                    >
                      Access Library
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
            <p className="mt-2 text-muted-foreground">
              In-depth essays on leadership theory and application.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <Link
                key={article.title}
                href="/blog"
                className="group rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <span className="text-xs font-semibold text-primary">{article.category}</span>
                <h3 className="mt-3 text-lg font-semibold text-foreground group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{article.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{article.readTime}</span>
                  <ArrowRight className="h-4 w-4 text-primary transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded bg-primary/10 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              View All Articles
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Access All Resources */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get Full Access to the Resource Library
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to The First Principles Dispatch to receive exclusive frameworks,
            tools, and content delivered to your inbox.
          </p>

          <div className="mt-10">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow"
            >
              Subscribe for Access
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
