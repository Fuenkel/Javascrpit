// 타입 캐스팅 & 생성자 함수
const a = String(10);
const b = Boolean(1);
const c = Number("100");
//Objext() 구문법
const e = Array(100)
  .fill(0)
  .map((v, i) => i + 1); // 1~100

console.log({ a: a, b: b, c: c, e: e });
console.log({ a, b, c, e });

e.forEach((v) => {}); // 훑기/스키밍
