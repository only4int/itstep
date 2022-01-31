import { Spell } from "./Spell";
import { CanTakeDamage } from  "./CanTakeDamage";
import { Mage } from "./Mage";
import { Warrior } from "./Warrior";


const mage = new Mage("Маг", 20, 10);
const warrior = new Warrior("Воин", 30, 10);

class Enemy implements CanTakeDamage{
    takeDamage(num: number): number {
        return num + 2;
    }
}
const gnol = new Enemy();

mage.spellBook = [];
mage.spellBook.push(Spell.FIREBALL);
mage.attack(gnol);

console.log(mage);