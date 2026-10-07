const a = /a[bd]c/; // abc adc 찾기
a.test("abc"); // true
a.test("acc"); // false
a.test("adc"); // true

const a1 = /a[a-z]c/; // a?c 찾기
a1.test("abc"); // true
a1.test("azc"); // true
a1.test("aAc"); // false

const a11 = /a[0-9]c/; // 0부터 9까지 모든 수
const a111 = /a[가-힣]c/; // 모든 한글 전체 대입 가능

const a2 = /a[^b]c/; // b제외하고 a?c
a2.test("acc"); // true

const a3 = /a.c/; // a?c ac안에 한글자 임의로 아무거나 들어갈 수 있다.
a3.test("a선c"); // true
a3.test("ac"); // false
