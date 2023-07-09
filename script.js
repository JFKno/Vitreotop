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

// Add event listeners to the menu icon and dropdown content
const menuIcon = document.querySelector('.menu-icon');
const dropdown = document.querySelector('.dropdown-content');
let isOpen = false;
let isMenuHovered = false;
let isDropdownHovered = false;

menuIcon.addEventListener('mouseenter', openMenu);
menuIcon.addEventListener('mouseleave', closeMenu);
dropdown.addEventListener('mouseenter', () => { isDropdownHovered = true; });
dropdown.addEventListener('mouseleave', () => { isDropdownHovered = false; });

// Add event listener to the document for cursor movement outside the menu icon and dropdown content
document.addEventListener('mousemove', handleMouseMove);

function openMenu() {
  isOpen = true;
  dropdown.style.display = 'block';
  dropdown.style.opacity = '1'; /* Set opacity to 1 */
  dropdown.style.transform = 'translateX(0)'; /* Move in from right */
  menuIcon.style.opacity = '0.5'; /* Reduce opacity of menu icon on hover */
}

function closeMenu() {
  if (!isMenuHovered && !isDropdownHovered) {
    isOpen = false;
    dropdown.style.opacity = '0'; /* Set opacity to 0 */
    dropdown.style.transform = 'translateX(-100%)'; /* Move out to left */
    menuIcon.style.opacity = '1'; /* Restore opacity of menu icon */

    setTimeout(() => {
      dropdown.style.display = 'none';
    }, 300); /* Wait for transition to complete */
  }
}

function handleMouseMove(event) {
  isMenuHovered = menuIcon.contains(event.target);
  if (!isMenuHovered) {
    isDropdownHovered = dropdown.contains(event.target);
  }

  if (!isMenuHovered && !isDropdownHovered && isOpen) {
    closeMenu();
  }
}
