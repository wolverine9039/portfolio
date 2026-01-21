# EmailJS Setup Guide

## Quick Start

Follow these steps to configure EmailJS for your contact form:

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service

1. Go to **Email Services** in the dashboard
2. Click "Add New Service"
3. Select your email provider (Gmail recommended)
4. Connect your email account
5. **Copy the Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click "Create New Template"
3. Use these template variables in your template:

```
Subject: New Contact from {{from_name}}

Hello Mayank,

You have received a new message from your portfolio website.

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. **Copy the Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (also called User ID)
3. **Copy the Public Key** (e.g., `abc123XYZ`)

### 5. Update Environment Variables

1. Open `.env` file in your project root
2. Replace placeholders with your actual credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_abc123
VITE_EMAILJS_TEMPLATE_ID=template_xyz789
VITE_EMAILJS_PUBLIC_KEY=abc123XYZ
```

### 6. Restart Dev Server

```bash
# Stop the current dev server (Ctrl+C)
# Then restart it
npm run dev
```

### 7. Test the Contact Form

1. Navigate to `http://localhost:5174/#contact`
2. Fill out the form with:
   - Your name
   - Your email
   - A test message
3. Click "Send Message 🚀"
4. Check your email inbox for the test message

## Rate Limits

- **Free tier**: 200 emails/month
- **Upgrade**: Available if you need more

## Troubleshooting

### "Failed to send message" error

1. Check your `.env` file has correct credentials
2. Verify you restarted the dev server after updating `.env`
3. Check browser console for detailed error messages
4. Verify EmailJS service is active in dashboard

### Email not received

1. Check spam/junk folder
2. Verify template is active in EmailJS dashboard
3. Check EmailJS dashboard for delivery logs

## Security

- ✅ `.env` is in `.gitignore` (credentials won't be committed)
- ✅ EmailJS public key is safe to expose (client-side only)
- ✅ Rate limiting handled by EmailJS automatically
