function fillArray(a, n){

    const min = 1, max = 100;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

function getSumArray(a){

    let sum = 0;

    for(let i = 0; i < a.length; i++){
        sum += a[i];
    }

    return sum;
}

let b = [];
b = fillArray(b, 10);
console.log(b);
let sum = getSumArray(b);
console.log(sum);