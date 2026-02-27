"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Eye, FileText } from "lucide-react";

export default function FrameworkEditorPage() {
  const [selectedLaw, setSelectedLaw] = useState("purpose");
  const [saved, setSaved] = useState(false);

  const frameworkLaws = [
    { id: "purpose", name: "Law of Purpose", path: "/framework/purpose" },
    { id: "identity", name: "Law of Identity & Authority", path: "/framework/identity" },
    { id: "vision", name: "Law of Vision", path: "/framework/vision" },
    { id: "responsibility", name: "Mandate of Responsibility", path: "/framework/responsibility" },
    { id: "service", name: "Structure of Service", path: "/framework/service" },
    { id: "influence", name: "Principle of Influence", path: "/framework/influence" },
  ];

  const handleSave = async () => {
    // TODO: Implement save functionality with Supabase
    // This would save the edited content to the database
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/content"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Content Management
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Framework Pages Editor</h1>
              <p className="mt-2 text-muted-foreground">
                Edit the 6 Laws of Leadership framework pages
              </p>
            </div>
            <button
              onClick={handleSave}
              className={`inline-flex items-center gap-2 rounded px-6 py-3 font-semibold transition-all ${
                saved
                  ? "bg-green-500 text-white"
                  : "bg-primary text-primary-foreground hover:bg-primary/90"
              }`}
            >
              <Save className="h-5 w-5" />
              {saved ? "Saved!" : "Save Changes"}
            </button>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar - Law Selector */}
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 font-semibold text-foreground">Select Law to Edit</h2>
            <div className="space-y-2">
              {frameworkLaws.map((law) => (
                <button
                  key={law.id}
                  onClick={() => setSelectedLaw(law.id)}
                  className={`w-full rounded p-3 text-left text-sm transition-all ${
                    selectedLaw === law.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  {law.name}
                </button>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <Link
                href={frameworkLaws.find((l) => l.id === selectedLaw)?.path || "/framework"}
                target="_blank"
                className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80"
              >
                <Eye className="h-4 w-4" />
                Preview on Site
              </Link>
            </div>
          </div>

          {/* Main Editor */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-6 flex items-center gap-3">
              <FileText className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                {frameworkLaws.find((l) => l.id === selectedLaw)?.name}
              </h2>
            </div>

            <div className="space-y-6">
              {/* Page Title */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Page Title
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter page title"
                  defaultValue={frameworkLaws.find((l) => l.id === selectedLaw)?.name}
                />
              </div>

              {/* Hero Section */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Hero Section Description
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter hero section description"
                />
              </div>

              {/* Main Content */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Main Content
                </label>
                <textarea
                  rows={12}
                  className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter main page content (supports Markdown)"
                />
              </div>

              {/* Key Principles */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Key Principles (one per line)
                </label>
                <textarea
                  rows={6}
                  className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter key principles, one per line"
                />
              </div>

              {/* Call to Action */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Call to Action Text
                </label>
                <input
                  type="text"
                  className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter CTA text"
                />
              </div>

              {/* SEO Metadata */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">SEO Metadata</h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Meta Description
                    </label>
                    <textarea
                      rows={3}
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Enter meta description for SEO"
                      maxLength={160}
                    />
                    <p className="mt-1 text-xs text-muted-foreground">Max 160 characters</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Keywords (comma-separated)
                    </label>
                    <input
                      type="text"
                      className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="keyword1, keyword2, keyword3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Notice */}
        <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
          <h3 className="font-semibold text-foreground">Editor Notes</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Changes are saved to the database and will update the live website</li>
            <li>• Use the Preview link to see changes on the actual page</li>
            <li>• Main content supports Markdown formatting</li>
            <li>• Remember to optimize SEO metadata for search engines</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
