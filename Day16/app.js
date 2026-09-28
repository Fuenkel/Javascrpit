// 오늘이 며칠인지 표시 먼저 하자
// 오늘을 보여주는 p태그 쿼리로 찾기
const today = document.querySelector("#today");
// 오늘 날짜를 찾기 위한 것
const today_text = new Date();
// 일주일 배열 0~6[일~토]
const week = [
  "일요일",
  "월요일",
  "화요일",
  "수요일",
  "목요일",
  "금요일",
  "토요일",
];
// 오늘이 몇월 며칠 무슨 요일인지 보여주는 innerHtml
today.innerHTML = `${today_text.getMonth() + 1}월 ${today_text.getDate()}일 ${week[today_text.getDay()]}`;
// 성공!!!!!!!!!

// 프로그래스 관련 기본값 설정
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");

// 입력 받는 값
const textInput = document.querySelector("#txt");
// [추가] 버튼의 disabled 여부
const buttonAbled = document.querySelector(".add__btn");
// ul 클래스 찾기
const ul = document.querySelector("#list");

// 필터를 위한 쿼리 세팅
const filterButton = document.querySelectorAll("button[data-filter]");
const emptyDiv = document.querySelector("#empty");
const emptyTitle = document.querySelector("#empty-title");
const emptySub = document.querySelector("#empty-sub");

// 끝낸 일 지우우우우기를 위한 쿼리 세팅
const footButtonAbled = document.querySelector("#clear");

// 함수
// 프로그래스바 함수우우우우
const progress = () => {
  const total = ul.querySelectorAll("li");
  const checked = ul.querySelectorAll(".done");
  // 분모가 0이면 0%가 아니어서 예외 처리
  if (total.length == 0) {
    progressBar.style.width = "0%";
    progressText.innerHTML = "적어둔 일이 없어요";
    return;
  }
  // 그 이외의 경우 남은일 / 전체일
  progressBar.style.width = `${(checked.length / total.length) * 100}%`;
  // 텍스트로 보여주는거 {전체일}개 중 {남은일} 끝
  progressText.innerHTML = `${total.length}개 중 ${checked.length}개 끝`;
};
// [끝낸 일 지우기] 버트으으으으으은
const clearButton = () => {
  const checked = ul.querySelectorAll(".done");
  footButtonAbled.disabled = checked.length == 0;
};
// 전체 / 남은 일 / 끝낸 일 필터 함수우우우우우
const checkFilter = () => {
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
    li.hidden = !(
      curFilter == "all" ||
      (curFilter == "active" && !isDone) ||
      (curFilter == "done" && isDone)
    );
  });
  //.item 중에서 숨겨진 것([hidden])을 제외한(:not), 현재 눈에 보이는 항목이 총 몇 개(.length)인지 가져와라!"
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

// 함수 아직 미완성
const updateUI = () => {
  progress();
  clearButton();
  checkFilter();
};
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
