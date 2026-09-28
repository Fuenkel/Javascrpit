const introduce = document.querySelector("#introduce");
const introduce_count = document.querySelector("#introduce_count");
introduce.addEventListener("input", (e) => {
  introduce_count.innerHTML = e.target.value.length;
});

const password_button = document.querySelector("#password_button");
const password_input = document.querySelector("#password_input");
password_button.addEventListener("click", (e) => {
  password_input.type = password_input.type == "password" ? "text" : "password";
  password_button.innerHTML =
    password_button.innerHTML == "보이기" ? "숨기기" : "보이기";
});
