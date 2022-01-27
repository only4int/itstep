import { CanTakeDamage } from  "./CanTakeDamage";
import { Hero } from "./Hero";
import { Spell } from "./Spell";

export class Mage extends Hero{
    spellBook: Spell[];
    Mana: number;
    
    isMage():boolean{
        return true;
    }

}