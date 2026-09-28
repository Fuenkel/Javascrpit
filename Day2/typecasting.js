//trthy & falsy

// true : 아래빼고 다 / false : 0, -0, null, undefined, NaN, ''(빈문자열)

// 명시적 타입 캐스팅 : Number(), String(), Boolean() 등으로 타입을 변환하는 것

// 암묵적 타입 캐스팅 : boolean : !, number: +, string

const a = !!1; // true
const b = !!0; // false

const c = +"100"; // 100 숫자화 연산자
const d = "로제" + "떡볶이"; // 로제떡볶이 문자 연결 연산자
const e = "1" + "2"; // 12 문자 연결 연산자
const f = +"1" + +"2"; // 3 숫자화 연산자
const g = 1 + 2 + 3 + "4";

console.log(g); // 64

const h = true && "야채" && "고기"; // 고기
const i = false && "야채"; // false
console.log(h, i);
const guest = false || "사이다"; // 사이다

const username = window.prompt("이름을 입력하세요");
const nickname = username || "익명"; // 입력값이 없으면 익명으로 처리
console.log(nickname);

const password = +window.prompt("비밀번호를 입력하세요");
const isLoggined = password == 1234 && true; // true
