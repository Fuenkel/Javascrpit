/*
menu 
블렌드 커피,  480엔, s,m,l
아이스 커피,  580엔  s,m,l
샌드위치, 600엔 s,m,l
*/

/*
유저에게 메뉴 고르고 [1,2,3]
사이즈 물어보기 [s,m,l]
멤버십 있는지 물어보기 [yes, no]
*/

//주문하신 ~~ 메뉴 가격은 ~~ 입니다
//멤버십이면 10% 아니면 정가로
//s : 그대로, m : 10% 증강 , l : 20% 증강
//가격 나타내기

const menu = [
  { name: "블렌드 커피", price: 480 },
  { name: "아이스 커피", price: 580 },
  { name: "샌드위치", price: 600 },
];

const rateSystem = {
  size: {
    s: 1.0,
  },
};

const select_menu = +window.prompt("1. 블렌드 커피 2. 아이스커피 3. 샌드위치");
const membership = window.prompt("yes 또는 no로 얘기해주세요");

const isMember = membership == "yes" ? 0.9 : 1.0;

const size = window.prompt("사이즈는 s,m,ㅣ로 얘기해주세요 ?");
const sizeUp_price =
  size === "s" ? 1.0 : size === "m" ? 1.1 : size === "l" ? 1.2 : 1.0; // 기본값(기타 입력 시)

console.log(`주문하신 메뉴는 ${menu[select_menu - 1].name},
    가격은 ${menu[select_menu - 1].price * isMember * sizeUp_price}`);

// const menu = [
//   { name: "블렌드 커피", price: 480, size: ["s", "m", "l"] },
//   { name: "아이스 커피", price: 580, size: ["s", "m", "l"] },
//   { name: "샌드위치", price: 600, size: ["s", "m", "l"] },
// ];
// const select_menu = +window.prompt("1. 블렌드 커피 2. 아이스커피 3. 샌드위치");

// const membership = window.prompt("yes 또는 no로 얘기해주세요");
// const isMember = membership == "yes" ? 0.9 : 1.0;

// const size = window.prompt("사이즈는 s,m,ㅣ로 얘기해주세요 ?");
// if(size === "s"){
//     menu.
// }
