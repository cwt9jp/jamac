let menuButton = document.getElementById("menu-button");
let navUL = document.getElementById("nav-ul");
let menuImage = document.getElementById("menu-image");
let sigma = document.getElementById('sigma');

menuButton.addEventListener("click", toggleMenu);
sigma.addEventListener("click", bruh);

function toggleMenu() {
    if (navUL.style.display === "block") {
        navUL.style.display = "";
        menuImage.src = "images/menu.svg"
        menuImage.title = "Open menu"
    }
    else {
        navUL.style.display = "block";
        menuImage.src = "images/exit.svg"
        menuImage.title = "Close menu"
    }
}

function bruh() {
    sigma.style.width = `${300 * Math.random()}px`
}