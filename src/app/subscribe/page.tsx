"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Email is required.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Subscribed. You will receive essays when published.");
        setEmail("");
      } else {
        const data = await response.json();
        setStatus("error");
        setMessage(data.error || "Subscription failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Main Section */}
      <section className="py-24">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-foreground text-center sm:text-5xl">
            Subscribe
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-center">
            Receive essays on governance, institutional order, and the structural
            principles of enduring leadership when published.
          </p>

          <div className="mt-12">
            {status === "success" ? (
              <div className="rounded-lg border border-primary/30 bg-primary/5 p-8 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-primary/30 bg-primary/10 mx-auto mb-4">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Subscribed</p>
                <p className="mt-2 text-sm text-muted-foreground">{message}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="w-full rounded border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                    required
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-destructive">{message}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full flex items-center justify-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Subscribing...
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-5 w-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* What You Receive */}
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="text-xl font-bold text-foreground text-center">
              What You Receive
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Long-form essays when published (typically monthly)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  Notification when teaching programs become available
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground">
                  No promotional content or trend commentary
                </p>
              </div>
            </div>
          </div>

          {/* Privacy Note */}
          <div className="mt-12 text-center">
            <p className="text-xs text-muted-foreground">
              Your email is used only for content delivery.
              Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
