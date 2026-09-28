const name = window.prompt("너의 이름은?");
console.log(`あなたの名前は${name}です。`);

/*
[변수] 님
주문하신 커피는 [변수]
잔의 갯수는 [변수]입니다.
*/

const customer = window.prompt("고객님의 성함은?");
const coffee_name = window.prompt("주문하신 커피는");
const drinks = window.prompt("잔의 갯수는");

console.log(
  `${customer}님 주문하신 커피는 ${coffee_name}이고 잔의 갯수는 ${drinks}입니다.`,
);

const city = window.prompt("일본에서 취업하고 싶은 도시는?");
const job = window.prompt("직종은?");

console.log(`취업하고 싶은 도시는 ${city}이시군요!

그 곳에서 ${job}직종을 하시면서 화이팅하세요!`);

/*
일본 취업하고 싶은 도시 묻고,
그곳에 취업하고 싶은 이유 묻고,
직종 물어보기

결과 : 
취업하고 싶은 도시는 [변수]이시군요!
그 곳에서 [변수]직종을 하시면서 화이팅하세요!
*/
