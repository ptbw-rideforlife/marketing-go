const toggleMenu = () => {
  //menu.classList.toggle("menu--open");
  menu.style.width = "250px";
};
const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", () => toggleMenu());
