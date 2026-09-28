// string, number, boolean, undefined
// obj, arr, func, math, date, set, window, document, element

// 중복 허용하지않는 리스트 타입 . 집합
const s = new Set();
s.add(1);
s.add(2);
s.add(3);
console.log(s);
console.log(s.size);

const s1 = new Set();
s1.add("쿠키");
s1.add("아이스크림");
s1.add("커피");
s1.add("아이스크림");
console.log(s1);
console.log(s1.size);

const s2 = new Set([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
const newList = [...s2];
console.log(newList);
