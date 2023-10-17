// UI Variables
const darkModeDot = document.getElementById("dark-mode");
const lightModeDot = document.getElementById("light-mode");
const greenModeDot = document.getElementById("green-mode");
const purpleModeDot = document.getElementById("purple-mode");
const themeDots = document.querySelectorAll(".theme-dot");
const themeStyle = document.getElementById("theme-style");
const workSection = document.getElementById("work");

// Event Listeners
themeDots.forEach(function (themeDot) {
  themeDot.addEventListener("click", dotClicked);
});

document.addEventListener("DOMContentLoaded", checkLSAndRunCode);

// dotClicked function
function dotClicked(e) {
  if (e.target.id === "light-mode") {
    themeStyle.setAttribute("href", "./css/default.css");
    localStorage.setItem("color", "light");
  } else if (e.target.id === "green-mode") {
    themeStyle.setAttribute("href", "./css/green.css");
    localStorage.setItem("color", "green");
  } else if (e.target.id === "dark-mode") {
    themeStyle.setAttribute("href", "./css/blue.css");
    localStorage.setItem("color", "dark");
  } else if (e.target.id === "purple-mode") {
    themeStyle.setAttribute("href", "./css/purple.css");
    localStorage.setItem("color", "purple");
  }
}

// checkLsAndRunCode function
function checkLSAndRunCode(e) {
  if (localStorage.getItem("color") === "light") {
    themeStyle.setAttribute("href", "./css/default.css");
  } else if (localStorage.getItem("color") === "dark") {
    themeStyle.setAttribute("href", "./css/blue.css");
  } else if (localStorage.getItem("color") === "green") {
    themeStyle.setAttribute("href", "./css/green.css");
  } else if (localStorage.getItem("color") === "purple") {
    themeStyle.setAttribute("href", "./css/purple.css");
  }
}

// Scroll Effect
const navbar = document.getElementById("navbar");
let scrolled = false;

window.onscroll = function () {
  if (pageYOffset > 100) {
    navbar.classList.remove("top");
    if (!scrolled) {
      navbar.style.transform = "translateY(-70px)";
    }
    setTimeout(function () {
      navbar.style.transform = "translateY(0)";
      scrolled = true;
    }, 200);
  } else {
    navbar.classList.add("top");
    scrolled = false;
  }
};
