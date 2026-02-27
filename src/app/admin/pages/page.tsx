import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Layout } from "lucide-react";

export default async function PagesManagementPage() {
  const supabase = await createClient();
  
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-foreground">Pages Management</h1>
      <p className="text-muted-foreground">Manage static page content for your website.</p>

      <div className="rounded-lg border border-border bg-card p-12 text-center">
        <Layout className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold text-foreground">Coming Soon</h2>
        <p className="mt-2 text-muted-foreground">
          Edit content for About, Framework, Services, and other static pages.
        </p>
      </div>
    </div>
  );
}
