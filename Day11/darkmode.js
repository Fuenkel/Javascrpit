const button = document.querySelector(".button");

button.addEventListener("click", () => {
  button.innerHTML = button.innerHTML == "🌛어둡게" ? "☀️밝게" : "🌛어둡게";

  button.classList.toggle("dark");
  document.body.classList.toggle("dark");
});
