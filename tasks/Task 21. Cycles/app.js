let sum = 0, i = 2;

while (i <= 100) {
    sum += i;
    i+=2;
}

console.log(sum, i);

sum = 0, i = 2;

do {
    sum += i;
    i+=2;
} while (i <= 100);

console.log(sum, i);

for(sum = 0, i = 2;i <= 100; i+= 2){
    sum += i;   
}

console.log(sum, i);


let n = 1_000_000, count = 0;

// Гипотеза Сиракуз
while(n != 1){

    if( n % 2 == 0){
        n = n / 2;
    } else {
        n = (n * 3 + 1) / 2;
    }

    count++;

}
console.log(count);



count = 0 , i = 0;

while( count != 51){

    i++;
    if(i % 7 == 0 && i % 5 != 0){
        count++;
    }

    
}

console.log(i);

count = 0 , i = 0;

do {

    i++;
    if(i % 7 == 0 && i % 5 != 0){
        count++;
    }

} while (count != 51);

count = 0 , i = 100;

do {

    if(i % 21 == 0 || i % 14 != 0){
        count++;
        console.log(i)
    }
    i++;
} while (count != 10);



for(i=100,count=0; count <= 10; i++){
    if(i % 21 == 0 || i % 14 != 0){
        count++;
        console.log(i)
    }   
}