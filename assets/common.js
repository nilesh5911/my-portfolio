const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("is-open");
        mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    document.querySelectorAll("#nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("is-open");
            mobileMenuToggle.setAttribute("aria-expanded", "false");
        });
    });
}

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: "0px 0px -40px" });

document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));