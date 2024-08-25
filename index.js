const container = document.querySelector(".container");

for (i = 0; i < 64; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "box")
    div.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    })

    container.appendChild(div);
}