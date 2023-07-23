// Projects Swiper
const projectsOptions = {
  // slidesPerView
  breakpoints: {
    500: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2.5,
      spaceBetween: 10,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1800: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    2400: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },

  // Centring slides
  centeredSlides: true,
  centeredSlidesBounds: true,

  // Scrolling Parameters
  speed: 1000,
  loop: true,

  // Autoplay
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  // Navigation
  grabCursor: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

["#website-swiper", "#webapps-swiper"].forEach(
  (el) => new Swiper(el, projectsOptions)
);

// Clients Swiper
const clientsOptions = {
  // slidesPerView
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    },
    1800: {
      slidesPerView: 5,
    },
  },

  // Scrolling Parameters
  speed: 1000,
  loop: true,

  // Autoplay
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  // Navigation
  grabCursor: true,
  mousewheel: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
};

new Swiper("#clients-swiper", clientsOptions);
