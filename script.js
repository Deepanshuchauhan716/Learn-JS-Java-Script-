let h1 = document.querySelector("h1");

window.addEventListener("keydown", function(dets) {
    console.dir(dets.key);

    if (dets.key === " ") {
        h1.textContent = "Space";
    } else {

        h1.textContent = dets.key;
    }
})