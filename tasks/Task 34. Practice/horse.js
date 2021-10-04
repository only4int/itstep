import {Animal} from "./animal.js";

class Horse extends Animal{
    constructor(food, location, name){
        super(food, location, name);
    }

    makeNoise(){
        console.log(`${this.name} делает иго-го`);
    }

    eat(){
        console.log(`Ест всю ${this.food}`);
    }
}

export {Horse};