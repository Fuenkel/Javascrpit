const fruits = ["strawberry", "mandarin", "apple", "kiwi", "banana"];

/* 1. 각 과일의 글자 갯수로 바꾸기 */
/* 2. 글자 갯수가 6개 이상이면 오이시! 아니면 스미마셍 */
/* 3. 스펠링 i가 있으면 "🤣" 없으면 "😍" 나타내기 */

const stringLength = (x) => {
  return x.length;
};

const newArr = fruits.map(stringLength);
console.log(newArr);

const upper6 = (x) => (x > 6 ? "오이시" : "스미마셍");
const newArr1 = newArr.map(upper6);
console.log(newArr1);

const isI_here = (x) => (x.includes("i") ? "🤣" : "😍");
console.log(fruits.map(isI_here));

const cafe = ["americano", "latte", "tea", "frappuccino", "ade"];

// 1. i or o를 포함하면 글자수로 바꾸고, 아니면 대문자화해서 보여주기
// 2. 글자수가 6글자 이상이면 5글자로 나타내고 아니면 그대로 나타내기
// 3. t를 포함하면 true이고 아니면 false로 나타내기

const cafeArr = cafe.map((x) =>
  x.includes("i") || x.includes("o") ? x.length : x.toUpperCase(),
);

console.log(cafeArr);

const cafeArr1 = cafe.map((x) => (x.length >= 6 ? x.slice(0, 5) : x));
console.log(cafeArr1);

const cafeArr2 = cafe.map((x) => x.includes("t"));
console.log(cafeArr2);
