// Global Variables
const API_ENDPOINT = "placeholder"; // Replace 'placeholder' with actual API endpoint if applicable.

// Event Listener for Community Forum Post Button
document.addEventListener("DOMContentLoaded", () => {
  const postButton = document.querySelector(".btn-primary");

  var menuList = document.querySelector(".nav-links");
  menuList.style.maxHeight = "0px";

  window.togglemenu = function () {
    if (menuList.style.maxHeight === "0px") {
      menuList.style.maxHeight = "400px";
    } else {
      menuList.style.maxHeight = "0px";
    }
  };

  var moon = document.getElementById("moon");
  moon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    moon.src = document.body.classList.contains("dark-theme")
      ? "images/sun.svg"
      : "images/moon.svg";
  };

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollPosition = window.scrollY + 200; // adjust the offset as needed

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });
});

$(document).ready(function () {
  $("#title").focus();
  $("#text").autosize();
});
