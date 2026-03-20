"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Clock,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  Archive,
  Trash2,
  Eye,
  RefreshCw,
} from "lucide-react";

type Submission = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  role: string;
  inquiryType: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
  status: "new" | "read" | "replied" | "archived";
  createdAt: string;
};

// Demo submissions data - in production, this would come from Supabase
const demoSubmissions: Submission[] = [
  {
    id: "1",
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah.johnson@acmecorp.com",
    company: "Acme Corporation",
    role: "CEO",
    inquiryType: "advisory",
    subject: "Executive Coaching Inquiry",
    message: "I'm interested in learning more about your executive advisory services. We're a growing tech company looking to strengthen our leadership team.",
    budget: "25k-50k",
    timeline: "1-3-months",
    status: "new",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    firstName: "Michael",
    lastName: "Chen",
    email: "michael@startupventures.io",
    company: "Startup Ventures",
    role: "Founder",
    inquiryType: "speaking",
    subject: "Conference Keynote Request",
    message: "We'd like to invite you to speak at our annual leadership conference in Q2. The event typically draws 500+ executives.",
    budget: "10k-25k",
    timeline: "3-6-months",
    status: "read",
    createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    firstName: "Emily",
    lastName: "Rodriguez",
    email: "emily.r@consulting.com",
    company: "Strategic Consulting Group",
    role: "Managing Partner",
    inquiryType: "partnership",
    subject: "Partnership Opportunity",
    message: "Our consulting firm is interested in exploring a potential partnership to bring your frameworks to our client base.",
    budget: "over-100k",
    timeline: "flexible",
    status: "replied",
    createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  },
];

export default function SubmissionsPage() {
  const [loading, setLoading] = useState(true);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
  const [filter, setFilter] = useState<"all" | "new" | "read" | "replied" | "archived">("all");
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
        return;
      }
      // Load demo submissions
      setSubmissions(demoSubmissions);
      setLoading(false);
    };

    checkAuth();
  }, [router, supabase]);

  const handleStatusChange = (id: string, status: Submission["status"]) => {
    setSubmissions(submissions.map((s) =>
      s.id === id ? { ...s, status } : s
    ));
    if (selectedSubmission?.id === id) {
      setSelectedSubmission({ ...selectedSubmission, status });
    }
  };

  const handleDelete = (id: string) => {
    setSubmissions(submissions.filter((s) => s.id !== id));
    if (selectedSubmission?.id === id) {
      setSelectedSubmission(null);
    }
  };

  const filteredSubmissions = submissions.filter((s) =>
    filter === "all" ? true : s.status === filter
  );

  const getStatusColor = (status: Submission["status"]) => {
    switch (status) {
      case "new": return "bg-blue-500/10 text-blue-500";
      case "read": return "bg-yellow-500/10 text-yellow-500";
      case "replied": return "bg-green-500/10 text-green-500";
      case "archived": return "bg-gray-500/10 text-gray-500";
    }
  };

  const getInquiryLabel = (type: string) => {
    const labels: Record<string, string> = {
      speaking: "Speaking",
      advisory: "Advisory",
      consulting: "Consulting",
      partnership: "Partnership",
      media: "Media",
      general: "General",
    };
    return labels[type] || type;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffHours < 1) return "Just now";
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays === 1) return "Yesterday";
    return date.toLocaleDateString();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading submissions...</div>
      </div>
    );
  }

  const newCount = submissions.filter((s) => s.status === "new").length;

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
              <h1 className="text-3xl font-bold text-foreground">Form Submissions</h1>
              <p className="mt-2 text-muted-foreground">
                {newCount > 0 ? `${newCount} new submission${newCount > 1 ? "s" : ""}` : "No new submissions"}
              </p>
            </div>
            <button className="inline-flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground hover:bg-muted">
              <RefreshCw className="h-4 w-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mb-6 flex gap-2 overflow-x-auto">
          {(["all", "new", "read", "replied", "archived"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`rounded px-4 py-2 text-sm font-medium capitalize transition-all ${
                filter === status
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {status} {status === "new" && newCount > 0 && `(${newCount})`}
            </button>
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_2fr]">
          {/* Submission List */}
          <div className="rounded-lg border border-border bg-card">
            <div className="p-4 border-b border-border">
              <h2 className="font-semibold text-foreground">
                {filteredSubmissions.length} Submission{filteredSubmissions.length !== 1 ? "s" : ""}
              </h2>
            </div>
            <div className="max-h-[600px] overflow-y-auto">
              {filteredSubmissions.length === 0 ? (
                <div className="p-8 text-center text-muted-foreground">
                  No submissions found
                </div>
              ) : (
                filteredSubmissions.map((submission) => (
                  <div
                    key={submission.id}
                    onClick={() => {
                      setSelectedSubmission(submission);
                      if (submission.status === "new") {
                        handleStatusChange(submission.id, "read");
                      }
                    }}
                    className={`p-4 border-b border-border cursor-pointer transition-all hover:bg-muted/50 ${
                      selectedSubmission?.id === submission.id ? "bg-primary/5" : ""
                    } ${submission.status === "new" ? "bg-blue-500/5" : ""}`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground truncate">
                            {submission.firstName} {submission.lastName}
                          </span>
                          {submission.status === "new" && (
                            <span className="h-2 w-2 rounded-full bg-blue-500" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">{submission.subject}</p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <span className={`rounded px-1.5 py-0.5 ${getStatusColor(submission.status)}`}>
                            {getInquiryLabel(submission.inquiryType)}
                          </span>
                          <span>{formatDate(submission.createdAt)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Submission Detail */}
          <div className="rounded-lg border border-border bg-card">
            {selectedSubmission ? (
              <div className="h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selectedSubmission.subject}</h2>
                      <p className="text-sm text-muted-foreground">
                        From {selectedSubmission.firstName} {selectedSubmission.lastName}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleStatusChange(selectedSubmission.id, "replied")}
                        className="rounded p-2 text-green-500 hover:bg-green-500/10"
                        title="Mark as Replied"
                      >
                        <CheckCircle className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(selectedSubmission.id, "archived")}
                        className="rounded p-2 text-muted-foreground hover:bg-muted"
                        title="Archive"
                      >
                        <Archive className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(selectedSubmission.id)}
                        className="rounded p-2 text-destructive hover:bg-destructive/10"
                        title="Delete"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {/* Contact Info */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Name</p>
                        <p className="font-medium text-foreground">
                          {selectedSubmission.firstName} {selectedSubmission.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a href={`mailto:${selectedSubmission.email}`} className="font-medium text-primary hover:underline">
                          {selectedSubmission.email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Building className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Company</p>
                        <p className="font-medium text-foreground">{selectedSubmission.company || "Not provided"}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Submitted</p>
                        <p className="font-medium text-foreground">
                          {new Date(selectedSubmission.createdAt).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Inquiry Details */}
                  <div className="rounded-lg border border-border bg-background p-4">
                    <h3 className="font-semibold text-foreground mb-3">Inquiry Details</h3>
                    <div className="grid gap-3 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Type:</span>
                        <span className="font-medium text-foreground">{getInquiryLabel(selectedSubmission.inquiryType)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Role:</span>
                        <span className="font-medium text-foreground">{selectedSubmission.role || "Not provided"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium text-foreground">{selectedSubmission.budget || "Not specified"}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium text-foreground">{selectedSubmission.timeline || "Not specified"}</span>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                      <MessageSquare className="h-5 w-5" />
                      Message
                    </h3>
                    <div className="rounded-lg border border-border bg-background p-4">
                      <p className="text-foreground whitespace-pre-wrap">{selectedSubmission.message}</p>
                    </div>
                  </div>

                  {/* Reply Button */}
                  <a
                    href={`mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.subject}`}
                    className="inline-flex w-full items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    <Mail className="h-5 w-5" />
                    Reply via Email
                  </a>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <Mail className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-semibold text-foreground">Select a Submission</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Click on a submission from the list to view details
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
