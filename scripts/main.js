let events = document.querySelectorAll('.event');
let contractButtons = document.querySelectorAll('button.contract-button');

let contracting = false;

contractButtons.forEach(but => but.addEventListener("click", function() {contractEvent(but)}));
events.forEach(ev => ev.addEventListener("click", function() {expandEvent(ev)}));

function expandEvent(event) {
    if (!contracting) {
        let div = event.getElementsByTagName("div")[0];
        let contractButton = event.getElementsByTagName("button")[0];

        div.classList.add("showing");
        contractButton.style.visibility = "initial";
        event.classList.add("expanded");
    }
    contracting = false;
}

function contractEvent(button) {
    contracting = true;
    let event = button.parentElement;
    let div = event.getElementsByTagName("div")[0];

    div.classList.remove("showing");
    button.style.visibility = "";
    event.classList.remove("expanded");
}