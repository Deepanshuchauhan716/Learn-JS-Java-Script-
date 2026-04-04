let butn = document.querySelector("#btn");
let inp = document.querySelector("input");

butn.addEventListener("click", function() {
    inp.click();
})

inp.addEventListener("change", function(dets) {
    console.dir(dets.target.files[0].name);
    butn.textContent = dets.target.files[0].name;
})