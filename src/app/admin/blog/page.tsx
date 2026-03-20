import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/types/database";

export default async function BlogPage() {
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    redirect("/admin/login");
  }

  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .order('created_at', { ascending: false });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getStatusBadge = (status: BlogPost['status']) => {
    const styles = {
      published: 'bg-green-500/10 text-green-500 border-green-500/30',
      draft: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
      archived: 'bg-gray-500/10 text-gray-500 border-gray-500/30',
    };

    return (
      <span className={`inline-flex items-center gap-1 rounded border px-2 py-1 text-xs font-medium ${styles[status]}`}>
        {status === 'published' && <Eye className="h-3 w-3" />}
        {status === 'draft' && <Clock className="h-3 w-3" />}
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Blog Posts</h1>
          <p className="mt-2 text-muted-foreground">
            Create and manage SEO-optimized blog posts for your website.
          </p>
        </div>
        <Link
          href="/admin/blog/new"
          className="flex items-center gap-2 rounded bg-primary px-4 py-2 font-semibold text-primary-foreground transition-all hover:bg-primary/90 gold-glow"
        >
          <Plus className="h-5 w-5" />
          New Post
        </Link>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Total Posts</p>
          <p className="mt-1 text-2xl font-bold text-foreground">{posts?.length || 0}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Published</p>
          <p className="mt-1 text-2xl font-bold text-green-500">
            {posts?.filter(p => p.status === 'published').length || 0}
          </p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm text-muted-foreground">Drafts</p>
          <p className="mt-1 text-2xl font-bold text-yellow-500">
            {posts?.filter(p => p.status === 'draft').length || 0}
          </p>
        </div>
      </div>

      {/* Posts Table */}
      <div className="rounded-lg border border-border bg-card">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-border bg-muted/50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {posts && posts.length > 0 ? (
                posts.map((post) => (
                  <tr key={post.id} className="hover:bg-muted/50">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-medium text-foreground">{post.title}</p>
                        {post.excerpt && (
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-1">
                            {post.excerpt}
                          </p>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-muted-foreground">
                        {post.category || 'Uncategorized'}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {getStatusBadge(post.status)}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {formatDate(post.created_at)}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/blog/${post.id}`}
                          className="flex h-8 w-8 items-center justify-center rounded border border-border bg-background transition-colors hover:border-primary/50 hover:bg-muted"
                          title="Edit post"
                        >
                          <Edit className="h-4 w-4 text-foreground" />
                        </Link>
                        <button
                          className="flex h-8 w-8 items-center justify-center rounded border border-border bg-background transition-colors hover:border-destructive/50 hover:bg-destructive/10"
                          title="Delete post"
                        >
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full border border-border bg-muted">
                        <Edit className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">No blog posts yet</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Get started by creating your first post
                        </p>
                      </div>
                      <Link
                        href="/admin/blog/new"
                        className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90"
                      >
                        <Plus className="h-4 w-4" />
                        Create First Post
                      </Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
