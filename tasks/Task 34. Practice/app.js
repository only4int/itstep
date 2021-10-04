import {Matrix} from "./matrix.js";

let matrixA = new Matrix(2,2);

matrixA.setCellValue(0,0,1);
matrixA.setCellValue(0,1,2);
matrixA.setCellValue(1,0,3);
matrixA.setCellValue(1,1,4);

matrixA.show();

let matrixB = new Matrix(2,2);

matrixB.setCellValue(0,0,5);
matrixB.setCellValue(0,1,6);
matrixB.setCellValue(1,0,7);
matrixB.setCellValue(1,1,8);

matrixB.show();

let X = matrixA.multipleByValue(2);
let Y = X.addMatrix(matrixB);

//let Y = matrixA.multipleByValue(2).addMatrix(matrixB)
Y.show();

import {Animal} from "./animal.js";
import {Dog} from "./dog.js";
import {Cat} from "./cat.js";
import {Horse} from "./horse.js";
import {Vet} from "./vet.js";

let dog = new Dog("Bone","Street","Rex");
let cat = new Cat("Meat","Home","Barsik");
let vet = new Vet();
dog.sleep();
dog.makeNoise();
dog.eat();

let Animals = [];
Animals.push(dog);
Animals.push(cat);
Animals.forEach(function(item) {
    vet.treatAnimal(item);
})
