// Dropdown
const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = () => {
  dropdownMenu.classList.toggle("show");
  toggleArrow.classList.toggle("rotate");
};

dropdownBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleDropdown();
});

document.documentElement.addEventListener("click", () => {
  if (dropdownMenu.classList.contains("show")) {
    toggleDropdown();
  }
});

// Maps
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".sidebar-button");
  const content = document.querySelector(".content");
  const slider = document.querySelector(".slider");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const url = button.getAttribute("data-url");
      if (url) {
        window.location.href = url;
      } else {
        console.error("URL not found on button");
      }
    });
  });
});
