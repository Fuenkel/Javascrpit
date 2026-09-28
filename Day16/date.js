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
