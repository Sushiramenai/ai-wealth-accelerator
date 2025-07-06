// Configuration file for AI Wealth Accelerator
// This file stores important configuration that shouldn't be hardcoded in HTML

const CONFIG = {
    // Stripe Configuration
    stripe: {
        publishableKey: 'pk_live_51Rht5YDldn9foN4AENSW6qDrXwYNLPA858wEF6kVZEYYYmyjFlfoHDPEdM5Ru6zXV0Et3bricf5Sbaqklpnnewyl00CvBDdJzV',
        priceId: 'price_1Ri1jzDldn9foN4AZaSFBbOc', // AI Fortune Academy - $497
        successUrl: window.location.origin + '/course-access-enhanced.html?session_id={CHECKOUT_SESSION_ID}',
        cancelUrl: window.location.origin + '/index.html',
        mode: 'payment' // or 'subscription' if you want recurring payments
    },
    
    // Course Configuration
    course: {
        accessUrl: 'course-access-enhanced.html',
        supportEmail: 'support@aiwealthaccelerator.com',
        productName: 'AI Fortune Academy',
        productPrice: 497
    },
    
    // Timer Configuration
    timer: {
        duration: 15 * 60 * 1000, // 15 minutes in milliseconds
        showUrgency: true
    }
};

// Make config available globally
window.AIWealthConfig = CONFIG;