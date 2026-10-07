const best_score = document.querySelector("#best-score");
const time_display = document.querySelector("#time-display");
const sub_display = document.querySelector("#sub-display");
const action_btn = document.querySelector("#action-btn");
const time_count = { time: 0 };
const time_best = { best: Infinity };

const timeView = () => {
  time_count.time = 0;
  timer = setInterval(() => {
    // 더하고
    time_count.time += 0.01;
    time_display.innerHTML = time_count.time.toFixed(2);
    if (time_count.time >= 3) time_display.innerHTML = "??.??";
  }, 10);
  sub_display.innerHTML = "3초 뒤엔 숫자가 사라짐 — 속으로 세셈";
};

const stopView = () => {
  clearInterval(timer);
  time_display.innerHTML = time_count.time.toFixed(2);
  sub_display.innerHTML = `오차 ${(time_count.time - 10).toFixed(2)}초`;
  if (time_best.best > Math.abs((time_count.time - 10).toFixed(2))) {
    time_best.best = Math.abs((time_count.time - 10).toFixed(2));
    best_score.innerHTML = `${Math.abs((time_count.time - 10).toFixed(2))}초`;
  }

  if (Math.abs((time_count.time - 10).toFixed(2)) <= 1) {
    time_display.classList.add("time-text-best");
  }
};

// 1. 시작이 눌려지는 순간 버튼명은 멈춤으로 변경
// 2. 눌리고 나서 다시 누르면 버튼명은 다시로 변경
// 3. 다시를 누르면 멈춤으로 변경 이게 반복

action_btn.addEventListener("click", () => {
  const currentText = action_btn.innerHTML;

  if (currentText === "시작" || currentText === "다시") {
    action_btn.innerHTML = "멈춤";
    timeView();
    time_display.classList.remove("time-text-best");
  } else if (currentText === "멈춤") {
    action_btn.innerHTML = "다시";
    stopView();
  }

  // action_btn.innerHTML === "멈춤"
  //   ? ((action_btn.innerHTML = "다시"),
  //   : (action_btn.innerHTML = "멈춤");
  // if (action_btn.innerHTML === "시작") action_btn.innerHTML = "멈춤";
});

// const a = { time: 0 };
// setInterval(() => {
//   a.time += 0.01;
//   console.log(a.time.toFixed(2));
// }, 10);
