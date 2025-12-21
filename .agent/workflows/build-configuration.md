---
description: Build configuration steps for deploying to GitHub Pages
---

# Build Configuration

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
