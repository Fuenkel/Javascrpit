// 잘 안바뀌는건 html, css로 고정 하고
// 잘 바뀌는건 js

// 맨 처음 하나만 찾기
// const box = document.querySelector(".box");
// console.log(box);

// box.classList.add("sky");

// 같은 태그 여러개 한번에 찾기
const boxes = document.querySelectorAll(".box");
boxes.forEach((v) => {
  v.style.backgroundColor = "blue";
});
