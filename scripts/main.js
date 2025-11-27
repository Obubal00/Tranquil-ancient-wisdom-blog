// Ancient Wisdom Blog - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Email form submission
    const emailForm = document.querySelector('.email-form');
    if (emailForm) {
        emailForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Here you would integrate with your email service
            console.log('Email captured:', email);
            
            // Show success message
            this.innerHTML = `
                <div class="success-message" style="color: white; font-size: 1.1rem;">
                    ✨ Thank you! The "Way of Flow" guide is on its way to your inbox.
                </div>
            `;
        });
    }

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for animation
    document.querySelectorAll('.post-card, .pillar, .lead-magnet').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Ancient wisdom quote rotator
    const wisdomQuotes = [
        "Nature does not hurry, yet everything is accomplished. — Lao Tzu",
        "The journey of a thousand miles begins with a single step. — Lao Tzu",
        "When I let go of what I am, I become what I might be. — Lao Tzu",
        "He who knows that enough is enough will always have enough. — Lao Tzu",
        "The wise man does not lay up his own treasures. — Lao Tzu"
    ];

    function rotateQuote() {
        const quoteElement = document.querySelector('.wisdom-quote');
        if (quoteElement) {
            const randomQuote = wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)];
            quoteElement.textContent = randomQuote;
        }
    }

    // Rotate quote every 10 seconds
    setInterval(rotateQuote, 10000);

    // Initialize first quote
    rotateQuote();

    // Affiliate link tracking
    document.querySelectorAll('.affiliate-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // Here you would integrate with your affiliate tracking
            console.log('Affiliate link clicked:', this.href);
            // You might want to send this to Google Analytics or your tracking system
        });
    });
});

// Service Worker for offline functionality (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js').then(function(registration) {
            console.log('ServiceWorker registration successful');
        }, function(err) {
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}