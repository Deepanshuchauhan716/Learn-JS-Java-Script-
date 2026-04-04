let form = document.querySelector("form");
let inp = document.querySelectorAll("input");

form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    let card = document.createElement("div");
    card.classList.add("card");

    let pfp = document.createElement("div");
    pfp.classList.add("pfp");

    let img = document.createElement("img");
    img.setAttribute("src", "img/deep.jpg");

    let h3 = document.createElement("h3");
    h3.textContent = inp[1].value;
    let h5 = document.createElement("h5");
    h5.textContent = inp[2].value;
    let p = document.createElement("p");
    p.textContent = inp[3].value;

    pfp.appendChild(img);
    card.appendChild(pfp);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    document.body.appendChild(card);
})