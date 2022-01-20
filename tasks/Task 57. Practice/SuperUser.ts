import {User} from "./User";

class SuperUser extends User{

    height: number;

    constructor(name: string, sex:boolean, height: number, age?:number){
        super(name,sex,age);
        this.height = height;
    }

    isFly():boolean{
        if(this.sex == false)
            return true;
        return false;
    }
}

export {SuperUser};