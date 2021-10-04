import {Animal} from "./animal.js";

class Vet{
    treatAnimal(animal){
        console.log(`${animal.name} ест ${animal.food} в месте ${animal.location}`);
    }
}

export {Vet};