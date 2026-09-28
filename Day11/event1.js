// 기본 버튼 동작 및 출력 = console.log

const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  console.log("오늘도 화아팅");
});

// html 저메추 버튼 만들고, 버튼을 누르면 오늘 저녁은 샌드위치(서브웨ㅣ
const btn1 = document.querySelector(".btn1");
btn1.addEventListener("click", () => {
  alert("오늘 저녁은 샌드위치");
});

// 사각형 만들기 버튼
// 화면에 100x100px 배경 빨간색 박스 생성
const square = document.querySelector(".btn2");
square.addEventListener("click", () => {
  const box = document.createElement("div");
  box.style.width = "100px";
  box.style.height = "100px";
  box.style.background = "red";
  box.style.border = "1px solid black";
  document.body.append(box);
});

// - 0 +

const num = document.querySelector(".num");

const plus = document.querySelector(".plus");
plus.addEventListener("click", () => (num.innerHTML = +num.innerHTML + 1));

const minus = document.querySelector(".minus");
minus.addEventListener("click", () => (num.innerHTML = +num.innerHTML - 1));

document.body.append(num);

// 배경화면을 어둡게 밝게 만들면서

const change_Bg = document.querySelector(".darkmode");

change_Bg.addEventListener("click", () => {
  change_Bg.innerHTML =
    change_Bg.innerHTML == "🌛어둡게" ? "☀️밝게" : "🌛어둡게";
  change_Bg.classList.toggle("dark");
  document.body.classList.toggle("dark");
});
