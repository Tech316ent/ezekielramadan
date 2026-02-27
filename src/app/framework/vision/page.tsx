import Link from "next/link";
import { ArrowRight, Eye, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The Law of Vision | First Principles Leadership",
  description: "Vision is the architectural blueprint for structured outcomes.",
};

export default function VisionPage() {
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
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Law of Vision
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Vision is the architectural blueprint for structured outcomes.
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
              <strong>Vision is the detailed picture of the future state you're designed to build.</strong> It
              translates purpose into actionable structure. It functions as the systems-level design that connects
              where you are to where you're meant to be. Vision is not aspiration; it's specification.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              Just as an architect creates blueprints before construction begins, leaders must develop clear
              vision before execution starts. Vision answers: What does success look like in concrete terms?
              What are the measurable outcomes? What systems, structures, and capabilities must exist?
            </p>
            <p>
              Vision operates as the operating system for strategic execution. It provides the framework
              for decision-making, resource allocation, and priority-setting. Without clear vision, organizations
              default to reacting to circumstances rather than building toward designed outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Logic */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Root-Cause Logic</h2>
          <p className="mt-4 text-muted-foreground">
            Why is vision essential for leadership effectiveness? Because it provides the bridge between purpose and execution:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">1. Vision Translates Purpose into Action</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Purpose tells you why you exist; vision shows you what you're building. It converts abstract
                intention into concrete objectives, making purpose actionable.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">2. Vision Aligns Distributed Effort</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                In complex organizations, hundreds of people make independent decisions daily. Clear vision
                ensures those decisions move in the same direction, creating coherent outcomes.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">3. Vision Enables Strategic Trade-offs</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Resources are finite. Vision provides the criteria for saying "yes" to aligned opportunities
                and "no" to misaligned ones, preventing resource fragmentation.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">4. Vision Creates Measurable Progress</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                A clear end-state allows you to measure distance traveled and remaining. Vision converts
                subjective "progress" into objective milestones and metrics.
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
            How do you apply the Law of Vision in practical leadership?
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Organizational Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Define the 3-5 year target state in specific, measurable terms</li>
                <li>• Document the systems and capabilities required to reach it</li>
                <li>• Break vision into quarterly milestones and deliverables</li>
                <li>• Align budgets, hiring, and initiatives to vision execution</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Personal Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Visualize the specific outcomes you're designed to produce</li>
                <li>• Map the skills, relationships, and resources needed</li>
                <li>• Create reverse-engineered timelines from goal to present</li>
                <li>• Track leading indicators that predict vision achievement</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Team/Department Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Communicate vision through concrete examples and case studies</li>
                <li>• Connect individual roles to specific vision components</li>
                <li>• Use vision as the criteria for project approval and prioritization</li>
                <li>• Conduct quarterly reviews measuring progress against vision milestones</li>
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
            When the Law of Vision is violated, these structural problems emerge:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Reactive Instead of Proactive</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Without clear vision, organizations respond to whatever emerges rather than building toward
                designed outcomes. Leadership becomes firefighting instead of construction.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Strategic Fragmentation</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Lack of unified vision leads to competing priorities, contradictory initiatives, and wasted
                effort as different parts of the organization pull in different directions.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Vague Aspirations Instead of Specifications</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                "Be the best" or "make an impact" aren't vision. They're slogans. Without specific, measurable
                outcomes, teams cannot align execution or measure progress meaningfully.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Short-Termism and Opportunism</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Without a long-term vision anchor, organizations chase short-term opportunities that may be
                profitable but pull them away from their core purpose and strategic coherence.
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
              href="/framework/identity"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Identity & Authority
            </Link>
            <Link
              href="/framework/responsibility"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Mandate of Responsibility
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
