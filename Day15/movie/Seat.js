// 좌석 100개를 버튼으로 만들고 (좌석마다 a1~a10/b1~b10.... 네이밍 설정 필요)
// 그 좌석버튼 임의로 여러개을 선택하고 [좌석 선택] 버튼을 선택시
// 버튼의 색깔이 변경 되면서 좌석 변경된 것이 저장됨.

// 그리고 좌석 선택 시 이미 선택된 좌석이 있을 경우,
// 현재 선택된 좌석은 선택이 불가하다는 표시가 필요할 것 같아.
// 영화관 좌석 만들기야.

class Seat {
  // 기본값 세팅
  #id;
  #isReserved; // 예매 완료 여부
  #isSelected; // 임시 선택 여부

  constructor(id) {
    this.#id = id;
    this.#isReserved = false;
    this.#isSelected = false;
  }

  // 들어가야 될 값의 함수
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
    if (this.#isReserved) return false; // 이미 예매된 좌석은 불가
    this.#isSelected = !this.#isSelected; // 선택시 true false 변경
    return true;
  }
  // 예매 확정
  reserve() {
    if (this.#isSelected) {
      this.#isReserved = true;
      this.#isSelected = false; // 선택 상태 해제
    }
  }
}
