"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import {
  FileText,
  Layout as LayoutIcon,
  Eye,
  Clock,
  TrendingUp,
  BarChart3
} from "lucide-react";

export default function AdminDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalPosts: 0,
    publishedPosts: 0,
    draftPosts: 0,
    totalPages: 0,
  });
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch blog post stats
        const { data: posts, error: postsError } = await supabase
          .from("blog_posts")
          .select("status");

        if (!postsError && posts) {
          setStats({
            totalPosts: posts.length,
            publishedPosts: posts.filter((p) => p.status === "published").length,
            draftPosts: posts.filter((p) => p.status === "draft").length,
            totalPages: 0, // Can be updated if you have a pages table
          });
        }
      } catch (error) {
        console.error("Error fetching stats:", error);
      } finally {
        setLoading(false);
      }
    };

    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }
      await fetchStats();
    };

    checkAuth();
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  const statCards = [
    {
      name: "Total Posts",
      value: stats.totalPosts,
      icon: FileText,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Published",
      value: stats.publishedPosts,
      icon: Eye,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      name: "Drafts",
      value: stats.draftPosts,
      icon: Clock,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      name: "Pages",
      value: stats.totalPages,
      icon: LayoutIcon,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-2 text-muted-foreground">
          Welcome to the First Principles Leadership CMS
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {statCards.map((stat) => (
          <div
            key={stat.name}
            className="rounded-lg border border-border bg-card p-6 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.name}
                </p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
              </div>
              <div className={`rounded-lg p-3 ${stat.bgColor}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Quick Actions
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <button
            onClick={() => router.push("/admin/blog")}
            className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
          >
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Create Blog Post</div>
              <div className="text-sm text-muted-foreground">
                Write a new article
              </div>
            </div>
          </button>

          <button
            onClick={() => router.push("/admin/content")}
            className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
          >
            <LayoutIcon className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">Manage Content</div>
              <div className="text-sm text-muted-foreground">
                Edit content blocks
              </div>
            </div>
          </button>

          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
          >
            <Eye className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">View Website</div>
              <div className="text-sm text-muted-foreground">
                See live site
              </div>
            </div>
          </button>

          <button
            onClick={() => router.push("/admin/analytics")}
            className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 text-left transition-colors hover:bg-muted"
          >
            <BarChart3 className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium text-foreground">View Analytics</div>
              <div className="text-sm text-muted-foreground">
                Traffic insights
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Getting Started
        </h2>
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-start gap-2">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Manage Blog Posts</p>
              <p>Create, edit, and publish blog articles from the Blog Posts section</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Edit Content Blocks</p>
              <p>Update page content, hero sections, and more from Content Blocks</p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-medium text-foreground">Customize Menus</p>
              <p>Manage navigation menus in the Menu Manager section</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
