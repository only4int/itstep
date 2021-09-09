// Task 5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)
let a = [1,2,3,4,5], str="";
if(a.length > 0){
    str += a[0];
    for(let i = 1; i < a.length; i++){
        str += ", " + a[i];
    } 
}
console.log(str);

let b = [1,2,3,4,5];
str="";
if(b.length > 0){ 
    if(b.length == 1){
        str += b[0];
    }
    else{
        for(let i = 0; i < b.length-1; i++){
            str += b[i]+ ", ";           
        } 
        str += b[b.length-1];
    }
}
console.log(str);

//Task 8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и -1 - в противном случае.
function searchIndex(a,x){
    let index = -1;

    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
           index = i;
           break;
        }
    }

   return index;
}

function searchIndex1(a,x){
    for(let i = 0; i < a.length; i++){
        if(a[i] == x){
           return i;
        }
    }
    return -1;
}

//Task 9. Разработать функцию для вычисления НОД 2 натуральных чисел

function NOD(a,b){
    
    while(a != b){
        if(a > b){
            a = a - b;
        } else{
            b = b - a;
        }
    }

    return a;
}

//Task 10. Раразботать функцию для вычисления НОД элементов массива.
function arrayNOD(a){
    if(a.length < 2){
        return null;
    }

    let nod = NOD(a[0], a[1]);

    for(i = 2; i < a.length; i++){
        nod = NOD(nod, a[i]);
    }

    return nod;
}

//Task 11. Разработать рекурсивную функцию для нахождения n-го числа Фибонначи.
var counter = 0;
function fibonacchi(n){
    //console.log("Вызов функции при n = "+n);
    counter++;
    if(n == 0)
        return 0;
    if(n == 1)
        return 1;
    return fibonacchi(n-1)+fibonacchi(n-2);
}
console.log(fibonacchi(20));
console.log(counter);