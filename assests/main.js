// Get the Element from DOM

let sideMenuElement = document.querySelector("#side-menu");
let overlayElement = document.querySelector("#overlay");
let overlayContainerElement = document.querySelector("#overlay-container");
let cardElement = document.querySelectorAll(".card");
let container = document.querySelector(".container");
let buttonDecrease = document.querySelectorAll(".btn-decrease");
let buttonIncrease = document.querySelectorAll(".btn-increase");
let countAddons = document.querySelectorAll("#count-addons");

// Show side menu
function showSideMenu() {
    cardElement.forEach((card) => {
        card.addEventListener("click", function() {
            sideMenuElement.classList.add("show-side-menu");
            overlayElement.classList.add("overlay");
        })
    });
}
showSideMenu();

// Hide side menu

function hideSidemenu() {
    overlayElement.addEventListener("click", function(){
        sideMenuElement.classList.remove("show-side-menu");
        overlayElement.classList.remove("overlay");
    });
}

hideSidemenu();


function getOrder() {

  Swal.fire({
    title: "Get Order",
    text: "Done",
    icon: "success",
  });
  overlayContainerElement.classList.add(".overlay-over-container");

}

// Increment 
function incrementCounter(index) {
    countAddons[index].textContent = parseInt(countAddons[index].textContent) + 1;
}

buttonIncrease.forEach((button, index) => {
  button.addEventListener('click', () => {
    incrementCounter(index);
  });
});
// Decrement 
function decrementCounter(index) {
    if (countAddons[index].textContent >= 1) {
        countAddons[index].textContent = parseInt(countAddons[index].textContent) - 1;
    };
}

buttonDecrease.forEach((button, index) => {
  button.addEventListener('click', () => {
    decrementCounter(index);
  });
});

