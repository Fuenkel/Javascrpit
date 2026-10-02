const input = document.querySelector("#input");
const addButton = document.querySelector("#add");
const deleteButton = document.querySelector("#delete");
const todoList = document.querySelector("ul");

// const로 배열 선언 (배열의 참조는 변경하지 않지만 내부 요소 변경은 가능)
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// 화면에 투두 항목을 렌더링하는 함수
const renderTodo = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  todoList.append(li);
};

todos.forEach((todo) => renderTodo(todo));

// 추가 버튼 이벤트
addButton.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (inputValue) {
    todos.push(inputValue); // const 배열 내부에 추가
    localStorage.setItem("todos", JSON.stringify(todos));

    renderTodo(inputValue);
    input.value = "";
  }
});

// 전체 삭제 버튼 이벤트
deleteButton.addEventListener("click", () => {
  todoList.innerHTML = "";
  todos.length = 0; // const 배열을 빈 배열로 초기화하는 방법
  localStorage.removeItem("todos");
});
