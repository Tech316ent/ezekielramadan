"use client";

import { useState, useEffect, useCallback } from "react";
import {
  PageConfig,
  SectionConfig,
  getPageConfigs,
  getSectionConfigs,
  defaultPages,
  defaultSections,
} from "@/lib/page-config";

/**
 * Hook to get and monitor page configurations
 */
export function usePageConfigs() {
  const [pages, setPages] = useState<PageConfig[]>(defaultPages);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load configs on mount
    setPages(getPageConfigs());
    setLoading(false);

    // Listen for changes
    const handleChange = (event: CustomEvent<PageConfig[]>) => {
      setPages(event.detail);
    };

    window.addEventListener("pageConfigsChanged", handleChange as EventListener);
    return () => {
      window.removeEventListener("pageConfigsChanged", handleChange as EventListener);
    };
  }, []);

  return { pages, loading };
}

/**
 * Hook to get and monitor section configurations
 */
export function useSectionConfigs() {
  const [sections, setSections] = useState<SectionConfig[]>(defaultSections);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load configs on mount
    setSections(getSectionConfigs());
    setLoading(false);

    // Listen for changes
    const handleChange = (event: CustomEvent<SectionConfig[]>) => {
      setSections(event.detail);
    };

    window.addEventListener("sectionConfigsChanged", handleChange as EventListener);
    return () => {
      window.removeEventListener("sectionConfigsChanged", handleChange as EventListener);
    };
  }, []);

  return { sections, loading };
}

/**
 * Hook to check if a specific page is enabled
 */
export function useIsPageEnabled(pageId: string): { enabled: boolean; loading: boolean } {
  const { pages, loading } = usePageConfigs();

  const enabled = pages.find(p => p.id === pageId)?.enabled ?? true;

  return { enabled, loading };
}

/**
 * Hook to check if a specific section is enabled
 */
export function useIsSectionEnabled(sectionId: string): { enabled: boolean; loading: boolean } {
  const { sections, loading } = useSectionConfigs();

  const enabled = sections.find(s => s.id === sectionId)?.enabled ?? true;

  return { enabled, loading };
}

/**
 * Hook to get all sections for a page and their enabled states
 */
export function usePageSections(pageId: string) {
  const { sections, loading } = useSectionConfigs();

  const pageSections = sections.filter(s => s.page === pageId);

  const isSectionEnabled = useCallback(
    (sectionId: string) => {
      const section = pageSections.find(s => s.id === sectionId);
      return section?.enabled ?? true;
    },
    [pageSections]
  );

  return { sections: pageSections, loading, isSectionEnabled };
}
