# PayPal Client ID Setup Guide

## Finding Your Client ID

### Step 1: Create an App
1. Go to https://developer.paypal.com/dashboard/
2. Click **"Apps & Credentials"** in the top menu
3. Make sure you're on the **"Live"** tab (not Sandbox)
4. Click the blue **"Create App"** button

### Step 2: Set Up Your App
1. **App Name**: "AI Wealth Accelerator" (or any name)
2. **App Type**: Select "Merchant" 
3. Click **"Create App"**

### Step 3: Get Your Client ID
1. After creating the app, you'll see your app dashboard
2. Your **Client ID** will be displayed at the top
3. It looks like: `AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS`

### Step 4: Update Your Website
1. Copy your Client ID
2. Open `index.html` 
3. Find this line (near the bottom):
```html
<script src="https://www.paypal.com/sdk/js?client-id=YOUR-PAYPAL-CLIENT-ID&currency=USD"></script>
```
4. Replace `YOUR-PAYPAL-CLIENT-ID` with your actual Client ID

## Important Notes

⚠️ **Make sure you're on "Live" not "Sandbox"**
- Sandbox = test environment (fake money)
- Live = real payments

⚠️ **Don't share your Secret Key**
- Only the Client ID goes in your website
- Keep the Secret Key private

## Quick Troubleshooting

**Can't see "Apps & Credentials"?**
- You might need to verify your PayPal business account first
- Check your email for verification steps

**No "Create App" button?**
- Make sure you're logged into your business account
- Try refreshing the page

**Getting errors?**
- Double-check you copied the full Client ID
- Make sure there are no extra spaces
- Verify you're using the Live Client ID, not Sandbox

## Testing Your Integration

1. Open your website locally
2. Click the payment button
3. You should see the PayPal checkout popup
4. You can test with your own PayPal account

That's it! Your PayPal integration is ready to accept payments.