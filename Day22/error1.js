// throw new TypeError("ㄹㅇ");
// ReferenceError: ㄹㅇ is not defined

const toAge = (age) => {
  const n = Number(age);
  if (Number.isNaN(n)) throw new Error("나이는 숫자로 입력해야 합니다.");
  if (n < 0) throw new Error("나이는 0보다 작을 수 없습니다.");
  if (!Number.isInteger(n)) throw new Error("나이는 정수로 입력해야 합니다.");
  return n;
};

/* 외부랑 연결되는 코드 자주 쓰인다. [fetch] */
try {
  //   const a = "hello";
  //   a.map();
  //   throw new Error("터지셈");
  // 에러가 터질 수 있을 법한 코드는 try 블록 안에 넣는다.
  toAge("최선호");
  toAge(-1);
  toAge(1.5);
  toAge(10);
} catch (e) {
  // 에러나면 이쪽으로 코드 실행됨.
  console.log(e);
  console.log("에러 마구마구");
} finally {
  console.log("무적권 실행됨");
}
