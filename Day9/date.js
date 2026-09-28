// string, boolean, number, undefind
// obj, arr, func, math, date
const a = new Date(); // 데이트 타입
console.log(a.getDate()); // 오늘 일자
console.log(a.getDay()); // 0~6 일 ~ 토
console.log(a.getHours()); // 시
console.log(a.getMinutes()); // 분
console.log(a.getSeconds()); // 초

console.log(a.getTime()); // 1970년도에서 밀리초 타임 스탬프(날짜 차이 계산용)
