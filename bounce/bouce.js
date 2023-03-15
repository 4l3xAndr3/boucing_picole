const image1 = document.getElementById("dodo");
const image2 = document.getElementById("alex");
const image3 = document.getElementById("augustin");
const image4 = document.getElementById("nathan");
const image5 = document.getElementById("simon");
let x1 = Math.floor(Math.random() * (800 - 1)),
    y1 = Math.floor(Math.random() * (500 - 1)),
    dx1 = 5,
    dy1 = 3,

    x2 = Math.floor(Math.random() * (900 - 1)),
    y2 = Math.floor(Math.random() * (500 - 1)),
    dx2 = -4,
    dy2 = 2,

    x3 = Math.floor(Math.random() * (900 - 1)),
    y3 = Math.floor(Math.random() * (500 - 1)),
    dx3 = 5,
    dy3 = 3,

    x4 = Math.floor(Math.random() * (900 - 1)),
    y4 = Math.floor(Math.random() * (500 - 1)),
    dx4 = 5,
    dy4 = 3,

    x5 = Math.floor(Math.random() * (900 - 1)),
    y5 = Math.floor(Math.random() * (500 - 1)),
    dx5 = 5,
    dy5 = 3,

    w = window.innerWidth,
    h = window.innerHeight;

function animate() {
    x1 += dx1;
    y1 += dy1;
    x2 += dx2;
    y2 += dy2;
    x3 += dx3;
    y3 += dy3;
    x4 += dx4;
    y4 += dy4;
    x5 += dx5;
    y5 += dy5;

    // rebondissement pour l'image 1
    if (x1 < 0 || x1 > w - image1.width) {
        dx1 = -dx1;
    }
    if (y1 < 0 || y1 > h - image1.height) {
        dy1 = -dy1;
    }

    // rebondissement pour l'image 2
    if (x2 < 0 || x2 > w - image2.width) {
        dx2 = -dx2;
        dx2 += Math.random() * 2 - 1;
        dy2 += Math.random() * 2 - 1;
    }
    if (y2 < 0 || y2 > h - image2.height) {
        dy2 = -dy2;
        dx2 += Math.random() * 2 - 1;
        dy2 += Math.random() * 2 - 1;
    }

    // rebondissement pour l'image 3
    if (x3 < 0 || x3 > w - image3.width) {
        dx3 = -dx3;
    }
    if (y3 < 0 || y3 > h - image3.height) {
        dy3 = -dy3;
    }

    // rebondissement pour l'image 4
    if (x4 < 0 || x4 > w - image4.width) {
        dx4 = -dx4;
    }
    if (y4 < 0 || y4 > h - image4.height) {
        dy4 = -dy4;
    }

    // rebondissement pour l'image 5
    if (x5 < 0 || x5 > w - image5.width) {
        dx5 = -dx5;
    }
    if (y5 < 0 || y5 > h - image5.height) {
        dy5 = -dy5;
    }

    // déplacer les images
    image1.style.left = x1 + "px";
    image1.style.top = y1 + "px";
    image2.style.left = x2 + "px";
    image2.style.top = y2 + "px";
    image3.style.left = x3 + "px";
    image3.style.top = y3 + "px";
    image4.style.left = x4 + "px";
    image4.style.top = y4 + "px";
    image5.style.left = x5 + "px";
    image5.style.top = y5 + "px";

    requestAnimationFrame(animate);
}

animate();