const product = document.querySelector("#product");
const recipe = document.querySelector("#recipe");
const user = document.querySelector("#user");
const loading = document.querySelector(".loading");
const items = document.querySelector(".items");

const makeCard = (key, data) => {
  const obj = {
    products: ["thumbnail", "title", "price"],
    recipes: ["image", "name", "rating"],
    users: ["image", "lastName", "university"],
  };
  return `
    <div class="card">
        <div class="album">
            <img src="${data[obj[key][0]]}" alt="" />
        </div>
        <div class="title">${data[obj[key][1]]}</div>
        <div class="price">${data[obj[key][2]]}</div>
    </div>
  `;
};

/* 
Object
*/
const arr = [
  { target: product, url: "products", key: "products" },
  { target: recipe, url: "recipes", key: "recipes" },
  { target: user, url: "users", key: "users" },
];

arr.forEach((obj) => {
  obj.target.addEventListener("click", () => {
    items.innerHTML = "";
    loading.classList.remove("hidden");
    fetch(`https://dummyjson.com/${obj.url}`)
      .then((v) => v.json())
      .then((v) => {
        v[obj.key].forEach((data) =>
          items.insertAdjacentHTML("beforeend", makeCard(obj.key, data)),
        );
        loading.classList.add("hidden");
      });
  });
});
