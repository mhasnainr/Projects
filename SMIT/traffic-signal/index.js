var red = document.getElementById("red");
var yellow = document.getElementById("yellow");
var green = document.getElementById("green");

var lightRed = "rgb(220, 123, 123)";
var lightYellow = "rgb(220, 220, 127)";
var lightGreen = "rgb(120, 207, 120)";

var currentColor = 0;

function changeLight() {
  if (currentColor === 0) {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = lightYellow;
    green.style.backgroundColor = lightGreen;

  } else if (currentColor === 1) {
    red.style.backgroundColor = lightRed;
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = lightGreen;
    
  } else if (currentColor === 2) {
    red.style.backgroundColor = lightRed;
    yellow.style.backgroundColor = lightYellow;
    green.style.backgroundColor = "green";
  }
  currentColor = (currentColor + 1) % 3;
}
setInterval(changeLight, 3000);
