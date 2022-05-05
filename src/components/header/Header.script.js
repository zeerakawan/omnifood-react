// MOBILE NAV BUTTON
const mobNavElement = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

mobNavElement.addEventListener("click", function () {
  headerElement.classList.toggle("nav-open");
});
