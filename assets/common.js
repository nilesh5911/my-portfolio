// Theme Toggle
const themeToggle = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

if (themeToggle) {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme") || "light";
    htmlElement.setAttribute("data-theme", savedTheme);
    applyTheme(savedTheme);
    
    themeToggle.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const newTheme = currentTheme === "dark" ? "light" : "dark";
        htmlElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
}

function applyTheme(theme) {
    updateThemeIcon(theme);
    updateSkillIcons(theme);
    
    // Add or remove 'dark' class for Tailwind dark mode
    if (theme === "dark") {
        htmlElement.classList.add("dark");
    } else {
        htmlElement.classList.remove("dark");
    }
}

function updateThemeIcon(theme) {
    if (themeToggle) {
        themeToggle.innerHTML = theme === "dark" ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }
}

function updateSkillIcons(theme) {
    document.querySelectorAll(".skill-icon").forEach(icon => {
        const lightElements = icon.querySelectorAll("[data-theme='light']");
        const darkElements = icon.querySelectorAll(".dark-mode");
        
        if (theme === "dark") {
            lightElements.forEach(el => el.style.display = "none");
            darkElements.forEach(el => el.style.display = "block");
        } else {
            lightElements.forEach(el => el.style.display = "block");
            darkElements.forEach(el => el.style.display = "none");
        }
    });
}

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("hidden");
    });
    
    // Close menu when link clicked
    document.querySelectorAll("#nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.add("hidden");
        });
    });
}

// Fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
    observer.observe(el);
});
