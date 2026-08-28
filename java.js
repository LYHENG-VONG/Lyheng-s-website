// Mobile navigation
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

menuToggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
});

// Close mobile menu after clicking a link
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener("click", () => nav?.classList.remove("open"));
});

// Contact form demo
const contactForm = document.getElementById("contactForm");
contactForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const button = contactForm.querySelector("button");
    button.textContent = "Message Sent ✓";
    button.disabled = true;
    setTimeout(() => {
        contactForm.reset();
        button.textContent = "Send Message ✨";
        button.disabled = false;
    }, 1800);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
    });
}, { threshold: 0.12 });

document.querySelectorAll(".section, .project-card, .skill-card, .result-card, .contact-card")
    .forEach(el => {
        el.classList.add("scroll-reveal");
        observer.observe(el);
    });

// Active navigation link
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 180) current = section.id;
    });
    navLinks.forEach(link => {
        link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
});

// Theme toggle
const themeButton = document.createElement("button");
themeButton.className = "theme-toggle";
themeButton.setAttribute("aria-label", "Toggle dark mode");
themeButton.innerHTML = "☾";
document.querySelector(".navbar")?.appendChild(themeButton);

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    themeButton.innerHTML = document.body.classList.contains("dark-mode") ? "☀" : "☾";
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.innerHTML = "☀";
}
