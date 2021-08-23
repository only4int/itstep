let a = [0,1,2,3,4,5,8];
console.log(a[4]);
let b = Array(0,1,2,3,4,5);
console.log(b[4]);
b[6] = 6;
let c = [];
c[78] = "sdf";
c[79] = 34;
c[80] = false;
c[44] = [];
console.log(a.length, b.length, c.length, c[0]);
x = c[7] + a[0];


const min = 1, max = 100, n = 10;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

let str = "";
for(let i = 0; i < n; i++){
    str =  str + a[i] + ", ";
}
console.log(str);