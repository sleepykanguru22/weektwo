let btn = document.querySelector("#btn");
let elem = document.querySelector("#like-btn");
let count = 3;
function incrament() {
  count++;
  elem.innerHTML = count;
}
btn.addEventListener("click", incrament);

// var count = 1;
// var countEl = document.querySelector("#count");
// function add() {
//   count++;
//   countEl.innerHTML = " hello" + count
// }
