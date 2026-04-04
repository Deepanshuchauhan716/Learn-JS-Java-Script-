let sel = document.querySelector("select");
let h3 = document.querySelector("h3");

sel.addEventListener("change", function(dets) {
    console.log(dets.target.value);
    h3.textContent = "device Selected";
})