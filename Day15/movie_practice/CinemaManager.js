class CinemaManager {
  // 좌석 그리기용 배열 만들기
  #seats;

  constructor() {
    // 빈 배열만들기
    this.#seats = [];
    // 좌석 기본 세팅
    this.#initSeats();
  }

  // A1~J10 (100개 좌석 생성)
  #initSeats() {
    const rows = [..."ABCDEFGHIJ"];
    const colos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 100개 좌석 설정
    rows.forEach((row) => {
      close.forEach((col) => {
        const seatId = `${row}${col}`;
        this.#seats.push(new Seat(seatId));
      });
    });
  }
  // 선택되어서 예매된 좌석 받아오기
  getSeats() {
    return this.#seats;
  }

  // 좌석 선택 여부 확인
  confirmSelection() {
    // 필터로 선택된 좌석들 확인
    const selectSeats = this.#seats.filter((seat) => seat.isSelected());

    // 만약 선택된게 없다면 빈 배열로 리턴
    if (selectSeats.length == 0) {
      return [];
    }

    // 선택된 좌석들이 있다면 Seat.js에서 reserve 함수 발동!
    selectSeats.forEach((seat) => seat.reserve());
    return selectSeats;
  }
}
