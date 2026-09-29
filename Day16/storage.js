const STORAGE_KEY = "todos_data";

export const getAllData = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
};

export const getTodosByDate = (dataStr) => {
  const allData = getAllData();
  return allData[dataStr] || [];
};

export const saveTodosByDate = (dateStr, todos) => {
  const allData = getAllData();
  allData[dateStr] = todos;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
};
