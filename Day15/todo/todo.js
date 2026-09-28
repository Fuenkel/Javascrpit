/* todo 만들기 */

// 할 내용, 완료 여부, 데드라인

class Todo {
  #context;
  #done;
  #deadline;

  constructor(a, b) {
    this.setContext(a);
    this.setDone();
    this.setDeadline(b);
  }

  setContext(context) {
    this.#context = context;
  }

  setDone() {
    this.#done = false; // #done으로 수정
  }

  setDeadline(deadline) {
    this.#deadline = deadline;
  }

  // 외부에서 Private 변수 값을 가져오기 위한 메서드
  getContext() {
    return this.#context;
  }

  getDeadline() {
    return this.#deadline;
  }
}

// input 내용 받아야될 거 2개 가져오기
// const로 저장하기
// button 추가 선택시 저장되면서
// 새 button을 생성하면서 보여주기
//
