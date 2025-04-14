
const button = document.querySelector(".button-hover-sinistra");


var i;


function one(event) {
var elements = document.getElementsByClassName("column");
  for (let i = 0; i < elements.length; i++) {
    console.log("uno");
    elements[i].style.flex = "10%";
  }
}
button.addEventListener("click", one);

const hamMenu = document.querySelector("#menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});