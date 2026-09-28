// window[브라우저] 참조 타입
//

// window.confirm("안녕하세요");
// window.alert("잘가세요");
// window.console.log("메롱");

// document(HTML)

const btn = document.createElement("button"); // 태그 생성

btn.innerHTML = "오늘은 수요일";

document.body.append(btn);

//div 태그로 만들고 - 오늘 날짜 넣기

const date = document.createElement("div");
date.innerHTML = "2026년 9월 9일";
document.body.append(date);

// h1태그로 만들고 - js&html 넣기

const textForjsandHTML = document.createElement("h1");
textForjsandHTML.innerHTML = "js & HTML";
document.body.append(textForjsandHTML);
