// Mobile menu toggle
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.add("hidden");
}

// Add scroll-based animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

  // Hero section should be visible immediately
  const hero = document.getElementById("hero");
  if (hero) {
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }
});

// Language switching functions
function switchToEnglish() {
  window.location.href = "../index.html"; // Redirect to English version
}

function switchToArabic() {
  window.location.href = "./ar/index.html"; // Redirect to Arabic version
}

// Mobile menu toggle (your existing code)
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.add("hidden");
}

// Observe sections for scroll animations
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "all 0.6s ease-out";
    observer.observe(section);
  });

  // Hero section should be visible immediately
  const hero = document.getElementById("hero");
  if (hero) {
    hero.style.opacity = "1";
    hero.style.transform = "translateY(0)";
  }
});
