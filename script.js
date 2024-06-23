// Navigation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });

        // Burger Animation
        burger.classList.toggle('toggle');
    });
}

// Hero Slider
const heroSlider = () => {
    const slides = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg',
        'image5.jpg',
        'image6.jpg'
    ];

    let currentSlide = 0;
    const heroSlider = document.querySelector('.hero-slider');

    const createSlide = (src) => {
        const div = document.createElement('div');
        div.className = 'hero-slide';
        div.style.backgroundImage = `url(${src})`;
        return div;
    }

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlider();
    }

    const updateSlider = () => {
        heroSlider.innerHTML = '';
        heroSlider.appendChild(createSlide(slides[currentSlide]));
        gsap.from('.hero-slide', { opacity: 0, duration: 1 });
    }

    updateSlider();
    setInterval(nextSlide, 5000);
}

// Distance Cards
const createDistanceCards = () => {
    const distances = [
        { name: 'Miramar Beach', distance: '2.8 km', time: '9 minutes', image: 'miramar-beach-banner.webp' },
        { name: 'Floating Casino', distance: '2.7 km', time: '11 minutes', image: 'casino.png' },
        { name: 'Dona Paula', distance: '5.1 km', time: '14 minutes', image: 'dona.jpg' },
        { name: 'Church of Our Lady of the Immaculate Conception', distance: '2.2 km', time: '8 minutes', image: 'conception_church_main.jpg' },
        { name: 'Candolim Beach', distance: '14.3 km', time: '35 minutes', image: 'candolim-beach-banner.webp' },
        { name: 'Reis Magos fort', distance: '9.9 km', time: '23 minutes', image: 'reis.jpg' },
        { name: 'Old Goa', distance: '13.4 km', time: '25 minutes', image: 'old-goa.jpg' },
        { name: 'Baga Beach', distance: '19.2 km', time: '55 minutes', image: 'nightlife-in-baga-beach.webp' },
        { name: 'Calangute Beach', distance: '16.8 km', time: '49 minutes', image: 'calangute-beach-banner.webp' },
        { name: 'Goa International Airport', distance: 'Dabolim: 26.5 km, Mopa: 34.7 km', time: 'Dabolim: 41 minutes, Mopa: 1 hour', image: 'mia-airport-mopa-goa-190526.webp' }
    ];

    const container = document.querySelector('.card-container');

    distances.forEach(place => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${place.image}" alt="${place.name}">
            <div class="card-content">
                <h3>${place.name}</h3>
                <p>${place.distance} (${place.time})</p>
            </div>
        `;
        container.appendChild(card);
    });
}

// Review Slider
const createReviewSlider = () => {
    const reviews = [
        { image: 'review1.png', content: 'Great place to stay! Highly recommended.' },
        { image: 'review2.png', content: 'Excellent service and beautiful location.' },
        { image: 'review3.png', content: 'Clean rooms and friendly staff.' },
        { image: 'review4.png', content: 'Perfect for a relaxing vacation.' },
        { image: 'review5.png', content: 'Amazing experience, will definitely come back.' },
        { image: 'review6.png', content: 'Loved the proximity to popular attractions.' }
    ];

    const slider = document.querySelector('.review-slider');

    reviews.forEach(review => {
        const card = document.createElement('div');
        card.className = 'review-card';
        card.innerHTML = `
            <img src="${review.image}" alt="Reviewer">
            <p>${review.content}</p>
        `;
        slider.appendChild(card);
    });
}

// Form Submission
const handleFormSubmission = () => {
    const form = document.querySelector('#booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted!');
        alert('Thank you for your booking request. We will get back to you soon!');
        form.reset();
    });
}

// Scroll Animations
const initScrollAnimations = () => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.card', {
        scrollTrigger: {
            trigger: '.card',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });

    gsap.from('.taxi-card', {
        scrollTrigger: {
            trigger: '.taxi-card',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        x: -50,
        stagger: 0.2,
        duration: 1
    });

    gsap.from('.pricing-card', {
        scrollTrigger: {
            trigger: '.pricing-card',
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });
}

// Initialize all functions
const init = () => {
    navSlide();
    heroSlider();
    createDistanceCards();
    createReviewSlider();
    handleFormSubmission();
    initScrollAnimations();
}

// Run initialization on DOM content loaded
document.addEventListener('DOMContentLoaded', init);