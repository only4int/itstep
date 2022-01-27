import { CanTakeDamage } from  "./CanTakeDamage";
import { Mage } from "./Mage";
import { Warrior } from "./Warrior";


const mage = new Mage("Маг", 20, 10);
const warrior = new Warrior("Воин", 30, 10);

class Enemy implements CanTakeDamage{
    takeDamage(num: number): number {
        return 2;
    }
}
const gnol = new Enemy();

mage.attack(gnol);

console.log(mage);