// 🥚[1~3]🐣[2~4]🐥[2~4]🐔[3~5]🍗[1~3]
// 버튼 - 치킨만들기
// 클릭하면 순서대로 폰트가 찍힌다

const button = document.querySelector("#button");
const text = document.querySelector("#chicken");
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const egg = (step) => {
  setTimeout(
    () => {
      text.innerHTML = "🥚";
      step();
    },
    getRandomInt(1, 3) * 1000,
  );
};

const hatch = (step) => {
  setTimeout(
    () => {
      text.innerHTML = "🐣";
      step();
    },
    getRandomInt(2, 4) * 1000,
  );
};

const chick = (step) => {
  setTimeout(
    () => {
      text.innerHTML = "🐥";
      step();
    },
    getRandomInt(2, 4) * 1000,
  );
};

const hen = (step) => {
  setTimeout(
    () => {
      text.innerHTML = "🐔";
      step();
    },
    getRandomInt(3, 5) * 1000,
  );
};

const chicken = () => {
  setTimeout(
    () => {
      text.innerHTML = "🍗";
    },
    getRandomInt(1, 3) * 1000,
  );
};

// egg(() => {
//   hatch(() => {
//     chick(() => {
//       hen(() => chicken());
//     });
//   });
// });

button.addEventListener("click", () => {
  egg(() => {
    hatch(() => {
      chick(() => {
        hen(() => chicken());
      });
    });
  });
});
