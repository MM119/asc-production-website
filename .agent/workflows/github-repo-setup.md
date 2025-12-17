---
description: Initialize and configure GitHub repository for deployment
---

# GitHub Repository Setup

## Phase 3: GitHub Repository Setup 📦

### Step 3.1: Initialize Git Repository (AUTOMATED)

// turbo
```bash
if [ ! -d ".git" ]; then
    git init
else
    echo "Git repository already initialized. Skipping."
fi
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
