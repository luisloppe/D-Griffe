document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const navList = document.querySelector(".nav-list");

  function toggleMenu() {
    mobileMenu.classList.toggle("active");
    navList.classList.toggle("active");
  }

  mobileMenu.addEventListener("click", toggleMenu);
});
