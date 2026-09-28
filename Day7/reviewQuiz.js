const mcdonald = [
  {
    name: "빅맥",
    price: 5500,
    kcal: 600,
    ingredients: ["bread", "lettuce", "tomato", "meat"],
  },
  {
    name: "콜라",
    price: 2000,
    kcal: 100,
    ingredients: ["soda"],
  },
  {
    name: "프렌치프라이",
    price: 3000,
    kcal: 300,
    ingredients: ["potato", "oil"],
  },
  {
    name: "상하이버거",
    price: 4500,
    kcal: 400,
    ingredients: ["bread", "lettuce", "tomato", "chicken"],
  },
];

const total_kcal = mcdonald.map((x) => x.kcal).reduce((a, c) => a + c);
console.log(total_kcal);

const kcal_under500 = mcdonald.filter((x) => x.kcal <= 500);

console.log(kcal_under500);

const total_kcal_under500 = kcal_under500
  .map((x) => x.price)
  .reduce((a, c) => a + c);

console.log(total_kcal_under500);
