const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");
const containerEl = document.querySelector(".container");

let x = 0;
let clear;

prevEl.addEventListener("click", function () {
  x = x + 45;
  updateimg();
  clearTimeout(clear);
});

nextEl.addEventListener("click", function () {
  x = x - 45;
  updateimg();
  clearTimeout(clear);
});

function updateimg() {
  containerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;

  clear = setTimeout(function () {
    x = x - 45;
    updateimg();
  }, 3000);

  console.log(x);
}
updateimg();
