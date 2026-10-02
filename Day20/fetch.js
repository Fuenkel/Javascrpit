// 비동기 : 오래걸리는 작업들 [setTimeout, server]
// fetch 함수 Promise 리턴

fetch("https://dummyjson.com/recipes")
  .then((v) => v.json())
  .then((v) => console.log(v));

// 데이터 가져오기 누르면 title들만 밑에 랜더링해주기
// 그전에 로딩바 넣기

fetch("https://dummyjson.com/recipes").then((v) => v.json());

const button = document.querySelector(".btn");
const context = document.querySelector(".context");
const loading = document.querySelector(".loader");

const load = () => {
  return new Promise((success, fail) => {
    loading.hidden = false;
    setTimeout(() => {
      loading.hidden = true;
      success(true);
    }, 2000);
  });
};

button.addEventListener("click", () => {
  context.innerHTML = "";
  // 1. 레시피 데이터 요청 시작
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json()) // JSON 형태로 파싱
    .then((data) => {
      // 2. 데이터 수신 후 load() 타이머(2초)가 끝날 때까지 대기
      return load().then(() => data); // 파싱된 data를 다음 .then으로 넘김
    })
    .then((data) => {
      // 3. data.recipes 배열에서 name(제목) 목록 가져오기
      const recipes = data.recipes;

      //  전체 레시피 제목 목록을 <li> 태그로 출력하고 싶은 경우

      const titleList = recipes
        .map((recipe) => `<li>${recipe.name}</li>`)
        .join("");
      context.innerHTML = `<ul>${titleList}</ul>`;
    })
    .catch((error) => {
      console.error("에러 발생:", error);
      loading.hidden = true;
    });
});
