function getSum(a,b){

    let sum = a+b;
    
    return sum;
}


let x = getSum(2,4);
console.log(x);

function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

let b = [];

b = fillArray(b,10);
console.log(b);


let c = [];

c = fillArray(c,20);
console.log(c);