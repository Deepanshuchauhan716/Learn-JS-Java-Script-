let child = document.querySelector(".child");
window.addEventListener("mousemove", function(dets) {
    child.style.top = dets.clientY + "px";
    child.style.left = dets.clientX + "px";

});