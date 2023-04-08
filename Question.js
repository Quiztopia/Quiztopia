const nextBtn = document.querySelector(".next");
const circles = document.querySelectorAll(".circle");

let currentCircle = 0;

nextBtn.addEventListener("click", () => {
  circles[currentCircle].classList.remove("active");
  currentCircle = (currentCircle + 1) % circles.length;
  circles[currentCircle].classList.add("active");
});

