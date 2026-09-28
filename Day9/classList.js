/* 엘리먼트 생성하고 꾸며주고 넣기 */

const newDiv = document.createElement("div"); // 엘리멘트 타입
// newDiv.className = "yellow";

newDiv.classList.add("yellow");
newDiv.classList.add("blue");
newDiv.classList.add("green");
// toggle 있으면 넣고 없으면 안넣는 것.
newDiv.classList.toggle("red");

newDiv.innerHTML = "늦잠";
document.body.append(newDiv);
