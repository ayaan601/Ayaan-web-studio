
// ========== MOBILE MENU ==========
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    menuToggle.textContent =
        navLinks.classList.contains("active") ? "✕" : "☰";
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        const whatsappNumber = "03314893006";
    });
});

// ========== WHATSAPP CONFIGURATION ==========

// Replace this with your WhatsApp number.
// Pakistan example: 923001234567
const whatsappNumber = "923XXXXXXXXX";

const whatsappLink = document.getElementById("whatsappLink");

whatsappLink.href =
    "https://wa.me/" + whatsappNumber;

whatsappLink.target = "_blank";
whatsappLink.rel = "noopener noreferrer";

// ========== CONTACT FORM ==========

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const service = document.getElementById("service").value;
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !service || !message) {
        alert("Please fill all the fields.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (whatsappNumber.includes("X")) {
        alert("Please add your real WhatsApp number in script.js first.");
        return;
    }

    const text =
        "Hello Ayaan Web Studio!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Service: " + service + "\n" +
        "Project Details: " + message;

    const url =
        "https://wa.me/" + whatsappNumber +
        "?text=" + encodeURIComponent(text);

    window.open(url, "_blank");

    contactForm.reset();
});

// ========== SIMPLE SCROLL REVEAL ==========

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .price-card, .about-box"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});
