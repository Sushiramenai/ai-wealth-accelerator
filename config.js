// Configuration file for AI Wealth Accelerator
// This file stores important configuration that shouldn't be hardcoded in HTML

const CONFIG = {
    // PayPal Configuration
    paypal: {
        clientId: 'AbHykuH824RZ6LTfXEd2CvPgKS44eJt7YbjLaSWzBj6RpzjDgn0hStYIQqD0wORU4GvJHS0sOavspuLz', // PayPal Live Client ID
        currency: 'USD',
        productPrice: 497
    },
    
    // Course Configuration
    course: {
        accessUrl: 'course-access-enhanced.html',
        supportEmail: 'support@aiwealthaccelerator.com'
    },
    
    // Timer Configuration
    timer: {
        duration: 15 * 60 * 1000, // 15 minutes in milliseconds
        showUrgency: true
    }
};

// Make config available globally
window.AIWealthConfig = CONFIG;