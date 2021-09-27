import {Ellipse} from "./ellipse.js";
import {Ellipsoid} from "./ellipsoid.js";

let ellipse1 = new Ellipse(3,4); 
let ellipse2 = new Ellipse(-3,4); // a = 0, b = 0
let ellipse3 = new Ellipse(5,6); 

console.log(ellipse1.getSquare());
console.log(ellipse2.getSquare());
console.log(ellipse3.getSquare());

let ellipsoid1 = new Ellipsoid(3,4,5);
console.log(ellipsoid1.getSquare()); 