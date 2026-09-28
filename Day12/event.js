// id는 # , class는 .

const input = document.querySelector("#input");
input.addEventListener("input", (e) => {
  console.log(e.target.value);
});

const box = document.querySelector(".box");
box.addEventListener("mouseover", (e) => {
  console.log({ e });
  console.log(e.target.className);
});
