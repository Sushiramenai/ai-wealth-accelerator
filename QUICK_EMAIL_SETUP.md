# Quick Email Setup - 3 Simple Options

## Option 1: Gmail Auto-Responder (5 minutes) ✅ EASIEST

### Setup Steps:
1. **Create a dedicated Gmail account** for course delivery
   - Example: aiwealthcourse@gmail.com

2. **Set up vacation responder:**
   - Go to Gmail Settings → General → Vacation responder
   - Turn ON
   - Set dates far in future (2030)
   - Subject: "Welcome to AI Fortune Academy! 🚀 (Access Inside)"
   - Message: Copy from `automated-email-sequence.html` (Email 1)
   - Check "Send response to people in my Contacts"

3. **Update Stripe to notify this email:**
   - In Stripe Dashboard → Settings → Email receipts
   - Add BCC email: aiwealthcourse@gmail.com
   - Customer gets receipt + course access automatically!

4. **Add all customers to contacts:**
   - When someone purchases, Stripe emails them AND your Gmail
   - Gmail auto-responds with course access
   - Add their email to contacts so they get the auto-response

### Pros:
- Zero coding required
- Works immediately
- Free with Gmail

### Cons:
- Manual contact adding (or use Zapier to automate)
- Only sends one email (not full sequence)

---

## Option 2: Zapier Automation (15 minutes) 💪 RECOMMENDED

### Setup Steps:
1. **Create Zapier account** (free tier works)

2. **Create new Zap:**
   - Trigger: Stripe → New Payment
   - Action 1: Gmail → Send Email (welcome email)
   - Action 2: Google Sheets → Add Row (track customers)
   - Action 3: Google Contacts → Add Contact

3. **Configure email template:**
   - Copy content from `automated-email-sequence.html`
   - Personalize with Stripe customer data

4. **Set up email sequence (optional):**
   - Use Zapier's Delay function
   - Add multiple Gmail send actions
   - Space them out over days/weeks

### Pros:
- No coding needed
- Full automation
- Can send multiple emails
- Free for < 100 customers/month

### Cons:
- Requires Zapier account
- Limited to 100 tasks/month on free plan

---

## Option 3: Netlify Functions (30 minutes) 🚀 SCALABLE

### Quick Deploy:
1. **Create Netlify account**

2. **Deploy this function:**
```javascript
// netlify/functions/stripe-webhook.js
exports.handler = async (event) => {
  const data = JSON.parse(event.body);
  
  if (data.type === 'checkout.session.completed') {
    // Send email using SendGrid/Mailgun API
    // Or trigger Gmail via API
  }
  
  return { statusCode: 200 };
};
```

3. **Set webhook in Stripe:**
   - URL: https://your-site.netlify.app/.netlify/functions/stripe-webhook
   - Events: checkout.session.completed

### Pros:
- Fully automated
- Scalable
- Professional solution

### Cons:
- Requires some coding
- Need email service API

---

## 🎯 Quick Decision Guide:

**Just want it working NOW?** → Option 1 (Gmail)
**Want full automation without coding?** → Option 2 (Zapier)
**Planning to scale big?** → Option 3 (Netlify)

## 📧 Email Content Ready to Copy:

All email templates are in `automated-email-sequence.html` - just copy and paste!

Remember to update:
- YOUR-DOMAIN → sushiramenai
- [Your Name] → Your actual name
- Course access URL → https://sushiramenai.github.io/ai-wealth-accelerator/course-access-enhanced.html

---

**Pro Tip:** Start with Option 1 or 2 to launch quickly. You can always upgrade to Option 3 later when you're scaling!