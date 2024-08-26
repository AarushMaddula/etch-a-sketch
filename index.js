let penMode = "normal";
let penColor;

const container = document.querySelector(".container");

const colorPicker = document.querySelector(".color-picker");
const slider = document.querySelector(".slider");

const rainbowButton = document.querySelector(".rainbow-button");
const shadeButton = document.querySelector(".shade-button");
const normalButton = document.querySelector(".normal-button");

const clearButton = document.querySelector(".clear-button");

function resetCanvas() {
    container.innerHTML = "";
}

function clearCanvas() {
    const divs = document.querySelectorAll(".container div");

    divs.forEach((div) => {
        div.style.backgroundColor = "white";
        div.style.opacity = "";
    })
}

function getRandomRGBText() {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
}

function createDivs(length) {
    for (i = 0; i < length ** 2; i++) {
        const div = document.createElement("div");

        div.setAttribute("class", "box");
        div.style.width = `${800 / length}px`;
        div.style.height = `${800 / length}px`;

        div.addEventListener("mouseenter", (e) => {
            const style = e.target.style;

            switch (penMode) {
                case "shade": 
                    style.opacity = +style.opacity + 0.1; 
                case "normal": 
                    style.backgroundColor = penColor;
                    break;
                case "rainbow":
                    style.backgroundColor = getRandomRGBText();
                    break;
            }
        })

        container.appendChild(div);
    } 
}

clearButton.addEventListener("click", (e) => {
    clearCanvas();
})

slider.oninput = function() {
    resetCanvas();
    createDivs(this.value);
}

rainbowButton.addEventListener("click", (e) => {
    clearCanvas();
    penMode = "rainbow";
})

shadeButton.addEventListener("click", () => {
    clearCanvas();
    penMode = 'shade';
})

normalButton.addEventListener("click", () => {
    clearCanvas();
    penMode = "normal";
})

colorPicker.oninput = function () {
    penColor = this.value;
}

penColor = colorPicker.value;

createDivs(8);
