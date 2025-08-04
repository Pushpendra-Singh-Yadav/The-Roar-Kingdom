document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    const voiceToggle = document.getElementById('voice-toggle');
    const canvas = document.getElementById('particle-canvas');
    const ctx = canvas.getContext('2d');

    // Particle Animation
    let particles = [];
    const particleCount = 30; // Reduced for mobile performance

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = 80; // Fixed height for navbar
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.5;
            this.speedX = Math.random() * 0.4 - 0.2;
            this.speedY = Math.random() * 0.4 - 0.2;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.1) this.size -= 0.01;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(0, 255, 204, 0.7)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
            if (p.size <= 0.1) {
                particles.splice(particles.indexOf(p), 1);
                particles.push(new Particle());
            }
        });
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Hamburger Menu
    menuToggle.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Touch Support for Mobile
    menuToggle.addEventListener('touchstart', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Smooth Scrolling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });

    // Scroll-based Navbar Effect
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 26, 47, 0.95)';
            navbar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.4)';
        } else {
            navbar.style.background = 'linear-gradient(180deg, rgba(10, 26, 47, 0.9), rgba(10, 26, 47, 0.7))';
            navbar.style.boxShadow = 'none';
        }
    });

    // Voice Navigation
    let recognition = null;
    if ('webkitSpeechRecognition' in window) {
        recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            const links = {
                'about': '#about',
                'tours': '#tours',
                'stays': '#stays',
                'guides': '#guides',
                'gallery': '#gallery',
                'home': '#home'
            };
            for (let key in links) {
                if (command.includes(key)) {
                    window.location.hash = links[key];
                    const targetElement = document.querySelector(links[key]);
                    if (targetElement) {
                        window.scrollTo({
                            top: targetElement.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                    break;
                }
            }
        };

        recognition.onerror = (event) => {
            console.error('Voice recognition error:', event.error);
        };
    }

    voiceToggle.addEventListener('click', () => {
        if (recognition) {
            voiceToggle.classList.toggle('active');
            if (voiceToggle.classList.contains('active')) {
                recognition.start();
                voiceToggle.style.filter = 'drop-shadow(0 0 12px #00ffcc)';
            } else {
                recognition.stop();
                voiceToggle.style.filter = 'none';
            }
        } else {
            alert('Voice recognition is not supported in this browser.');
        }
    });

    // Keyboard Accessibility for Menu Toggle
    menuToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Hero Canvas Particle Effect
    const canvas = document.getElementById('hero-canvas');
    const ctx = canvas.getContext('2d');

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let particles = [];
    const particleCount = 30;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 0.5 - 0.25;
            this.speedY = Math.random() * 0.5 - 0.25;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.1) this.size -= 0.02;
            if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
            if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
            ctx.fillStyle = 'rgba(255, 107, 107, 0.7)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function initParticles() {
        particles = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    function animateParticles() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.update();
            p.draw();
            if (p.size <= 0.1) {
                particles.splice(particles.indexOf(p), 1);
                particles.push(new Particle());
            }
        });
        requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Parallax Scrolling
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        const layers = document.querySelectorAll('.parallax-layer');
        layers.forEach(layer => {
            const depth = layer.getAttribute('data-depth') || 1;
            const translateY = scrollY * depth * 0.5;
            layer.style.transform = `translateY(${translateY}px)`;
        });
    });

    // CTA Ripple Effect
    document.querySelector('.cta-button').addEventListener('click', (e) => {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        const rect = e.target.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        e.target.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    });
});

// Ripple Effect CSS (Injected via JS)
const style = document.createElement('style');
style.innerHTML = `
    .ripple {
        position: absolute;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);