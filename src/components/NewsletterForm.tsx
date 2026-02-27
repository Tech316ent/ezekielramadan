"use client";

import { useState } from "react";
import { Mail } from "lucide-react";

export default function NewsletterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Basic validation
    if (!formData.name || !formData.email) {
      setStatus("error");
      setMessage("Please fill in your name and email address.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
      // Send to API route for processing
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      setStatus("success");
      setMessage("Thank you for subscribing! You'll receive a confirmation shortly.");

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", role: "" });
        setStatus("idle");
        setMessage("");
      }, 3000);
    } catch (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      console.error("Newsletter subscription error:", error);
    }
  };

  return (
    <div className="rounded-lg border border-primary/30 bg-card/50 p-8 shadow-xl backdrop-blur md:p-12">
      <div className="text-center">
        <Mail className="mx-auto h-12 w-12 text-primary" />
        <h2 className="mt-6 text-3xl font-bold text-foreground">Subscribe Now</h2>
        <p className="mt-4 text-muted-foreground">
          Join thousands of leaders receiving weekly insights every Thursday.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="name" className="sr-only">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Full Name"
            required
            disabled={status === "submitting" || status === "success"}
            className="w-full rounded border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="email" className="sr-only">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Email Address"
            required
            disabled={status === "submitting" || status === "success"}
            className="w-full rounded border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          />
        </div>

        <div>
          <label htmlFor="role" className="sr-only">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={(e) => setFormData({ ...formData, role: e.target.value })}
            disabled={status === "submitting" || status === "success"}
            className="w-full rounded border border-border bg-background px-4 py-3 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
          >
            <option value="">Your Role (Optional)</option>
            <option value="ceo">CEO / Founder</option>
            <option value="executive">Executive Leader</option>
            <option value="manager">Manager</option>
            <option value="entrepreneur">Entrepreneur</option>
            <option value="consultant">Consultant / Advisor</option>
            <option value="other">Other</option>
          </select>
        </div>

        {message && (
          <div
            className={`rounded p-4 text-center text-sm ${
              status === "success"
                ? "bg-green-500/10 text-green-500"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {message}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "submitting" || status === "success"}
          className="w-full rounded bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed gold-glow"
        >
          {status === "submitting"
            ? "Subscribing..."
            : status === "success"
              ? "Subscribed!"
              : "Subscribe to The Dispatch"}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          No spam. Unsubscribe anytime. Your information is private and secure.
        </p>
      </form>
    </div>
  );
}
