// 1. input 및 button 요소 가져오기 (const로 저장)
const contextInput = document.querySelector("#todo-context");
const deadlineInput = document.querySelector("#todo-deadline");
const addBtn = document.querySelector("#add-btn");
const listContainer = document.querySelector("#todo-list");

// 생성된 Todo 객체들을 담을 배열
const todoList = [];

// 2. 버튼 클릭 시 addEventListener 실행
addBtn.addEventListener("click", () => {
  const contextVal = contextInput.value.trim();
  const deadlineVal = deadlineInput.value;

  // 빈 값 체크
  if (!contextVal || !deadlineVal) {
    alert("할 일과 데드라인을 모두 입력해 주세요.");
    return;
  }

  // Todo 클래스로 새 객체 생성 및 배열 저장
  const newTodo = new Todo(contextVal, deadlineVal);
  todoList.push(newTodo);

  // 3. 새 button 생성 및 화면에 보여주기
  const newBtn = document.createElement("button");
  newBtn.textContent = `${newTodo.getContext()} (~${newTodo.getDeadline()})`;
  newBtn.style.display = "block";
  newBtn.style.marginTop = "5px";

  // 목록 영역에 생성한 버튼 추가
  listContainer.append(newBtn);

  // 입력창 초기화
  contextInput.value = "";
  deadlineInput.value = "";
});
