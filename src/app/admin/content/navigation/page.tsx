"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Plus, Trash2, GripVertical } from "lucide-react";

type NavItem = {
  id: string;
  label: string;
  href: string;
  order: number;
};

export default function NavigationEditorPage() {
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState<"header" | "footer">("header");

  const [headerNav, setHeaderNav] = useState<NavItem[]>([
    { id: "1", label: "About", href: "/about", order: 1 },
    { id: "2", label: "Framework", href: "/framework", order: 2 },
    { id: "3", label: "Courses", href: "/courses", order: 3 },
    { id: "4", label: "Books", href: "/books", order: 4 },
    { id: "5", label: "Advisory", href: "/advisory", order: 5 },
    { id: "6", label: "Speaking", href: "/speaking", order: 6 },
    { id: "7", label: "Resources", href: "/resources", order: 7 },
    { id: "8", label: "Blog", href: "/blog", order: 8 },
  ]);

  const handleSave = async () => {
    // TODO: Implement save functionality with Supabase
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const addNavItem = (section: "header" | "footer") => {
    if (section === "header") {
      const newItem: NavItem = {
        id: Date.now().toString(),
        label: "New Link",
        href: "/",
        order: headerNav.length + 1,
      };
      setHeaderNav([...headerNav, newItem]);
    }
  };

  const removeNavItem = (section: "header" | "footer", id: string) => {
    if (section === "header") {
      setHeaderNav(headerNav.filter((item) => item.id !== id));
    }
  };

  const updateNavItem = (
    section: "header" | "footer",
    id: string,
    field: "label" | "href",
    value: string
  ) => {
    if (section === "header") {
      setHeaderNav(
        headerNav.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        )
      );
    }
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
              <h1 className="text-3xl font-bold text-foreground">Navigation Editor</h1>
              <p className="mt-2 text-muted-foreground">
                Manage header navigation and footer links
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

        {/* Tabs */}
        <div className="mb-6 border-b border-border">
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab("header")}
              className={`pb-4 px-4 font-semibold transition-all ${
                activeTab === "header"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Header Navigation
            </button>
            <button
              onClick={() => setActiveTab("footer")}
              className={`pb-4 px-4 font-semibold transition-all ${
                activeTab === "footer"
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Footer Links
            </button>
          </div>
        </div>

        {/* Header Navigation Editor */}
        {activeTab === "header" && (
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold text-foreground">Header Menu Items</h2>
              <button
                onClick={() => addNavItem("header")}
                className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Plus className="h-4 w-4" />
                Add Item
              </button>
            </div>

            <div className="space-y-4">
              {headerNav.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded border border-border bg-background p-4"
                >
                  <GripVertical className="h-5 w-5 text-muted-foreground cursor-move" />

                  <div className="flex-1 grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Label
                      </label>
                      <input
                        type="text"
                        value={item.label}
                        onChange={(e) =>
                          updateNavItem("header", item.id, "label", e.target.value)
                        }
                        className="w-full rounded border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-muted-foreground mb-1">
                        Link
                      </label>
                      <input
                        type="text"
                        value={item.href}
                        onChange={(e) =>
                          updateNavItem("header", item.id, "href", e.target.value)
                        }
                        className="w-full rounded border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => removeNavItem("header", item.id)}
                    className="rounded p-2 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer Editor */}
        {activeTab === "footer" && (
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-xl font-bold text-foreground mb-6">Footer Configuration</h2>

            <div className="space-y-8">
              {/* Social Media Links */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Social Media Links</h3>
                <div className="space-y-4">
                  {[
                    { name: "LinkedIn", url: "https://www.linkedin.com/in/eramadan/" },
                    { name: "Facebook", url: "https://www.facebook.com/ezekielramadan" },
                    { name: "Twitter/X", url: "https://x.com/ezekielramadan" },
                    { name: "YouTube", url: "https://youtube.com/@EzekielRamadan" },
                    { name: "TikTok", url: "https://tiktok.com/@ezekielramadan" },
                    { name: "Pinterest", url: "https://ca.pinterest.com/ezekielramadan/" },
                  ].map((social) => (
                    <div key={social.name} className="grid gap-4 md:grid-cols-2 p-4 rounded border border-border bg-background">
                      <div>
                        <label className="block text-xs font-medium text-muted-foreground mb-1">
                          {social.name}
                        </label>
                        <input
                          type="text"
                          defaultValue={social.url}
                          className="w-full rounded border border-border bg-card px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Copyright Text */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Copyright Text</h3>
                <input
                  type="text"
                  defaultValue={`© ${new Date().getFullYear()} Ezekiel Ramadan. All rights reserved.`}
                  className="w-full rounded border border-border bg-background px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        )}

        {/* Info Notice */}
        <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
          <h3 className="font-semibold text-foreground">Navigation Management</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Drag items to reorder header navigation menu</li>
            <li>• Add, edit, or remove menu items as needed</li>
            <li>• Changes apply to the entire website</li>
            <li>• Social media links appear in footer only</li>
            <li>• Save changes to update the live site</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
