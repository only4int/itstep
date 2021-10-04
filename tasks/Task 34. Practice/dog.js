import {Animal} from "./animal.js";

class Dog extends Animal{

    constructor(food, location, name){
        super(food, location, name);
    }

    makeNoise(){
        console.log(`${this.name} делает гав-гав`);
    }

    eat(){
        console.log(`Ест свою ${this.food}`);
    }
}

export {Dog};