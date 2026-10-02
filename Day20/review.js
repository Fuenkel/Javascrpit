const a = new Promise((success, fail) => {
  success("ㅎㅇ");
});
console.log(a);
a.then((v) => console.log(v));

//Quiz
//피자만들기
// 도우[3] - 소스[2] - 토핑[2] - 치즈[1] - 굽기[3] - 피자완성![2]
// Promise 타입으로 만들기

const doughPizza = (dough) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${dough}도우 만들기`);
    }, 3000);
  });
};
const saucePizza = (sauce) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${sauce}소스 만들기`);
    }, 2000);
  });
};
const toppingPizza = (topping) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${topping}토핑 뿌리기`);
    }, 2000);
  });
};
const cheesePizza = (cheese) => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success(`${cheese}치즈 뿌리기`);
    }, 1000);
  });
};
const bakePizza = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("피자 굽기");
    }, 3000);
  });
};
const donePizza = () => {
  return new Promise((success, fail) => {
    setTimeout(() => {
      success("피자 완성!");
    }, 2000);
  });
};

doughPizza("씬")
  .then((x) => {
    console.log(x);
    return saucePizza("토마토");
  })
  .then((x) => {
    console.log(x);
    return toppingPizza("새우");
  })
  .then((x) => {
    console.log(x);
    return cheesePizza("파마산");
  })
  .then((x) => {
    console.log(x);
    return bakePizza();
  })
  .then((x) => {
    console.log(x);
    return donePizza();
  })
  .then((x) => {
    console.log(x);
  });
