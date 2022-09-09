const button8 = document.querySelector("#button8");
console.log(button8);

let steps = 10;

button8.addEventListener("click", (e) => {
  console.log("click event on button8");
  steps = steps - 1;
  progress.innerHTML = "It is " + steps + " steps behind you.";
});

button8.removeEventListener("click", (e) => {
});