"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Layout,
  FileText,
  Settings,
  AlertCircle,
  CheckCircle,
  RefreshCw,
  Globe,
  Lock,
  Info,
} from "lucide-react";
import {
  PageConfig,
  SectionConfig,
  defaultPages,
  defaultSections,
  getPageConfigs,
  getSectionConfigs,
  savePageConfigs,
  saveSectionConfigs,
} from "@/lib/page-config";

export default function PagesControlPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  // Page configurations
  const [pages, setPages] = useState<PageConfig[]>(defaultPages);

  // Section configurations
  const [sections, setSections] = useState<SectionConfig[]>(defaultSections);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }
      // Load saved configurations
      setPages(getPageConfigs());
      setSections(getSectionConfigs());
      setLoading(false);
    };
    checkAuth();
  }, [router, supabase]);

  const handlePageToggle = (id: string) => {
    setPages(pages.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)));
  };

  const handleSectionToggle = (id: string) => {
    setSections(sections.map((s) => (s.id === id ? { ...s, enabled: !s.enabled } : s)));
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      // Save using the utility functions
      savePageConfigs(pages);
      saveSectionConfigs(sections);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error("Error saving:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleEnableAll = () => {
    setPages(pages.map((p) => ({ ...p, enabled: true })));
    setSections(sections.map((s) => ({ ...s, enabled: true })));
  };

  const handleReset = () => {
    setPages(defaultPages);
    setSections(defaultSections);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const groupedPages = {
    main: pages.filter((p) => p.category === "main"),
    framework: pages.filter((p) => p.category === "framework"),
    legal: pages.filter((p) => p.category === "legal"),
  };

  const groupedSections = sections.reduce((acc, section) => {
    if (!acc[section.page]) acc[section.page] = [];
    acc[section.page].push(section);
    return acc;
  }, {} as Record<string, SectionConfig[]>);

  const disabledPagesCount = pages.filter(p => !p.enabled).length;
  const disabledSectionsCount = sections.filter(s => !s.enabled).length;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/dashboard"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Pages & Sections Control</h1>
              <p className="mt-2 text-muted-foreground">
                Enable or disable pages and sections across your website
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
              >
                Reset to Defaults
              </button>
              <button
                onClick={handleEnableAll}
                className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground hover:bg-muted"
              >
                <RefreshCw className="h-4 w-4" />
                Enable All
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className={`inline-flex items-center gap-2 rounded px-6 py-2 font-semibold transition-all ${
                  saved
                    ? "bg-green-500 text-white"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {saving ? (
                  <RefreshCw className="h-5 w-5 animate-spin" />
                ) : saved ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Save className="h-5 w-5" />
                )}
                {saving ? "Saving..." : saved ? "Saved!" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>

        {/* Status Summary */}
        <div className="mb-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-2xl font-bold text-foreground">{pages.length}</div>
            <div className="text-sm text-muted-foreground">Total Pages</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-2xl font-bold text-red-500">{disabledPagesCount}</div>
            <div className="text-sm text-muted-foreground">Disabled Pages</div>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <div className="text-2xl font-bold text-red-500">{disabledSectionsCount}</div>
            <div className="text-sm text-muted-foreground">Disabled Sections</div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mb-8 rounded-lg border border-primary/30 bg-primary/5 p-4">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-foreground font-medium">How it works</p>
              <p className="text-sm text-muted-foreground mt-1">
                Disabled pages will show a "Coming Soon" message to visitors. Disabled sections will be hidden from their respective pages.
                Changes take effect immediately after saving. Pages using the PageWrapper component will automatically respect these settings.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Note:</strong> For full functionality, pages need to use the PageWrapper component. Currently, this is a client-side feature.
                For server-side control, database integration is required.
              </p>
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Pages Control */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Page Controls
            </h2>

            {/* Main Pages */}
            <div className="rounded-lg border border-border bg-card">
              <div className="border-b border-border px-4 py-3">
                <h3 className="font-semibold text-foreground">Main Pages</h3>
              </div>
              <div className="divide-y divide-border">
                {groupedPages.main.map((page) => (
                  <div key={page.id} className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{page.name}</p>
                        <p className="text-xs text-muted-foreground">{page.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePageToggle(page.id)}
                      className={`flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition-all ${
                        page.enabled
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                          : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      }`}
                    >
                      {page.enabled ? (
                        <>
                          <Eye className="h-4 w-4" />
                          Enabled
                        </>
                      ) : (
                        <>
                          <EyeOff className="h-4 w-4" />
                          Disabled
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Framework Pages */}
            <div className="rounded-lg border border-border bg-card">
              <div className="border-b border-border px-4 py-3">
                <h3 className="font-semibold text-foreground">Framework Pages</h3>
              </div>
              <div className="divide-y divide-border">
                {groupedPages.framework.map((page) => (
                  <div key={page.id} className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Layout className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{page.name}</p>
                        <p className="text-xs text-muted-foreground">{page.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePageToggle(page.id)}
                      className={`flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition-all ${
                        page.enabled
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                          : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      }`}
                    >
                      {page.enabled ? (
                        <>
                          <Eye className="h-4 w-4" />
                          Enabled
                        </>
                      ) : (
                        <>
                          <EyeOff className="h-4 w-4" />
                          Disabled
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Legal Pages */}
            <div className="rounded-lg border border-border bg-card">
              <div className="border-b border-border px-4 py-3">
                <h3 className="font-semibold text-foreground">Legal Pages</h3>
              </div>
              <div className="divide-y divide-border">
                {groupedPages.legal.map((page) => (
                  <div key={page.id} className="flex items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                      <Lock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground">{page.name}</p>
                        <p className="text-xs text-muted-foreground">{page.path}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handlePageToggle(page.id)}
                      className={`flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition-all ${
                        page.enabled
                          ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                          : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                      }`}
                    >
                      {page.enabled ? (
                        <>
                          <Eye className="h-4 w-4" />
                          Enabled
                        </>
                      ) : (
                        <>
                          <EyeOff className="h-4 w-4" />
                          Disabled
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sections Control */}
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Section Controls
            </h2>

            {Object.entries(groupedSections).map(([pageName, pageSections]) => (
              <div key={pageName} className="rounded-lg border border-border bg-card">
                <div className="border-b border-border px-4 py-3">
                  <h3 className="font-semibold text-foreground capitalize">{pageName} Page Sections</h3>
                </div>
                <div className="divide-y divide-border">
                  {pageSections.map((section) => (
                    <div key={section.id} className="flex items-center justify-between px-4 py-3">
                      <div>
                        <p className="font-medium text-foreground">{section.name}</p>
                        <p className="text-xs text-muted-foreground">{section.description}</p>
                      </div>
                      <button
                        onClick={() => handleSectionToggle(section.id)}
                        className={`flex items-center gap-2 rounded px-3 py-1.5 text-sm font-medium transition-all ${
                          section.enabled
                            ? "bg-green-500/10 text-green-500 hover:bg-green-500/20"
                            : "bg-red-500/10 text-red-500 hover:bg-red-500/20"
                        }`}
                      >
                        {section.enabled ? (
                          <>
                            <Eye className="h-4 w-4" />
                            Show
                          </>
                        ) : (
                          <>
                            <EyeOff className="h-4 w-4" />
                            Hide
                          </>
                        )}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
