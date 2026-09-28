const arr = [2, 4, 6, 8, 10, 12];

const double = (x) => x * 2;

const doubleArray = arr.map(double);

const coffee = ["아메리카노", "라떼", "모카", "프라푸치노"];
const test = coffee.map((x, i) => `${i}.${x}`);

const students = [
  { name: "김나단", age: 31 },
  { name: "이민욱", age: 29 },
  { name: "윤정은", age: 30 },
];

const test1 = students.map((x, i) => {
  x.no = i;
  return x;
});

console.log(test1);

const company = [
  { name: "씨엘제로", location: "오사카" },
  { name: "라쿠텐", location: "도쿄" },
  { name: "메루카리", location: "도쿄" },
];

/*
  { no:001 name: "씨엘제로", location: "오사카" },
  { no:002 name: "라쿠텐", location: "도쿄" },
  { no:003 name: "메루카리", location: "도쿄" },
*/
const test2 = company.map((x, i) => {
  x.no = `00${0 + i}`;
  return x;
});

console.log(test2);

const japanClass = [
  { name: "A반", level: "basic", students: ["오찬식", "이민욱", "윤정은"] },
  { name: "B반", level: "advanced", students: ["김나단", "김지원", "최강현"] },
];

const test3 = japanClass.map((x, i) => {
  x.no = i + 1;
  x.students = x.students.map((name, idx) => {
    return { no: idx + 1, name: name };
  });
  return x;
});

console.log(test3);

const students1 = [
  {
    name: "윤정은",
    itBooks: ["html&css", "git&github", "javascript"],
    japanBooks: ["회화책", "문법책", "단어책"],
  },
  {
    name: "오찬식",
    itBooks: ["html&css", "git&github", "javascript"],
    japanBooks: ["회화책", "문법책", "단어책"],
  },
  {
    name: "최선호",
    itBooks: ["html&css", "git&github", "javascript"],
    japanBooks: ["한문책", "출석책", "단어책"],
  },
];

const test4 = students1.map((x, i) => {
  x.no = `00${i + 1}`;
  x.itBooks = x.itBooks.map((itName, idx) => {
    return { name: itName, no: idx + 1, booksLength: itName.length };
  });
  x.japanBooks = x.japanBooks.map((jpName) => {
    return { name: jpName };
  });
  return x;
});

console.log(test4);
