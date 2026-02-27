import Link from "next/link";
import { ArrowRight, BookOpen, Video, Users, GraduationCap } from "lucide-react";

export const metadata = {
  title: "Teaching | Structured Transmission of Governance Doctrine",
  description: "Lecture series, courses, and systematic instruction on Kingdom governance principles. Structured transmission of doctrine for serious students of governance.",
  keywords: "governance teaching, leadership courses, governance lectures, institutional leadership training",
  openGraph: {
    title: "Teaching | Kingdom Governance Instruction",
    description: "Structured transmission of governance doctrine through lectures, courses, and systematic instruction",
    url: "https://ezekielramadan.com/teaching",
  },
};

export default function TeachingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Teaching
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Structured transmission of governance doctrine. Lecture series,
            courses, and systematic instruction for founders, executives,
            and institutional stewards.
          </p>
        </div>
      </section>

      {/* Current Offerings */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Available Instruction
          </h2>
          <p className="mt-4 text-muted-foreground text-center">
            Teaching programs currently in development. Subscribe for notifications.
          </p>

          <div className="mt-12 text-center">
            <div className="rounded-lg border border-border bg-card p-12">
              <GraduationCap className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h3 className="text-xl font-bold text-foreground">
                Programs in Development
              </h3>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
                Structured teaching programs on Kingdom governance are being developed.
                Subscribe to receive notification when programs become available.
              </p>
              <div className="mt-8">
                <Link
                  href="/subscribe"
                  className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                >
                  Subscribe for Updates
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Programs */}
      <section className="border-t border-border bg-card py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Forthcoming Programs
          </h2>
          <p className="mt-4 text-muted-foreground text-center">
            Teaching programs under development.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {/* Lecture Series */}
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Lecture Series
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recorded lectures providing systematic exposition of the Seven Laws
                of Kingdom Governance. Each lecture addresses one law in depth,
                with philosophical grounding, scriptural basis, and practical application.
              </p>
              <div className="mt-6">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  In Development
                </span>
              </div>
            </div>

            {/* Foundational Course */}
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Foundations Course
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comprehensive course covering the complete governance framework.
                Designed for serious students seeking systematic understanding
                of governance principles and their institutional application.
              </p>
              <div className="mt-6">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  In Development
                </span>
              </div>
            </div>

            {/* Governance Fellowship */}
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Governance Fellowship
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Selective cohort program for founders, executives, and institutional
                leaders. Intensive study of governance principles with application
                to participants' specific contexts.
              </p>
              <div className="mt-6">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  Future Program
                </span>
              </div>
            </div>

            {/* Reading Groups */}
            <div className="rounded-lg border border-border bg-background p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Reading Groups
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Facilitated study of foundational texts on governance, authority,
                and institutional order. Structured reading with guided discussion
                on application to contemporary leadership.
              </p>
              <div className="mt-6">
                <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                  Future Program
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="border-t border-border py-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground text-center">
            Teaching Approach
          </h2>

          <div className="mt-12 space-y-8">
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Doctrine, Not Technique</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Teaching focuses on governing principles, not tactical methods.
                Techniques change; doctrine endures. The goal is structural
                understanding that enables sound judgment across contexts.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Systematic Exposition</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Content is presented in logical sequence, building from
                foundational concepts to advanced application. Each element
                connects to a coherent whole.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Scriptural Grounding</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Governance principles are grounded in Kingdom teaching, presented
                with structural rather than devotional emphasis. The framework is
                analytically valuable regardless of theological position.
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-foreground">Institutional Application</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Abstract principles are connected to concrete institutional
                challenges. Students learn to diagnose governance failures and
                design structural solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="border-t border-border bg-card py-24">
        <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Receive Program Announcements
          </h2>
          <p className="mt-4 text-muted-foreground">
            Subscribe to receive notification when teaching programs become available.
          </p>

          <div className="mt-8">
            <Link
              href="/subscribe"
              className="inline-flex items-center gap-2 rounded bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
            >
              Subscribe
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
