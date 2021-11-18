class Robot{
    x = 0;
    y = 0;
    direction = 0; // 0 - вверх, 1 - право, 2 - низ, 3 - лево
    field;

    constructor(field,x,y,direction){
        this.field = field;
        this.x = x;
        this.y = y;
        this.direction = direction;
        let div = document.createElement("div")
        div.classList.add("robot");
        document.querySelector(".field").append(div);
    }

    up(){ 
        this.direction = 0;
    }

    down(){ 
        this.direction = 2;
    }

    left(){ 
        this.direction = 3;
    }

    right(){ 
        this.direction = 1;
    }

    move(){
        let x,y;
        if(this.direction == 0){
            x = this.x - 1;
            y = this.y ;
        }
        if(this.direction == 1){
            x = this.x;
            y = this.y + 1;
        }
        if(this.direction == 2){
            x = this.x + 1;
            y = this.y ;
        }
        if(this.direction == 3){
            x = this.x ;
            y = this.y - 1;
        }
        if((x < this.field.n && x > -1) && (y < this.field.m && y > -1) && this.field.cells[x][y] != 1){
            this.x = x;
            this.y = y;
            let robot = document.querySelector(".robot");
            robot.style.top = `${x*100}px`;
            robot.style.left = `${y*100}px`;
            return true;
        }
        else{
            return false;
        }


    }

    removeMine(){
        let x,y;
        if(this.direction == 0){
            x = this.x - 1;
            y = this.y ;
        }
        if(this.direction == 1){
            x = this.x;
            y = this.y + 1;
        }
        if(this.direction == 2){
            x = this.x + 1;
            y = this.y ;
        }
        if(this.direction == 3){
            x = this.x ;
            y = this.y - 1;
        }
        if(this.field.cells[x][y] == 2){
            this.field.removeMine(x,y);
        }       
    }


}