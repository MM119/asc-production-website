---
description: Deploy ASC website to aureussigmacapital.com via GitHub Pages
---

# Deploy to Live: aureussigmacapital.com

This workflow covers the complete deployment process from local development to live website at `aureussigmacapital.com`.

## Overview

```
Local Vite Project → GitHub Repository → GitHub Pages → Custom Domain (aureussigmacapital.com)
```

---

## Phase 1: Pre-Deployment Checks 🔍

### Security Checklist (MANUAL)

- [ ] **Code Review**
  - [ ] No hardcoded API keys, secrets, or credentials in source code
  - [ ] No sensitive data in console.log statements
  - [ ] No internal/private URLs exposed
  - [ ] No debug flags left enabled
  
- [ ] **Dependency Audit**
  - [ ] Run `npm audit` and fix critical/high vulnerabilities
  - [ ] Check for outdated packages with known CVEs
  - [ ] Review any new dependencies added recently

- [ ] **Content Review**
  - [ ] All placeholder text replaced with real content
  - [ ] No test/dummy email addresses or phone numbers
  - [ ] Copyright year is current
  - [ ] Privacy policy and terms of service links work (if applicable)
  - [ ] Contact information is accurate

- [ ] **SEO & Meta Review**
  - [ ] Page titles are descriptive and unique
  - [ ] Meta descriptions are present
  - [ ] OpenGraph tags for social sharing
  - [ ] favicon.ico present

- [ ] **Image & Asset Review**
  - [ ] All images optimized (use TinyPNG or similar)
  - [ ] No oversized images (max 500KB recommended)
  - [ ] Alt text on all images
  - [ ] No broken image links

---

## Phase 2: Build Configuration 🔧

### Step 2.1: Update Vite Config for GitHub Pages (AUTOMATED)

The `vite.config.js` needs the correct base path. For custom domain, use `/`:

```javascript
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    base: '/',  // Use '/' for custom domain
})
```

// turbo
### Step 2.2: Run Security Audit

```bash
npm audit
```

Review output and fix any high/critical vulnerabilities:

```bash
npm audit fix
```

// turbo
### Step 2.3: Build Production Bundle

```bash
npm run build
```

// turbo
### Step 2.4: Preview Production Build Locally

```bash
npm run preview
```

Open the preview URL and verify everything works correctly.

---

## Phase 3: GitHub Repository Setup 📦

### Step 3.1: Initialize Git Repository (AUTOMATED)

// turbo
```bash
git init
```

### Step 3.2: Create .gitignore (AUTOMATED)

Create or update `.gitignore` with:

```
# Dependencies
node_modules/
node_modules 2/

# Build output (if not deploying from dist)
# dist/

# Environment files
.env
.env.local
.env.*.local

# Editor directories
.vscode/
.idea/
*.swp
*.swo

# OS files
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*

# Lock file duplicates
package-lock 2.json
```

### Step 3.3: Create CNAME File for Custom Domain (AUTOMATED)

// turbo
```bash
echo "aureussigmacapital.com" > public/CNAME
```

This file must be in `public/` so it gets copied to `dist/` during build.

### Step 3.4: Create GitHub Actions Workflow (AUTOMATED)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Security audit
        run: npm audit --audit-level=high || true

      - name: Build
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v4

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3.5: Initial Commit (AUTOMATED)

// turbo
```bash
git add .
git commit -m "Initial commit: ASC website for GitHub Pages deployment"
```

### Step 3.6: Create GitHub Repository (MANUAL)

1. Go to https://github.com/new
2. Create a new repository named `aureussigmacapital-website` (or preferred name)
3. Keep it **public** (required for free GitHub Pages) or use **private** with GitHub Pro
4. Do NOT initialize with README, .gitignore, or license

### Step 3.7: Push to GitHub (AUTOMATED after Step 3.6)

// turbo
```bash
git remote add origin git@github.com:YOUR_USERNAME/aureussigmacapital-website.git
git branch -M main
git push -u origin main
```

**Replace `YOUR_USERNAME` with your actual GitHub username or organization name.**

---

## Phase 4: Enable GitHub Pages 🌐

### Step 4.1: Configure GitHub Pages (MANUAL)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. The first deployment will start automatically on push

### Step 4.2: Verify Initial Deployment (MANUAL)

1. Wait for the GitHub Actions workflow to complete (check Actions tab)
2. Access the temporary URL: `https://YOUR_USERNAME.github.io/aureussigmacapital-website/`
3. Verify the site loads correctly

---

## Phase 5: Custom Domain Configuration 🔗

### Step 5.1: Add Custom Domain in GitHub (MANUAL)

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `aureussigmacapital.com`
3. Click **Save**
4. GitHub will perform a DNS check (will initially fail)

### Step 5.2: Configure DNS Records (MANUAL)

Log into your domain registrar (e.g., GoDaddy, Namecheap, Cloudflare) and add these DNS records:

#### For Apex Domain (aureussigmacapital.com):

| Type | Name/Host | Value/Target |
|------|-----------|--------------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

#### For www Subdomain (www.aureussigmacapital.com):

| Type | Name/Host | Value/Target |
|------|-----------|--------------|
| CNAME | www | YOUR_USERNAME.github.io |

### Step 5.3: Wait for DNS Propagation (MANUAL)

- DNS changes can take 15 minutes to 24 hours to propagate
- Use https://www.whatsmydns.net/ to check propagation status
- Search for both A records and CNAME records

### Step 5.4: Verify Domain and Enable HTTPS (MANUAL)

1. Go back to **Settings** → **Pages**
2. Wait for DNS check to pass (green checkmark)
3. Check **Enforce HTTPS** checkbox
4. Wait a few minutes for SSL certificate provisioning

---

## Phase 6: Post-Deployment Verification ✅

### Security Verification Checklist (MANUAL)

- [ ] **HTTPS Enforcement**
  - [ ] `https://aureussigmacapital.com` loads correctly
  - [ ] `http://aureussigmacapital.com` redirects to HTTPS
  - [ ] No mixed content warnings in browser console
  - [ ] SSL certificate valid and not expiring soon

- [ ] **Headers Check**
  - [ ] Run Lighthouse audit in Chrome DevTools
  - [ ] Check security headers at https://securityheaders.com/

- [ ] **Content Verification**
  - [ ] All pages load correctly
  - [ ] All links work (internal and external)
  - [ ] All images display
  - [ ] Forms work (if any)
  - [ ] Mobile responsiveness verified

- [ ] **Performance Check**
  - [ ] Lighthouse performance score > 80
  - [ ] Core Web Vitals passing
  - [ ] No console errors

---

## Automation Summary

| Task | Automation Level | Notes |
|------|------------------|-------|
| Security audit (`npm audit`) | ✅ Automated | Runs in CI/CD |
| Build process | ✅ Automated | GitHub Actions |
| Deploy to GitHub Pages | ✅ Automated | GitHub Actions |
| CNAME file creation | ✅ Automated | One-time setup |
| Git operations | ✅ Automated | Commands provided |
| Create GitHub repo | ⚠️ Manual | GitHub web interface |
| Configure GitHub Pages | ⚠️ Manual | GitHub Settings |
| DNS configuration | ⚠️ Manual | Domain registrar |
| Enable HTTPS | ⚠️ Manual | GitHub Settings (one-time) |
| Content review | ⚠️ Manual | Human review required |
| Verify deployment | ⚠️ Manual | Human verification |

---

## Troubleshooting

### Common Issues

#### 1. 404 Error on Custom Domain
- Verify CNAME file exists in `dist/` folder
- Check DNS records are correct
- Wait for DNS propagation

#### 2. Mixed Content Warnings
- Ensure all asset URLs use `https://` or relative paths
- Check for hardcoded `http://` URLs in source code

#### 3. CSS/JS Not Loading
- Verify `base` in `vite.config.js` is set correctly
- For custom domain, use `base: '/'`
- For GitHub Pages subdomain, use `base: '/repo-name/'`

#### 4. SSL Certificate Error
- Wait up to 24 hours for certificate provisioning
- Ensure DNS is pointing to GitHub Pages IPs
- Check domain verification is complete

#### 5. Build Fails on GitHub Actions
- Check Node.js version matches local environment
- Run `npm ci` locally to verify dependencies
- Check for environment-specific issues

---

## Quick Reference Commands

```bash
# Full deployment sequence (after initial setup):
npm audit                    # Security check
npm run build               # Build production
git add .
git commit -m "Update: description of changes"
git push origin main        # Triggers auto-deployment

# Check deployment status:
# Go to: https://github.com/YOUR_USERNAME/YOUR_REPO/actions
```

---

## Rollback Procedure

If deployment issues occur:

1. Go to **Actions** tab in GitHub
2. Find the last successful deployment
3. Click **Re-run all jobs**

Or locally:

```bash
git revert HEAD
git push origin main
```

---

## Maintenance

### Regular Tasks (Monthly)

- [ ] Run `npm audit` and update vulnerable packages
- [ ] Update dependencies: `npm update`
- [ ] Check for broken links
- [ ] Review analytics (if configured)
- [ ] Verify SSL certificate expiration

### Annual Tasks

- [ ] Review and update content
- [ ] Update copyright year
- [ ] Major dependency updates
- [ ] Performance optimization review
