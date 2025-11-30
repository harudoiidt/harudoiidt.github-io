document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('overflow-hidden');
    }

    if(menuBtn) menuBtn.addEventListener('click', toggleMenu);
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', toggleMenu);
    
    mobileLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Scroll Animation (Fade Up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special animation for underline
                if (entry.target.classList.contains('do-it-underline')) {
                    entry.target.classList.add('in-view');
                }
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up, .do-it-underline');
    fadeElements.forEach(el => observer.observe(el));

    // Header Background on Scroll
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if(!header) return;
        if (window.scrollY > 50) {
            header.classList.add('shadow-md');
            header.style.background = "rgba(255, 255, 255, 0.95)";
        } else {
            header.classList.remove('shadow-md');
            header.style.background = "rgba(255, 255, 255, 0.9)";
        }
    });
});