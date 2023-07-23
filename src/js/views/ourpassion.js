/* Loading numbers */
// Elements
const ourpassionSect = document.getElementById("our-passion"),
  ourpassionNumEls = [...ourpassionSect.querySelectorAll(".js-loading-number")];

// Observing section
new IntersectionObserver(checkIntersection, {
  root: null,
  threshold: 0,
  // rootMargin: "-50%",
}).observe(ourpassionSect);

// Check intersection
function checkIntersection([entry]) {
  if (!entry.isIntersecting) return;

  ourpassionNumEls.forEach((el) => counting(el));
}

// Loading numbers
function counting(el) {
  const goal = +el.dataset.goal;
  let value = 0;

  const interval = setInterval(() => {
    el.innerText = new Intl.NumberFormat(navigator.language).format(value);
    value++;

    if (value > goal) clearInterval(interval);
  }, 1000 / goal);
}
