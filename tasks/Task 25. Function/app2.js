function fillArray(a, n){

    const min = 1, max = 10;

    for(let i = 0; i < n; i++){
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return a;
}

function changeArray(a){
    for(let i = 0; i < a.length; i++){
        if(a[i] % 2 == 0){
            a[i] *= 2;
        }
    }

    return a;
}

function deleteElementInArray(a, k){

    for(let i = k+1;i<=a.length;i++){
        a[i-1] = a[i]
    }
    
    a.length--;
    
    return a;
}

function searchElementInArray(a,x){

    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
            return true;
        }
    }   
    
    return false;
}

function uniqueArray(a){

    let b = [], j = 0;

    for(let i = 0; i < a.length; i++){
        if(!searchElementInArray(b, a[i])){
            b[j] = a[i];
            j++;
        }
    }  

    return b;
}

let mas = [];

mas = fillArray(mas, 20);
console.log(mas);
mas = changeArray(mas);
console.log(mas);
mas = deleteElementInArray(mas, 3);
console.log(mas);
mas = uniqueArray(mas);
console.log(mas);