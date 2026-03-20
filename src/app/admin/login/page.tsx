"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { Mail, Lock, AlertCircle, Shield } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [blockedUntil, setBlockedUntil] = useState<number>(0);
  const [formStartTime] = useState(Date.now());
  const router = useRouter();
  const supabase = createClient();

  const MAX_ATTEMPTS = 5;
  const BLOCK_DURATION = 15 * 60 * 1000; // 15 minutes
  const MIN_FORM_TIME = 2000; // 2 seconds minimum (bot detection)

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.push("/admin/dashboard");
      }
    };
    checkAuth();
  }, [supabase, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Bot detection: Honeypot field
    if (honeypot !== '') {
      console.log('Bot detected via honeypot');
      setLoading(false);
      return;
    }

    // Bot detection: Form submission timing
    const formElapsed = Date.now() - formStartTime;
    if (formElapsed < MIN_FORM_TIME) {
      setError("Please slow down and try again");
      setLoading(false);
      return;
    }

    // Check if still blocked from previous attempts
    if (Date.now() < blockedUntil) {
      const remainingMinutes = Math.ceil((blockedUntil - Date.now()) / 60000);
      setError(`Too many failed attempts. Try again in ${remainingMinutes} minute(s).`);
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format");
      setLoading(false);
      return;
    }

    // Input sanitization
    const sanitizedEmail = email.trim().toLowerCase().slice(0, 254);

    // Password length check
    if (password.length < 8 || password.length > 100) {
      setError("Invalid credentials");
      setLoading(false);
      return;
    }

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: sanitizedEmail,
        password,
      });

      if (error) {
        // Increment failed attempts
        const newAttempts = loginAttempts + 1;
        setLoginAttempts(newAttempts);

        if (newAttempts >= MAX_ATTEMPTS) {
          setBlockedUntil(Date.now() + BLOCK_DURATION);
          setError(`Account temporarily locked due to multiple failed attempts. Try again in 15 minutes.`);
        } else {
          const remaining = MAX_ATTEMPTS - newAttempts;
          setError(`Invalid credentials. ${remaining} attempt${remaining !== 1 ? 's' : ''} remaining before temporary lockout.`);
        }
        throw error;
      }

      if (data.session) {
        // Reset attempts on success
        setLoginAttempts(0);
        setBlockedUntil(0);
        router.push("/admin/dashboard");
        router.refresh();
      }
    } catch (err) {
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background blueprint-grid">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />

      <div className="relative w-full max-w-md px-6">
        <div className="rounded-lg border border-border bg-card p-8 shadow-xl">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-lg border-2 border-primary/50 bg-primary/10">
              <span className="text-2xl font-bold text-primary">ER</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              First Principles Leadership CMS
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="flex items-start gap-2 rounded border border-destructive/30 bg-destructive/10 p-3">
                <AlertCircle className="h-5 w-5 shrink-0 text-destructive" />
                <p className="text-sm text-destructive">{error}</p>
              </div>
            )}

            {/* Honeypot field - hidden from humans, visible to bots */}
            <input
              type="text"
              name="website"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
              style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px' }}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
            />

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading || Date.now() < blockedUntil}
                  maxLength={254}
                  autoComplete="email"
                  className="w-full rounded border border-border bg-background pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  placeholder="admin@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-foreground mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  disabled={loading || Date.now() < blockedUntil}
                  maxLength={100}
                  autoComplete="current-password"
                  className="w-full rounded border border-border bg-background pl-10 pr-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary disabled:opacity-50"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading || Date.now() < blockedUntil}
              className="w-full rounded bg-primary px-4 py-2.5 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed gold-glow"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Shield className="h-4 w-4 text-green-500" />
            <p>Secured with Enterprise-Grade Authentication</p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Need access? Contact the website administrator.
        </p>
      </div>
    </div>
  );
}
