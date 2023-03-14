var image = document.getElementById("monImage");
var distance = 5;
var directionX = 1;
var directionY = 1;
var x = 0;
var y = 0;
var width = window.innerWidth;
var height = window.innerHeight;

function moveImage() {
  x += distance * directionX;
  y += distance * directionY;
  if (x < 0) {
    directionX = 1;
  }
  if (x + image.width > width) {
    directionX = -1;
  }
  if (y < 0) {
    directionY = 1;
  }
  if (y + image.height > height) {
    directionY = -1;
  }
  image.style.left = x + "px";
  image.style.top = y + "px";
}
setInterval(moveImage, 50);