const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("니가 만들어");
});

// html 점메추 버튼을 만들고, 버튼을 누르면 오늘 점심은 사누끼 우동입니다! 라는 알럿(window.alert()) 나오게하기

const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  alert("오늘 점심은 사누끼 우동");
});

// 사각형 만들기 버튼
// 화면에 100*100 px 배경 빨간색 박스 생성

const square_btn = document.querySelector(".square_btn");

square_btn.addEventListener("click", () => {
  const box = document.createElement("div");
  box.style.cssText = "width:100px; height:100px; background-color:red;";
  document.body.append(box);
});

const toggle = document.querySelector(".toggle_heart_btn");

toggle.addEventListener("click", () => {
  toggle.innerHTML == "♥" ? (toggle.innerHTML = "♡") : (toggle.innerHTML = "♥");
});

// - 0 +
const num = document.querySelector(".num");
num.innerHTML = 0;

const plus = document.querySelector(".plus");

plus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML + 1;
});

const minus = document.querySelector(".minus");

minus.addEventListener("click", () => {
  num.innerHTML = +num.innerHTML - 1;
});
document.body.append(num);

const changeBg = document.querySelector(".bridark_btn");

changeBg.addEventListener("click", () => {
  //const draw = document.createElement("div");
  changeBg.innerHTML == "🌛어둡게"
    ? (changeBg.innerHTML = "☀️밝게")
    : (changeBg.innerHTML = "🌛어둡게");
  if (changeBg.innerHTML == "☀️밝게") {
    document.body.classList.add("draw");
  } else document.body.classList.remove("draw");
});
