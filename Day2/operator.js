/* 산술 연산자 */
const a = 10;
const b = 5;
console.log(a + b); // 15
console.log(a - b); // 5
console.log(a * b); // 50
console.log(a / b); // 2
console.log(a % b); // 0
console.log(a ** b); // 100000
console.log(++a); // 11
console.log(--b); // 4
console.log(a); // 11
console.log(b); // 4
console.log(a++); // 11
console.log(b--); // 4
console.log(a); // 12
console.log(b); // 3

/* 대입 연산자 */
const b1 = true; // b1에 true 값 대입
const b2 = "화요일"; // b2에 "화요일" 값 대입

/* 비교 연산자 (<, >, <=, >=, ==, ===, !=, !==) [boolean 저장됨] */
const c1 = 5 > 3; // true
const c2 = 5 < 3; // false
const c3 = 5 >= 3; // true
const c4 = 5 <= 3; // false

const c5 = 5 == 1; // false
const c6 = 5 != 1; // true

/* 논리 연산자 (&&[and], ||[or], ! [not]) */
/* && : 모든 조건이 true일 때 true 반환
   || : 하나의 조건이라도 true이면 true 반환
   !  : 조건이 true이면 false 반환, false이면 true 반환 
*/
const d1 = true && false; // false
const d2 = true || false; // true
const d3 = !true; // false

const d4 = !(5 <= 3) || !(2 <= 1); // true
const d5 = 5 > 3 && 2 > 1; // true

/* 삼항 연산자 (조건 ? 참 : 거짓) */
const e1 = 5 > 3 ? "참" : "거짓"; // "참"
const e2 = 5 < 3 ? "N1" : "N2"; // "N2"
