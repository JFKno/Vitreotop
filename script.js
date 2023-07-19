// Smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", () => {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
    easing: 'easeInOutCubic'
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

document.addEventListener("DOMContentLoaded", function() {
  var containerElement = document.querySelector(".container");
  containerElement.classList.add("fade-in");

  var headerTextElements = document.querySelectorAll("nav ul li");
  headerTextElements.forEach(function(element) {
    element.classList.add("fade-in");
  });
});


// Sélectionnez l'icône du menu mobile
var mobileMenuIcon = document.querySelector('.mobile-menu .menu-icon');

// Sélectionnez les options du menu mobile
var mobileMenuOptions = document.querySelector('.mobile-menu .menu-options');

// Ajoutez un gestionnaire d'événement au clic sur l'icône du menu mobile
mobileMenuIcon.addEventListener('click', function() {
  // Basculez la classe 'active' sur les options du menu mobile pour les afficher ou les cacher
  mobileMenuOptions.classList.toggle('active');
});
