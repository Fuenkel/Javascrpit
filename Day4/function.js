function makeCoffee(beans) {
  return beans + "산 아메리카노";
}

function addTen(x) {
  return x + 10;
}

const a = makeCoffee("칠레");
console.log(a);

const b = addTen(100);
console.log(b); // 110;

/* 1. 어떠한 정수를 받으면 제곱해서 돌려주는 함수 만들기 */
function square(num) {
  return num ** 2;
}

/* 2. 어떤 과일 이름 받으면 "~~ 과일 주문 " 함수 만들기*/

function orderFruit(fruitName) {
  return fruitName + " 과일 주문";
}
/* 3. 어떤 학생이름 받으면 오브젝트로 name : 이름 으로 돌려주는 함수 만들기 */

function student(input) {
  return (student_Name = { name: input });
}
