console.log(1);
console.log(2);

// 동기[sync] vs 비동기[async] : 시간초 재는거, 이벤트 등록, 네트워크 통해서 데이터 가져오기
setTimeout(() => {
  console.log("감기 언제나아");
}, 0);
console.log(3);
console.log(4);
console.log(5);
