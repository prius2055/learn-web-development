const hamburger = document.querySelector(".hamburger");
const mobileNavCloseBtn = document.querySelector(".btn-close");
const mainContainer = document.getElementById("main-container");
const container = document.getElementById("container");
const mobileNav = document.querySelector(".mobile-nav");
const logo = document.querySelector(".logo");
const mobileNavLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mainContainer.classList.toggle("active");
  container.classList.toggle("active");
  logo.classList.toggle("active");
});

mobileNavCloseBtn.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileNavCloseBtn.classList.toggle("active");
  mobileNav.classList.toggle("active");
  mainContainer.classList.toggle("active");
  container.classList.toggle("active");
  logo.classList.toggle("active");
});

mobileNavLink.forEach((nav) => {
  nav.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileNavCloseBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
    mainContainer.classList.toggle("active");
    container.classList.toggle("active");
    logo.classList.toggle("active");
  });
});
