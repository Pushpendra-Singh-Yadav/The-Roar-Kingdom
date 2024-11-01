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

    // Open Popup
    function openPopup() {
        document.getElementById("contactPopup").style.display = "flex";
    }

    // Close Popup
    function closePopup() {
        document.getElementById("contactPopup").style.display = "none";
    }

    // Close the popup if the user clicks outside the popup content
    document.getElementById("contactPopup").addEventListener("click", function(event) {
        if (event.target.classList.contains("popup-overlay")) {
            closePopup();
        }
    });

// Optional: Add hover effect for social icons
document.querySelectorAll('.social-icon').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.1)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});
