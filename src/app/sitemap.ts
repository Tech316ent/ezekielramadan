import { MetadataRoute } from 'next';

/**
 * Dynamic Sitemap for ezekielramadan.com
 *
 * Kingdom Governance Philosophy Platform
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ezekielramadan.com';
  const currentDate = new Date().toISOString();
  const contentDate = '2025-02-27T00:00:00.000Z';

  return [
    // Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },

    // Primary Pages
    {
      url: `${baseUrl}/philosophy`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/laws`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/essays`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/teaching`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // The Seven Laws
    {
      url: `${baseUrl}/laws/identity`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laws/authority`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laws/stewardship`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laws/alignment`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laws/vision`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laws/incentives`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/laws/accountability`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },

    // Utility Pages
    {
      url: `${baseUrl}/subscribe`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: contentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },

    // Legal Pages
    {
      url: `${baseUrl}/privacy`,
      lastModified: '2025-01-01T00:00:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: '2025-01-01T00:00:00.000Z',
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
}
