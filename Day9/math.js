// string, boolean, number, undefined
// array, object, function, Math, ?
// window, document, element

console.log(Math.PI);
console.log(Math.abs(-10)); // 절댓값
console.log(Math.floor(3.14)); // 내림
console.log(Math.ceil(5.3)); // 올림

console.log(Math.random()); // 0~1 실수

// Int 정수
//9 , 0[0~9] max : 9, min : 0

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(randomInt(14, 100));
