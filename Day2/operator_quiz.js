const user_age = Number(window.prompt("Please enter your age:"));

console.log(`당신은 ${user_age >= 20 ? "성인입니다." : "미성년자입니다."}`);

const user_number = Number(window.prompt("Please enter a number:"));
console.log(
  `당신이 입력한 숫자는 ${
    user_number > 0
      ? "양수입니다."
      : user_number < 0
        ? "음수입니다."
        : "0입니다."
  }`,
);

const user_number2 = Number(window.prompt("Please enter another number:"));
console.log(
  `당신이 입력한 숫자는 ${user_number2 % 2 == 0 ? "짝수입니다." : "홀수입니다."}`,
);
