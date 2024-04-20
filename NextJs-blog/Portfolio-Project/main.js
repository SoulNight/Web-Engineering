(function() {
  var navbar = document.getElementById('navbar');
  var header = document.querySelector('header');
  var headerHeight = header.offsetHeight; // Get the height of the header

  // Function to add or remove the 'nav-visible' class based on scroll position and screen width
  function toggleNavbarVisibility() {
    if (window.scrollY > headerHeight || window.innerWidth < 768) { // Check for mobile width
      navbar.classList.add('nav-visible');
    } else {
      navbar.classList.remove('nav-visible');
    }
  }

  // Initial call to set the navbar visibility on page load
  toggleNavbarVisibility();

  // Update navbar visibility on scroll and resize
  window.addEventListener('scroll', toggleNavbarVisibility);
  window.addEventListener('resize', function() {
    headerHeight = header.offsetHeight; // Update the header height on resize
    toggleNavbarVisibility();
  });
})();
