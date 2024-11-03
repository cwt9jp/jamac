let dropButtons = document.querySelectorAll('button.drop-button');

dropButtons.forEach(but => but.addEventListener("click", function() {toggleDrop(but)}));

function toggleDrop(button) {
    let year = button.parentElement.parentElement;
    let div = year.getElementsByTagName("div")[1];
    let img = button.getElementsByTagName("img")[0];

    div.classList.toggle("showing");

    if (img.getAttribute('src') === '/images/drop-down.svg') {
        img.setAttribute('src', '/images/drop-up.svg');
        button.setAttribute('title', 'Hide contests');
    }
    else {
        img.setAttribute('src', '/images/drop-down.svg');
        button.setAttribute('title', 'See contests');
    }
}