const menuContainer = document.getElementById("menu-container"),
  menuBtn = menuContainer.querySelector("#menu-btn");

menuContainer.addEventListener("click", () => {
  menuBtn.classList.toggle("js-active-menu");
});
