---
description: Manual pre-deployment checks for security, content, SEO, and assets
---

# Pre-Deployment Checks

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
