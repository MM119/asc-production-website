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

Please refer to the [Pre-Deployment Checks](../.agent/workflows/01-pre-deployment-checks.md) workflow for the detailed checklist.

---

## Phase 2: Build Configuration 🔧

Please refer to the [Build Configuration](../.agent/workflows/02-build-configuration.md) workflow for build setup and security audit.

---

## Phase 3: GitHub Repository Setup 📦

Please refer to the [GitHub Repository Setup](../.agent/workflows/03-github-asc-website-repo-setup.md) workflow for initialization and Actions setup.

---



---

## Phase 5: Custom Domain Configuration 🔗

Please refer to the [Custom Domain Configuration](../.agent/workflows/04-custom-domain-config.md) workflow for domain and DNS settings.

---

## Phase 6: Post-Deployment Verification ✅

Please refer to the [Post-Deployment Verification](../.agent/workflows/05-post-deployment-verification.md) workflow for the final checklist.

---




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

## Maintenance 🛠️

Please refer to the [Website Maintenance](../.agent/workflows/06-website-maintenance.md) documentation for routine monthly and annual tasks.
