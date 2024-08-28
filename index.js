const CANVAS_SIZE = 500;

const container = document.querySelector(".container");

const colorPicker = document.querySelector(".color-picker");
const slider = document.querySelector(".slider");

const sizeDisplay = document.querySelector(".size-display");

const rainbowButton = document.querySelector(".rainbow-button");
const shadeButton = document.querySelector(".shade-button");
const normalButton = document.querySelector(".normal-button");

const clearButton = document.querySelector(".clear-button");

let penMode = "normal";
let penColor;

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
        div.style.width = `${CANVAS_SIZE / length}px`;
        div.style.height = `${CANVAS_SIZE / length}px`;

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
    sizeDisplay.textContent = `${this.value} x ${this.value}`;
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

container.style.height = `${CANVAS_SIZE}px`;
container.style.width = `${CANVAS_SIZE}px`;

sizeDisplay.textContent = `${slider.value} x ${slider.value}`;
createDivs(slider.value);
