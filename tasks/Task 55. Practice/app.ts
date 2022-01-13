//1
let square: number = 25;
let perimetr: number = Math.sqrt(square)*4;
console.log(perimetr);

//2
let a: number = 3, b:number = 4, c: number = 5;
if(a == b && b == c){
    console.log("Равносторонний треугольник");
} else if(a == b || b == c || a == c){
    console.log("Равнобедренный треугольник");
} else {
    console.log("Раpносторонний треугольник");
}

//3
let x: number = 3, y:number = 4, z: number = 5;
if( x < y+z && z < x+y && y < x+z){
    console.log("Можно");
} else{
    console.log("Нельзя");
}

//5
for(let i:number = 10; i <= 20; i++){
    console.log(i**2);
}

//6
