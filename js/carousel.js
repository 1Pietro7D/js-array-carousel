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

// directNavigation
const buttonDirectNav = document.getElementById("directNav");
const navSingle = document.getElementById("navSingleCarousel");
let clicker;
buttonDirectNav.addEventListener("click", function () {
  if (clicker) {
    buttonDirectNav.classList.remove("horizontal");
    buttonDirectNav.classList.add("vertical");
    navSingle.classList.remove("horizontal");
    navSingle.classList.add("vertical");
    clicker = false;
  } else {
    buttonDirectNav.classList.add("horizontal");
    buttonDirectNav.classList.remove("vertical");
    navSingle.classList.add("horizontal");
    navSingle.classList.remove("vertical");
    clicker = true;
  }
});

// const image = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

// NAV SINGLE CAROUSEL

// collego il pulsante previous
const carouselFinishContainer = document.getElementById(
  "carouselFinishContainer"
);

const images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
let imagesIndex = 0;

const carouselInfinityContainer = document.getElementById(
  "carouselInfinityContainer"
);
document.getElementById("previous").addEventListener("click", function () {
  const activeElement = document.querySelector(
    ".carouselContainer.active > .item.active"
  );
  const previousElement = activeElement.previousElementSibling;
  if (previousElement) {
    activeElement.classList.remove("active");
    previousElement.classList.add("active");
  }
  carouselInfinityContainer.innerHTML = "";
  if (imagesIndex > 0) {
    imagesIndex--;
  } else {
    imagesIndex = images.length - 1;
    console.log("guarda me");
  }

  for (let index = 0; index < images.length; index++) {
    let activeClass = "";
    if (index === imagesIndex) {
      activeClass = "active";
    }
    carouselInfinityContainer.innerHTML += `<img class="item ${activeClass}" src="img/0${images[index]}" alt"" />`;
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
