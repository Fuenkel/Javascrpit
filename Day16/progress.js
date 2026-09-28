// 프로그래스 관련 기본값 설정
const progressText = document.querySelector("#progress-text");
const progressBar = document.querySelector("#progress-bar");
// 끝낸 일 지우우우우기를 위한 쿼리 세팅
const footButtonAbled = document.querySelector("#clear");

export const progress = (ul) => {
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
export const clearButton = (ul) => {
  const checked = ul.querySelectorAll(".done");
  footButtonAbled.disabled = checked.length == 0;
};
