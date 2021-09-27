class Ellipse {
    a = 0;
    b = 0;
    
    constructor(a,b){
        if(a <= 0)
            {
            console.log("Error value a");
            return;
            }
        if(b <= 0)
            {
            console.log("Error value b");
            return;
            }
            
        this.a = a;
        this.b = b;
    }

    getSquare(){
        return Math.PI*this.a*this.b;
    }
}

let ellipse1 = new Ellipse(3,4); 
let ellipse2 = new Ellipse(-3,4); // a = 0, b = 0
let ellipse3 = new Ellipse(5,6); 
let ellipse4 = new Ellipse("sdfsdf",6); 

console.log(ellipse1.getSquare());
console.log(ellipse2.getSquare());
console.log(ellipse3.getSquare());
console.log(ellipse4.getSquare());

class Ellipsoid extends Ellipse {
    c;

    constructor(a,b,c){
        super(a,b);
        if(c <= 0)
            {
            console.log("Error value c");
            return;
            }           
        this.c = c;         
    }

    getSquare(){
        return 3/4*Math.PI*this.a*this.b*this.c;
    }

    getVolume(){
        return 4/3*Math.PI*this.a*this.b*this.c;
    }
}

let ellipsoid1 = new Ellipsoid(3,4,5);
console.log(ellipsoid1.getSquare()); 