let x = (3 && 5) || (4 && 0); // => 5 || 0 => 5
let y = 3 || (5 && 4) || 0; // 3 || 4 || 0 => 3
let z = !x || y; // false || 3 => 3

let condition1 = x > y;
let condition2 = x < y;
let condition3 = x == y;
let condition4 = x != y;
let condition5 = x >= y;
let condition6 = x <= y;
let condition7 = !x;

if(x== undefined || x == null || x == 0 || x == "") {//!x
    console.log("Error");    
    }

if (condition1) {
    
}

if (condition2) {
    
} else {
    
}

if (x > 0) {
    console.log("positive");
} else if (x < 0) {
    console.log("negative")
} else {
    console.log("0")
} 

let a = 4, b = 5;

if(a > b)
    {
    console.log(a);
    console.log(a++);
    }
else if(b > a)
    console.log(b);
else
    console.log("equal");

// четное или нечетное число
let number = 4;
if (number % 2 == 0) {
    console.log("even")
} else {
    console.log("odd")
}

//високосный или невисокосный
let year = 2010;
if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0){
    console.log("leap");
} else {
    console.log("common");
}

// грибы
let mushrooms = 21;
if( mushrooms % 100 > 10 && mushrooms % 100 < 20 || 
    mushrooms % 10 > 4 && mushrooms % 10 < 10 || 
    mushrooms % 10 == 0)
    console.log(mushrooms + " грибов");
else if (mushrooms % 10 == 1)
    console.log(mushrooms + " гриб");
else
    console.log(mushrooms + " гриба");


// доставка товара
let day = 2, hour = 7;

if(day >= 1 && day <= 6 && hour >=8 && hour < 16)
    console.log("Сегодня с 16.00 до 00.00");
else if (day >= 1 && day <= 6 && hour <8)
    console.log("Сегодня с 8.00 до 16.00");
else if (day >= 1 && day <= 5 && hour >= 16 || day == 7)
    console.log("Завтра с 8.00 до 16.00");
else
    console.log("Послезавтра с 8.00 до 16.00");

console.log("" == 0);