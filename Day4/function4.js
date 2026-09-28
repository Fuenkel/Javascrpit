/* 문자 함수 */

const a = "icecream";
const b = a.includes("cream"); // 역할 : 포함하니?  입력 타입 : 문자 / 결과 타입 : boolean true
const c = a.repeat(3); // 역할 : 반복해줘 입력타입 : 숫자 /  결과 타입 string
const d = a.endsWith("z"); // false ?로 끝나니? 입력 타입 : string / 결과타입 : boolean
const e = a.startsWith("a"); // true ?로 시작하니? 입력 타입 : string /결과타입 : boolean
const f = a.toUpperCase(); // 역할 : 모두 대문자화 입력타입 :없음 / 결과타입 : string
const g = a.toLowerCase(); // 역할 : 모두 소문자화 입력타입 : 없음 / 결과타입 : string
const h = a.replace("i", "w"); // 역할 : i를 w로 바꿔줘 입력타입 : string, string / 결과타입 : string
const i = a.replaceAll("i", "w"); // 역할 : i를 w로 "모두" 바꿔줘 입력타입 : string, string / 결과타입 : string
const j = a.split("r"); // 역할 : r 기준으로 반 쪼개줘 입력타입 : string / 결과타입 : array
const k = a.slice(0, 4); // 역할 : 0~3번쨰까지 알려줘 입력타입 :number number / 결과 타입 : string
const l = a.length; // 길이

const news = `Russian President Vladimir Putin responded with one short sentence when asked at a press conference whether Moscow might strike military facilities in the UK in response to British arms supplies to Ukraine.

"That's a secret. A military secret."

Military secret is not a "yes". And not a "no". It leaves us hanging.

And that, I suspect, is the point.

Those two words feel like psychological pressure from the Kremlin: to keep Britain guessing - and stressing - over Moscow's intentions, as well as to encourage the UK to think twice about its staunch support for Ukraine.

It reminds me of a newspaper article I read a few days ago. Moskovsky Komsomolets had suggested that UK Prime Minister Andy Burnham should be seeing Russia, not in his dreams, "but in his nightmares".

Scary language. But short on detail about what those nightmares will look like.

We cannot conclude that Russian missiles are about to be used against targets in the UK.`;

// object, array, function

//const user_lookingfor = window.prompt("찾고 싶은 단어");
// console.log(news.includes(user_lookingfor) ? "있음" : "없음");
// console.log(news.toUpperCase());
// console.log(news.replaceAll("Russian", "NorthKorea"));

/* 유저에게 아이디 만들기 */
/* 아이디 길이가 4~12글자 사이가 아니면 -> 길이를 4~12글자로 해주세요 */
/* 아이디에서 @,!,#이 없으면 -> 특수문자 @!#을 포함해주세요 */
/* 아이디에서 0번째 3번째 글자가 대문자가 아니면 -> 0~3번째 글자는 대문자여야해요! */
/* 위의 조건 통과하면 아이디 완성 */

const id = window.prompt("아이디 입력");

// console.log(
//   id.length >= 4 && id.length <= 12 ? "" : "길이를 4~12글자로 해주세요",
// );

// const specialCheck =
//   (id.includes("!") ? 1 : 0) +
//     (id.includes("@") ? 1 : 0) +
//     (id.includes("#") ? 1 : 0) ===
//   1;

// console.log(
//   specialCheck ? "아이디 허용" : "특수문자 @!# 중 하나만 포함해야 합니다.",
// );

if (id.length < 4 || 12 < id.length) {
  console.log("길이를 4~12글자로 해주세요");
} else if (!id.includes("@") && !id.includes("!") && !id.includes("#")) {
  console.log("특수문자 @!# 중 하나만 포함해야 합니다.");
} else if (id.slice(0, 4) != id.slice(0, 4).toUpperCase()) {
  console.log("0~3번째 글자는 대문자여야해요!");
} else {
  console.log(`id 완성 ${id}`);
}
