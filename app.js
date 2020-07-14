const toggle = document.querySelector("input");
const topGrid = document.querySelectorAll(".grid");
const bottomGrid = document.querySelectorAll(".main-grid");
const dashboardHeader = document.querySelector(".dashboard-header");
const overview = document.querySelector(".overview");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  for (let i = 0; i < topGrid.length; i++) {
    topGrid[i].classList.toggle("dark");
  }
  for (let i = 0; i < bottomGrid.length; i++) {
    bottomGrid[i].classList.toggle("dark");
  }

  dashboardHeader.classList.toggle("dark");
  overview.classList.toggle("dark");
});
