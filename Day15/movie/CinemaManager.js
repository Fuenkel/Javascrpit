class CinemaManager {
  #seats;

  constructor() {
    // 좌석마다 확인
    this.#seats = [];
    // 좌석 기본 세팅
    this.#initSeats();
  }

  // A1~J10 (100개 좌석 생성)
  #initSeats() {
    const rows = [..."ABCDEFGHIJ"];
    const cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // 100개 좌석 설정
    rows.forEach((row) => {
      cols.forEach((col) => {
        const seatId = `${row}${col}`;
        this.#seats.push(new Seat(seatId));
      });
    });
  }

  // 좌석 받아오기
  getSeats() {
    return this.#seats;
  }

  // 좌석 선택 여부 확인
  confirmSelection() {
    const selectedSeats = this.#seats.filter((seat) => seat.isSelected());

    if (selectedSeats.length === 0) {
      return [];
    }
    selectedSeats.forEach((seat) => seat.reserve());
    return selectedSeats;
  }
}
