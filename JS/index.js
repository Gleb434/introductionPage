const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener("click", function () {
    links.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
  document.addEventListener("DOMContentLoaded", function () {
    const homeLink = document.getElementById("home-link");
    if (homeLink) {
      homeLink.classList.add("active");
    }
  });
});
