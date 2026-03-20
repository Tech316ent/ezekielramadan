"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { Construction, ArrowLeft, Clock } from "lucide-react";
import { useIsPageEnabled, useIsSectionEnabled } from "@/hooks/usePageConfig";

interface PageWrapperProps {
  pageId: string;
  children: ReactNode;
}

/**
 * Wrapper component that checks if a page is enabled.
 * If disabled, shows a "Coming Soon" message instead of the page content.
 */
export default function PageWrapper({ pageId, children }: PageWrapperProps) {
  const { enabled, loading } = useIsPageEnabled(pageId);

  // While loading, show nothing to prevent flash of content
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  // If page is disabled, show Coming Soon message
  if (!enabled) {
    return <ComingSoonPage pageId={pageId} />;
  }

  // Page is enabled, render children
  return <>{children}</>;
}

/**
 * Coming Soon page displayed when a page is disabled
 */
function ComingSoonPage({ pageId }: { pageId: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center blueprint-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
        <div className="mb-8 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
            <Construction className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Coming Soon
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          This page is currently being updated. Please check back later for new content and features.
        </p>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>Under development</span>
        </div>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90"
          >
            <ArrowLeft className="h-5 w-5" />
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

/**
 * Section wrapper that conditionally renders content based on section config
 */
interface SectionWrapperProps {
  sectionId: string;
  children: ReactNode;
  fallback?: ReactNode;
}

export function SectionWrapper({ sectionId, children, fallback = null }: SectionWrapperProps) {
  // For sections, we just hide them without showing a message
  const { enabled, loading } = useIsSectionEnabled(sectionId);

  // While loading, show placeholder or nothing
  if (loading) {
    return <>{fallback}</>;
  }

  // If section is disabled, render fallback (usually null)
  if (!enabled) {
    return <>{fallback}</>;
  }

  // Section is enabled, render children
  return <>{children}</>;
}
