(function() {
  var navbar = document.getElementById('navbar');
  var header = document.querySelector('header');
  var headerHeight = header.offsetHeight; // Get the height of the header

  // Add or remove the 'nav-visible' class based on scroll position
  function toggleNavbarVisibility() {
    if (window.scrollY > headerHeight) {
      navbar.classList.add('nav-visible');
    } else {
      navbar.classList.remove('nav-visible');
    }
  }
  // Initial call to set the navbar visibility on page load
  toggleNavbarVisibility();

  // Update navbar visibility on scroll
  window.addEventListener('scroll', toggleNavbarVisibility);
})();
