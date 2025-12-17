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

Please refer to the [Pre-Deployment Checks](pre-deployment-checks.md) workflow for the detailed checklist.

---

## Phase 2: Build Configuration 🔧

Please refer to the [Build Configuration](build-configuration.md) workflow for build setup and security audit.

---

## Phase 3: GitHub Repository Setup 📦

Please refer to the [GitHub Repository Setup](github-asc-website-repo-setup.md) workflow for initialization and Actions setup.

---



---

## Phase 5: Custom Domain Configuration 🔗

Please refer to the [Custom Domain Configuration](custom-domain-config.md) workflow for domain and DNS settings.

---

## Phase 6: Post-Deployment Verification ✅

Please refer to the [Post-Deployment Verification](post-deployment-verification.md) workflow for the final checklist.

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
