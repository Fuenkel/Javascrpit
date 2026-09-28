// 가장 큰 영역 만들기
const newDiv = document.createElement("div");

newDiv.style.width = "100vw";
newDiv.style.height = "100vh";
newDiv.style.border = "1px solid black";

newDiv.style.display = "grid";
newDiv.style.gridTemplateColumns = "repeat(5, 1fr)";

const bg_color = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#8e44ad",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#ecf0f1",
  "#95a5a6",
  "#f39c12",
  "#d35400",
  "#c0392b",
  "#bdc3c7",
  "#7f8c8d",
];

const text_color = [
  "TURQUOISE",
  "EMERALD",
  "PETER RIVER",
  "AMETHYST",
  "WET ASPHALT",
  "GREEN SEA",
  "NEPHRITIS",
  "BELIZE HOLE",
  "WISTERIA",
  "MIDNIGHT BLUE",
  "SUN FLOWER",
  "CARROT",
  "ALIZARIN",
  "CLOUDS",
  "CONCRETE",
  "ORANGE",
  "PUMPKIN",
  "POMEGRANATE",
  "SILVER",
  "ASBESTOS",
];

// const divideArea = Array(20)
//   .fill(undefined)
//   .forEach((v, i) => {
//     // 작은 영역 만들기
//     const colorArea = document.createElement("div");
//     colorArea.style.width = "100%";
//     colorArea.style.height = "100%";
//     colorArea.style.backgroundColor = bg_color[i];

//     const textArea = document.createElement("div");
//     textArea.innerHTML = text_color[i];
//     textArea.style.color = "white";
//     textArea.style.height = "100%";
//     textArea.style.display = "flex";

//     textArea.style.justifyContent = "end";
//     textArea.style.alignItems = "end";

//     colorArea.append(textArea);
//     newDiv.append(colorArea);
//     document.body.append(newDiv);
//   });

bg_color.forEach((x, i) => {
  const colorArea = document.createElement("div");
  colorArea.style.width = "100%";
  colorArea.style.height = "100%";
  colorArea.style.backgroundColor = x;

  const textArea = document.createElement("div");
  textArea.innerHTML = text_color[i];
  textArea.style.color = "white";
  textArea.style.height = "100%";
  textArea.style.display = "flex";

  textArea.style.justifyContent = "end";
  textArea.style.alignItems = "end";

  colorArea.append(textArea);
  newDiv.append(colorArea);
});
document.body.append(newDiv); 
// 뿌리는건 한 번만 보면 되기에 foreach문에 쓸 필요가 없다.
