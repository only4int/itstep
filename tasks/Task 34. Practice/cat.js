import {Animal} from "./animal.js";

class Cat extends Animal{
    constructor(food, location, name){
        super(food, location, name);
    }

    makeNoise(){
        console.log(`${this.name} делает мяу-мяу`);
    }

    eat(){
        console.log(`Ест твою ${this.food}`);
    }
}
export {Cat};