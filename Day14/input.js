const dateInput = document.querySelector("#date");
const dateText = document.createElement("p");

// 캘린더를 ??
//  하고 데이터 텍스트가 바뀌어야함
dateInput.addEventListener("input", (e) => {
  if (!e.target.value) return;

  // Split "YYYY-MM-DD" into individual parts
  const [year, month, day] = e.target.value.split("-");
  // [2026, 09, 02]
  dateText.innerHTML = `${year}년 ${month}월 ${day}일`;
});

document.body.append(dateText);
