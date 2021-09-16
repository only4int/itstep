console.log("Task 1:");
let a1 = [1,2,3], b1 = [4,5,6], c = [];
console.log(a1,b1);
c = c.concat(a1,b1);
console.log(c);

console.log("Task 14:");
let a = [1,2,3,4,5], b = [];


a.forEach(function(item,index,array) {
    b.push(item**2);
});

console.log(b);

console.log("Task 22:");

a = [1, 2, 3, 0, 4, 5, 6];
let k=0;
let result = a.reduce(function(sum,item){
    if(sum <= 10){
        sum += item;
        k++;
        return sum;
    }
}, 0);
console.log(k);
