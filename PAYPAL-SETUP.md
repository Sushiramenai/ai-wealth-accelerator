# 🔐 PayPal Setup - One Time Configuration

## Quick Setup (2 minutes)

### Step 1: Add Your PayPal Client ID

1. Open `config.js` in your editor
2. Find this line:
   ```javascript
   clientId: 'YOUR_PAYPAL_CLIENT_ID_HERE',
   ```
3. Replace `YOUR_PAYPAL_CLIENT_ID_HERE` with your actual PayPal Client ID

Example:
```javascript
clientId: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
```

### Step 2: Verify It Works

1. Open your site locally or on GitHub Pages
2. Click any "Get Instant Access" button
3. You should see the PayPal payment popup
4. If you see an error, double-check your Client ID

## 📝 Your PayPal Client ID Reference

Once you add your Client ID to config.js, it will be used everywhere automatically:
- All payment buttons
- All language versions
- Future updates

## 🔒 Security Notes

- The Client ID is PUBLIC (safe to share)
- The Secret Key is PRIVATE (never share or commit)
- Only the Client ID goes in your code

## 💡 Benefits of Using config.js

1. **One Place**: Update your Client ID in one file instead of searching through code
2. **Easy Updates**: Change prices, emails, or settings without touching HTML
3. **No More Searching**: Your config is always in `config.js`
4. **Version Control**: Can commit without worrying about exposing sensitive data

## 🚀 Other Config Options

In `config.js` you can also update:

```javascript
// Change product price
productPrice: 497  // Change to any amount

// Change support email
supportEmail: 'support@aiwealthaccelerator.com'

// Change course redirect
accessUrl: 'course-access-enhanced.html'

// Timer settings
duration: 15 * 60 * 1000  // 15 minutes
```

## ✅ That's It!

Your PayPal is now configured. The site will automatically:
- Load PayPal with your Client ID
- Use your configured price
- Redirect to your course after payment

No need to edit HTML files or search for PayPal settings again!