import Link from "next/link";
import { ArrowRight, BookOpen, Users, Target, Layers } from "lucide-react";

export const metadata = {
  title: "Leadership Courses & Training Programs | Executive Development Masterclasses",
  description: "Master First Principles Leadership through structured courses, masterclasses, and executive programs. Online and live leadership training for CEOs, executives, and managers. Learn purpose-driven leadership, systems thinking, and organizational design.",
  keywords: "leadership courses, executive training programs, leadership development courses, management training, CEO coaching program, leadership masterclass, executive education, online leadership courses, leadership certification, professional development",
  openGraph: {
    title: "Leadership Courses & Executive Training Programs",
    description: "Structured courses and masterclasses on First Principles Leadership",
    url: "https://ezekielramadan.com/courses",
  },
};

export default function CoursesPage() {
  const courses = [
    {
      icon: Layers,
      title: "First Principles of Leadership",
      subtitle: "Core Course",
      duration: "8 weeks • Self-paced",
      description: "The complete foundation: rebuilding leadership from first principles through the six governing laws.",
      topics: [
        "The Law of Purpose",
        "Identity & Authority frameworks",
        "Vision as architectural design",
        "Responsibility and stewardship",
        "Service-oriented leadership",
        "Building sustainable influence",
      ],
      level: "Foundational",
      format: "Video lessons + frameworks + exercises",
    },
    {
      icon: Target,
      title: "Purpose & Identity Masterclass",
      subtitle: "Deep Dive",
      duration: "4 weeks • Live cohort",
      description: "Intensive workshop on discovering and aligning with your designed purpose and legitimate sphere of authority.",
      topics: [
        "Purpose discovery methodology",
        "Identity mapping exercises",
        "Authority scope analysis",
        "Alignment assessments",
        "Implementation frameworks",
      ],
      level: "Intermediate",
      format: "Live sessions + peer learning + coaching",
    },
    {
      icon: Users,
      title: "Authority & Governance Program",
      subtitle: "Executive Track",
      duration: "6 weeks • Cohort-based",
      description: "For senior leaders building organizational governance structures based on first principles.",
      topics: [
        "Organizational authority design",
        "Governance frameworks",
        "Decision rights allocation",
        "Accountability structures",
        "System-level leadership",
      ],
      level: "Advanced",
      format: "Facilitated discussions + case studies + advisory",
    },
    {
      icon: BookOpen,
      title: "Leadership by Design",
      subtitle: "Systems Thinking",
      duration: "5 weeks • Self-paced",
      description: "Approaching leadership as engineered infrastructure, applying systems thinking to organizational design.",
      topics: [
        "Systems engineering principles",
        "Leadership as designed system",
        "Feedback loops and leverage points",
        "Structural diagnostics",
        "Resilience and scalability",
      ],
      level: "Intermediate",
      format: "Video + frameworks + simulations",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">Courses & Learning</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Master First Principles Leadership
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Structured courses and masterclasses designed to transform how you think about
            authority, purpose, vision, and influence.
          </p>
        </div>
      </section>

      {/* Course Catalog */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-12">
            {courses.map((course) => (
              <div
                key={course.title}
                className="group rounded-lg border border-border bg-card p-8 transition-all hover:border-primary/50 hover:shadow-xl md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
                  {/* Main Content */}
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/10">
                        <course.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex flex-wrap items-center gap-3">
                          <h3 className="text-2xl font-bold text-foreground">{course.title}</h3>
                          <span className="rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                            {course.subtitle}
                          </span>
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{course.duration}</p>
                      </div>
                    </div>

                    <p className="mt-6 text-muted-foreground">{course.description}</p>

                    <div className="mt-6">
                      <h4 className="text-sm font-semibold text-foreground">Key Topics</h4>
                      <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                        {course.topics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="flex flex-col justify-between rounded-lg border border-border bg-background p-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Level
                        </p>
                        <p className="mt-1 text-sm font-semibold text-foreground">{course.level}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                          Format
                        </p>
                        <p className="mt-1 text-sm text-foreground">{course.format}</p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-3">
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-center gap-2 rounded bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                      >
                        Enroll Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex w-full items-center justify-center rounded border border-border px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Pathway */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-foreground">Executive Leadership Pathway</h2>
            <p className="mt-4 text-muted-foreground">
              A curated learning journey for C-suite executives and senior leaders, combining courses,
              advisory sessions, and custom frameworks tailored to your organizational context.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/advisory"
                className="flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
              >
                Explore Executive Advisory
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Questions About Courses?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Connect with our team to find the right learning path for your leadership development.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow"
            >
              Get in Touch
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
