import Link from "next/link";
import { ArrowRight, Zap, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The Principle of Influence | First Principles Leadership",
  description: "Influence is earned through demonstrated integrity and results.",
};

export default function InfluencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden blueprint-grid py-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/framework"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Back to Framework
          </Link>

          <div className="mt-8">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">6</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Principle of Influence
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Influence is earned through demonstrated integrity and results.
            </p>
          </div>
        </div>
      </section>

      {/* First Principle Definition */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">First Principle Definition</h2>
          <div className="mt-6 rounded-lg border-l-4 border-primary bg-primary/5 p-6">
            <p className="text-lg leading-8 text-foreground">
              <strong>Influence is not positional. It's relational and transactional.</strong> It grows
              through consistent alignment between words and actions, promises and delivery, vision and execution.
              Influence is the compound interest of demonstrated character and competence over time.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              Authority can be granted; influence must be earned. You can have a leadership title without
              influence, or have influence without formal authority. True leadership power comes from influence,
              the ability to shape outcomes through trust and credibility rather than positional leverage.
            </p>
            <p>
              Influence operates like a bank account: deposits are made through kept promises, solved problems,
              and consistent integrity. Withdrawals happen through broken commitments, failed initiatives, and
              character compromises. The balance determines how much trust you can deploy when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Logic */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Root-Cause Logic</h2>
          <p className="mt-4 text-muted-foreground">
            Why does influence matter more than positional authority? Because it determines sustainable leadership impact:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">1. Influence Enables Voluntary Effort</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Authority compels minimum compliance; influence inspires maximum effort. People do what they
                must for bosses, but go above and beyond for leaders they trust and respect.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">2. Influence Outlasts Position</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Positional authority disappears when you leave a role. Influence persists. Former team members
                continue seeking your counsel, partners continue collaborating, networks continue opening doors.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">3. Influence Compounds Over Time</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Each demonstration of integrity and results adds to your credibility. Over years and decades,
                influence becomes the dominant factor in leadership effectiveness, far exceeding positional power.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">4. Influence Creates Network Effects</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                People who trust you recommend you to others. Influence spreads through networks, creating
                exponential reach beyond what positional authority could ever achieve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Application */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Real-World Application</h2>
          <p className="mt-4 text-muted-foreground">
            How do you apply the Principle of Influence in practical leadership?
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Organizational Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Promote based on demonstrated influence, not tenure or charisma</li>
                <li>• Create feedback mechanisms measuring relational trust</li>
                <li>• Evaluate leaders on delivery consistency and promise-keeping</li>
                <li>• Build cultures that reward character as much as competence</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Personal Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Track your commitment completion rate rigorously</li>
                <li>• Under-promise and over-deliver consistently</li>
                <li>• Align actions with stated values, especially when costly</li>
                <li>• Build expertise in areas where you want influence</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Team/Department Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Make team commitments public and track delivery transparently</li>
                <li>• Document and share lessons from both successes and failures</li>
                <li>• Build reputation through solving hard problems others avoid</li>
                <li>• Invest in long-term relationships beyond transactional interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Failure Modes */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-6 w-6 text-destructive" />
            <h2 className="text-2xl font-bold text-foreground">Failure Modes</h2>
          </div>
          <p className="mt-4 text-muted-foreground">
            When the Principle of Influence is violated, these structural problems emerge:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Charisma Without Character</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders use charm, storytelling, or persuasion to create manufactured influence without the
                substance of integrity or results. This creates short-term followership but long-term disillusionment.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Positional Power Without Relational Trust</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders rely solely on authority to compel action, never building influence through demonstrated
                competence and care. Teams comply minimally but never commit maximally.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Inconsistency Between Words and Actions</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When leaders say one thing and do another, or make commitments they don't keep, influence erodes
                rapidly. Credibility, once lost, requires years to rebuild.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Influence Manipulation and Gaming</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Attempts to engineer influence through tactics, networking, or image management without genuine
                value creation. This produces hollow reputation that collapses under pressure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link
              href="/framework/service"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Structure of Service
            </Link>
            <Link
              href="/framework"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Back to Framework Overview
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
