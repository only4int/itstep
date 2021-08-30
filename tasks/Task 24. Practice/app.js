let a = [];
const min = 1, max = 100, n = 10;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
/*
i = 0

1 итерация цикла
i < n - true
a[0] = случайное число 
i++

2 итерация цикла
i = 1
i < n - true
a[1] = случайное число 
i++

3 итерация цикла
i = 2
i < n - true
a[2] = случайное число 
i++

....

10 итерация цикла
i = 9
i < n - true
a[9] = случайное число 
i++

11 итерация цикла
i = 10
i < n - false
*/
let k = 3;
for(i = n-k; i < n; i++){
    console.log(a[i]);
}
