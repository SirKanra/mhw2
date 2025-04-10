
const button = document.querySelector(".button-hover-sinistra");

// Declare a "loop" variable
var i;

// Full-width images
function one(event) {
var elements = document.getElementsByClassName("column");
  for (let i = 0; i < elements.length; i++) {
    console.log("ciao");
    elements[i].style.flex = "10%";
  }
}

// Two images side by side
function two(event) {
    var elements = document.getElementsByClassName(".column");
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "50%";
  }
}

// Four images side by side
function four() {
    var elements = document.getElementsByClassName(".column");
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "25%";
  }
}
button.addEventListener("click", one);
