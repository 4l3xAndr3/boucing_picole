const image1 = document.getElementById("myImage1");
const image2 = document.getElementById("myImage2");
let x1 = 0,
    y1 = 0,
    dx1 = 5,
    dy1 = 3,
    x2 = 300,
    y2 = 100,
    dx2 = -4,
    dy2 = 2,
    w = window.innerWidth,
    h = window.innerHeight;

function animate() {
    x1 += dx1;
    y1 += dy1;
    x2 += dx2;
    y2 += dy2;

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

    // déplacer les images
    image1.style.left = x1 + "px";
    image1.style.top = y1 + "px";
    image2.style.left = x2 + "px";
    image2.style.top = y2 + "px";

    requestAnimationFrame(animate);
}

animate();