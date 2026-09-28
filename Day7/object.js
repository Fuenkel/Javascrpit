const car = {
  name: "마세라티",
  model: 2026,
  speed: 0,
  speedUp() {
    this.speed = this.speed + 10;
  },
  speedDown() {
    this.speed = this.speed < 10 ? 0 : this.speed - 10;
  },
  break() {
    this.speed = 0;
  },
  show() {
    console.log(`${this.name}의 속도 : ${this.speed}`);
  },
};

car.speedUp();
car.speedUp();
car.speedUp();
car.show();

// calc 라는 오브젝트 타입 변수 만들고
// first, second 키값을 각각 유저에게 숫자를 입력 받고
// plus, minus, mul, sqr, div 함수  각각 정의 하고 출력하는 오브젝트 타입 만들기

const calc = {
  num1: 0,
  num2: 0,
  getNumber() {
    this.num1 = +window.prompt("첫번째 수 입력");
    this.num2 = +window.prompt("두번째 수 입력");
  },
  plus() {
    console.log(this.num1 + this.num2);
  },
  minus() {
    console.log(this.num1 - this.num2);
  },
  mul() {
    console.log(this.num1 * this.num2);
  },
  sqr() {
    console.log(this.num1 ** this.num2);
  },

  div() {
    console.log(this.num1 / this.num2);
  },
};

calc.plus();
