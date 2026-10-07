// 정규 표현식 [(string 상위호환) == 문자 패턴 찾기]

// 010????????
const phoneRegex = /^010-\d{4}-\d{4}$/;
console.log(phoneRegex.test("010-1234-5678")); // true
console.log(phoneRegex.test("010-123-4567")); // false

// const a = new Regex();
// const a = /패턴/플래그;
const b = /abc/i; // ignore [대소문자 신경쓰지마셈]
console.log(b.test("abcdef")); // true
console.log(b.test("qwer")); // false
console.log(b.test("qwerabcqwer")); // true
console.log(b.test("ABC")); // true
console.log(b.test("a b c")); // false

const c = /^abc/; // ^: abc로 시작하면서!
const d = /abc$/; // $: abc로 끝나면서!
c.test("qwerabc"); // false
d.test("qwerabc"); // true

// 우리나라 휴대폰 전화 검증
const phone = /^010/;

// png 파일 검증
const imgFile = /.png$/;
