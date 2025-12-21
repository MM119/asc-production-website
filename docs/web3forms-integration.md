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

The following hidden fields are configured in the form:

```html
<input type="hidden" name="access_key" value="03fdcd58-65b8-468c-a6a2-68f54c7b0da0" />
<input type="hidden" name="subject" value="New Inquiry from ASC Website" />
<input type="hidden" name="from_name" value="ASC Website Contact Form" />
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

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Form not submitting | Check browser console for network errors |
| Emails not received | Check spam folder, verify email in Web3Forms dashboard |
| Access key invalid | Regenerate key from dashboard |

---

*Last updated: 2025-12-22*
