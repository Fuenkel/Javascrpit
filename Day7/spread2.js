const test = [..."banana"]; // 문자열의 spread

console.log(test);

const fruits = [
  "apple",
  "pineapple",
  "banana",
  "peach",
  "kiwi",
  "orange",
  "mango",
  "strawberry",
];
// aeiou를 😍로 만들기

const change_fruits = fruits.map((word) =>
  [...word]
    .map((spell) =>
      [..."aeiou"].some((vowel) => vowel == spell) ? "😍" : spell,
    )
    .reduce((a, c) => a + c),
);

console.log(change_fruits);

const a1 = { name: "유희찬", age: 20 };
const a2 = { name: "김보민", gender: "female" };
const a3 = { ...a1, ...a2 };

const a4 = [1, 2, 3, 4, 5];
const a5 = [1, 2, 3, 4, 5];
const a6 = [...a4, ...a5];

const a7 = [..."kiwi"]
  .map((v) => (v == "i" ? "😂" : v))
  .reduce((a, c) => a + c);
