const a = Array.from("abcdefg"); // 구문법
const b = [..."abcdefg"]; // 신문법

const c = Array.from(document.querySelectorAll("li"));
const d = [...document.querySelectorAll("li")];
console.log(c);
console.log(d);

/*
Object() // 오브젝트 만들어줘
Object.keys() // 오브젝트 관련 함수
Array() // 배열 만들어줘
Array.from() // 배열 관련 함수
*/
