# ASC Website Content Management Guide

## Overview

This guide explains how to add, update, and manage insights/news content on the Aureus Sigma Capital website.

---

## Content Structure

```
src/
├── content/insights/              # Markdown article bodies
│   ├── [slug]-en.md              # English version
│   ├── [slug]-vi.md              # Vietnamese version
│   └── ...
├── data/content.js               # Article metadata & site content
public/
├── assets/others/                # Article images
```

---

## Adding a New Insight/News Article

### Step 1: Create Markdown Files

Create two files in `src/content/insights/`:

```
[your-slug]-en.md    # English content
[your-slug]-vi.md    # Vietnamese content
```

Example: `pilot-launch-en.md`

### Step 2: Update content.js

1. Import the markdown files at the top:
```javascript
import pilotEnMd from "../content/insights/pilot-launch-en.md?raw";
import pilotViMd from "../content/insights/pilot-launch-vi.md?raw";
```

2. Add to `INSIGHTS_CONTENT` object:
```javascript
export const INSIGHTS_CONTENT = {
    // ... existing articles ...
    "pilot-launch": {
        en: {
            title: "Your Article Title",
            dateLine: "Ho Chi Minh City – December 2025",
            body: parseMarkdown(pilotEnMd),
        },
        vi: {
            title: "Tiêu đề bài viết",
            dateLine: "TP. Hồ Chí Minh – Tháng 12 năm 2025",
            body: parseMarkdown(pilotViMd),
        },
    },
};
```

3. Add to `insights.items` array (for card preview):
```javascript
insights: {
    items: [
        {
            category: "News",                    // or "Perspectives"
            title: "Your Article Title",
            slug: "pilot-launch",               // must match INSIGHTS_CONTENT key
            summary: "Brief 1-2 sentence summary...",
            icon: "handshake",                  // handshake, compass, or shield
            image: "/assets/others/your-image.png",
        },
        // ... other articles
    ],
}
```

### Step 3: Add Image (Optional)

Place article images in `public/assets/others/`

### Step 4: Build & Deploy

```bash
npm run build
# Deploy dist/ folder
```

---

## Article Categories

| Category | Icon | Use Case |
|----------|------|----------|
| News | `handshake` | Announcements, partnerships, company updates |
| Perspectives | `compass` | Thought leadership, market insights |
| Perspectives | `shield` | Risk management, methodology articles |

---

## Content Versioning Strategy

### For Staged Releases (Pilot → Full Launch)

Use a versioning suffix in the slug:

```
pilot-fides-partnership        # December 2025 (pilot announcement)
fides-partnership-launch       # Q1 2026 (full product launch)
```

Or use the same slug and simply update the content in place.

---

## Updating Existing Articles

1. Edit the relevant `.md` file in `src/content/insights/`
2. If title/summary changes, also update `content.js`
3. Rebuild and deploy

---

## Content Calendar Template

| Date | Article Slug | Title | Category | Status |
|------|-------------|-------|----------|--------|
| Dec 2025 | pilot-fides-mou | FIDES-ASC Pilot Research Collaboration | News | Draft |
| Q1 2026 | fides-partnership-launch | FIDES-ASC Launch Systematic Products | News | Planned |
| Monthly | market-insights-[month] | Monthly Market Perspectives | Perspectives | Recurring |

---

## Quick Checklist for New Article

- [ ] Create `[slug]-en.md` 
- [ ] Create `[slug]-vi.md`
- [ ] Add imports in `content.js`
- [ ] Add to `INSIGHTS_CONTENT`
- [ ] Add to `insights.items` (EN)
- [ ] Add to `insights.items` (VI)
- [ ] Add image to `public/assets/others/`
- [ ] Test locally: `npm run dev`
- [ ] Build: `npm run build`
- [ ] Deploy
