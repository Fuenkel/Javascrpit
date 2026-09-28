/* #000000~#ffffff */
// 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f

const hex = [..."0123456789abcdef"];

const randomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(hex[randomInt(15, 0)]);

const getHexColor = () => {
  return `#${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}${hex[randomInt(15, 0)]}`;
};

console.log(getHexColor());
