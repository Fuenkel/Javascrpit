// 1. 버스 요금 계산기
//  유저에게 나이를 물어보고, 7살이하 이면 "무료",
//  8살~19살이면 30% 할인
//  20살~64살이면 정상 요금
//  65살 이상이면 30% 할인

const user_age = Number(window.prompt("Please enter your age:"));
const bus_fee = Number(window.prompt("Please enter the bus fee:"));
const getFree = user_age <= 7;
const getDiscount = (user_age >= 8 && user_age <= 19) || user_age >= 65;

const discount = getFree ? 0 : getDiscount ? 0.7 : 1;
const bus_fare = bus_fee * discount;
//   user_age <= 7
//     ? "무료"
//     : user_age >= 8 && user_age <= 19
//       ? 0.7 * bus_fee
//       : user_age >= 20 && user_age <= 64
//         ? bus_fee
//         : 0.7 * bus_fee;
console.log(`당신의 나이는 ${user_age}살이며, 버스 요금은 ${bus_fare}입니다.`);

// 2.  사용자에게 10000~99999 사이의 숫자 입력 받기
// 각 자리의 합 나타내기, 단 위의 수를 벗어나면 오류! 나타내기
// ex)12345 => 1+2+3+4+5 = 15, 43451=> 4+3+4+5+1 = 17

const user_number = Number(
  window.prompt("Please enter a number between 10000 and 99999:"),
);

const one = user_number % 10;
const ten = ((user_number % 100) - one) / 10;
const hundred = ((user_number % 1000) - ten * 10 - one) / 100;
const thousand =
  ((user_number % 10000) - hundred * 100 - ten * 10 - one) / 1000;
const ten_thousand =
  (user_number - thousand * 1000 - hundred * 100 - ten * 10 - one) / 10000;

const sum_of_digits =
  user_number >= 10000 && user_number <= 99999
    ? one + ten + hundred + thousand + ten_thousand
    : "오류!";
console.log(
  `입력하신 숫자 ${user_number}의 각 자리수의 합은 ${sum_of_digits}입니다.`,
);
