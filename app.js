const toggle = document.querySelector("input");
const topGrid = document.querySelectorAll(".grid");
const bottomGrid = document.querySelectorAll(".main-grid");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  for (let i = 0; i < topGrid.length; i++) {
    topGrid[i].classList.toggle("dark");
  }

  bottomGrid.classList.toggle("dark");
  for (let i = 0; i < bottomGrid.length; i++) {
    bottomGrid[i].classList.toggle("dark");
  }
});
