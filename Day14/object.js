// object 하나 만듦
const menu = {
  name: "americano",
  price: 3000,
  kcal: 5,
  shots: 2,
};

const a = Object(); // 오브젝트 만드는거 -> {}
const b = Object.keys(menu); // ["name", "price", "kcal", "shots"]
const c = Object.values(menu); // ["americano", 3000, 5, 2]
const d = Object.entries(menu);
console.log(d);
