// 피자 만들기
// 1. 도우만들기 [크러스트, 씬, 팬]
// 2. 소스바르기 [토마토, 굴, 먹물]
// 3. 토핑올리기 [새우, 페퍼로니, 파인애플]
// 4. 치즈올리기 [파마산, 체다, 모짜렐라]
// 5. 굽기
// 6. 피자완성!

const doughPizza = (dough, step) => {
  setTimeout(() => {
    console.log(`${dough} 도우 만들기`);
    step();
  }, 3000);
};

const saucePizza = (sauce, step) => {
  setTimeout(() => {
    console.log(`${sauce} 소스 바르기`);
    step();
  }, 2000);
};

const toppingPizza = (topping, step) => {
  setTimeout(() => {
    console.log(`${topping} 토핑 올리기`);
    step();
  }, 1000);
};

const cheesePizza = (cheese, step) => {
  setTimeout(() => {
    console.log(`${cheese} 치즈 올리기`);
    step();
  }, 1000);
};

const bakePizza = (step) => {
  setTimeout(() => {
    console.log("피자 굽기");
    step();
  }, 5000);
};

const takeoutPizza = () => {
  setTimeout(() => {
    console.log("피자 완성");
  }, 1000);
};

doughPizza("치즈크러스트", () => {
  saucePizza("먹물", () => {
    toppingPizza("파인애플", () => {
      cheesePizza("블루치즈", () => {
        bakePizza(() => {
          takeoutPizza();
        });
      });
    });
  });
});
