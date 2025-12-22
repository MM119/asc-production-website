# SEO Optimization Documentation
**Date**: 2025-12-22
**Status**: Implemented

## Overview
This document outlines the Search Engine Optimization (SEO) enhancements implemented for the Aureus Sigma Capital website. The goal was to move from static, site-wide metadata to a dynamic, page-specific system that improves search engine visibility and social media sharing.

## 1. Dynamic Metadata System
We implemented a reusable `SEO` component using `react-helmet-async`. This allows each page to inject its own `<title>`, `<meta>`, and link tags into the document `<head>`.

### The `SEO` Component
**Location**: `src/components/SEO.jsx`

**Props**:
- `title` (string): The page title. Appended with " | Aureus Sigma Capital".
- `description` (string): Meta description for search results.
- `keywords` (string, optional): Meta keywords (lesser used by modern engines but included for completeness).
- `lang` (string): The current language ('en' or 'vi').
- `image` (string): Image URL for social media cards (OG/Twitter). Defaults to `/banner.png`.
- `url` (string): The relative URL of the current page (e.g., `/about`).
- `noindex` (boolean): If `true`, adds `<meta name="robots" content="noindex, nofollow" />`.

### Implementation Across Pages
All main route components now include the `<SEO />` component.

| Page | Title Source | Description Source | Helper Notes |
|------|--------------|--------------------|--------------|
| **Home** | `t.hero.title` | `t.hero.subtitle` | |
| **Why ASC** | `t.whatWeDo.sectionTitle` | `t.whatWeDo.intro` | URL: `/what-we-do` |
| **Solutions** | `t.solutions.title` | `t.solutions.intro` | URL: `/solutions` |
| **Partnerships** | `t.nav.partnerships` | `t.partnerships.intro` | URL: `/partnerships` |
| **Insights** | `t.insights.sectionTitle` | `t.insights.intro` | URL: `/insights` |
| **Article** | `article.title` | First paragraph of body | Dynamic image from article |
| **About** | `t.about.title` | `t.about.intro` | URL: `/about` |
| **Contact** | `t.contact.title` | `t.contact.desc` | URL: `/contact` |
| **Not Found** | "Page Not Found" | N/A | **noindex** set to true |

## 2. Search Engine Crawling Instructions

### robots.txt
**Location**: `public/robots.txt`
- Configured to allow all user agents.
- Points to the sitemap location.

```txt
User-agent: *
Allow: /

Sitemap: https://aureussigmacapital.com/sitemap.xml
```

### sitemap.xml
**Location**: `public/sitemap.xml`
- Lists all reachable public URLs.
- Priorities set based on page importance (Home = 1.0, Insights = 0.9, etc.).
- Includes specific update frequencies (`changefreq`).

## 3. Structural Improvements
- **Heading Hierarchy**: Ensured pages use a single `<h1>` through `Hero.jsx` or `PageHeader.jsx`.
- **404 Handling**: The generic 404 page is explicitly excluded from indexing to prevent it from polluting search results.

## 4. Verification
To verify these changes locally or in production:
1.  **Inspect Element**: Open DevTools on any page and look at the `<head>` section.
2.  **Verify Title**: Check that the `<title>` tag matches the specific page content.
3.  **Verify Meta Tags**: Look for `meta[name="description"]`, `meta[property="og:title"]`, etc.
4.  **Robots/Sitemap**: Visit `/robots.txt` and `/sitemap.xml` in the browser.
