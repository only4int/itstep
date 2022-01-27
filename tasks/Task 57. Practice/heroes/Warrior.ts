import { Hero } from "./Hero";
import {Weapon} from "./Weapon";

export class Warrior extends Hero{
    Weapon: Weapon;
    Mana: number;
    
    isWarrior():boolean{
        return true;
    }
}