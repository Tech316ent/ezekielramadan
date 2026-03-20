"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FileText,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Briefcase,
  Library,
  Menu,
  Settings,
  ArrowLeft
} from "lucide-react";

export default function ContentManagementPage() {
  const contentSections = [
    {
      id: "framework",
      name: "Framework Pages",
      description: "Edit the 6 Laws of Leadership framework pages",
      icon: BookOpen,
      href: "/admin/content/framework",
      pages: ["Purpose", "Identity", "Vision", "Responsibility", "Service", "Influence"],
    },
    {
      id: "courses",
      name: "Courses",
      description: "Manage course offerings and descriptions",
      icon: GraduationCap,
      href: "/admin/content/courses",
      count: "Manage your learning programs",
    },
    {
      id: "books",
      name: "Books",
      description: "Update books and publications",
      icon: Library,
      href: "/admin/content/books",
      count: "Manage your published works",
    },
    {
      id: "advisory",
      name: "Advisory Services",
      description: "Edit advisory and consulting offerings",
      icon: Briefcase,
      href: "/admin/content/advisory",
      count: "Manage service descriptions",
    },
    {
      id: "speaking",
      name: "Speaking",
      description: "Manage speaking engagements and topics",
      icon: MessageSquare,
      href: "/admin/content/speaking",
      count: "Update speaking information",
    },
    {
      id: "resources",
      name: "Resources",
      description: "Manage downloadable resources and tools",
      icon: FileText,
      href: "/admin/content/resources",
      count: "Manage resource library",
    },
    {
      id: "blog",
      name: "Blog Posts",
      description: "Create and edit blog articles",
      icon: FileText,
      href: "/admin/blog",
      count: "Manage blog content",
    },
    {
      id: "navigation",
      name: "Header & Footer",
      description: "Edit navigation menus and footer links",
      icon: Menu,
      href: "/admin/content/navigation",
      count: "Manage site navigation",
    },
    {
      id: "settings",
      name: "Site Settings",
      description: "Update global site settings and metadata",
      icon: Settings,
      href: "/admin/settings",
      count: "Configure site-wide settings",
    },
  ];

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
          <h1 className="text-3xl font-bold text-foreground">Content Management</h1>
          <p className="mt-2 text-muted-foreground">
            Manage all website content, pages, and navigation elements
          </p>
        </div>

        {/* Content Sections Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {contentSections.map((section) => (
            <Link
              key={section.id}
              href={section.href}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded border border-primary/30 bg-primary/10 transition-all group-hover:border-primary/50 group-hover:bg-primary/20">
                <section.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                {section.name}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {section.description}
              </p>

              {section.pages && (
                <div className="mt-4 flex flex-wrap gap-1">
                  {section.pages.map((page) => (
                    <span
                      key={page}
                      className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {page}
                    </span>
                  ))}
                </div>
              )}

              {section.count && (
                <p className="mt-4 text-xs text-primary">{section.count}</p>
              )}
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="mt-12 rounded-lg border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-lg font-semibold text-foreground">Quick Actions</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/admin/blog"
              className="rounded border border-border bg-background p-4 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              Create New Blog Post
            </Link>
            <Link
              href="/admin/content/resources"
              className="rounded border border-border bg-background p-4 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              Upload New Resource
            </Link>
            <Link
              href="/admin/settings"
              className="rounded border border-border bg-background p-4 text-sm font-medium text-foreground transition-all hover:bg-muted"
            >
              Update Site Settings
            </Link>
          </div>
        </div>

        {/* Info Notice */}
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h3 className="font-semibold text-foreground">Content Management Features</h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>• Edit all framework law pages individually</li>
            <li>• Manage course offerings, books, and publications</li>
            <li>• Update advisory service descriptions</li>
            <li>• Control header navigation and footer links</li>
            <li>• Create, edit, and publish blog posts</li>
            <li>• Upload and manage downloadable resources</li>
            <li>• Configure site-wide settings and metadata</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
