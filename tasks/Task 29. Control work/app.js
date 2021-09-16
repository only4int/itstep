let a = [], n = 3, value = 3;
a.length = n;
let b = a.fill(value,0,n);
console.log(b);

console.log("Task 6:");

a = [1,2,3], b = [1,2,4];
let result = a.every(function(item,index,array){
    return item == b[index]; 
});
console.log(result);

let count = 0;
a.forEach(function(item,index,array){
     if(item == b[index])
        count++;
});

let c = a.filter(function(item,index,array){
    return item == b[index]; 
});


console.log("Task 7:");

let d = [1,3,6,4,3,3,5,6];

let uniqueD = d.filter(function(item,index,array){
    return index == array.indexOf(item); 
})
uniqueD = []
d.forEach(function(item,index,array){
    if(uniqueD.includes(item) == false)
        uniqueD.push(item); 
})

console.log("Task 8:");
let e = [1,3,6,4,3,3,5,6], f = [1,3];

let diffEF = e.filter(function(item) {
    return f.includes(item) == false; 
});

console.log(diffEF);

console.log("Task 9:");
let h = [1,3,6,4,3,3,5,6];
let sumh = 0;
h.forEach(function(item){
    sumh += item;
});
let avgH = h.reduce(function (avg,item) {
    avg += item;
    return avg;
}, 0);
avgH /= h.length;
let I = h.filter(function(item){
    return item > avgH;
})
console.log(avgH,I);

console.log("Task 9:");

let punct = ".,:;!?-";
let str = "a,g,;sdf,!sg";

let newStr = str.split("").filter(function(item){
    return punct.indexOf(item) == -1;
}).join("");

console.log(newStr);