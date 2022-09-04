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

const imagesInfinity = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];
const imagesInfinityThumbs = [
  "01.jpg",
  "02.jpg",
  "03.jpg",
  "04.jpg",
  "05.jpg",
  "06.jpg",
  "07.jpg",
  "08.jpg",
  "09.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
  "16.jpg",
  "17.jpg",
  "18.jpg",
];
let imagesIndex = 0;
let thumbsIndex = 0;

const carouselInfinityContainer = document.getElementById(
  "carouselInfinityContainer"
);
const carouselInfinityThumbsContainer = document.getElementById(
  "carouselInfinityThumbsContainer"
);
const imageContainer = document.getElementById("imageContainer");

// EVENT CLICK PREVIUS
document.getElementById("previous").addEventListener("click", function () {
  // Call Active Carousel Container
  const activeElement = document.querySelector(
    ".carouselContainer.active .item.active"
  );

  // Istruction for FinishCarousel and general carousel
  const previousElement = activeElement.previousElementSibling;
  if (previousElement) {
    activeElement.classList.remove("active");
    previousElement.classList.add("active");
  }

  // Istruction for InfinityCarousel Carousel

  //  reset of node
  carouselInfinityContainer.innerHTML = "";
  if (imagesIndex > 0) {
    imagesIndex--;
  } else {
    imagesIndex = imagesInfinity.length - 1;
  }

  for (let index = 0; index < imagesInfinity.length; index++) {
    let activeClass = "";
    if (index === imagesIndex) {
      activeClass = "active";
    }
    carouselInfinityContainer.innerHTML += `<img class="item ${activeClass}" src="img/0${imagesInfinity[index]}" alt"" />`;
  }
  // Istruction for InfinityThumbsCarousel Carousel
  imageContainer.innerHTML = "";
  if (thumbsIndex > 0) {
    thumbsIndex--;
  } else {
    thumbsIndex = imagesInfinityThumbs.length - 1;
  }

  for (let index = 0; index < imagesInfinityThumbs.length; index++) {
    let activeClass = "";
    if (index === thumbsIndex) {
      activeClass = "active";
    }
    imageContainer.innerHTML += `<img class="item ${activeClass}" src="img/00${imagesInfinityThumbs[index]}" alt"" />`;
  }
});

// collego pulsante next

// Istruction for FinishCarousel and general carousel
document.getElementById("next").addEventListener("click", function () {
  const activeElement = document.querySelector(
    ".carouselContainer.active .item.active"
  );
  const nextElement = activeElement.nextElementSibling;
  if (nextElement) {
    activeElement.classList.remove("active");
    nextElement.classList.add("active");
  }
  // Istruction for InfinityCarousel Carousel

  //  reset of node
  carouselInfinityContainer.innerHTML = "";
  if (imagesIndex < imagesInfinity.length - 1) {
    imagesIndex++;
  } else {
    imagesIndex = 0;
  }

  for (let index = 0; index < imagesInfinity.length; index++) {
    let activeClass = "";
    if (index === imagesIndex) {
      activeClass = "active";
    }
    carouselInfinityContainer.innerHTML += `<img class="item ${activeClass}" src="img/0${imagesInfinity[imagesIndex]}" alt"" />`;
  }
  // Istruction for InfinityThumbsCarousel Carousel
  imageContainer.innerHTML = "";
  if (thumbsIndex < imagesInfinityThumbs.length - 1) {
    thumbsIndex++;
  } else {
    thumbsIndex = 0;
  }

  for (let index = 0; index < imagesInfinityThumbs.length; index++) {
    let activeClass = "";
    if (index === thumbsIndex) {
      activeClass = "active";
    }
    imageContainer.innerHTML += `<img class="item ${activeClass}" src="img/00${imagesInfinityThumbs[index]}" alt"" />`;
  }
});
