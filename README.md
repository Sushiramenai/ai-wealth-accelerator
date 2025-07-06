# AI Wealth Accelerator - Setup Guide

## Quick Start (5 Minutes)

### 1. Get PayPal Business Account
- Go to https://www.paypal.com/business
- Sign up for business account
- Get your Client ID from: https://developer.paypal.com/dashboard/

### 2. Update PayPal Integration
Open `index.html` and replace `YOUR-PAYPAL-CLIENT-ID` with your actual PayPal Client ID:
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR-PAYPAL-CLIENT-ID&currency=USD"></script>
```

### 3. Upload Course Videos
1. Create your course videos (see Video Creation Guide below)
2. Upload to Google Drive
3. Set sharing to "Anyone with link can view"
4. Get the file IDs and update in `course-access.html`

### 4. Deploy Website
**Option A: GitHub Pages (Free)**
1. Create GitHub account
2. Create new repository
3. Upload all files
4. Go to Settings → Pages → Deploy from main branch
5. Your site will be live at: `https://yourusername.github.io/repository-name`

**Option B: Netlify (Free)**
1. Go to https://www.netlify.com
2. Drag and drop your folder
3. Site deploys instantly

## Video Creation Guide

### Tools Needed
- **OBS Studio**: https://obsproject.com (free screen recorder)
- **DaVinci Resolve**: https://www.blackmagicdesign.com/products/davinciresolve (free editor)
- **Google Slides**: For presentations

### Recording Process
1. Create slides for each module (10-15 slides per video)
2. Open OBS Studio
3. Add Display Capture source
4. Start recording and present your slides
5. Speak naturally - if you mess up, pause 3 seconds and redo

### Quick Video Scripts

**Module 1 Opening (2 minutes):**
```
"Welcome to Module 1 of AI Wealth Accelerator. I'm going to show you 
exactly how I went from zero to $10,000 per month using simple AI tools 
that anyone can master. No technical experience required.

In the next 45 minutes, you'll discover:
- The 3 AI tools that changed everything for me
- How to set up your AI income system today
- Your first $1,000 roadmap

Let's dive in..."
```

## Blog Article Template

Create a folder called `blog` and add articles like this:

`blog/how-to-make-money-with-chatgpt.html`:
```html
<!DOCTYPE html>
<html>
<head>
    <title>How to Make $5,000/Month with ChatGPT in 2024</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <div class="container">
        <h1>How to Make $5,000/Month with ChatGPT in 2024</h1>
        <!-- Article content -->
        
        <!-- CTA at bottom -->
        <div class="blog-cta">
            <h2>Ready to Scale Your AI Income?</h2>
            <a href="../index.html" class="module-link">Join AI Wealth Accelerator</a>
        </div>
    </div>
</body>
</html>
```

## Testing Checklist

- [ ] PayPal button works (use sandbox for testing)
- [ ] All language translations display correctly
- [ ] Course access page blocks non-purchasers
- [ ] Mobile responsive design works
- [ ] All animations run smoothly
- [ ] Social proof popups appear

## Launch Checklist

### Week 1
- [ ] Set up PayPal business account
- [ ] Record Module 1 videos
- [ ] Deploy website
- [ ] Test purchase flow

### Week 2
- [ ] Complete all module recordings
- [ ] Write first 5 blog articles
- [ ] Set up Facebook Business Manager
- [ ] Create ad creatives

### Week 3
- [ ] Publish all blog content
- [ ] Upload videos to Google Drive
- [ ] Update all video links
- [ ] Run test purchases

### Week 4
- [ ] Launch Facebook ads ($50/day)
- [ ] Monitor conversion rates
- [ ] Respond to customer emails
- [ ] Scale winning ads

## Facebook Ad Copy

**Primary Text:**
```
Discover how 2,847 regular people are generating $10,000+ per month with AI 
(No tech skills needed)

🎯 Start earning in 7 days
💰 Average student: $5K/month
⏰ Only 12 spots left at this price

Get instant access →
```

**Headline:** "AI Wealth Accelerator"
**Description:** "From $0 to $10K/month with simple AI tools"

## Support Email Templates

**Welcome Email:**
```
Subject: Welcome to AI Wealth Accelerator! 🚀

Hi [Name],

Congratulations on joining AI Wealth Accelerator!

Your course access is ready at: [course-link]

Quick tips to maximize your success:
1. Complete Module 1 today (just 45 minutes)
2. Take action on the first exercise
3. Share your wins in our community

You're about to transform your income with AI!

To your success,
[Your name]
```

## Troubleshooting

**PayPal not working?**
- Check that Client ID is correct
- Ensure you're using the live (not sandbox) ID
- Clear browser cache

**Videos not playing?**
- Verify Google Drive sharing settings
- Check file IDs are correct
- Try incognito mode

**Low conversions?**
- A/B test headlines
- Adjust countdown timer
- Increase urgency elements

Remember: Focus on getting your first 10 sales. Everything becomes easier after that!