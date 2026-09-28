class Character {
  #name;
  #hp;
  #maxHp;
  #power;

  constructor(name, maxHp, power) {
    this.#name = name;
    this.#hp = maxHp;
    this.#maxHp = maxHp;
    this.#power = power;
  }

  get name() {
    return this.#name;
  }
  get power() {
    return this.#power;
  }
  get hp() {
    return this.#hp;
  }

  set hp(v) {
    this.#hp = Math.max(0, Math.min(v, this.#maxHp));
  }

  attack(target) {
    target.hp -= this.#power;
    console.log(`${this.#name} -> ${target.name} 공격!`);
    console.log(`${this.#power} 데미지`);
    console.log(`남은 HP : ${target.hp}`);
  }
}

// S2쩡은공듀S2
// Warrior 클래스 만들기
// 기본hp 150, 공격력 : 20 파워스트라이크 : 타겟의 hp 절반 깎음 내체력 10깎임
// Magician
// Thief

// #[접근제한]
// 원래 유지시키는게 맞음
// 그대로 물려받음
class Warrior extends Character {
  constructor(name) {
    super(name, 150, 20);
  }

  powerStrike(target) {
    if (this.hp <= 10) {
      console.log(`${this.name} 체력이 부족해서 파워스트라이크 불가!`);
      return;
    }
    target.hp -= target.hp / 2;
    this.hp -= 10;
    console.log(`${this.name} -> ${target.name} 공격!`);
    console.log(`${this.power} 데미지`);
    console.log(`남은 HP : ${target.hp}`);
  }
}

const a = new Warrior("캐릭터 1");
const b = new Warrior("캐릭터 2");

// 회피율
const wolf = { name: "늑대", hp: 100 };
const golem = { name: "골렘", hp: 1000 };

a.attack(wolf);
b.powerStrike(golem);

console.log({ wolf, golem });

class Monster extends Character {
  constructor(name, hp, power) {
    super(name, hp, power);
  }
  attackPlayer(player) {
    player.hp -= this.power;
    console.log(`${this.name} -> ${player.name} 공격!`);
    console.log(`${this.power} 데미지`);
    console.log(`남은 HP : ${player.hp}`);
  }
}

class Wolf extends Monster {
  #dodgeRate;
  constructor(name) {
    super(name, 100, 15);
    this.#dodgeRate = 0.2;
  }
  dodge() {
    return Math.random() < this.#dodgeRate;
  }
}
