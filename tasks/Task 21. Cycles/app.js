let sum = 0, i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log(sum, i);

sum = 0, i = 1;

do {
    sum += i;
    i++;
} while (i <= 10);

console.log(sum, i);

for(sum = 0, i = 1;i <= 10; i++){
    sum += i;   
}

console.log(sum, i);