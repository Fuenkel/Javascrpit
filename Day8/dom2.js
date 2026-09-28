// 유저에게 만들고 싶은 버튼 갯수 물어보고
// 버튼 안의 내용은 "안녕!" 해주고
// 버튼 갯수만큼 화면에 출력하기

const userCount = +prompt("당신이 만들고 싶은 버튼 갯수는?");
const arrayButton = Array(userCount)
  .fill(0)
  .forEach((v) => {
    const userTag = document.createElement("button");
    userTag.innerHTML = "안녕!";
    document.body.append(userTag);
  });
