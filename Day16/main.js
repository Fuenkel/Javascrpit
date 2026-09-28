import { initDate } from "./date.js";

import { checkFilter } from "./filter.js";
import { progress, clearButton } from "./progress.js";

const ul = document.querySelector("#list");
const textInput = document.querySelector("#txt");
const buttonAbled = document.querySelector(".add__btn");
const filterButton = document.querySelectorAll("button[data-filter]");
const footButtonAbled = document.querySelector("#clear");
const emptyTitle = document.querySelector("#empty-title");
const emptySub = document.querySelector("#empty-sub");

initDate();

const updateUI = () => {
  progress(ul);
  clearButton(ul);
  checkFilter(ul);
};

textInput.addEventListener("input", (e) => {
  buttonAbled.disabled = e.target.value.trim() === "";
});

// 뭔가가 입력되면 추가버튼의 disabeld가 지워진다.
textInput.addEventListener("input", (e) => {
  buttonAbled.disabled = e.target.value.trim() == "";
});

// 클릭 또는 엔터 누를 때 뭔가가 발동함.
buttonAbled.addEventListener("click", () => {
  const textValue = textInput.value.trim();
  if (!textValue) return; // 빈 값 체크

  // 한 번에 일정을 보여주기!
  ul.insertAdjacentHTML(
    `beforeend`,
    `<li class="item" data-id="${Date.now()}">
        <label class="item__label">
          <input class="item__check" type="checkbox"  />
          <span class="item__text">${textValue}</span>
        </label>
        <button class="item__del" type="button" aria-label="할 일 글자 삭제">
          ✕
        </button>
      </li>`,
  );

  // 입력창 초기화 및 버튼 다시 비활성화
  textInput.value = "";
  buttonAbled.disabled = true;

  updateUI();
});

// checkbox 선택 시, done 추가
ul.addEventListener("change", (e) => {
  if (e.target.classList.contains("item__check")) {
    const li = e.target.closest(".item");
    li.classList.toggle("done", e.target.checked);
  }

  updateUI();
});

// 단순 X 클릭시 생기는 것
ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("item__del")) {
    const li = e.target.closest(".item");
    li.remove();
    updateUI();
  }
});

// 전체 / 남은 일 / 끝낸 일 발동!
// 아직 체크 박스 선택된 상태에서 보여지는 경우, 문제가 hidden 문제
// 1. hidden 발동 조건 (ul이 없다는 조건 ) -> checkfilter 함수로 이동
// 2. 체크박스에 따른 카테고리 위치 조정 (ul에서 checked 여부확인)-> checkfilter 함수로 이동
filterButton.forEach((button) => {
  button.addEventListener("click", (e) => {
    // 일단 전원 false 처리로 눌리지 않게 보이기
    filterButton.forEach((btn) => (btn.ariaPressed = "false"));
    // 선택된 값만 눌렀을 때 true만들기
    e.target.ariaPressed = "true";

    emptyTitle.innerHTML = e.target.dataset.emptyTitle;
    emptySub.innerHTML = e.target.dataset.emptySub;

    updateUI();
  });
});

// 끝낸 일 지우기 발동!
footButtonAbled.addEventListener("click", () => {
  const liDone = ul.querySelectorAll(".done");
  liDone.forEach((li) => li.remove());
  updateUI();
});

// 필터 누를때마다 초기화
updateUI();

// [추가] 버튼 눌릴 때  해당 텍스트를  "item__text"에 넣는다.
// 이걸 input에서 엔터를 누를 때도 똑같은 설정으로 만든다.
// 생성되면 item done 한개 만들기 근데 이거 item done도 아님 처음부터 그러면 글자에 작대기가 그어지니까
// 처음 만들땐 작대기가 없어야된다. 이건 어차피 done css로 만들어짐.

// 근데 이거 작동하는게 동시다발적으로 일어난다.

// 추가될 때 마다 : n개 중 0개 끝
// 없을 때 이미 기본 문구가 설정되어져있음.
// 전체 / 남은 일 / 끝낸 일

// css는 단순하게 toggle과 add remove로 구현가능하다. 이 점은 뒷전으로 두자
