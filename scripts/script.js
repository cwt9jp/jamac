let menuButton = document.getElementById("menu-button");
let navUL = document.getElementById("nav-ul");
let menuImage = document.getElementById("menu-image");
let events = document.querySelectorAll('.event');
let contractButtons = document.querySelectorAll('button.contract-button');

let contracting = false;

menuButton.addEventListener("click", toggleMenu);
contractButtons.forEach(but => but.addEventListener("click", function() {contractEvent(but)}));
events.forEach(ev => ev.addEventListener("click", function() {expandEvent(ev)}));

function toggleMenu() {
    if (navUL.style.display === "block") {
        navUL.style.display = "";
        menuImage.src = "images/menu.svg";
        menuImage.title = "Open menu";
    }
    else {
        navUL.style.display = "block";
        menuImage.src = "images/exit.svg";
        menuImage.title = "Close menu";
    }
}

function expandEvent(event) {
    if (!contracting) {
        let div = event.getElementsByTagName("div")[0];
        let contractButton = event.getElementsByTagName("button")[0];

        div.classList.add("showing");
        contractButton.style.visibility = "initial";

        if (!event.style.flex) {
            event.style.cursor = "auto"
            event.style.flex = '100%';
        }
    }
    contracting = false;
}

function contractEvent(button) {
    contracting = true;
    let event = button.parentElement;
    let div = event.getElementsByTagName("div")[0];

    div.classList.remove("showing");
    button.style.visibility = "";

    if (event.style.flex) {
        event.style.flex = "";
        event.style.cursor = "";
    }
}
