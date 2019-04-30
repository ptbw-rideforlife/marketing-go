//lambda version
const toggleMenu = () => {
  menu.classList.toggle("menu--open");
};

//tutorial versions
const openMenu = () => {
  menu.style.width = "250px";
};

const closeMenu = () => {
  menu.style.width = "0px";
};

const menu = document.querySelector(".menu");
const menuButtonOpen = document.querySelector(".menu-button");
const menuButtonClose = document.querySelector(".menu-close-button");

menuButtonOpen.addEventListener("click", () => openMenu());

menuButtonClose.addEventListener("click", () => closeMenu());

// #menu-close-button
