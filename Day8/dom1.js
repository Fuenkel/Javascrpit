// 유저한테 만들고 싶은 태그 묻고, 화면에 나타내기
// window, document, element[tag]
const userTag = document.createElement(
  prompt("당신이 만들고 싶은 임의 태그를 입력해주세요"),
);
userTag.innerHTML = prompt("당신이 입력받고 싶은 내용은?");
userTag.style.backgroundColor = "pink";

document.body.append(userTag);
