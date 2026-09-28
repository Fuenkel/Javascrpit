// 바꾸기(map)

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addTen = (x) => {
  return x + 10;
};

const newArr = arr.map(addTen);
console.log(newArr);

// 1. 홀수면 2배 짝수면 3배
// 2. 각 자기 수의 제곱
// 3. 3. 5의 배수만 "금요일" 바꾸기

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddEvenMulti = (x) => {
  return x % 2 ? x * 2 : x * 3;
};

const newArr1 = arr.map(oddEvenMulti);
console.log(newArr1);

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const square = (x) => {
  return x ** 2;
};

const newArr2 = arr.map(square);
console.log(newArr2);

const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const friday5 = (x) => {
  return x % 5 == 0 ? "금요일" : x;
};

const newArr3 = arr.map(friday5);
console.log(newArr3);
