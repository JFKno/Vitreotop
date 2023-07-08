// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic',
    before: (anchor, toggle) => {
      const targetSection = document.querySelector(anchor.getAttribute('href'));
      if (targetSection.id === 'hero') {
        // Disable scrolling to the left on the 'hero' section
        if (window.scrollX > 0) {
          window.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
          return false;
        }
      }
    }
  });

  // Scroll to "Our Services" section on page load
  const servicesSection = document.getElementById('services');
  if (servicesSection) {
    window.scrollTo({
      top: servicesSection.offsetTop,
      behavior: 'smooth'
    });
  }
});

// Highlight the active link based on scroll position
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.classList.contains(current)) {
      link.classList.add("active");
    }
  });
});

// Add this JavaScript code to your existing script.js file or create a new one

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  const drawer = document.querySelector(".drawer");

  menuIcon.addEventListener("click", () => {
    drawer.classList.toggle("open");
  });
});

/* Add this JavaScript code */
function toggleDropdown() {
  const dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}


