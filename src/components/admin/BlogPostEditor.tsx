"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import type { BlogPost } from "@/lib/types/database";
import { ArrowLeft, Save, Eye, Trash2 } from "lucide-react";
import Link from "next/link";

type BlogPostEditorProps = {
  post?: BlogPost;
};

export default function BlogPostEditor({ post }: BlogPostEditorProps) {
  const router = useRouter();
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    author: post?.author || "Ezekiel Ramadan",
    category: post?.category || "",
    tags: post?.tags?.join(", ") || "",
    featured_image: post?.featured_image || "",
    seo_title: post?.seo_title || "",
    seo_description: post?.seo_description || "",
    seo_keywords: post?.seo_keywords?.join(", ") || "",
    status: post?.status || "draft",
  });

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  };

  const handleTitleChange = (title: string) => {
    setFormData({
      ...formData,
      title,
      slug: formData.slug || generateSlug(title),
      seo_title: formData.seo_title || title,
    });
  };

  const handleSave = async (status: 'draft' | 'published') => {
    setLoading(true);
    setError(null);

    try {
      const postData = {
        ...formData,
        status,
        tags: formData.tags.split(",").map(t => t.trim()).filter(Boolean),
        seo_keywords: formData.seo_keywords.split(",").map(k => k.trim()).filter(Boolean),
        published_at: status === 'published' && !post?.published_at ? new Date().toISOString() : post?.published_at,
      };

      if (post?.id) {
        // Update existing post
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', post.id);

        if (error) throw error;
      } else {
        // Create new post
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);

        if (error) throw error;
      }

      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save post');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!post?.id) return;
    if (!confirm('Are you sure you want to delete this post?')) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', post.id);

      if (error) throw error;

      router.push('/admin/blog');
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/admin/blog"
            className="flex h-10 w-10 items-center justify-center rounded border border-border bg-background transition-colors hover:bg-muted"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              {post ? 'Edit Post' : 'New Post'}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              {post ? `Editing: ${post.title}` : 'Create a new blog post'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {post && (
            <button
              onClick={handleDelete}
              disabled={loading}
              className="flex items-center gap-2 rounded border border-destructive/30 bg-destructive/10 px-4 py-2 font-semibold text-destructive transition-all hover:bg-destructive/20 disabled:opacity-50"
            >
              <Trash2 className="h-5 w-5" />
              Delete
            </button>
          )}
          <button
            onClick={() => handleSave('draft')}
            disabled={loading}
            className="flex items-center gap-2 rounded border border-border bg-background px-4 py-2 font-semibold text-foreground transition-all hover:bg-muted disabled:opacity-50"
          >
            <Save className="h-5 w-5" />
            Save Draft
          </button>
          <button
            onClick={() => handleSave('published')}
            disabled={loading}
            className="flex items-center gap-2 rounded bg-primary px-4 py-2 font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-50 gold-glow"
          >
            <Eye className="h-5 w-5" />
            {formData.status === 'published' ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>

      {error && (
        <div className="rounded border border-destructive/30 bg-destructive/10 p-4 text-destructive">
          {error}
        </div>
      )}

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Content */}
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            {/* Title */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleTitleChange(e.target.value)}
                required
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Enter post title..."
              />
            </div>

            {/* Slug */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                required
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="url-friendly-slug"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                URL: /blog/{formData.slug || 'your-post-slug'}
              </p>
            </div>

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Excerpt
              </label>
              <textarea
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Brief summary of the post..."
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Content *
              </label>
              <textarea
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                required
                rows={20}
                className="w-full rounded border border-border bg-background px-4 py-2 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Write your post content here... (Markdown supported)"
              />
            </div>
          </div>

          {/* SEO Section */}
          <div className="rounded-lg border border-primary/30 bg-primary/5 p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">SEO Settings</h2>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                SEO Title
              </label>
              <input
                type="text"
                value={formData.seo_title}
                onChange={(e) => setFormData({ ...formData, seo_title: e.target.value })}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Optimized title for search engines (50-60 chars)"
                maxLength={60}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {formData.seo_title.length}/60 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                SEO Description
              </label>
              <textarea
                value={formData.seo_description}
                onChange={(e) => setFormData({ ...formData, seo_description: e.target.value })}
                rows={3}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Meta description for search results (150-160 chars)"
                maxLength={160}
              />
              <p className="mt-1 text-xs text-muted-foreground">
                {formData.seo_description.length}/160 characters
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                SEO Keywords
              </label>
              <input
                type="text"
                value={formData.seo_keywords}
                onChange={(e) => setFormData({ ...formData, seo_keywords: e.target.value })}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="keyword1, keyword2, keyword3"
              />
              <p className="mt-1 text-xs text-muted-foreground">
                Comma-separated keywords for SEO
              </p>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Post Details */}
          <div className="rounded-lg border border-border bg-card p-6 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Post Details</h2>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Author
              </label>
              <input
                type="text"
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Category
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="">Select category...</option>
                <option value="Leadership Theory">Leadership Theory</option>
                <option value="Organizational Design">Organizational Design</option>
                <option value="Systems Thinking">Systems Thinking</option>
                <option value="Authority & Governance">Authority & Governance</option>
                <option value="Purpose & Vision">Purpose & Vision</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="tag1, tag2, tag3"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-2">
                Featured Image URL
              </label>
              <input
                type="url"
                value={formData.featured_image}
                onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                className="w-full rounded border border-border bg-background px-4 py-2 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="https://..."
              />
            </div>
          </div>

          {/* Status Info */}
          {post && (
            <div className="rounded-lg border border-border bg-card p-6 space-y-2 text-sm">
              <h3 className="font-semibold text-foreground">Status</h3>
              <p className="text-muted-foreground">
                Status: <span className="font-medium text-foreground">{post.status}</span>
              </p>
              <p className="text-muted-foreground">
                Created: {new Date(post.created_at).toLocaleDateString()}
              </p>
              {post.published_at && (
                <p className="text-muted-foreground">
                  Published: {new Date(post.published_at).toLocaleDateString()}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
