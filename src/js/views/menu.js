const menuContainer = document.getElementById("menu-container");

menuContainer.addEventListener("click", function () {
  this.classList.toggle("js-active-menu");
});
