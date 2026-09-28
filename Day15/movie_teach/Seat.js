// class Seat {
//   #row;
//   #column;
//   #isOccupied;
//   constructor(a, b) {
//     this.#row = a;
//     this.#column = b;
//     this.#isOccupied = fasle;
//   }

//   select() {
//     this.#isOccupied = !this.#isOccupied;
//   }

//   renderButton() {
//     const button = document.createElement("button");
//     button.classList.add("seat");
//     button.innerHTML = `${this.#row}${this.#column}`;

//     button.addEventListener("click", () => {
//       button.classList.toggle("occupied");
//     });

//     const theater = document.querySelector(".theater");
//     theater.append(button);
//   }
// }

// [..."ABCDEFGHIJKL"].forEach((v) => {
//   Array(10)
//     .fill(undefined)
//     .forEach((_, i) => i + 1)
//     .forEach((n) => {
//       new Seat(v, n).renderButton();
//     });
// });

class Seat {
  #row;
  #column;
  #isOccupied;
  constructor(a, b) {
    this.#row = a;
    this.#column = b;
    this.#isOccupied = false;
  }
  select() {
    this.#isOccupied = !this.#isOccupied;
  }
  renderButton() {
    const btn = document.createElement("button");
    btn.classList.add("seat");
    btn.innerHTML = `${this.#row}${this.#column}`;

    btn.addEventListener("click", () => {
      btn.classList.toggle("occupied");
    });

    const theater = document.querySelector(".theater");
    theater.append(btn);
  }
}

[..."ABCDEFGHIJKL"].forEach((v) => {
  Array(10)
    .fill("봉화중")
    .map((_, i) => i + 1)
    .forEach((n) => {
      new Seat(v, n).renderButton();
    });
});
