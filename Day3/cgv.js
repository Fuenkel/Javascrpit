/* CGV */
// 좌석 선택 : 일반(15000)/라이트(13000)/프리미엄(18000)
// 팝콘 선택 : 일반(8000) / 캬라멜(9000) / 치즈(9000)
// 음료 선택 : 탄산 (3000) / 아이스티(2000) / 커피(4500)
// 멤버십 선택 : 브론즈(100%) 실버(90%) 골드(80%)

//고르신 좌석 ? 팝콘 ? 음료 ? 총 금액 ?

const priceSystem = {
  seat: {
    standard: 15000,
    light: 13000,
    premium: 18000,
    undefined: 10000,
  },
  popcorn: {
    salt: 8000,
    caramel: 9000,
    cheese: 9000,
    undefined: 10000,
  },
  drink: {
    soda: 3000,
    icetea: 2000,
    coffee: 4500,
    undefined: 0,
  },
  membership: {
    bronze: 1,
    silver: 0.9,
    gold: 0.8,
    undefined: 1,
  },
};

const select_seat = window.prompt(
  "좌석 선택 해주세요(standard, light, premium)",
);
const select_popcorn = window.prompt(
  "팝콘 선택 해주세요 (salt, caramel, cheese)",
);
const select_drink = window.prompt("음료 선택 해주세요(soda, icetea, coffee)");
const select_membership = window.prompt(
  "당신의 멤버십은? (bronze, silver, gold)",
);

const total =
  priceSystem.seat[select_seat] * priceSystem.membership[select_membership] +
  priceSystem.popcorn[select_popcorn] +
  priceSystem.drink[select_drink];
console.log(`고르신 좌석은 ${priceSystem.seat[select_seat]}, 
    팝콘은 ${priceSystem.popcorn[select_popcorn]}, 
    음료는 ${priceSystem.drink[select_drink]}, 
    멤버십은 ${select_membership}
    총 금액은 ${total} `);
