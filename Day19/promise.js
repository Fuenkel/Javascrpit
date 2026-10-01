// 브라우저에서 오래걸리는 작업 [비동기] : setTimeout, setInterval
// 함수의 함수를 넣어서 순서 보장
// callback hell [2015 이전까지 이렇게 함]

// promise : 비동기의 작업을 성공 또는 실패를 알려주는 타입

// const a = new Promise();
// a.then();

// Promise 타입
// 성공, 실패 매개변수로 가지는 함수 넣기!

const a = new Promise((success, fail) => {
  setTimeout(() => {
    (success("피자"), 10000);
  });

  // fail("피자");
});
// a.then((x) => console.log(x));

// state : fulfilled,rejected, pending result : 피자
console.log(a);

const b = new Promise((success, fail) => {
  setTimeout(() => {
    fail("치킨");
  }, 3000);
});

console.log(b); // 프로미스 타입 : state[진행중], result : 없음

// b.then((x) => console.log(x));
b.catch((x) => console.log(x));

// promise 타입을 이용
// 2초 뒤에 성공 함수 실행 시켜서 "토마토"
// then 함수로 토마토 꿀맛! 알럿으로 출력하기

// input, button 만들고,
// input 안의 내용을 넣고 버튼을 누르면 2초뒤에 알럿으로 ? 꿀맛! 표시
const input = document.querySelector("#input");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
  const c = new Promise((success, fail) => {
    setTimeout(() => {
      success(`${input.value}`);
    }, 2000);
  });
  c.then((x) => alert(`${x} 꿀맛!`));
});

// d 자체를 매개변수로 받는 함수로 만들어서 Promise 함수를 방출
const d = (x) => {
  // 그 Promise 함수에 대한 함수 만들기
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(x);
    }, 2000);
  });
};
// 매개변수를 불러서 그걸 then으로 불러서 매개변수를 받은 뒤,
d("비둘기").then((x) => alert(`${x} 훨훨 `));
