// 함수를 넣는 방식

const recipe = (x) => {
  console.log("요리준비");
  console.log("물끓이기");
  x();
  console.log("맛있게 먹기");
};

const ramen = () => {
  console.log("스프넣기");
  console.log("라면넣기");
  console.log("보글보글 끓이기");
};

const buldak = () => {
  console.log("라면넣기");
  console.log("보글보글 끓이기");
  console.log("물버리기");
  console.log("스프넣기");
};

const rice = () => {
  console.log("쌀넣기");
  console.log("뜸들이기");
};

// recipe(ramen);

// recipe(buldak);

// recipe(rice);

const activateSkill = (skill) => {
  console.log("스킬 시전 준비");
  skill();
  console.log("스킬 시전 완료");
};

const fire = () => {
  console.log("활활 타오른다");
};
const light = () => {
  console.log("번쩍 번쩍 삐까삐까");
};

const ice = () => {
  console.log("얼음 꽁꽁");
};

activateSkill(fire);
activateSkill(light);
activateSkill(ice);
