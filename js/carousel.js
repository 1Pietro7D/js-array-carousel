console.log("hello world");

// creo un primo modello che possa andare avanti e indietro

// le variabili vanno resettate a ogni evento
// collego il pulsante previous

document.getElementById("previousOne").addEventListener("click", function () {
  const activeElement = document.querySelector(".item.active");
  const previousElement = activeElement.previousElementSibling;
  if (previousElement) {
    activeElement.classList.remove("active");
    previousElement.classList.add("active");
  }
});

// collego pulsante next

document.getElementById("nextOne").addEventListener("click", function () {
  const activeElement = document.querySelector(".item.active");
  const nextElement = activeElement.nextElementSibling;
  if (nextElement) {
    activeElement.classList.remove("active");
    nextElement.classList.add("active");
  }
});
