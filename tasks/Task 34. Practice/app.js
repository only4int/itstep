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