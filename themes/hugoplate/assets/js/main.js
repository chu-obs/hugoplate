// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // latestarticles Slider
  // ----------------------------------------
  new Swiper(".latestarticles-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".latestarticles-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

    // ourprojects Slider
  // ----------------------------------------
  new Swiper(".ourprojects-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".ourprojects-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });
})();
