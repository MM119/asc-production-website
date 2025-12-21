---
description: Configure custom domain and DNS for live deployment
---

# Custom Domain Configuration

## Phase 5: Custom Domain Configuration 🔗

### Step 5.1: Add Custom Domain in GitHub (MANUAL)

1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `aureussigmacapital.com`
3. Click **Save**
4. GitHub will perform a DNS check (will initially fail)

### Step 5.2: Configure DNS Records (MANUAL)

Log into your DNS provider and add the records below.

> [!IMPORTANT]
> **Cloudflare vs GoDaddy:** If you bought your domain on GoDaddy but use Cloudflare to manage it (via nameservers), you must make these changes in the **Cloudflare Dashboard**, not GoDaddy.

> [!TIP]
> **Cloudflare Proxy Settings:** Set the Proxy Status to **"DNS Only" (Grey Cloud)** for the initial setup. This is required for GitHub to successfully verify the domain and issue an SSL certificate. Attempting to use the Orange Cloud proxy too early will cause the DNS check to fail.

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
4. Wait a few minutes for SSL certificate provisioning.
5. Confirm the site is accessible via `https://aureussigmacapital.com`.

### Step 5.5: Switch to Cloudflare Proxy (OPTIONAL)

Once the green "Enforce HTTPS" checkmark is visible and the site is working:

1. Log back into **Cloudflare Dashboard**.
2. Go to **DNS** → **Records**.
3. Change the Proxy Status from **"DNS Only" (Grey Cloud)** to **"Proxied" (Orange Cloud)** for all A and CNAME records.
4. This enables Cloudflare's CDN, DDoS protection, and performance optimizations.
