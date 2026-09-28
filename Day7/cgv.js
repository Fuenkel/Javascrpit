/*

-영화 : 오디세이, 코난, 스파이더맨, 귀멸의 칼날
-좌석 : 스탠다드 :15000 , 리크라이너 : 18000 , IMAX : 20000, 라이트 : 13000
성인이면 정가, 미성년자  OR 시니어 : 80%
-팝콘 : 솔트(8000), 캬라멜(8500), 치즈(9000)
-스낵 : 나초(4000), 오징어(7000), 핫도그(5000)
-음료 : 탄산(2500), 커피류(4000), 에이드률(5000), 주류(7000)

result : 영화 ?? 좌석 ?? 팝콘 ?? [없음] 스낵 ?? [없음] 음료 ?? [없음]
유저가 잘못 입력해도 에러 없이 나오도록
*/

const cgv = {
  name_num: 0,
  seat_num: 0,
  popcorn_num: 0,
  snack_num: 0,
  drink_num: 0,
  age: 0,
  age_discount: 1,

  name: ["오디세이", "코난", "스파이더맨", "귀멸의 칼날"],
  seat: [
    { level: "스탠다드", price: 15000 },
    { level: "리크라이너", price: 18000 },
    { level: "IMAX", price: 20000 },
    { level: "라이트", price: 13000 },
  ],
  popcorn: [
    { taste: "salt", price: 8000 },
    { taste: "caramel", price: 8500 },
    { taste: "cheese", price: 9000 },
  ],
  snack: [
    { name: "나초", price: 4000 },
    { name: "오징어", price: 7000 },
    { name: "핫도그", price: 5000 },
  ],
  drink: [
    { name: "soda", price: 2500 },
    { name: "coffee", price: 4000 },
    { name: "ade", price: 5000 },
    { name: "drunk", price: 7000 },
  ],

  getAge() {
    this.age = +window.prompt("나이 입력");
    this.age < 20 || this.age >= 65
      ? (this.age_discount = 0.8)
      : (this.age_discount = 1);
  },

  getNumber() {
    this.name_num = +window.prompt("볼 영화의 숫자는?");
    this.seat_num = +window.prompt("좌석은?(숫자로 입력받습니다.))");
    this.popcorn_num = +window.prompt("드실 팝콘은?(숫자로 입력받습니다.)");
    this.snack_num = +window.prompt("드실 스낵은? (숫자로 입력받습니다.)");
    this.drink_num = +window.prompt("드실 음료는? (숫자로 입력받습니다.)");
  },

  resultValue() {
    console.log(
      `영화 : ${this.name[this.name_num - 1]},
      좌석 : ${this.seat[this.seat_num - 1]},
      팝콘 : ${this.popcorn[this.popcorn_num - 1].taste},
      스낵 : ${this.snack[this.snack_num - 1].name},
      음료 : ${this.drink[this.drink_num - 1].name},
    `,
    );
    console.log(
      `총 합 : ${(this.price =
        this.seat[this.seat_num - 1].price * this.age_discount +
        this.popcorn[this.popcorn_num - 1].price +
        this.snack[this.snack_num - 1].price +
        this.drink[this.drink_num - 1].price)}`,
    );
  },
};
cgv.getAge();
cgv.getNumber();
cgv.resultValue();
