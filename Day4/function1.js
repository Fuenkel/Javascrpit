function add(a, b, c) {
  return a + b + c;
}

const a = add(1, 2, 3); //6

/* 1. 두 수 x,y를 받고 x의 y제곱으로 돌려주는 함수*/
function square(x, y) {
  return x ** y;
}

/* 2. 메뉴 이름과 가격을 받고 오브젝트로 돌려주는 함수*/
function store(menu_name, menu_price) {
  return { name: menu_name, price: menu_price };
}
/* 3. x,y를 받고 더 큰 수를 돌려주는 함수 */
function big(x, y) {
  //   if (x > y) return x;
  //   else if (x < y) return y;
  //   else return "same";
  return x > y ? x : y;
}

console.log(
  big(+window.prompt("임의의 수 입력(1)"), +window.prompt("임의의 수 입력(2)")),
);

/* 4. r을 받고 원의 넓이와 둘레를 오브젝트로 돌려주는 함수*/
function radius(r) {
  return (radius_value = {
    area: Math.PI * r ** 2,
    perimeter: 2 * Math.PI * r,
  });
}

console.log(radius(+window.prompt("반지름을 입력")));
