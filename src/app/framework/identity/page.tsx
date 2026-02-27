import Link from "next/link";
import { ArrowRight, Users, AlertTriangle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The Law of Identity & Authority | First Principles Leadership",
  description: "Authority flows from identity. Position determines scope.",
};

export default function IdentityPage() {
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
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary/30 bg-background">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              The Law of Identity & Authority
            </h1>

            <p className="mt-6 text-xl text-muted-foreground">
              Authority flows from identity. Position determines scope.
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
              <strong>Identity defines your position within systems, and position determines legitimate authority.</strong>
              Identity is not what you call yourself. It's your functional role within a structured hierarchy.
              Authority is the right to act within a defined scope, granted by position, not personality.
            </p>
          </div>

          <div className="mt-8 space-y-4 text-muted-foreground">
            <p>
              In organizational systems, authority is positional and bounded. A department head has authority
              within their department, not across the entire organization. A project manager has authority
              over project execution, not company strategy. Attempting to exercise authority outside your
              positional scope creates friction and systemic resistance.
            </p>
            <p>
              Identity is structural, not aspirational. You are defined by your role in the system:
              your responsibilities, your reporting relationships, your decision rights. Effective leadership
              requires operating within your sphere of legitimate authority while respecting the boundaries of others.
            </p>
          </div>
        </div>
      </section>

      {/* Root-Cause Logic */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground">Root-Cause Logic</h2>
          <p className="mt-4 text-muted-foreground">
            Why is the alignment of identity and authority critical? Because misalignment creates systemic dysfunction:
          </p>

          <div className="mt-8 space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">1. Identity Establishes Legitimacy</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                People follow legitimate authority, not self-appointed leaders. Your positional identity
                gives you the right to make certain decisions and expect certain compliance.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">2. Position Defines Scope</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Every role has boundaries. Operating within your scope creates efficiency; operating
                outside it creates conflict, confusion, and organizational chaos.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">3. Authority Requires Accountability</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Identity links authority to responsibility. You're accountable for the outcomes within
                your domain. Clear identity makes accountability measurable and enforceable.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">4. Identity Prevents Role Confusion</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                When identity is clear, everyone knows who decides what. Ambiguity about roles creates
                power struggles, duplicated efforts, and decision paralysis.
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
            How do you apply the Law of Identity & Authority in practical leadership?
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Organizational Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Define clear reporting structures and decision rights</li>
                <li>• Document the scope of authority for each role</li>
                <li>• Create governance frameworks that map authority to position</li>
                <li>• Enforce boundaries when leaders overstep their scope</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Personal Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Clarify your exact role and decision-making authority</li>
                <li>• Operate confidently within your legitimate scope</li>
                <li>• Respect the boundaries of peer and senior roles</li>
                <li>• Seek expanded authority through position changes, not overreach</li>
              </ul>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 md:col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="font-semibold text-foreground">Team/Department Level</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Establish clear role definitions with explicit authority boundaries</li>
                <li>• Create decision-making matrices (RACI charts, approval hierarchies)</li>
                <li>• Address authority gaps where decisions fall between roles</li>
                <li>• Regularly audit whether authority matches responsibility</li>
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
            When the Law of Identity & Authority is violated, these structural problems emerge:
          </p>

          <div className="mt-8 space-y-4">
            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Authority Overreach</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Leaders attempt to make decisions or control outcomes outside their legitimate scope,
                creating territorial conflicts and undermining those with proper authority in those domains.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Positional Confusion</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Unclear role definitions lead to duplicated work, contradictory directives, and power
                struggles as multiple people attempt to exercise authority over the same domain.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Authority Without Position</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Informal leaders or strong personalities attempt to exercise authority without positional
                backing, creating shadow hierarchies that undermine formal organizational structure.
              </p>
            </div>

            <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-6">
              <h3 className="font-semibold text-foreground">Responsibility-Authority Mismatch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                People are held accountable for outcomes they lack authority to control, or given authority
                without corresponding accountability. Both create systemic dysfunction and resentment.
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
              href="/framework/purpose"
              className="rounded border border-border bg-background px-6 py-3 font-semibold text-foreground transition-all hover:bg-muted"
            >
              ← Previous: Law of Purpose
            </Link>
            <Link
              href="/framework/vision"
              className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Next: Law of Vision
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
