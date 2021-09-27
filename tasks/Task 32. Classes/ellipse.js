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

export {Ellipse};