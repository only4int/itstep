import { CanTakeDamage } from  "./CanTakeDamage";

class Hero{
    name: string;
    hp: number;
    xp: number = 0;

    constructor(name: string, hp: number, xp?: number){
        this.name = name;
        this.hp = hp;
        if(xp != undefined)
            this.xp = xp;
    }

    isDead():boolean{
        if(this.hp == 0)
            return true;
        return false;
    }

    isMage():boolean{
        return false;
    }

    isWarrior():boolean{
        return false;
    }

    attack(enemy: CanTakeDamage):void{
        this.xp -= enemy.takeDamage(1);
    }
}

export {Hero};