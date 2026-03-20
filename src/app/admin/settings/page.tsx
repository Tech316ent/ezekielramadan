"use client";

import { useState, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { Save } from "lucide-react";

export default function SettingsPage() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [settings, setSettings] = useState({
    site_name: "Ezekiel Ramadan - First Principles Leadership",
    contact_email: "hello@ezekielramadan.com",
  });

  const handleSave = async () => {
    setLoading(true);
    setSuccess(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Website Settings</h1>
      
      {success && (
        <div className="rounded border border-green-500/30 bg-green-500/10 p-4 text-green-500">
          Settings saved!
        </div>
      )}

      <div className="rounded-lg border border-border bg-card p-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold mb-2">Site Name</label>
          <input
            type="text"
            value={settings.site_name}
            onChange={(e) => setSettings({ ...settings, site_name: e.target.value })}
            className="w-full rounded border border-border bg-background px-4 py-2"
          />
        </div>

        <button
          onClick={handleSave}
          disabled={loading}
          className="flex items-center gap-2 rounded bg-primary px-6 py-3 font-semibold text-primary-foreground"
        >
          <Save className="h-5 w-5" />
          Save Settings
        </button>
      </div>
    </div>
  );
}
