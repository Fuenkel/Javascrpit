/* map : 바꾸기 filter : 거르기 find :찾기, 
some & every :존재여부, reduce : 누적 시켜줘 */

const arr = [10, 20, 30, 40, 50];
const a1 = arr.find((x) => x <= 10); // 10
const a2 = arr.findIndex((x) => x <= 10); //0번쩨

const a3 = arr.some((x) => x > 20); //true
const a4 = arr.every((x) => x > 20); //false

const arr1 = [1, 2, 3, 4, 5, 6];
const result1 = arr1.reduce((a, c) => {
  console.log({ a: a, c: c });
  return a + c;
});

console.log(result1);

const coupang = [
  { name: "선풍기", price: 55000, counts: 1 },
  { name: "양말", price: 3500, counts: 2 },
  { name: "칫솔", price: 4000, counts: 3 },
];

const resultPrice = coupang
  .map((x) => x.price * x.counts)
  .reduce((a, c) => a + c);

console.log(resultPrice);
