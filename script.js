//EVENTS AND EVENT HANDLING
//SCREEN PAR KUCH BHI MOVE KE LIYE EVENT AND EVENT AHNDLING KA USE HOTA HAI KI BUTTON PAR CLICK KRNE PAR KYA HONA CHIAYE AND KONSA FUNCTION CHLEGA!!ETCl

let h1 = document.querySelector("h1");
h1.addEventListener("click", function() {
    h1.style.color = "red";
})

let input = document.querySelector("input");

input.addEventListener("input", function(evt) {
    if (evt.data !== null) {

        console.log(evt.data);
    }
})