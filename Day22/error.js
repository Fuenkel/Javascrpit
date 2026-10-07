/* 에러 : 뭔가 잘못됨. 고장나는 일은 없음 */

/* 3대 에러 */
/* 
1. compiler error[실행 전 에러] (코드 문법 에러[js, python])
그래서 typescript를 배워야한단다. js->ts
2. runtime error[실행 중 에러]  
3. context error[실행 후 에러] ([테스터])
*/

/* 테스트 할 때, 버그잡을 때 사용하는 문법 */

// throw new Error("아아 시켰는데 뜨아 나옴");

/* 에러 -> [예외 처리] */
const toAge = (age) => {
  const n = Number(age);
  if (Number.isNaN(n)) throw new Error("나이는 숫자로 입력해야 합니다.");
  if (n < 0) throw new Error("나이는 0보다 작을 수 없습니다.");
  if (!Number.isInteger(n)) throw new Error("나이는 정수로 입력해야 합니다.");
  return n;
};

// toAge("최선호");
// toAge(-1);
// toAge(1.5);
toAge(10);
