let str = "mama", a  = [1,2,3,4];
console.log(a);
a[0] = 5;
console.log(a);
console.log(str);
str[0] = "б";
console.log(str);
let str1 = 'Я-учу-javascript!';
console.log(str1.split("-").join("!"));

let date='2025-12-31';

let new_date = date.split("-").reverse().join(".");

console.log(new_date);

let str2 = 'я учу javascript!';

let result = str2.split(" ").map(function(item){
    return item[0].toUpperCase()+item.substr(1);
}).join(" ");

console.log(result);