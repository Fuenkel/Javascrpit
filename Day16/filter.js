const emptyDiv = document.querySelector("#empty");
const emptyTitle = document.querySelector("#empty-title");
const emptySub = document.querySelector("#empty-sub");

export const checkFilter = (ul) => {
  // 일단 관련 찾으셈
  const actBtn = document.querySelector(
    "button[data-filter][aria-pressed=true]",
  );
  if (!actBtn) return;
  // dataset에서 filter 값을 넣는다.
  const curFilter = actBtn.dataset.filter;
  // ul의 item / li 찾기
  const items = ul.querySelectorAll(".item");

  items.forEach((li) => {
    // 포함 되어져있는것만 체크
    const isDone = li.classList.contains("done");

    // li가 숨겨지는 조건
    // 전체에선 숨겨지지않고
    // 남은 일에선 done이 아니면 숨겨지지않고
    // 끝낸 일에선 done이어야 숨겨겨지지않음.
    // 변수화
    const allCheck = curFilter == "all";
    const activeCheck = curFilter == "active" && !isDone;
    const doneCheck = curFilter == "done" && isDone;

    li.hidden = !(allCheck || activeCheck || doneCheck);
  });
  // const visibleCount = ul.querySelectorAll(".item:not([hidden])").length;
  const visibleCount = Array.from(ul.querySelectorAll(".item")).filter(
    (li) => !li.hidden,
  ).length;
  // 빈 필터 버튼에서 보여져야될 조건
  emptyTitle.innerHTML = actBtn.dataset.emptyTitle;
  emptySub.innerHTML = actBtn.dataset.emptySub;
  // 빈 태그를 없애는 조건
  emptyDiv.hidden = visibleCount > 0 ? true : false;
};
