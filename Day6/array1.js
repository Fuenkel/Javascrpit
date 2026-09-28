/* map => 안에 요소들을 바꿔줘! */
const arr = [1, 3, 5, 7, 9, 11];
const a1 = arr.filter((x) => x > 6);

// 3이상 10이하만 살리기
// 3의 배수만 살리기
// 0,1,2 순서만 살리기

const a2 = arr.filter((x) => x >= 3 && x <= 10);
console.log(a2);

const a3 = arr.filter((x) => x % 3 == 0);
console.log(a3);

const a4 = arr.filter((x, i) => i < 3);
console.log(a4);

const fruits = ["apple", "pineapple", "banana", "kiwi", "melon", "mango"];

// 문자 길이 6글자 이상만 살리기
// 문자 e 들어간 과일만 살리기

const b1 = fruits.filter((x) => x.length > 5);
console.log(b1);

const b2 = fruits.filter((x) => x.includes("e")).map((x) => x.toUpperCase());
console.log(b2);

const students = [
  { name: "윤정은", age: 30, mbti: "ENFP" },
  { name: "오찬식", age: 29, mbti: "ESTJ" },
  { name: "이민욱", age: 26, mbti: "ISFJ" },
  { name: "오재희", age: 27, mbti: "ISTP" },
];

// 나이 29살 이상만 남기고, birthyear(년생) 추가하기
// mbti 성향 i인 사람만 남기고, tendency : 내향적
//

const c1 = students
  .filter((x) => x.age >= 29)
  .map((x) => {
    x.birthyear = 2027 - x.age;
    return x;
  });
console.log(c1);

const str = "apple";
str[0]; // a
str[4]; // e

const c2 = students
  .filter((x) => x.mbti[0] == "I")
  .map((x) => {
    x.tendency = "내향적";
    return x;
  });
console.log(c2);
