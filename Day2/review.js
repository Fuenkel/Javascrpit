const square_line = Number(
  window.prompt("Enter the number of lines for the square:"),
);

console.log(`square_area : ${square_line ** 2}
    ,square_perimeter : ${square_line * 4}`);

const circle_radius = Number(window.prompt("Enter the radius of the circle:"));
console.log(`circle_area : ${Math.PI * circle_radius ** 2}
    ,circle_perimeter : ${2 * Math.PI * circle_radius}`);

const triangle_base = Number(window.prompt("Enter the base of the triangle:"));
const triangle_height = Number(
  window.prompt("Enter the height of the triangle:"),
);
console.log(`triangle_area : ${0.5 * triangle_base * triangle_height}
    ,triangle_perimeter : ${triangle_base * 3}`);

const minute = Number(window.prompt("Enter the number of minutes:"));
console.log(`seconds : ${minute * 60}`);
