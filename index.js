const container = document.querySelector(".container");


function clearDivs() {
    container.innerHTML = "";
}

function createDivs(length) {
    for (i = 0; i < length ** 2; i++) {
        const div = document.createElement("div");

        div.setAttribute("class", "box");
        div.style.width = `${800 / length}px`;
        div.style.height = `${800 / length}px`;

        div.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        })

        container.appendChild(div);
    } 
}


const clearButton = document.querySelector(".clear-button");

clearButton.addEventListener("click", (e) => {
    const divs = document.querySelectorAll(".container div");

    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    })
})

const slider = document.querySelector(".slider");

slider.oninput = function() {
    clearDivs();
    createDivs(this.value);
}

createDivs(8);
