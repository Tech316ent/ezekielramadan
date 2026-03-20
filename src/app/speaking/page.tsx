import Link from "next/link";
import { ArrowRight, Mic2, Users, Calendar, Briefcase } from "lucide-react";

export const metadata = {
  title: "Leadership Keynote Speaker | Corporate Workshops & Executive Retreats",
  description: "Book Ezekiel Ramadan for keynote speaking and workshops on First Principles Leadership. Available for conferences, corporate events, leadership retreats, and executive development programs. Expert speaker on systems thinking, organizational design, and leadership effectiveness.",
  keywords: "leadership keynote speaker, corporate speaker, leadership workshop facilitator, conference speaker, executive retreat facilitator, business keynote speaker, leadership seminar, corporate training speaker, management workshop, leadership event speaker",
  openGraph: {
    title: "Keynote Speaking & Leadership Workshops",
    description: "Available for conferences, corporate events, and leadership retreats",
    url: "https://ezekielramadan.com/speaking",
  },
};

export default function SpeakingPage() {
  const topics = [
    {
      title: "Leadership Rebuilt from First Principles",
      description: "The keynote that introduces the complete framework: six governing laws that define effective leadership.",
      ideal: "Conferences, leadership summits, annual meetings",
      duration: "45-60 minutes",
    },
    {
      title: "The Architecture of Authority",
      description: "Understanding how authority actually works: position vs. power, delegation vs. abdication, and building legitimate influence.",
      ideal: "Executive teams, board retreats, management conferences",
      duration: "60-75 minutes",
    },
    {
      title: "Vision as Blueprint",
      description: "How to translate organizational purpose into actionable strategic vision using systems thinking and architectural principles.",
      ideal: "Strategic planning sessions, leadership development programs",
      duration: "90 minutes",
    },
    {
      title: "Building Leadership Systems That Scale",
      description: "Moving from personality-driven to systems-driven leadership, designing structures that function beyond individual capacity.",
      ideal: "Growing organizations, founder-led companies, scale-ups",
      duration: "60 minutes + Q&A",
    },
  ];

  const workshopFormats = [
    {
      icon: Users,
      title: "Corporate Workshops",
      duration: "Half-day or full-day",
      description: "Intensive working sessions where leadership teams apply first principles frameworks to real organizational challenges.",
      includes: [
        "Interactive framework application",
        "Team exercises and diagnostics",
        "Custom case study analysis",
        "Implementation planning",
      ],
    },
    {
      icon: Calendar,
      title: "Leadership Retreats",
      duration: "1-3 days",
      description: "Immersive experiences for executive teams focused on strategic clarity, governance design, and long-term vision.",
      includes: [
        "Deep-dive framework sessions",
        "Team alignment workshops",
        "Strategic planning facilitation",
        "Individual coaching sessions",
      ],
    },
    {
      icon: Briefcase,
      title: "Conference Presentations",
      duration: "45-60 minutes",
      description: "High-impact keynotes designed to challenge conventional leadership thinking and introduce systems-based approaches.",
      includes: [
        "Main stage keynotes",
        "Breakout sessions",
        "Panel participation",
        "Q&A facilitation",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Mic2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Speaking & Workshops</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Keynotes & Workshops on <br />First Principles Leadership
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Challenging conventional leadership wisdom and introducing frameworks that
            rebuild authority, vision, and influence from the ground up.
          </p>
        </div>
      </section>

      {/* Speaking Topics */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Keynote Topics</h2>
            <p className="mt-2 text-muted-foreground">
              Core presentations that can be customized for your audience and context.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-foreground">{topic.title}</h3>
                <p className="mt-3 text-muted-foreground">{topic.description}</p>

                <div className="mt-6 space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">Ideal for:</span>
                    {topic.ideal}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span className="font-semibold text-foreground">Duration:</span>
                    {topic.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Formats */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Workshop Formats</h2>
            <p className="mt-2 text-muted-foreground">
              From half-day intensives to multi-day leadership retreats.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {workshopFormats.map((format) => (
              <div
                key={format.title}
                className="rounded-lg border border-border bg-background p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <format.icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">{format.title}</h3>
                <p className="mt-1 text-sm text-primary">{format.duration}</p>
                <p className="mt-3 text-sm text-muted-foreground">{format.description}</p>

                <div className="mt-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wide text-foreground">Includes</h4>
                  <ul className="mt-3 space-y-2">
                    {format.includes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">What to Expect</h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              These aren't motivational talks. They're intellectually rigorous presentations
              that challenge leaders to think differently about authority, structure, and influence.
            </p>
            <p>
              Every session is grounded in first principles thinking, deconstructing conventional
              leadership assumptions and rebuilding them from universal laws. Expect clear frameworks,
              practical applications, and systems-oriented reasoning.
            </p>
            <p>
              Presentations can be customized to your organization's specific challenges, industry context,
              and leadership maturity level.
            </p>
          </div>
        </div>
      </section>

      {/* Past Engagements */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Speaking Experience</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Corporate Events</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leadership development programs, executive offsites, strategic planning sessions
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Industry Conferences</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Business, technology, and organizational development conferences
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Academic Institutions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Business schools, leadership programs, executive education
              </p>
            </div>
            <div className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-foreground">Board Retreats</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Governance frameworks, strategic clarity, leadership alignment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Book Ezekiel for Your Event
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Available for keynotes, workshops, and leadership retreats worldwide.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow"
            >
              Request Speaking Engagement
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
