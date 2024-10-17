let menuButton = document.getElementById("menu-button");
let navUL = document.getElementById("nav-ul");
let menuImage = document.getElementById("menu-image");

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
    if (navUL.style.display === "block") {
        navUL.style = "";
        menuImage.src = "images/menu.svg"
        menuImage.title = "Open menu"
    }
    else {
        navUL.style.display = "block";
        menuImage.src = "images/exit.svg"
        menuImage.title = "Close menu"
    }
}
