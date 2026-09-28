/*
프롬프트로 유저에게 
첫번째 숫자 입력
두번째 숫자 입력
각각 받은 뒤 두 숫자의 합을 콘솔로 나타내기
*/

// const a = Number(window.prompt("첫번째 숫자 입력"));
// const b = Number(window.prompt("두번째 숫자 입력"));

// console.log(`첫번째 숫자 ${a}와 두번째 숫자 ${b}의 합은 ${a + b}다`);

/*
나이를 물어보고, 몇년생인지 맞추기!
몇살인가요? : 숫자
임의의 년생 맞추기
*/

// const birth = Number(window.prompt("만 나이 몇인가요?"));

// console.log(`당신의 태어난해는 ${2026 - birth}년생입니다.`);

// const a = 3 * 10; // 곱하기
// const b = 5 / 2; //나누기
// const c = 3 ** 2; // 제곱 3의 2승 =>9

/* 일본 여행경비 원화입력
엔화로 얼마 나오는지 콘솔로 출력
환율은 오늘 인터넷값으로*/

const won_money = Number(window.prompt("원화 얼마나 가져가실건가요?"));

console.log(
  `당신이 들고갈 원화 ${won_money}원은 엔화로 ${won_money * 0.116}엔입니다.`,
);
