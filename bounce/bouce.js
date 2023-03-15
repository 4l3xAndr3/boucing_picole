//img1
var img1 = document.getElementById("myImage1");
var x1 = 0;
var y1 = 0;
var dx1 = 4;
var dy1 = 4;
var width1 = window.innerWidth - img1.width;
var height1 = window.innerHeight - img1.height;
//img2
var img2 = document.getElementById("myImage2");
var x2 = 100;
var y2 = 100;
var dx2 = 3;
var dy2 = 3;
var width2 = window.innerWidth - img2.width;
var height2 = window.innerHeight - img2.height;
/*img3
var img3 = document.getElementById("myImage3");
var x3 = 100;
var y3 = 100;
var dx3 = 3;
var dy3 = 3;
var width3 = window.innerWidth - img3.width;
var height3 = window.innerHeight - img3.height;
*/
function animate() {
x1 += dx1;
y1 += dy1;
x2 += dx2;
y2 += dy2;

if (x1 > width1 || x1 < 0) {
    dx1 = -dx1;
    dx1 += Math.random() * 10 - 5;
}
if (y1 > height1 || y1 < 0) {
    dy1 = -dy1;
    dy1 += Math.random() * 10 - 5;
}

if (x2 > width2 || x2 < 0) {
    dx2 = -dx2;
    dx2 += Math.random() * 10 - 5;
}
if (y2 > height2 || y2 < 0) {
    dy2 = -dy2;
    dy2 += Math.random() * 10 - 5;
}

/* calculate distance between the two images
var distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
if (distance < img1.width) {
    // reverse direction of each image
    dx1 = -dx1;
    dy1 = -dy1;
    dx2 = -dx2;
    dy2 = -dy2;
    
    // set random directions for each image
    dx1 += Math.random() * 10 - 5;
    dy1 += Math.random() * 10 - 5;
    dx2 += Math.random() * 10 - 5;
    dy2 += Math.random() * 10 - 5;
}
*/
// update image positions
img1.style.left = x1 + "px";
img1.style.top = y1 + "px";
img2.style.left = x2 + "px";
img2.style.top = y2 + "px";

requestAnimationFrame(animate);
}

animate();

