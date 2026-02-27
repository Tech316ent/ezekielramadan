"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  TrendingUp,
  Users,
  Eye,
  Clock,
  Globe,
  BarChart3,
  LineChart,
  ExternalLink,
  Settings,
  RefreshCw,
  Info,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

// Demo analytics data - in production, this would come from Google Analytics API
const demoAnalytics = {
  overview: {
    totalVisitors: 1247,
    pageViews: 3892,
    avgSessionDuration: "2m 34s",
    bounceRate: "42.3%",
    trends: {
      visitors: +12.5,
      pageViews: +8.3,
      duration: +5.1,
      bounceRate: -3.2,
    },
  },
  topPages: [
    { path: "/", views: 892, percentage: 22.9 },
    { path: "/framework", views: 534, percentage: 13.7 },
    { path: "/about", views: 421, percentage: 10.8 },
    { path: "/courses", views: 387, percentage: 9.9 },
    { path: "/advisory", views: 298, percentage: 7.7 },
    { path: "/speaking", views: 256, percentage: 6.6 },
    { path: "/blog", views: 234, percentage: 6.0 },
    { path: "/books", views: 198, percentage: 5.1 },
  ],
  trafficSources: [
    { source: "Organic Search", visitors: 512, percentage: 41.1 },
    { source: "Direct", visitors: 387, percentage: 31.0 },
    { source: "Social Media", visitors: 198, percentage: 15.9 },
    { source: "Referral", visitors: 98, percentage: 7.9 },
    { source: "Email", visitors: 52, percentage: 4.2 },
  ],
  devices: [
    { device: "Desktop", percentage: 58 },
    { device: "Mobile", percentage: 36 },
    { device: "Tablet", percentage: 6 },
  ],
  countries: [
    { country: "United States", visitors: 523, percentage: 41.9 },
    { country: "Canada", visitors: 187, percentage: 15.0 },
    { country: "United Kingdom", visitors: 143, percentage: 11.5 },
    { country: "Australia", visitors: 98, percentage: 7.9 },
    { country: "Germany", visitors: 67, percentage: 5.4 },
  ],
  weeklyTrend: [
    { day: "Mon", visitors: 156 },
    { day: "Tue", visitors: 189 },
    { day: "Wed", visitors: 201 },
    { day: "Thu", visitors: 178 },
    { day: "Fri", visitors: 212 },
    { day: "Sat", visitors: 145 },
    { day: "Sun", visitors: 166 },
  ],
};

export default function AnalyticsDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [selectedPeriod, setSelectedPeriod] = useState("7d");
  const [isConfigured, setIsConfigured] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }
      // Check if Google Analytics is configured
      const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
      setIsConfigured(!!gaId && gaId !== "G-XXXXXXXXXX");
      setLoading(false);
    };

    checkAuth();
  }, [router, supabase]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading analytics...</div>
      </div>
    );
  }

  const TrendIndicator = ({ value }: { value: number }) => {
    const isPositive = value >= 0;
    return (
      <span className={`inline-flex items-center gap-1 text-sm font-medium ${isPositive ? "text-green-500" : "text-red-500"}`}>
        {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {Math.abs(value)}%
      </span>
    );
  };

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
              <h1 className="text-3xl font-bold text-foreground">Analytics</h1>
              <p className="mt-2 text-muted-foreground">
                Monitor website traffic and visitor insights
              </p>
            </div>
            <div className="flex items-center gap-4">
              {/* Period Selector */}
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="rounded border border-border bg-card px-4 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="90d">Last 90 Days</option>
                <option value="12m">Last 12 Months</option>
              </select>
              <button className="inline-flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90">
                <RefreshCw className="h-4 w-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Configuration Notice */}
        {!isConfigured && (
          <div className="mb-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
            <div className="flex items-start gap-4">
              <Info className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground">Google Analytics Not Configured</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To enable real-time analytics tracking, you need to set up Google Analytics:
                </p>
                <ol className="mt-4 space-y-2 text-sm text-muted-foreground list-decimal list-inside">
                  <li>Create a Google Analytics 4 property at <a href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">analytics.google.com</a></li>
                  <li>Get your Measurement ID (starts with G-)</li>
                  <li>Add <code className="bg-muted px-1 py-0.5 rounded text-xs">NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX</code> to your environment variables</li>
                  <li>Redeploy your site to enable tracking</li>
                </ol>
                <p className="mt-4 text-sm text-muted-foreground">
                  <strong>Note:</strong> The data shown below is demo data for preview purposes.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Overview Stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Visitors</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {demoAnalytics.overview.totalVisitors.toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg bg-blue-500/10 p-3">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
            </div>
            <div className="mt-4">
              <TrendIndicator value={demoAnalytics.overview.trends.visitors} />
              <span className="ml-2 text-sm text-muted-foreground">vs last period</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Page Views</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {demoAnalytics.overview.pageViews.toLocaleString()}
                </p>
              </div>
              <div className="rounded-lg bg-green-500/10 p-3">
                <Eye className="h-6 w-6 text-green-500" />
              </div>
            </div>
            <div className="mt-4">
              <TrendIndicator value={demoAnalytics.overview.trends.pageViews} />
              <span className="ml-2 text-sm text-muted-foreground">vs last period</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Avg. Session</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {demoAnalytics.overview.avgSessionDuration}
                </p>
              </div>
              <div className="rounded-lg bg-purple-500/10 p-3">
                <Clock className="h-6 w-6 text-purple-500" />
              </div>
            </div>
            <div className="mt-4">
              <TrendIndicator value={demoAnalytics.overview.trends.duration} />
              <span className="ml-2 text-sm text-muted-foreground">vs last period</span>
            </div>
          </div>

          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Bounce Rate</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {demoAnalytics.overview.bounceRate}
                </p>
              </div>
              <div className="rounded-lg bg-orange-500/10 p-3">
                <TrendingUp className="h-6 w-6 text-orange-500" />
              </div>
            </div>
            <div className="mt-4">
              <TrendIndicator value={demoAnalytics.overview.trends.bounceRate} />
              <span className="ml-2 text-sm text-muted-foreground">vs last period</span>
            </div>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid gap-8 lg:grid-cols-2 mb-8">
          {/* Weekly Trend */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Weekly Traffic</h2>
              <LineChart className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex items-end justify-between h-48 gap-2">
              {demoAnalytics.weeklyTrend.map((day, index) => {
                const maxVisitors = Math.max(...demoAnalytics.weeklyTrend.map((d) => d.visitors));
                const height = (day.visitors / maxVisitors) * 100;
                return (
                  <div key={day.day} className="flex flex-col items-center flex-1">
                    <div
                      className="w-full bg-primary/80 rounded-t hover:bg-primary transition-colors"
                      style={{ height: `${height}%` }}
                      title={`${day.visitors} visitors`}
                    />
                    <span className="mt-2 text-xs text-muted-foreground">{day.day}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Device Breakdown */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Devices</h2>
              <BarChart3 className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {demoAnalytics.devices.map((device) => (
                <div key={device.device}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground">{device.device}</span>
                    <span className="text-sm font-semibold text-foreground">{device.percentage}%</span>
                  </div>
                  <div className="h-3 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Tables Row */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Top Pages */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Top Pages</h2>
              <span className="text-sm text-muted-foreground">By page views</span>
            </div>
            <div className="space-y-3">
              {demoAnalytics.topPages.map((page, index) => (
                <div key={page.path} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-muted text-xs font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="text-sm text-foreground font-mono">{page.path}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-foreground">{page.views.toLocaleString()}</span>
                    <span className="text-sm text-muted-foreground w-12 text-right">{page.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="rounded-lg border border-border bg-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-foreground">Traffic Sources</h2>
              <Globe className="h-5 w-5 text-muted-foreground" />
            </div>
            <div className="space-y-4">
              {demoAnalytics.trafficSources.map((source) => (
                <div key={source.source}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-foreground">{source.source}</span>
                    <span className="text-sm text-muted-foreground">{source.visitors.toLocaleString()} visitors</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary/60 rounded-full"
                      style={{ width: `${source.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Countries */}
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-foreground">Top Countries</h2>
            <Globe className="h-5 w-5 text-muted-foreground" />
          </div>
          <div className="grid gap-4 md:grid-cols-5">
            {demoAnalytics.countries.map((country) => (
              <div key={country.country} className="rounded-lg border border-border bg-background p-4 text-center">
                <p className="text-sm font-medium text-foreground">{country.country}</p>
                <p className="mt-1 text-2xl font-bold text-primary">{country.visitors}</p>
                <p className="text-xs text-muted-foreground">{country.percentage}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* External Links */}
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">Analytics Resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <a
              href="https://analytics.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted"
            >
              <BarChart3 className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="font-medium text-foreground">Google Analytics Dashboard</div>
                <div className="text-sm text-muted-foreground">View detailed analytics</div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
            <a
              href="https://search.google.com/search-console"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-background p-4 transition-colors hover:bg-muted"
            >
              <Globe className="h-5 w-5 text-primary" />
              <div className="flex-1">
                <div className="font-medium text-foreground">Google Search Console</div>
                <div className="text-sm text-muted-foreground">Monitor search performance</div>
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        {/* SEO Health Check */}
        <div className="mt-8 rounded-lg border border-primary/30 bg-primary/5 p-6">
          <h2 className="text-lg font-semibold text-foreground mb-4">SEO Health Status</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <span className="text-green-500">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Meta Tags</p>
                <p className="text-xs text-muted-foreground">Properly configured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <span className="text-green-500">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Sitemap</p>
                <p className="text-xs text-muted-foreground">Auto-generated</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <span className="text-green-500">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Robots.txt</p>
                <p className="text-xs text-muted-foreground">Configured</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <span className="text-green-500">✓</span>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Structured Data</p>
                <p className="text-xs text-muted-foreground">JSON-LD enabled</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
