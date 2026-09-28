class Seat {
  // 기본값 설정
  #id;
  #isReserved;
  #isSelected;

  constructor(id) {
    this.#id = id;
    this.#isReserved = false;
    this.#isSelected = false;
  }

  // 뱉어내는 함수
  getId() {
    return this.#id;
  }

  isReserved() {
    return this.#isReserved;
  }

  isSelected() {
    return this.#isSelected;
  }

  // 선택 해제 토글
  toggleSelect() {
    // 이미 예매가 완료된 좌석은 선택 불가
    if (this.#isReserved) return false;
    //선택 시 true <-> false
    this.#isSelected = !this.#isSelected;
    return true;
  }

  // 예매 확정 상태만들기
  reserve() {
    if (this.#isSelected) {
      // 예매 확정
      this.#isReserved = true;
      // 선택 상태 초기화(해제)
      this.#isSelected = false;
    }
  }
}
