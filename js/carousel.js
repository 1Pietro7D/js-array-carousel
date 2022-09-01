console.log("hello world");
// le variabili vanno resettate a ogni evento

// NAV CAROUSELS

// previus carousel
document
  .getElementById("previousCarousel")
  .addEventListener("click", function () {
    const activeElementCarousel = document.querySelector(
      ".carouselContainer.active"
    );
    const previousElementCarousel =
      activeElementCarousel.previousElementSibling;
    if (previousElementCarousel) {
      activeElementCarousel.classList.remove("active");
      previousElementCarousel.classList.add("active");
    }
  });

// next carousel

document.getElementById("nextCarousel").addEventListener("click", function () {
  const activeElementCarousel = document.querySelector(
    ".carouselContainer.active"
  );
  const nextElementCarousel = activeElementCarousel.nextElementSibling;
  if (nextElementCarousel) {
    activeElementCarousel.classList.remove("active");
    nextElementCarousel.classList.add("active");
  }
});

// const image = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// NAV SINGLE CAROUSEL

// collego il pulsante previous

document.getElementById("previous").addEventListener("click", function () {
  const activeElement = document.querySelector(
    ".carouselContainer.active > .item.active"
  );
  const previousElement = activeElement.previousElementSibling;
  if (previousElement) {
    activeElement.classList.remove("active");
    previousElement.classList.add("active");
  }
});

// collego pulsante next

document.getElementById("next").addEventListener("click", function () {
  const activeElement = document.querySelector(
    ".carouselContainer.active > .item.active"
  );
  const nextElement = activeElement.nextElementSibling;
  if (nextElement) {
    activeElement.classList.remove("active");
    nextElement.classList.add("active");
  }
});
