import Link from "next/link";
import { ArrowRight, Briefcase, Building2, UserCheck, Target } from "lucide-react";

export const metadata = {
  title: "Executive Advisory & Leadership Consulting Services | CEO Coaching",
  description: "Executive advisory, organizational leadership systems, and founder support grounded in first principles. Strategic consulting for CEOs, C-suite executives, and leadership teams. Organizational design, governance frameworks, and leadership system development.",
  keywords: "executive advisory, leadership consulting, CEO coaching, executive coach, management consultant, organizational consulting, leadership development consulting, strategic advisory, founder coaching, C-suite coaching, organizational design consultant",
  openGraph: {
    title: "Executive Advisory & Leadership Consulting",
    description: "Strategic guidance for C-suite leaders and organizations",
    url: "https://ezekielramadan.com/advisory",
  },
};

export default function AdvisoryPage() {
  const services = [
    {
      icon: Briefcase,
      title: "Executive Advisory",
      description: "Strategic guidance for C-suite leaders navigating complex organizational challenges through first principles thinking.",
      offerings: [
        "One-on-one executive coaching",
        "Strategic decision-making frameworks",
        "Purpose and vision clarification",
        "Authority and governance design",
        "Leadership system audits",
      ],
      ideal: "CEOs, Presidents, and senior executives seeking clarity on organizational direction and leadership effectiveness.",
    },
    {
      icon: Building2,
      title: "Organizational Leadership Systems",
      description: "Designing and implementing governance structures, authority frameworks, and decision rights across your organization.",
      offerings: [
        "Organizational architecture consulting",
        "Authority mapping and delegation design",
        "Governance framework development",
        "Leadership team alignment",
        "Systems-level diagnostics",
      ],
      ideal: "Growing organizations needing to formalize leadership structures and decision-making processes.",
    },
    {
      icon: UserCheck,
      title: "Founder & Entrepreneur Advisory",
      description: "Helping founders build leadership systems that scale beyond their personal capacity and charisma.",
      offerings: [
        "Founder-to-CEO transition coaching",
        "Purpose-driven business design",
        "Early-stage governance frameworks",
        "Team leadership development",
        "Sustainable growth planning",
      ],
      ideal: "Founders scaling from startup to sustainable organization and transitioning from operator to leader.",
    },
    {
      icon: Target,
      title: "Leadership Diagnostics & Assessments",
      description: "Comprehensive evaluations of your leadership systems against the six governing laws.",
      offerings: [
        "Organizational health assessments",
        "Leadership effectiveness audits",
        "Purpose and vision alignment reviews",
        "Authority structure analysis",
        "Custom diagnostic frameworks",
      ],
      ideal: "Organizations seeking objective analysis of leadership effectiveness and system design.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2">
            <span className="text-sm font-medium text-primary">Advisory & Consulting</span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Strategic Advisory Grounded <br />in First Principles
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            Executive coaching, organizational design, and leadership systems consulting
            for leaders who think in terms of structure, not inspiration.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg border border-border bg-card p-8 md:p-12"
              >
                <div className="grid gap-8 lg:grid-cols-[auto_1fr]">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border border-primary/30 bg-primary/10">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                    <p className="mt-3 text-lg text-muted-foreground">{service.description}</p>

                    <div className="mt-6 grid gap-8 lg:grid-cols-2">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground">What's Included</h4>
                        <ul className="mt-3 space-y-2">
                          {service.offerings.map((offering) => (
                            <li key={offering} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                              {offering}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded-lg border border-border bg-background p-6">
                        <h4 className="text-sm font-semibold text-foreground">Ideal For</h4>
                        <p className="mt-2 text-sm text-muted-foreground">{service.ideal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground">How Advisory Works</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A structured engagement process designed for maximum clarity and impact.
          </p>

          <div className="mt-12 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Discovery & Assessment</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Initial consultation to understand your context, challenges, and objectives.
                  We assess current state and identify structural issues.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Framework Design</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Custom frameworks tailored to your organizational context, applying first principles
                  to your specific leadership challenges.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Implementation Support</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Ongoing guidance as you implement new structures, with regular check-ins
                  and adjustments based on real-world feedback.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">4</span>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Measurement & Refinement</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Track effectiveness against defined metrics, identify failure modes early,
                  and refine systems for long-term sustainability.
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
            Schedule a Consultation
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Begin with a focused conversation about your leadership challenges and how
            first principles thinking can create breakthrough clarity.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 gold-glow"
            >
              Request Consultation
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
