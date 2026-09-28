const std = {
  name: "윤정은",
  age: 29,
  mbti: "enfp",
  parttime: ["코인노래방", "옷가게", "도토루 카페"],
};
// 키값을 꺼내는 방법
const { name, mbti, parttime } = std;

// 배열 첫번째 값 꺼내는 방법
const [coin] = parttime;
console.log(coin);
const [_, clothes] = parttime;
console.log(clothes);
