const btn = document.getElementById("investigarBtn");
const zoomCont = document.querySelector(".zoom-container");
const start = document.getElementById("start");
const interior = document.getElementById("interior");

btn.addEventListener("click", () => {
    zoomCont.classList.add("zoom-in");

    setTimeout(() => {
        start.style.display = "none";
        interior.style.display = "block";

        setTimeout(() => {
            interior.style.opacity = "1";
        }, 50);

    }, 2000);
});