const cir = document.querySelector("#circle");

cir.addEventListener("mouseenter", () => {
  if (cir.classList.contains("hover")) {
    cir.classList.add("hover");
  }
});
cir.addEventListener("mouseleave", () => {
  if (cir.classList.contains("hover")) {
    cir.classList.remove("hover");
  }
});
