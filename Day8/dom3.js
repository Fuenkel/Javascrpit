// 유저에게 div 갯수를 입력 받고
// div 안의 내용은 hello로 하고
// backgroundColor : red, orange , yellow, green, blue, navy, indigo
// 화면에 출력하기

const divCount = +prompt("div 갯수 입력");
const bg = ["red", "orange", "yellow", "green", "blue", "navy", "indigo"];
const tc = ["black", "white"];
const arrayDiv = Array(divCount)
  .fill(0)
  .forEach((v, i) => {
    // 확정적으로 반복 되는것
    const userDiv = document.createElement(`div`);
    userDiv.innerHTML = "hello";
    userDiv.style.backgroundColor = bg[i % 7];
    userDiv.style.color = tc[i % 2];
    document.body.append(userDiv);
  });
