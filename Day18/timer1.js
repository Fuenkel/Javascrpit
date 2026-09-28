// 헬로우 버튼 누르면
// 3초 뒤 알럿으로 하이! 기능 만들기!

// 일단 쿼리로 가져온다
const hello = document.querySelector("#hello");

hello.addEventListener("click", () => {
  setTimeout(() => {
    alert("하이!");
  }, 3000);
});

// 현재 시간 버튼 누르면
// 5초 뒤에 콘솔로 현재 시간 나타내는 기능 만들기!
const curTime = document.querySelector("#currentTime");

curTime.addEventListener("click", () => {
  setTimeout(() => {
    console.log(new Date().toISOString);
  }, 2000);
});
