const input = document.querySelector("#input");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const todolist = document.querySelector("#todolist");

const todoData = localStorage.getItem("todosRe");

add.addEventListener("click", () => {
  const { value } = input;
  const data = localStorage.getItem("todosRe");
  if (data == null) {
    localStorage.setItem("todosRe", value);
    todolist.innerHTML = "";
    const data = localStorage.getItem("todosRe");
    data.split(",").forEach((v) => {
      const li = document.createElement("li");
      li.innerHTML = v;
      todolist.append(li);
    });
  }
});

const maptest = [1, 2, 3, 4, 5, 6, 7];

const 바뀐배열 = maptest.forEach((v) => {});

// [2,3,4,5,6,7,8]
