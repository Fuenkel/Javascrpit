// 구문법

function add(x, y) {
  return x + y;
}

// 신문법 (결국 데이터 타입이 함수란 것!)
/* 화살표 함수 */
// 데이터 타입
// 기본 : string, number, boolean, undefined
// 참조 : object,string, number, function

const add2 = (x, y) => {
  return x + y;
};

/* 1. a, b, c를 입력 받고 배열로 돌려주기 */

const array = (a, b, c) => {
  return [a, b, c];
};

/* 2. x, y를 받으면 합,차,콥, 나누기, 제곱을 오브젝트로 돌려주기 */
const calc = (x, y) => {
  return { plus: x + y, minus: x - y, mul: x * y, div: x / y, sqr: x * y };
};

// console.log(calc(+window.prompt("x입력"), +window.prompt("y입력")));

const giveTen = () => {
  return 10;
};

const coin = (x) => {};
