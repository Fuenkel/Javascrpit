const box = document.querySelector(".box");

// span 아메리카노, span 라떼 추가하고싶다

// html을 바로바로 넣어주기
box.insertAdjacentHTML(
  "beforeend",
  `
    <span> 아메리카노 </span>
    <span> 라떼 </span>`,
);

// const { products } = data;

// products.forEach((v) => {
//   const {
//     title,
//     category,
//     price,
//     discountPercentage,
//     rating,
//     stock,
//     brand,
//     thumbnail,
//   } = v;

//   /* 카드 아티클 */
//   const card_article = document.createElement("article");
//   card_article.classList.add("card");

//   /* 이미지 썸네일 */
//   const thumb_img = document.createElement("img");
//   thumb_img.src = thumbnail;
//   card_article.append(thumb_img);

//   /* 바디 */
//   const body_div = document.createElement("div");
//   body_div.classList.add("body");
//   card_article.append(body_div);

//   /* 카테고리 */
//   const cate_p = document.createElement("p");
//   cate_p.classList.add("cat");
//   cate_p.innerHTML = category;
//   body_div.append(cate_p);

//   /* 타이틀 */
//   const title_h2 = document.createElement("h2");
//   title_h2.innerHTML = title;
//   body_div.append(title_h2);

//   /* 브랜드 */
//   const brand_p = document.createElement("p");
//   brand_p.classList.add("brand");
//   brand_p.innerHTML = brand;
//   body_div.append(brand_p);

//   /* 평점 */
//   const star_rate_div = document.createElement("div");
//   body_div.append(star_rate_div);

//   const rounded_rate = Math.round(rating);
//   /*   console.log(
//     Array(5)
//       .fill(0)
//       .map((v, i) => (i + 1 < rounded_rate ? "★" : "☆")),
//   ); */
//   Array(5)
//     .fill(0)
//     .map((v, i) => (i + 0 < rounded_rate ? "★" : "☆"))
//     .forEach((v) => {
//       const star_span = document.createElement("span");
//       star_span.classList.add("stars");
//       star_span.innerHTML = v;
//       star_rate_div.append(star_span);
//     });

//   /* 레이팅 */
//   const rating_span = document.createElement("span");
//   rating_span.classList.add("rating");
//   rating_span.innerHTML = rating;
//   star_rate_div.append(rating_span);

//   /* 가격 */
//   const price_div = document.createElement("div");
//   price_div.classList.add("price");

//   const price_span = document.createElement("span");
//   price_span.innerHTML = ((price * (100 - discountPercentage)) / 100).toFixed(
//     2,
//   );
//   price_div.append(price_span);

//   const orig_span = document.createElement("span");
//   orig_span.classList.add("orig");
//   orig_span.innerHTML = price;
//   price_div.append(orig_span);
//   body_div.append(price_div);

//   const stock_span = document.createElement("span");
//   stock_span.classList.add("stock");
//   stock_span.innerHTML = `재고 ${stock} 개`;
//   body_div.append(stock_span);
//   document.body.append(card_article);
// });
