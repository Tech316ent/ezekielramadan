import { BookOpen, Bell, Check, Mail } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata = {
  title: "Leadership Newsletter | The First Principles Dispatch - Free Weekly Insights",
  description: "Subscribe to The First Principles Dispatch for weekly insights on leadership, systems thinking, and organizational design. Free leadership newsletter with frameworks, strategies, and expert guidance for executives, managers, and entrepreneurs.",
  keywords: "leadership newsletter, management newsletter, executive newsletter, leadership insights, free leadership resources, weekly leadership tips, CEO newsletter, management insights newsletter, organizational leadership newsletter",
  openGraph: {
    title: "The First Principles Dispatch | Leadership Newsletter",
    description: "Weekly insights on leadership rebuilt from first principles",
    url: "https://ezekielramadan.com/newsletter",
  },
};

export default function NewsletterPage() {
  const benefits = [
    "Weekly essays on first principles thinking for leaders",
    "Framework breakdowns and practical applications",
    "Early access to new courses and content",
    "Exclusive insights from advisory engagements",
    "Updates on speaking events and workshops",
    "Research findings and case studies",
  ];

  const topics = [
    {
      icon: BookOpen,
      title: "Leadership Frameworks",
      description: "Deep dives into the six governing laws and their application across contexts.",
    },
    {
      icon: Bell,
      title: "Systems Thinking",
      description: "How to approach organizations as designed infrastructure, not inspirational movements.",
    },
    {
      icon: Check,
      title: "Practical Application",
      description: "Real-world case studies, diagnostic tools, and implementation strategies.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <Mail className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Newsletter</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The First Principles <br />Dispatch
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Weekly insights on leadership rebuilt from first principles, delivered every Thursday
            to executives, founders, and leaders who think structurally.
          </p>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">What You'll Receive</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Every Thursday, a single essay or framework breakdown designed to challenge conventional
            leadership thinking and rebuild it from universal laws.
          </p>

          <div className="mt-12 space-y-3">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-foreground">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground">Topics We Cover</h2>
            <p className="mt-2 text-muted-foreground">
              Each edition explores one dimension of leadership as designed system.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-lg border border-border bg-background p-8"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <topic.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{topic.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Content */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Recent Editions</h2>
          <p className="mt-2 text-muted-foreground">
            Examples of what subscribers receive every week.
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">
                Why Most Organizations Confuse Activity with Purpose
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                The Law of Purpose demands clarity on why you exist. This edition breaks down the
                difference between operational activity and purpose-driven action, and why most
                leadership teams mistake the former for the latter.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">
                Authority Is Not a Title. It's a Jurisdiction
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Understanding the structural difference between positional authority and legitimate
                influence. A framework for mapping decision rights and delegation boundaries.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">
                Vision as Blueprint: Why Strategic Plans Fail
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Most "strategic plans" are motivational statements, not architectural blueprints.
                This edition shows how to translate purpose into structured, executable vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Form */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

        <div className="relative mx-auto max-w-2xl px-6 lg:px-8">
          <NewsletterForm />
        </div>
      </section>

      {/* Promise */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h3 className="text-xl font-semibold text-foreground">Our Promise</h3>
          <p className="mt-4 text-muted-foreground">
            We respect your inbox. The First Principles Dispatch is sent once per week, every Thursday.
            No promotional emails, no spam, no selling. Just rigorous thinking on leadership and systems design.
          </p>
        </div>
      </section>
    </div>
  );
}
