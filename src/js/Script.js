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
