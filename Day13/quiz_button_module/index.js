import { init } from "./init.js";
import { buttons } from "./data.js";
import { buttonList, contents } from "./query.js";
import { makeContents, makeReview, makeReviewList } from "./render.js";

buttons.forEach((v) => {
  const btn = document.createElement("button");
  btn.classList.add("button");
  btn.innerHTML = v.title;
  btn.id = v.id;
  btn.addEventListener("click", (e) => {
    buttons.forEach((v) => v.classList.remove("activated"));
    e.target.classList.add("activated");
    contents.innerHTML = "";
    if (v.contents) {
      contents.innerHTML = makeContents(v.contents);
    }
    if (v.reviews) {
      const reviewList = makeReviewList();
      v.reviews
        .map((x) => makeReview(x.star, x.review))
        .forEach((x) => {
          reviewList.innerHTML += x;
        });
      contents.append(reviewList);
    }
  });
  buttonList.append(btn);
});

init();
