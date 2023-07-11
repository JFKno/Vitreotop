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


