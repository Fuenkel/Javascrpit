// 매니저라는 시네마 매니저 클래스 생성
const manager = new CinemaManager();

// 쿼리로 html에 있는 내용 빼오기
const seatContainer = document.querySelector("#seat-container");
const selectBtn = document.querySelector("#select-btn");

const renderSeats = () => {
  seatContainer.innerHTML = "";

  manager.getSeats().forEach((seat) => {
    // 버튼 만들기
    const btn = document.createElement("button");
    // 해당 버튼의 이름 할당
    btn.innerHTML = seat.getId();
    // btn에 css 할당
    btn.classList.add("seat-btn");

    // 상태에 따른 css 할당
    if (seat.isReserved()) {
      btn.classList.add("reserved");
    }else if
  });
};
