const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

const time = document.querySelector(".time");
const count = document.querySelector(".count");
time.innerHTML = new Date().toLocaleTimeString();
setInterval(() => {
  time.innerHTML = new Date().toLocaleTimeString();
}, 1000);

count.innerHTML = 0;
count.innerHTML = +count.innerHTML + 1;

setInterval(() => {
  count.innerHTML = +count.innerHTML + 1;
}, 1);
