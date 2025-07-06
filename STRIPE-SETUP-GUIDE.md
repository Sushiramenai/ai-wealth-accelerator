# 🚀 Stripe Setup Guide - 5 Minutes to Launch

## Step 1: Create Your Stripe Account (2 minutes)
1. Go to https://stripe.com
2. Click "Start now"
3. Enter your email and create password
4. Verify your email

## Step 2: Get Your API Keys (1 minute)
1. Once logged in, you'll see the Dashboard
2. Look for "Developers" in the left menu
3. Click "API keys"
4. You'll see:
   - **Publishable key**: Starts with `pk_test_` (for testing) or `pk_live_` (for real payments)
   - **Secret key**: Starts with `sk_test_` or `sk_live_` (keep this secure!)

## Step 3: Create Your Product (2 minutes)
1. Go to "Products" in the dashboard
2. Click "Add product"
3. Fill in:
   - **Name**: AI Wealth Accelerator
   - **Price**: $497.00
   - **Type**: One-time
4. Click "Save product"
5. Copy the **Price ID** (looks like: `price_1234567890abcdef`)

## Step 4: Update Your Config (30 seconds)

Open `config.js` and update:

```javascript
stripe: {
    publishableKey: 'pk_test_YOUR_KEY_HERE', // Paste your publishable key
    priceId: 'price_YOUR_PRICE_ID_HERE',    // Paste your price ID
    successUrl: window.location.origin + '/course-portal.html',
    cancelUrl: window.location.origin + '/index.html'
}
```

## Step 5: Test It!

1. Open your site
2. Click any "Get Instant Access" button
3. You'll see Stripe's professional checkout page
4. Test with card: `4242 4242 4242 4242` (any future date, any CVC)

## 🎯 That's It! You're Live!

### Test Cards for Development:
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002
- **Requires Auth**: 4000 0025 0000 3155

### Going Live:
1. Complete your Stripe account verification
2. Switch from test keys to live keys in config.js
3. Change `pk_test_` to `pk_live_`
4. Change `price_` ID to your live price ID

## 💡 Pro Tips:

1. **Custom Checkout**: Instead of buttons everywhere, we now have ONE clean checkout flow
2. **Mobile Friendly**: Stripe checkout works perfectly on all devices
3. **Global Payments**: Accepts cards from 135+ countries automatically
4. **Security**: PCI compliant, SCA ready, fraud protection built-in

## 🔧 Advanced Features (After Launch):

- Add Apple Pay / Google Pay (automatic with Stripe)
- Subscription options
- Payment plans
- Coupons and discounts
- Affiliate tracking
- Revenue analytics

## Need Help?

- Stripe Support: https://support.stripe.com
- Test your integration: https://stripe.com/docs/testing
- Check payment status: Your Stripe Dashboard → Payments

---

**Remember**: Start with test mode, make a few test purchases, then switch to live mode when ready!