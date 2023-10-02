const title = document.querySelector(".title");
const input = document.querySelector(".input");
const bodyEl = document.querySelector("body");

input.addEventListener("click", () => {
  if (input.checked) {
    title.textContent = "click to back to light mode";
    title.style.color = "white";
    bodyEl.style.backgroundColor = "black";
  } else {
    title.textContent = "click to change to dark mode";
    title.style.color = "black";
    bodyEl.style.backgroundColor = "white";
  }
});

// function updateLocalStorage() {
//   localStorage.setItem("mode", JSON.stringify(input.checked));
// }
