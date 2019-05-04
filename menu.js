//lambda version
const toggleMenu = () => {
  menu.classList.toggle("menu--open");
};

//tutorial versions
const openMenu = () => {
  menu.style.width = "150px";
  menuButtonOpen.style.display = "none";
  pageWrapper.style.marginLeft = "150px";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";  opacity needs love

  menuContent.forEach(domElement => (domElement.style.display = "block"));
  //holy shit, this works!
};

const closeMenu = () => {
  menu.style.width = "0px";
  menuButtonOpen.style.display = "flex";
  pageWrapper.style.marginLeft = "0px";
  menuContent.forEach(domElement => (domElement.style.display = "none")); //NOT working
};

const menu = document.querySelector(".menu");
const menuButtonOpen = document.querySelector(".menu-button");
const menuButtonClose = document.querySelector(".menu-close-button");

const menuContent = document.querySelectorAll(".menu ul li"); //all  or NOT all to get just x?

const pageWrapper = document.getElementById("page-wrapper");

menuButtonOpen.addEventListener("click", () => openMenu());

menuButtonClose.addEventListener("click", () => closeMenu());

// #menu-close-button

console.log(menuContent);
console.log(
  "there are no errors to be found here, but thanks for checking : )"
);
