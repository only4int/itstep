import {Field} from "./field.js";

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
    }

    rotateUp(){ // против часовой стрелки
        if(this.direction == 0)
            this.direction = 3;
        else
            this.direction--;
    }

    rotateDown(){ // по часовой стрелки
        if(this.direction == 3)
            this.direction = 0;
        else
            this.direction++;
    }

    move(){
        let x,y;
        if(this.direction == 0){
            x = this.x;
            y = this.y - 1;
        }
        if(this.direction == 1){
            x = this.x + 1;
            y = this.y;
        }
        if(this.direction == 2){
            x = this.x;
            y = this.y + 1;
        }
        if(this.direction == 3){
            x = this.x - 1;
            y = this.y;
        }
        if((x < this.field.n && x > -1) && (y < this.field.m && y > -1) && this.field[x][y] != 1){
            this.x = x;
            this.y = y;
            return true;
        }
        else{
            return false;
        }
    }

    removeMine(){
        let x,y;
        if(this.direction == 0){
            x = this.x;
            y = this.y - 1;
        }
        if(this.direction == 1){
            x = this.x + 1;
            y = this.y;
        }
        if(this.direction == 2){
            x = this.x;
            y = this.y + 1;
        }
        if(this.direction == 3){
            x = this.x - 1;
            y = this.y;
        }
        if(this.field[x][y] == 2){
            this.field.removeMine(x,y);
        }       
    }
}

export {Robot};