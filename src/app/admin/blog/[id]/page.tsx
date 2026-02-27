import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import BlogPostEditor from "@/components/admin/BlogPostEditor";

export default async function BlogPostEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  const { id } = await params;

  // If ID is "new", we're creating a new post
  if (id === "new") {
    return <BlogPostEditor />;
  }

  // Otherwise, fetch the existing post
  const { data: post, error } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('id', id)
    .single();

  if (error || !post) {
    notFound();
  }

  return <BlogPostEditor post={post} />;
}
