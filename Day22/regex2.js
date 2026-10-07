const a = /ab+c/; // + 1개이상 있어야함. +앞의 문자가 여러개 있어야된다는 뜻.
a.test("abbbbbbbbbbbbbbbbbbbbbbbbc"); // true
a.test("ac"); // false

const a1 = /ab?c/; // ? 있거나 없거나 b가 있거나 없거나
const a2 = /ab{2}c/; // == abbc
const a3 = /ab{2,4}c/; // == abbc, abbbc, abbbbc
const a4 = /[0-9]/; // 0~9
const a5 = /\d/; // digit[숫자]

const phone = /^01[01679]-?\d{4}-?\d{4}/;

/* 2026 - 10 - 06 정규표현식 [2000-01-01~2999-12-31] */
const calender2000 = /^2\d{3}-?(0[1-9]|1[0-2])-?(0[1-9]|1[0-9]|2[0-9]|3[01])/;

console.log(calender2000.test("2342-12-24"));
console.log(calender2000.test("2342-1224"));
console.log(calender2000.test("1222-1224"));
console.log(calender2000.test("2222-0102"));
