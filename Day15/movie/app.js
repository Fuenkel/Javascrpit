const manager = new CinemaManager();

const seatContainer = document.querySelector("#seat-container");
const selectBtn = document.querySelector("#select-btn");

// 좌석 100개 그려주는 함수
const renderSeats = () => {
  seatContainer.innerHTML = "";

  manager.getSeats().forEach((seat) => {
    const btn = document.createElement("button");
    btn.innerHTML = seat.getId();
    btn.classList.add("seat-btn");

    // 상태에 따른 css클래스 부여
    if (seat.isReserved()) {
      btn.classList.add("reserved");
    } else if (seat.isSelected()) {
      btn.classList.add("selected");
    }

    btn.addEventListener("click", () => {
      if (seat.isReserved()) {
        alert(
          `${seat.getId()} 좌석은 이미 선택(예매)이 완료되어 선택할 수 없습니다.`,
        );
        return;
      }
      seat.toggleSelect();
      renderSeats();
    });
    seatContainer.append(btn);
  });
};

// 좌석 선택 및 특정 버튼 선택 시 확정 처리 만들기

selectBtn.addEventListener("click", () => {
  const confirmedSeats = manager.confirmSelection();
  if (confirmedSeats.length === 0) {
    alert("선택된 좌석이 없습니다.");
    return;
  }

  // 선택된 좌석을 좌석 선택 선택시 보여지는 알럿 만들기
  const seatIds = confirmedSeats.map((s) => s.getId()).join(", ");
  alert(`좌석 [ ${seatIds} ] 예매가 완료되었습니다!`);

  // 화면 업데이트
  renderSeats();
});

// 최초 렌더링 실행
renderSeats();
