// Smooth Scroll Functionality
document.querySelectorAll('.nav-links a, .cta-button').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // adjust for fixed navbar
            behavior: 'smooth'
        });
    });
});
function openModal(imageSrc, description, title) {
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalDescription").textContent = description;
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("imageModal").style.display = "flex";
}

function closeModal(event) {
    if (event.target.classList.contains('modal') || event.target.classList.contains('close')) {
        document.getElementById("imageModal").style.display = "none";
    }
}

function openPopup() {
    document.getElementById('contactPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('contactPopup').style.display = 'none';
}


// Optional: Add hover effect for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Toggle Navbar for Mobile Devices
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
