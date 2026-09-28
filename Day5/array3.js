const banapresso = [
  { name: "아메리카노", price: 2000, shots: 2, kcal: 1 },
  { name: "크리미라떼", price: 3500, shots: 2, kcal: 200 },
  { name: "소금빵", price: 2000, kcal: 250 },
  { name: "피스타치오라떼", price: 4000, kcal: 300 },
];

// 1. 가을 이벤트로 인해서, 각 가격 10% 할인된 데이터 출력
const autumnEvent = banapresso.map((x) => {
  x.price = x.price * 0.9;
  return x;
});

console.log(autumnEvent);

// 2. 우유 이슈로 인해서, 라떼 품목들은 각 20% 금액 인상된 데이터 출력

const milkIssue = banapresso.map((x) => {
  if (x.name.includes("라떼")) x.price = x.price * 1.2;
  return x;
});

console.log(milkIssue);
// 3. 빵 이슈로 인해서, 빵 품목들은 가격 절반으로 깎이고, 칼로리 100추가

const breadIssue = banapresso.map((x) => {
  if (x.name.includes("빵")) x.price = x.price / 2;
  x.kcal = x.kcal + 100;
  return x;
});

console.log(breadIssue);

// 4. 신메뉴 "쩡으니라떼" 가격 5000 샷 2 칼로리 200 추가된 데이터로 출력하기

const addMenu = banapresso.push({
  name: "쩡으니라떼",
  price: 5000,
  shots: 2,
  kcal: 200,
});
console.log(banapresso);

// const AutumnEvent = banapresso.map((item) => item.price * 0.9);

// console.log(AutumnEvent);

// const milkIssue = banapresso.map((item) =>
//   item.name.includes("라떼") ? item.price * 1.2 : item.price,
// );
// console.log(milkIssue);

// const breadIssue = banapresso.map(
//   (item) => (item.name.includes("빵") ? item.price / 2 : item.price),
//   item.name.includes("빵") ? item.kcal + 100 : item.kcal,
// );

// console.log(breadIssue);
