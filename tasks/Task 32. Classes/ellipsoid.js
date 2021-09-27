import {Ellipse} from "./ellipse.js";

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

export {Ellipsoid};