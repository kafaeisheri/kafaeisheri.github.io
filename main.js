function changeImage(src) {
    document.querySelector("img").src = "../images/" + src + ".png";
}

document.body.onmousedown = function () {
    changeImage("s0134_32_0");
}
document.body.onmouseup = function () {
    changeImage("s0134_29_0");
}
let count = parseInt(document.querySelector("#pop").textContent);




