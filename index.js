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


const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    const num = prompt("How many squares per side? ");

    if (+num === NaN || num > 100 || num < 1 || num % 1 !== 0) {
        alert("Invalid Number")
    } else {
        clearDivs();
        createDivs(num);
    }

})

createDivs(8);
