const obj = {
  name: "choi",
  age: 32,
  skill: ["java", "c", "c++"],
};

const a = JSON.stringify(obj);

console.log(a);

// 해석하기!
const b = JSON.parse(`{"name":"choi","age":32,"skill":["java","c","c++"]}`);
console.log(b);
