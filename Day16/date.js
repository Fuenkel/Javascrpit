export const initDate = () => {
  // 오늘이 며칠인지 표시 먼저 하자
  // 오늘을 보여주는 p태그 쿼리로 찾기
  const today = document.querySelector("#today");
  if (!today) return;
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
};

// 날짜 문자열 헬퍼 함수

export const getFormattedDate = (dateObj = new Date()) => {
  const year = dateObj.getFullYear();
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const day = String(dateObj.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// 선택된 날짜에 따라 ui(오늘 날짜 텍스트 + 타이틀 + 오늘 버튼)를 업데이트
export const updateDateHeader = (selectedDataStr) => {
  const todayEl = document.querySelector("#today");
  const mainTitleEl = document.querySelector("#main-title");
  const todayBtn = document.querySelector("#today-btn");

  const todayStr = getFormattedDate(new Date());

  const [year, month, day] = selectedDataStr.split("-").map(Number);
  const targetDate = new Date(year, month - 1, day);

  const week = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];

  // 1. xx월 xx일 x요일 형태로 텍스트 표시
  if (todayEl) {
    todayEl.innerHTML = `${targetDate.getMonth() + 1}월 ${targetDate.getDate()}일 ${week[targetDate.getDay()]}`;
  }

  const isToday = selectedDataStr == todayStr;

  if (mainTitleEl) {
    mainTitleEl.innerHTML = isToday
      ? "오늘 할 일"
      : `${targetDate.getMonth() + 1}월 ${targetDate.getDate()}일의 리마인드`;
  }

  if (todayBtn) {
    todayBtn.hidden = isToday;
  }
};
