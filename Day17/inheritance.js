// 동물[강아지 고양이] 키우기 게임
// 명사 => 변수 [체력, 행복도, 이름]
// 동사 => 함수 [운동하기, 잠자기, 먹기]
// 업데이트 추가
// 1. 새 [날기, ]
// 2. 물고기 [헤엄치기]

class Animal {
  #name;
  #stamina;
  #happiness;
  #alive;

  constructor(a) {
    this.#name = a;
    this.#stamina = 50;
    this.#happiness = 50;
    this.#alive = true;
  }
  workOut() {
    this.#stamina += 10;
    this.#happiness -= 10;
  }

  sleep() {
    this.#stamina += 10;
    this.#happiness += 10;
  }

  eat() {
    this.#happiness += 10;
  }

  dead() {
    this.#alive = false;
  }

  useStamina(a) {
    this.#stamina -= a;
  }
}

// this - 클래스 안을 가리키는 예약어
// super - 부모/조상 클래스 안을 가리키는 예약어
class Bird extends Animal {
  constructor(a) {
    super(a);
  }

  fly(usedStamina) {
    super.useStamina(usedStamina);
  }
}

class Fish extends Animal {
  constructor(a) {
    super(a);
  }
  swim(x) {
    super.useStamina(x);
  }
}
// 카페 알바생 게임

// 명사 -> 이름, 직급, 시급, 근무일,
// 동사 -> 근무조정하기, 시급바꾸기

class Parttimer {
  #nickname;
  #position;
  #wate;
  #workDay;

  shiftWorkDay() {}
  changeWage() {}
}
