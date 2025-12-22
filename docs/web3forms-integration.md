# Web3Forms Integration

This document describes the Web3Forms integration used for the contact form on the ASC website.

## Overview

The contact form on the website uses [Web3Forms](https://web3forms.com) to send form submissions as emails. Web3Forms is a free service that provides unlimited form submissions without requiring a backend server.

## Account Details

| Field | Value |
|-------|-------|
| **Service** | Web3Forms |
| **Account Email** | `contact@ascap.vn` |
| **Access Key** | `03fdcd58-65b8-468c-a6a2-68f54c7b0da0` |
| **Dashboard** | https://web3forms.com/dashboard |

## How It Works

1. User fills out the contact form on `/contact` page
2. Form data is submitted to Web3Forms API (`https://api.web3forms.com/submit`)
3. Web3Forms processes the submission and sends an email to `contact@ascap.vn`
4. User sees a success message on the website

## Form Fields Sent

| Field Name | Description |
|------------|-------------|
| `name` | User's full name |
| `email` | User's email address |
| `organization` | User's company/organization |
| `message` | Objectives or notes from user |
| `investor_confirmation` | Checkbox confirmation that user is institutional/professional investor |

## Email Configuration

The form data is sent as JSON to the Web3Forms API:

```javascript
const data = {
    access_key: "03fdcd58-65b8-468c-a6a2-68f54c7b0da0",
    subject: "New Inquiry from ASC Website",
    from_name: "ASC Website Contact Form",
    name: form.name.value,
    email: form.email.value,
    organization: form.organization.value,
    message: form.message.value,
    investor_confirmation: form.investor_confirmation.checked 
        ? "Confirmed - Institutional/Professional Investor" 
        : "Not confirmed",
};
```

## File Location

The contact form implementation is located at:
- `src/pages/ContactPage.jsx`

## Free Tier Limits

Web3Forms free tier includes:
- ✅ Unlimited form submissions
- ✅ No monthly limits
- ✅ Spam protection
- ✅ Email notifications

## Managing the Account

To manage Web3Forms settings:

1. Go to https://web3forms.com
2. Enter the email `contact@ascap.vn`
3. Check inbox for login link
4. Access dashboard to view submissions, configure settings, etc.

## Regenerating Access Key

If the access key is compromised:

1. Log in to Web3Forms dashboard
2. Navigate to settings
3. Generate a new access key
4. Update the key in `src/pages/ContactPage.jsx`

## Content Security Policy (CSP)

For the form to work on production, the website requires a Content Security Policy that allows connections to the Web3Forms API.

The CSP is configured in `index.html`:

```html
<meta http-equiv="Content-Security-Policy" 
  content="default-src 'self'; 
           script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
           style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; 
           font-src 'self' https://fonts.gstatic.com; 
           img-src 'self' data: https:; 
           connect-src 'self' https://api.web3forms.com https://fonts.googleapis.com https://fonts.gstatic.com;" />
```

### Key CSP Directives

| Directive | Purpose |
|-----------|---------|
| `connect-src 'self' https://api.web3forms.com` | Allows form submissions to Web3Forms API |
| `style-src https://fonts.googleapis.com` | Allows Google Fonts CSS |
| `font-src https://fonts.gstatic.com` | Allows Google Fonts files |
| `img-src 'self' data: https:` | Allows images from self, data URIs, and HTTPS sources |

### CSP Troubleshooting

If you see "Network error" when submitting the form:

1. Open browser Developer Tools (F12)
2. Check the Console tab for CSP violation errors
3. Look for `connect-src` directive blocking `api.web3forms.com`
4. Ensure the CSP meta tag in `index.html` includes the Web3Forms domain

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Form not submitting | Check browser console for network errors |
| "Network error" on production | Verify CSP includes `https://api.web3forms.com` in `connect-src` |
| Emails not received | Check spam folder, verify email in Web3Forms dashboard |
| Access key invalid | Regenerate key from dashboard |
| CSP blocking requests | Update CSP meta tag in `index.html` |

---

*Last updated: 2025-12-22*

