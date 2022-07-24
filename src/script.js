//navbar on scroll
window.onscroll = function () {
  const navbar = document.querySelector("header");
  const fixedNav = navbar.offsetTop;

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};
