import { Metadata } from "next";
import type {
  CollectionPage,
  FAQPage,
  ProfilePage,
  ContactPage,
  WebPage,
  AutoRental,
} from "schema-dts";

export const siteName = "Zallyy";
export const baseUrl = "https://zallyy.com";
export const twitterHandle = "@_Vivek_Nariya_";

export type Sitemap = {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
};

type JsonLd =
  | CollectionPage
  | FAQPage
  | ProfilePage
  | ContactPage
  | WebPage
  | AutoRental;

export type MetadataSitemapJsonLd = {
  metaData: Metadata;
  sitemapData: Sitemap;
  jsonLd: JsonLd;
};

type pageData = {
  pageTitle: string;
  pageDescription: string;
  ogImageUrl: string;
  ogImageAlt: string;
  pageUrl: string;
  pageKeywords: string[];
  sitemap: Sitemap;
  jsonLd: JsonLd;
};

export const seoConfig: Record<string, pageData> = {};

((seoConfig["/"] = {
  pageTitle: "The free SaaS template with simple architecture",
  pageDescription:
    "An open-source, feature-rich, full-stack Next.js + PostgreSQL starter kit that manages boilerplate for you. Powered by Vivek Nariya",
  ogImageUrl: `${baseUrl}/logo.png`,
  ogImageAlt: "The free SaaS template with simple architecture",
  pageUrl: `${baseUrl}/`,
  pageKeywords: [
    "free SaaS template",
    "simple architecture",
    "open-source",
    "feature-rich",
    "full-stack Next.js + PostgreSQL starter kit",
    "boilerplate management",
    "Vivek Nariya",
  ],
  sitemap: {
    url: `${baseUrl}/`,
    lastModified: "2025-08-01T00:00:00+05:30",
    changeFrequency: "monthly",
    priority: 1.0,
  },
  jsonLd: {
    "@type": "WebPage",
    name: "The free SaaS template with simple architecture",
    url: `${baseUrl}/`,
    description:
      "An open-source, feature-rich, full-stack Next.js + PostgreSQL starter kit that manages boilerplate for you. Powered by Vivek Nariya",
  },
}),
  (seoConfig["/contact"] = {
    pageTitle: "Contact",
    pageDescription: "Contact",
    ogImageUrl: `${baseUrl}/logo.png`,
    ogImageAlt: "Contact",
    pageUrl: `${baseUrl}/contact`,
    pageKeywords: ["Contact"],
    sitemap: {
      url: `${baseUrl}/contact`,
      lastModified: "2025-07-25T00:00:00+05:30",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    jsonLd: {
      "@type": "ContactPage",
      name: "Contact",
      url: `${baseUrl}/contact`,
      description: "Contact",
    },
  }),
  (seoConfig["/privacy-policy"] = {
    pageTitle: "Privacy Policy",
    pageDescription: "Privacy Policy",
    ogImageUrl: `${baseUrl}/logo.png`,
    ogImageAlt: "Logo",
    pageUrl: `${baseUrl}/privacy-policy`,
    pageKeywords: ["Privacy Policy"],
    sitemap: {
      url: `${baseUrl}/privacy-policy`,
      lastModified: "2026-01-11T00:00:00+05:30",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    jsonLd: {
      "@type": "WebPage",
      name: "Privacy Policy",
      url: `${baseUrl}/privacy-policy`,
      description: "Privacy Policy",
    },
  }),
  (seoConfig["/terms-and-conditions"] = {
    pageTitle: "Terms and Conditions",
    pageDescription: "Terms and Conditions",
    ogImageUrl: `${baseUrl}/logo.png`,
    ogImageAlt: "Logo",
    pageUrl: `${baseUrl}/terms-and-conditions`,
    pageKeywords: ["Terms and Conditions"],
    sitemap: {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: "2026-01-11T00:00:00+05:30",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    jsonLd: {
      "@type": "WebPage",
      name: "Terms and Conditions",
      url: `${baseUrl}/terms-and-conditions`,
      description: "Terms and Conditions",
    },
  }),
  (seoConfig["/blogs"] = {
    pageTitle: "Blogs",
    pageDescription: "Blogs",
    ogImageUrl: `${baseUrl}/logo.png`,
    ogImageAlt: "Logo",
    pageUrl: `${baseUrl}/blogs`,
    pageKeywords: ["Blogs"],
    sitemap: {
      url: `${baseUrl}/blogs`,
      lastModified: "2026-01-11T00:00:00+05:30",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    jsonLd: {
      "@type": "WebPage",
      name: "Blogs",
      url: `${baseUrl}/blogs`,
      description: "Blogs",
    },
  }),
  (seoConfig["/blogs/do-i-really-need-orm"] = {
    pageTitle: "Do I Really Need an ORM in 2024? Prisma vs Drizzle vs Raw SQL",
    pageDescription:
      "Explore the modern debate between ORMs like Prisma and Drizzle versus writing Raw SQL in Next.js applications. Which one is right for your SaaS?",
    ogImageUrl: `${baseUrl}/logo.png`,
    ogImageAlt: "Do I Really Need an ORM?",
    pageUrl: `${baseUrl}/blogs/do-i-really-need-orm`,
    pageKeywords: [
      "ORM",
      "Prisma",
      "Drizzle ORM",
      "Raw SQL",
      "Next.js Database",
      "Supabase",
      "Type Safety",
      "Database Performance",
      "SaaS Tech Stack",
    ],
    sitemap: {
      url: `${baseUrl}/blogs/do-i-really-need-orm`,
      lastModified: "2024-03-20T00:00:00+05:30",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    jsonLd: {
      "@type": "WebPage",
      name: "Do I Really Need an ORM in 2024? Prisma vs Drizzle vs Raw SQL",
      url: `${baseUrl}/blogs/do-i-really-need-orm`,
      description:
        "A deep dive into the ORM vs Raw SQL debate for modern web developers.",
    },
  }),
  (seoConfig["/docs"] = {
    pageTitle: "Docs",
    pageDescription: "Docs",
    ogImageUrl: `${baseUrl}/logo.png`,
    ogImageAlt: "Logo",
    pageUrl: `${baseUrl}/docs`,
    pageKeywords: ["Docs"],
    sitemap: {
      url: `${baseUrl}/docs`,
      lastModified: "2026-01-11T00:00:00+05:30",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    jsonLd: {
      "@type": "WebPage",
      name: "Docs",
      url: `${baseUrl}/docs`,
      description: "Docs",
    },
  }));

export function getMetadataSitemap(slug: string): MetadataSitemapJsonLd {
  const seoData = seoConfig[slug];

  return {
    metaData: {
      title: seoData.pageTitle,
      description: seoData.pageDescription,
      keywords: seoData.pageKeywords,
      robots: "max-image-preview:large",

      // --- Canonical URL ---
      alternates: {
        canonical: seoData.pageUrl,
      },

      // --- Open Graph (Facebook, LinkedIn, etc.) ---
      openGraph: {
        title: seoData.pageTitle,
        description: seoData.pageDescription,
        url: seoData.pageUrl,
        siteName: siteName,
        images: [
          {
            url: seoData.ogImageUrl, // Must be an absolute URL
            width: 1200,
            height: 630,
            alt: seoData.ogImageAlt,
          },
        ],
        locale: "en_IN", // Locale for India
        type: "article",
      },

      // --- Twitter Card ---
      twitter: {
        card: "summary_large_image",
        title: seoData.pageTitle,
        description: seoData.pageDescription,
        site: twitterHandle, // Your brand's @ handle
        creator: twitterHandle, // The author's @ handle
        images: [seoData.ogImageUrl], // Must be an absolute URL
      },
    },
    sitemapData: {
      url: seoData.sitemap.url,
      lastModified: seoData.sitemap.lastModified,
      changeFrequency: seoData.sitemap.changeFrequency,
      priority: seoData.sitemap.priority,
    },
    jsonLd: seoData.jsonLd,
  };
}
