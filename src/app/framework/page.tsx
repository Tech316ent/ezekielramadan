import Link from "next/link";
import { ArrowRight, Box, Users, Eye, Scale, Heart, Zap } from "lucide-react";
import SocialShare from "@/components/SocialShare";

export const metadata = {
  title: "Leadership Framework | Six Governing Laws of Effective Leadership",
  description: "The complete First Principles Leadership framework: six governing laws that determine leadership effectiveness. Learn purpose, identity, authority, vision, responsibility, service, and influence. Transform your organizational leadership.",
  keywords: "leadership framework, governing laws of leadership, leadership effectiveness, purpose-driven leadership, organizational authority, vision and strategy, leadership responsibility, servant leadership, leadership influence, leadership development model",
  openGraph: {
    title: "The Leadership Framework | Six Governing Laws",
    description: "Six universal principles that determine leadership effectiveness across all contexts",
    url: "https://ezekielramadan.com/framework",
  },
};

export default function FrameworkPage() {
  const laws = [
    {
      number: 1,
      icon: Box,
      title: "The Law of Purpose",
      slug: "purpose",
      principle: "Design precedes function. Every entity exists for a specific reason.",
      description: "Purpose is the foundational law governing why you exist and what you're designed to accomplish. Without clarity of purpose, all other leadership functions lack direction and coherence.",
      failureMode: "Purposeless leadership creates activity without impact, motion without direction, and effort without outcome.",
    },
    {
      number: 2,
      icon: Users,
      title: "The Law of Identity & Authority",
      slug: "identity",
      principle: "Authority flows from identity. Position determines scope.",
      description: "Your identity defines your position within systems, and your position determines your legitimate scope of authority and influence. Operating outside your sphere creates resistance and ineffectiveness.",
      failureMode: "Misaligned authority leads to overreach, underperformance, or structural conflict within organizations.",
    },
    {
      number: 3,
      icon: Eye,
      title: "The Law of Vision",
      slug: "vision",
      principle: "Vision is the architectural blueprint for structured outcomes.",
      description: "Vision translates purpose into actionable plans. It is the systems-level design that connects where you are to where you're meant to be, functioning as the operating system for all strategic execution.",
      failureMode: "Without vision, leadership becomes reactive, short-term, and fragmented.",
    },
    {
      number: 4,
      icon: Scale,
      title: "The Mandate of Responsibility",
      slug: "responsibility",
      principle: "Authority without accountability corrupts. Stewardship is mandatory.",
      description: "The mandate to steward resources, relationships, and results with integrity. Responsibility is the reciprocal law to authority. You cannot claim one without accepting the other.",
      failureMode: "Responsibility without authority creates frustration. Authority without responsibility creates tyranny.",
    },
    {
      number: 5,
      icon: Heart,
      title: "The Structure of Service",
      slug: "service",
      principle: "Leadership exists to serve the system, not the self.",
      description: "True leadership is a service function within a larger system. The measure of leadership effectiveness is the health and performance of those you serve, not your personal acclaim.",
      failureMode: "Self-serving leadership extracts value from systems rather than generating it.",
    },
    {
      number: 6,
      icon: Zap,
      title: "The Principle of Influence",
      slug: "influence",
      principle: "Influence is earned through demonstrated integrity and results.",
      description: "Influence is not positional. It's relational and transactional. It grows through consistent alignment between words and actions, promises and delivery, vision and execution.",
      failureMode: "Manufactured influence (charisma without character) creates short-term followership but long-term distrust.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
              <span className="text-sm font-medium text-primary">Complete Framework</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              The Governing Laws of Leadership
            </h1>

            <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
              Six universal principles that determine leadership effectiveness, independent of culture,
              personality, or trends. These are the design specifications for sustainable influence.
            </p>

            {/* Social Share */}
            <div className="mt-8 flex justify-center">
              <SocialShare
                title="The Governing Laws of Leadership - First Principles Framework"
                description="Six universal principles that determine leadership effectiveness"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Framework Introduction */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Leadership as Designed System
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              Just as physical structures must align with the laws of physics to remain standing,
              leadership structures must align with governing principles to remain effective.
            </p>
            <p>
              These six laws function as the architectural specifications for leadership. They define how
              authority operates, how vision translates to action, how responsibility governs decision-making,
              and how influence builds over time.
            </p>
            <p>
              Violating these laws doesn't result in immediate collapse, but it creates structural weaknesses
              that compound over time, producing inefficiency, conflict, and eventual failure.
            </p>
          </div>
        </div>
      </section>

      {/* The Laws */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {laws.map((law, index) => (
              <div
                key={law.slug}
                className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all hover:border-primary/50 hover:shadow-xl"
              >
                {/* Decorative background */}
                <div className="absolute right-0 top-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-primary/5 blur-2xl" />

                <div className="relative p-8 md:p-12">
                  <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-12">
                    {/* Icon and Number */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                        <law.icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                        <span className="text-lg font-bold text-primary">{law.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold text-foreground md:text-3xl">
                        {law.title}
                      </h3>

                      <div className="mt-4 rounded border-l-4 border-primary/50 bg-primary/5 p-4">
                        <p className="font-semibold text-foreground">{law.principle}</p>
                      </div>

                      <p className="mt-6 text-muted-foreground">
                        {law.description}
                      </p>

                      <div className="mt-6 rounded-lg border border-destructive/30 bg-destructive/5 p-4">
                        <h4 className="text-sm font-semibold text-destructive">Failure Mode</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{law.failureMode}</p>
                      </div>

                      <Link
                        href={`/framework/${law.slug}`}
                        className="mt-6 inline-flex items-center gap-2 rounded bg-primary/10 px-6 py-3 font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground group-hover:gap-3"
                      >
                        Explore {law.title}
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How They Work Together */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            How the Laws Work Together
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            These six laws form an integrated system. Each builds on and reinforces the others:
          </p>

          <div className="mt-12 space-y-6">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  1→2
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Purpose defines Identity:</strong> You cannot know who you are until you know why you exist.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  2→3
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Identity shapes Vision:</strong> Your position determines what you can see and what you're authorized to build.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  3→4
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Vision creates Responsibility:</strong> Clarity of destination generates accountability for the journey.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  4→5
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Responsibility demands Service:</strong> Stewardship is inherently others-focused. You serve those you're accountable for.
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                  5→6
                </div>
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Service builds Influence:</strong> Consistent service to others generates trust, which compounds into influence.
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
            Apply the Framework
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform these universal laws into practical leadership systems through courses, advisory, and resources.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/courses"
              className="flex w-full items-center justify-center gap-2 rounded bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow sm:w-auto"
            >
              Explore Courses
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/advisory"
              className="w-full rounded border border-border bg-card px-8 py-3 text-base font-semibold text-foreground transition-all hover:bg-muted sm:w-auto"
            >
              Executive Advisory
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
