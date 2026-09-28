const fruits = ["apple", "banana", "kiwi", "melon"];

//const one = fruits[0];
//const two = fruits[1];

// destructruing react때 많이 본다
const [one, two] = fruits;

const students = [
  "오찬식",
  29,
  (x) => {
    console.log(`${x}돌아왔구나`);
  },
  true,
  "임의의 문자열",
];

const [first, second, third] = students;

console.log(first);
console.log(second);
console.log(third);
third(first);
