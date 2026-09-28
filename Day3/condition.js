const age = +window.prompt("나이 입력");

if (age >= 20) {
  console.log(`당신은 성인입니다.`);
} else {
  console.log("당신은 미성년자입니다.");
}

console.log("프로그램 종료");

const num = +window.prompt("숫자 입력");

if (num > 0) {
  console.log(`${num}은 0보다 큽니다`);
} else if (num == 0) {
  console.log("0입니다.");
} else {
  console.log(`${num}은 0보다 작습니다.`);
}
console.log("프로그램 종료");
