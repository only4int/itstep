let a = 2, b = 3, o = "+";
switch(o){
    case "+":
        console.log(a+b);break;
    case "-":
        console.log(a-b);break;
    case "*":
        console.log(a*b);break;
    case "/":
        if(b == 0)
            console.log("Division by zero");
        else
            console.log(a/b);
        break;
    default:
        console.log("Error"); 
}


let m = 10, n = 6, step = 0;

while(m != n){
    step++;
    if(m > n)
        m = m - n;
    else
        n = n - m;
}

k = 119; //100101102103..199

if(k%3 == 1)
    console.log(1);
if(k%3 == 0)
    console.log((k/3-1)%10);
if(k%3 == 2)
    console.log(Math.ceil(k/3));

//0, 1, 1, 2, 3, 5, 8, ..

let x = 0, y = 1, q = 50, temp;

for(q = 2; q <= 50; q++){
    temp = x + y;
    x = y;
    y = temp;
}

temp = ((5**0.5 - 1)/2)**(q+2)+((5**0.5 + 1)/2)**(q+2);

let number = 87, min = 1, max = 100;

do{
    let comp = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(comp);
    if(number == comp)
        break;
    else if(number > comp){
        min = comp;
    } else {
        max = comp; 
    }
}while(1);