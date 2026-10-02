// product thumbnailm title price
// recipe image name rating
// user image, last name, university

// 버튼들의 쿼리가져오기
const productBtn = document.querySelector("#product");
const recipeBtn = document.querySelector("#recipe");
const userBtn = document.querySelector("#user");

// 로딩 css 관련 hidden 여부 만들 쿼리
const loader = document.querySelector(".loader");

// 내용 뿌릴 곳 쿼리
const context = document.querySelector("#context");

const load = () => {
  return new Promise((success, fail) => {
    loader.hidden = true;
    success(true);
  });
};

productBtn.addEventListener("click", () => {
  // 버튼 눌릴 때 초기화
  context.innerHTML = "";
  loader.hidden = false;
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => {
      productsData = data.products;
      return load();
    })
    .then(() => {
      const CardList = productsData
        .map(
          (product) => `<li>
          <img src=${product.thumbnail} alt = ""></li>
        <li>${product.title}</li>
        <li>${product.price}</li>`,
        )
        .join("");
      context.innerHTML = `<ul>${CardList}</ul>`;
      loader.hidden = true;
    })
    .catch((error) => {
      console.error("에러발생", error);
      loading.hidden = true;
    });
});
recipeBtn.addEventListener("click", () => {
  // 버튼 눌릴 때 초기화
  context.innerHTML = "";
  loader.hidden = false;
  fetch("https://dummyjson.com/recipes")
    .then((res) => res.json())
    .then((data) => {
      recipesData = data.recipes;
      return load();
    })
    .then(() => {
      const CardList = recipesData
        .map(
          (recipe) =>
            `<li><img src =${recipe.image} alt = "" width="200px"></li>
        <li>${recipe.name}</li>
        <li>${recipe.rating}</li>`,
        )
        .join("");
      context.innerHTML = `<ul>${CardList}</ul>`;
      loader.hidden = true;
    })
    .catch((error) => {
      console.error("에러발생", error);
      loading.hidden = true;
    });
});
userBtn.addEventListener("click", () => {
  // 버튼 눌릴 때 초기화
  context.innerHTML = "";
  loader.hidden = false;
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((data) => {
      usersData = data.users;
      return load();
    })
    .then(() => {
      const CardList = usersData
        .map(
          (user) =>
            `<li><img src =${user.image} alt = ""></li>
        <li>${user.lastName}</li>
        <li>${user.university}</li>`,
        )
        .join("");
      context.innerHTML = `<ul>${CardList}</ul>`;
      loader.hidden = true;
    })
    .catch((error) => {
      console.error("에러발생", error);
      loading.hidden = true;
    });
});
