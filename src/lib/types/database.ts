export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string | null
  content: string
  author: string
  category: string | null
  tags: string[] | null
  featured_image: string | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string[] | null
  status: 'draft' | 'published' | 'archived'
  published_at: string | null
  created_at: string
  updated_at: string
}

export type SiteSetting = {
  id: string
  key: string
  value: string | number | boolean | object | null
  category: 'general' | 'seo' | 'social' | 'email'
  updated_at: string
}

export type Page = {
  id: string
  page_name: string
  title: string | null
  content: Record<string, unknown> | null
  seo_title: string | null
  seo_description: string | null
  seo_keywords: string[] | null
  updated_at: string
}
