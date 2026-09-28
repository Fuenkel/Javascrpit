// 색깔 16진수 배열
const hex = [..."0123456789abcdef"];

// 정수 랜덤 변수 설정
const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 랜덤으로 나올 색깔 변수 설정
const getHexColor = () => {
  return `#${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}`;
};

// 가장 큰 영역 만들기

const newDiv = document.createElement("div");

newDiv.style.width = "100vw";
newDiv.style.height = "100vh";
newDiv.style.display = "grid";
newDiv.style.gridTemplateColumns = "repeat(5,1fr)";

// 입력 받을 영역 수
const bg_counts = +prompt("당신이 입력할 영역의 수는? ");

// 입력 받은 영역 수만큼 흩뿌리기
Array(bg_counts)
  .fill(undefined)
  .forEach((x) => {
    const colorArea = document.createElement("div");
    colorArea.style.width = "100%";
    colorArea.style.height = "100%";
    colorArea.style.backgroundColor = getHexColor();
    newDiv.append(colorArea);
  });
document.body.append(newDiv);
