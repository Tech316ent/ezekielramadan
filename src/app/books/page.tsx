import Link from "next/link";
import { ArrowRight, Book, FileText, Download } from "lucide-react";

export const metadata = {
  title: "Leadership Books & Publications | First Principles Leadership Resources",
  description: "Books, whitepapers, and essays on First Principles Leadership, organizational design, and systems thinking. Comprehensive leadership frameworks and research-based publications for executives, managers, and entrepreneurs.",
  keywords: "leadership books, management books, leadership publications, business books, executive reading, organizational design books, systems thinking books, leadership whitepapers, leadership research, first principles leadership book",
  openGraph: {
    title: "Leadership Books & Publications",
    description: "Comprehensive works on First Principles Leadership and organizational systems",
    url: "https://ezekielramadan.com/books",
  },
};

export default function BooksPage() {
  const books = [
    {
      title: "First Principles Leadership",
      subtitle: "Rebuilding Management from Universal Laws",
      status: "Available Now",
      description: "The complete framework for approaching leadership as designed infrastructure. This book deconstructs modern leadership theory and rebuilds it from first principles, identifying the timeless laws that govern effective authority, influence, and organizational governance.",
      topics: [
        "The six governing laws of leadership",
        "Systems thinking for organizational design",
        "Purpose-driven decision frameworks",
        "Authority and responsibility structures",
        "Building sustainable influence",
      ],
    },
    {
      title: "The Architecture of Authority",
      subtitle: "Understanding Position, Power, and Purpose",
      status: "Coming 2026",
      description: "A deep exploration of how authority functions within systems, examining the relationship between identity, position, and legitimate influence. This book applies engineering principles to organizational hierarchy and governance.",
      topics: [
        "Authority as structural design",
        "Position vs. personality-based leadership",
        "Delegation and decision rights",
        "Organizational authority mapping",
        "Kingdom governance principles",
      ],
    },
  ];

  const publications = [
    {
      title: "The Purpose Diagnostic",
      type: "Framework Guide",
      description: "A systematic methodology for discovering and clarifying organizational and personal purpose.",
    },
    {
      title: "Vision as Blueprint",
      type: "Whitepaper",
      description: "How to translate purpose into actionable strategic vision using architectural thinking.",
    },
    {
      title: "Structural Leadership Assessment",
      type: "Diagnostic Tool",
      description: "Evaluate your leadership systems against the six governing laws.",
    },
    {
      title: "Service-Oriented Leadership",
      type: "Essay Series",
      description: "Reframing leadership as a service function within larger systems.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">Books & Publications</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Intellectual Property <br />& Published Work
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Books, whitepapers, and research-grade frameworks on First Principles Leadership.
          </p>
        </div>
      </section>

      {/* Books */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Books</h2>
            <p className="mt-2 text-muted-foreground">
              Comprehensive works on leadership theory and application.
            </p>
          </div>

          <div className="space-y-12">
            {books.map((book) => (
              <div
                key={book.title}
                className="rounded-lg border border-border bg-card p-8 md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                        <Book className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{book.title}</h3>
                        <p className="mt-1 text-lg text-muted-foreground">{book.subtitle}</p>
                        <span className="mt-2 inline-block rounded bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {book.status}
                        </span>
                      </div>
                    </div>

                    <p className="mt-6 text-muted-foreground">{book.description}</p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground">Key Topics</h4>
                      <ul className="mt-3 space-y-2">
                        {book.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="rounded-lg border border-border bg-background p-6">
                      <p className="text-sm text-muted-foreground">
                        {book.status === "Available Now"
                          ? "Available through major retailers and direct order."
                          : "Pre-order and updates coming soon."}
                      </p>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                      >
                        {book.status === "Available Now" ? "Order Now" : "Get Notified"}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Whitepapers & Guides</h2>
            <p className="mt-2 text-muted-foreground">
              Research-grade frameworks and diagnostic tools for practitioners.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {publications.map((pub) => (
              <div
                key={pub.title}
                className="rounded-lg border border-border bg-background p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="font-semibold text-foreground">{pub.title}</h3>
                        <p className="mt-1 text-xs text-muted-foreground">{pub.type}</p>
                      </div>
                      <Download className="h-4 w-4 shrink-0 text-primary" />
                    </div>
                    <p className="mt-3 text-sm text-muted-foreground">{pub.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/newsletter"
              className="inline-flex items-center gap-2 rounded bg-primary/10 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Access Full Library
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Stay Updated on New Releases
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Subscribe to receive updates on new books, whitepapers, and research.
          </p>
          <div className="mt-8">
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
