import { checkFilter } from "./filter.js";
import { progress, clearButton } from "./progress.js";
import { getFormattedDate, updateDateHeader } from "./date.js";
import { getTodosByDate, saveTodosByDate } from "./storage.js";

// DOM 요소 쿼리
const ul = document.querySelector("#list");
const textInput = document.querySelector("#txt");
const buttonAbled = document.querySelector(".add__btn");
const filterButton = document.querySelectorAll("button[data-filter]");
const footButtonAbled = document.querySelector("#clear");
const emptyTitle = document.querySelector("#empty-title");
const emptySub = document.querySelector("#empty-sub");

const datePicker = document.querySelector("#date-picker");
const todayBtn = document.querySelector("#today-btn");

// 현재 datePicker의 선택 날짜(YYYY-MM-DD) 가져오기
const getCurrentDateStr = () => datePicker?.value || getFormattedDate();

// 진행도 및 필터 UI 동기화
const updateUI = () => {
  progress(ul);
  clearButton(ul);
  checkFilter(ul);
};

// 1. 화면 전체 렌더링 (LocalStorage ➔ DOM)
const render = () => {
  const currentDateStr = getCurrentDateStr();

  // 헤더 날짜 텍스트 & 오늘/리마인드 타이틀 업데이트
  updateDateHeader(currentDateStr);

  // LocalStorage에서 해당 날짜 데이터 불러오기
  const todos = getTodosByDate(currentDateStr);
  ul.innerHTML = "";

  // 목록 그리기
  todos.forEach((todo) => {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li class="item ${todo.isDone ? "done" : ""}" data-id="${todo.id}">
        <label class="item__label">
          <input class="item__check" type="checkbox" ${todo.isDone ? "checked" : ""} />
          <span class="item__text">${todo.text}</span>
        </label>
        <button class="item__del" type="button" aria-label="할 일 삭제">✕</button>
      </li>`,
    );
  });

  updateUI();
};

// 2. 입력 감지 (추가 버튼 활성화)
textInput.addEventListener("input", (e) => {
  buttonAbled.disabled = e.target.value.trim() === "";
});

// 3. 할 일 추가 (LocalStorage 저장 포함)
const handleAddTodo = () => {
  const textValue = textInput.value.trim();
  if (!textValue) return;

  const currentDateStr = getCurrentDateStr();
  const currentTodos = getTodosByDate(currentDateStr);

  const newTodo = {
    id: Date.now(),
    text: textValue,
    isDone: false,
    priority: 1, // 추후 별점 1~5 확장용
  };

  currentTodos.push(newTodo);
  saveTodosByDate(currentDateStr, currentTodos); // LocalStorage 저장

  textInput.value = "";
  buttonAbled.disabled = true;

  render();
};

buttonAbled.addEventListener("click", handleAddTodo);

textInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    handleAddTodo();
  }
});

// 4. 체크박스 클릭 (상태 토글 ➔ LocalStorage 반영)
ul.addEventListener("change", (e) => {
  if (e.target.classList.contains("item__check")) {
    const li = e.target.closest(".item");
    const todoId = Number(li.dataset.id);
    const currentDateStr = getCurrentDateStr();

    const todos = getTodosByDate(currentDateStr);
    const targetTodo = todos.find((todo) => todo.id === todoId);

    if (targetTodo) {
      targetTodo.isDone = e.target.checked;
      saveTodosByDate(currentDateStr, todos); // 저장
    }

    li.classList.toggle("done", e.target.checked);
    updateUI();
  }
});

// 5. 삭제 버튼 클릭 (개별 삭제 ➔ LocalStorage 반영)
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("item__del")) {
    const li = e.target.closest(".item");
    const todoId = Number(li.dataset.id);
    const currentDateStr = getCurrentDateStr();

    const todos = getTodosByDate(currentDateStr);
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);

    saveTodosByDate(currentDateStr, updatedTodos); // 저장

    li.remove();
    updateUI();
  }
});

// 6. 필터 버튼 클릭
filterButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    filterButton.forEach((btn) => (btn.ariaPressed = "false"));
    e.target.ariaPressed = "true";

    emptyTitle.innerHTML = e.target.dataset.emptyTitle;
    emptySub.innerHTML = e.target.dataset.emptySub;

    updateUI();
  });
});

// 7. 끝낸 일 지우기 (일괄 삭제 ➔ LocalStorage 반영)
footButtonAbled.addEventListener("click", () => {
  const currentDateStr = getCurrentDateStr();
  const todos = getTodosByDate(currentDateStr);
  const remainingTodos = todos.filter((todo) => !todo.isDone);

  saveTodosByDate(currentDateStr, remainingTodos); // 저장
  render();
});

// 8. 날짜 피커 & 오늘 버튼 이벤트 연결
if (datePicker) {
  datePicker.value = getFormattedDate(); // 기본 오늘로 세팅

  datePicker.addEventListener("change", () => {
    render();
  });
}

if (todayBtn) {
  todayBtn.addEventListener("click", () => {
    datePicker.value = getFormattedDate();
    render();
  });
}

// 최초 1회 화면 렌더링
render();
