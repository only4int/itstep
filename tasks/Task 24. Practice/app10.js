let a = [], n = 10;
const min = 1, max = 100;

for(let i = 0; i < n; i++){
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < n-1; i++){
    let x = a[i];
    for(let j = i+1;j < n;j++){
        if(a[j] == x){
            for(let k = j+1;k<=n;k++){
                a[k-1] = a[k];
            }
            n--;
            j--;
        }
    }
}