# EmailJS Setup Guide

This guide will help you set up EmailJS to send emails from your contact form to `steamed.dmpling@gmail.com`.

## 📧 Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Connect Your Email Service

1. **In EmailJS Dashboard**, go to "Email Services"
2. Click "Add New Service"
3. Choose **Gmail** (recommended) or your preferred email provider
4. Follow the setup wizard:
   - **For Gmail**: You'll need to authenticate with your Google account
   - Make sure to use the account: `steamed.dmpling@gmail.com`
5. Note down your **Service ID** (something like `service_xxxxxxx`)

### 3. Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. **Template Name**: `Contact Form Submission`
4. **Copy this template content**:

```html
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}

Subject: {{subject}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
```

5. **Template Variables** (make sure these match):
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{from_phone}}`
   - `{{subject}}`
   - `{{message}}`
   - `{{to_email}}`

6. **Set the "To" field**: `{{to_email}}` or directly `steamed.dmpling@gmail.com`
7. Save the template and note down your **Template ID** (something like `template_xxxxxxx`)

### 4. Get Your Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (something like `xxxxxxxxx`)

### 5. Update Your React Code

Open `src/components/Contact.js` and replace these lines (around line 95-97):

```javascript
// Replace these with your actual EmailJS values
const serviceID = 'YOUR_EMAILJS_SERVICE_ID';     // Replace with your Service ID
const templateID = 'YOUR_EMAILJS_TEMPLATE_ID';   // Replace with your Template ID
const publicKey = 'YOUR_EMAILJS_PUBLIC_KEY';     // Replace with your Public Key
```

**Example:**
```javascript
const serviceID = 'service_abc123xyz';
const templateID = 'template_def456uvw';
const publicKey = 'abcdef123456789';
```

### 6. Test Your Setup

1. **Start your development server**: `npm start`
2. **Fill out the contact form** with test data
3. **Click "Send Message"**
4. **Check your email** at `steamed.dmpling@gmail.com`

## 🎯 Expected Result

When someone fills out your contact form, you'll receive an email like this:

```
Subject: New Contact Form Submission - [Their Subject]

From: John Doe
Email: john@example.com
Phone: (123) 456-7890

Subject: Question about your services

Message:
Hi, I'm interested in learning more about your DevOps services.
Could we schedule a call to discuss my project requirements?

---
This message was sent from your portfolio website contact form.
```

## 🔧 Troubleshooting

### Common Issues:

**1. "Service ID not found"**
- Double-check your Service ID in EmailJS dashboard
- Make sure the service is active

**2. "Template not found"**
- Verify your Template ID
- Ensure the template is published

**3. "Invalid public key"**
- Check your Public Key in Account settings
- Make sure there are no extra spaces

**4. Emails not arriving**
- Check spam/junk folder
- Verify the email service connection in EmailJS
- Test with a different template first

### Testing Tips:

1. **Use EmailJS Test**: In your EmailJS dashboard, use the "Test" button on your template
2. **Check Browser Console**: Look for any error messages in the developer console
3. **Network Tab**: Check if the EmailJS request is being sent successfully

## 📊 EmailJS Free Tier Limits

- **200 emails/month** (free tier)
- **Upgrade available** for higher limits
- **Multiple services** can be connected

## 🔒 Security Notes

- Your EmailJS Public Key is safe to expose in client-side code
- EmailJS handles the actual email sending securely
- Template variables prevent email injection attacks

## 📞 Support

If you need help:
1. Check EmailJS documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
2. Contact EmailJS support
3. Review the browser console for error messages

---

**Once set up, your contact form will automatically send emails to `steamed.dmpling@gmail.com` whenever someone submits the form!** 🎉