// 1. 유저에게 일본어 점수 입력 받고
// 100점만점 중 90점 이상 : A
// 80점 : B
// 70점 : C
// 60점 : D
// 그 외 : すみません

const score = +window.prompt("일본어 점수 입력");

if (score >= 90 && score <= 100) {
  console.log("A입니다.");
} else if (score >= 80 && score < 90) {
  console.log("B입니다.");
} else if (score >= 70 && score < 80) {
  console.log("C입니다.");
} else if (score >= 60 && score < 70) {
  console.log("D입니다.");
} else if (score < 60 && score >= 0) {
  console.log("すみません。");
} else console.log("값을 잘못 입력했습니다.");

//2. 놀이동산 입장료
// 유저에게 나이 물어보고
// 7세 미만이면 무료
// 7~12세 5000원
// 13~19세 10000원
// 그 외 : 30000원

const age = +window.prompt("당신의 나이는?");

if (age < 7) {
  console.log("무료입니다.");
} else if (age >= 7 && age < 13) {
  console.log("5000원입니다.");
} else if (age >= 13 && age < 20) {
  console.log("10000원입니다.");
} else console.log("30000원입니다.");
