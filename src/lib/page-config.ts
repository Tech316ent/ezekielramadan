/**
 * Page and Section Configuration Utility
 *
 * This module manages the visibility of pages and sections across the website.
 * Settings are stored in localStorage on the client side.
 *
 * In production, these settings should be stored in a database (Supabase)
 * and fetched server-side for SSR compatibility.
 */

export type PageConfig = {
  id: string;
  name: string;
  path: string;
  enabled: boolean;
  category: "main" | "framework" | "admin" | "legal";
  description: string;
};

export type SectionConfig = {
  id: string;
  name: string;
  page: string;
  enabled: boolean;
  description: string;
};

// Default page configurations
export const defaultPages: PageConfig[] = [
  { id: "home", name: "Home", path: "/", enabled: true, category: "main", description: "Main landing page" },
  { id: "about", name: "About", path: "/about", enabled: true, category: "main", description: "About Ezekiel Ramadan" },
  { id: "framework", name: "Framework", path: "/framework", enabled: true, category: "main", description: "The Six Laws overview" },
  { id: "courses", name: "Courses", path: "/courses", enabled: true, category: "main", description: "Leadership courses" },
  { id: "books", name: "Books", path: "/books", enabled: true, category: "main", description: "Publications" },
  { id: "advisory", name: "Advisory", path: "/advisory", enabled: true, category: "main", description: "Executive advisory services" },
  { id: "speaking", name: "Speaking", path: "/speaking", enabled: true, category: "main", description: "Speaking engagements" },
  { id: "resources", name: "Resources", path: "/resources", enabled: true, category: "main", description: "Downloadable resources" },
  { id: "blog", name: "Blog", path: "/blog", enabled: true, category: "main", description: "Articles and insights" },
  { id: "contact", name: "Contact", path: "/contact", enabled: true, category: "main", description: "Contact form" },
  { id: "newsletter", name: "Newsletter", path: "/newsletter", enabled: true, category: "main", description: "Newsletter signup" },
  { id: "methodology", name: "Methodology", path: "/methodology", enabled: true, category: "main", description: "Our approach" },
  // Framework subpages
  { id: "purpose", name: "Law of Purpose", path: "/framework/purpose", enabled: true, category: "framework", description: "First law" },
  { id: "identity", name: "Law of Identity", path: "/framework/identity", enabled: true, category: "framework", description: "Second law" },
  { id: "vision", name: "Law of Vision", path: "/framework/vision", enabled: true, category: "framework", description: "Third law" },
  { id: "responsibility", name: "Mandate of Responsibility", path: "/framework/responsibility", enabled: true, category: "framework", description: "Fourth law" },
  { id: "service", name: "Structure of Service", path: "/framework/service", enabled: true, category: "framework", description: "Fifth law" },
  { id: "influence", name: "Principle of Influence", path: "/framework/influence", enabled: true, category: "framework", description: "Sixth law" },
  // Legal pages
  { id: "privacy", name: "Privacy Policy", path: "/privacy", enabled: true, category: "legal", description: "Privacy policy" },
  { id: "terms", name: "Terms of Use", path: "/terms", enabled: true, category: "legal", description: "Terms of use" },
];

// Default section configurations
export const defaultSections: SectionConfig[] = [
  // Home page sections
  { id: "hero", name: "Hero Section", page: "home", enabled: true, description: "Main hero with headline" },
  { id: "philosophy", name: "Philosophy Section", page: "home", enabled: true, description: "Not Motivational. Not Personality-Driven" },
  { id: "framework-preview", name: "Framework Preview", page: "home", enabled: true, description: "Six Laws overview cards" },
  { id: "cross-domain", name: "Cross-Domain Application", page: "home", enabled: true, description: "Application areas" },
  { id: "cta-footer", name: "CTA Footer", page: "home", enabled: true, description: "Build Leadership Systems" },
  // About page sections
  { id: "about-hero", name: "Hero Section", page: "about", enabled: true, description: "About page hero" },
  { id: "about-bio", name: "Bio Section", page: "about", enabled: true, description: "Ezekiel's biography" },
  { id: "about-mission", name: "Mission Statement", page: "about", enabled: true, description: "The mission" },
  { id: "about-vision", name: "Vision Statement", page: "about", enabled: true, description: "The vision" },
  { id: "about-philosophy", name: "Philosophy Pillars", page: "about", enabled: true, description: "Three converging disciplines" },
  { id: "about-lineage", name: "Intellectual Lineage", page: "about", enabled: true, description: "Standing on shoulders of giants" },
  { id: "about-approach", name: "Why This Approach", page: "about", enabled: true, description: "Differentiators" },
  // Contact page sections
  { id: "contact-form", name: "Contact Form", page: "contact", enabled: true, description: "Main contact form" },
  { id: "contact-types", name: "Inquiry Types", page: "contact", enabled: true, description: "How can we help" },
  { id: "contact-social", name: "Social Links", page: "contact", enabled: true, description: "Connect online" },
  // Footer sections
  { id: "footer-newsletter", name: "Footer Newsletter", page: "global", enabled: true, description: "Newsletter CTA in footer" },
  { id: "footer-social", name: "Footer Social", page: "global", enabled: true, description: "Social media icons" },
];

const PAGES_STORAGE_KEY = "page_configs";
const SECTIONS_STORAGE_KEY = "section_configs";

/**
 * Get page configurations from localStorage
 */
export function getPageConfigs(): PageConfig[] {
  if (typeof window === "undefined") {
    return defaultPages;
  }

  try {
    const stored = localStorage.getItem(PAGES_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error reading page configs:", error);
  }

  return defaultPages;
}

/**
 * Get section configurations from localStorage
 */
export function getSectionConfigs(): SectionConfig[] {
  if (typeof window === "undefined") {
    return defaultSections;
  }

  try {
    const stored = localStorage.getItem(SECTIONS_STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error("Error reading section configs:", error);
  }

  return defaultSections;
}

/**
 * Save page configurations to localStorage
 */
export function savePageConfigs(configs: PageConfig[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(PAGES_STORAGE_KEY, JSON.stringify(configs));
    // Dispatch event for other components to react
    window.dispatchEvent(new CustomEvent("pageConfigsChanged", { detail: configs }));
  } catch (error) {
    console.error("Error saving page configs:", error);
  }
}

/**
 * Save section configurations to localStorage
 */
export function saveSectionConfigs(configs: SectionConfig[]): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(SECTIONS_STORAGE_KEY, JSON.stringify(configs));
    // Dispatch event for other components to react
    window.dispatchEvent(new CustomEvent("sectionConfigsChanged", { detail: configs }));
  } catch (error) {
    console.error("Error saving section configs:", error);
  }
}

/**
 * Check if a page is enabled by path
 */
export function isPageEnabled(path: string): boolean {
  const configs = getPageConfigs();
  const page = configs.find(p => p.path === path);
  return page ? page.enabled : true;
}

/**
 * Check if a page is enabled by ID
 */
export function isPageEnabledById(id: string): boolean {
  const configs = getPageConfigs();
  const page = configs.find(p => p.id === id);
  return page ? page.enabled : true;
}

/**
 * Check if a section is enabled by ID
 */
export function isSectionEnabled(id: string): boolean {
  const configs = getSectionConfigs();
  const section = configs.find(s => s.id === id);
  return section ? section.enabled : true;
}

/**
 * Get all sections for a specific page
 */
export function getPageSections(pageId: string): SectionConfig[] {
  const configs = getSectionConfigs();
  return configs.filter(s => s.page === pageId);
}
