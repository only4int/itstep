let side = 4;
let perimeter = 4 * side;
console.log(perimeter);

let r = 1;
let square = Math.PI * r ** 2;
console.log(square);

let a = 3, b = 4;
let c = (a**2 + b **2)**0.5;
console.log(c);

let k = 3, l = 4, temp;
temp = k, k = l, l = temp;
console.log(k,l);

let m = 3, n = 2;
m = m + n, n = m - n, m = m - n;
console.log(m,n);

let num = 123;
let thirdNum = num%10;
let secondNum = (num - thirdNum) / 10 % 10;
let firstNum = (num - 10 * secondNum - thirdNum) / 100;
console.log(firstNum + secondNum + thirdNum);
console.log(thirdNum * 100 + secondNum * 10 + firstNum);

let credit = 1_000, percent = 10, year = 3;
let diff = credit * (1+percent/100)**year - credit;
console.log(diff);

let min = 1, max = 10;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomNumber);