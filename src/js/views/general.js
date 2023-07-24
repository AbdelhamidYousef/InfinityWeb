/* General DOM Manipulation */
//

// Inline Links SCrollIntoView
document.querySelectorAll("a[href*='#'").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById(el.getAttribute("href").slice(1)).scrollIntoView();
  })
);

// Current Year
document.querySelectorAll(".js-current-year").forEach((el) => {
  el.innerText = new Date().getFullYear();
});
