const input = document.querySelector("#input");
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const todolist = document.querySelector("#todolist");

const newData = localStorage.getItem("todos2");

const appendList = (data) => {
  data.split(",").forEach((v) => {
    const li = document.createElement("li");
    li.innerHTML = v;
    todolist.append(li);
  });
};

if (newData != null) {
  appendList(newData);
}

add.addEventListener("click", () => {
  const { value } = input;
  const data = localStorage.getItem("todos2");
  if (data == null) {
    localStorage.setItem("todos2", value);
    todolist.innerHTML = "";
    const newData = localStorage.getItem("todos2");
    appendList(newData);
    input.value = "";
  } else {
    const arr = data.split(",");
    arr.push(value); // 배열
    localStorage.setItem("todos2", arr);
    todolist.innerHTML = "";
    const newData = localStorage.getItem("todos2");
    appendList(newData);
    input.value = "";
  }
});

remove.addEventListener("click", () => {
  localStorage.removeItem("todos2");
  todolist.innerHTML = "";
});
