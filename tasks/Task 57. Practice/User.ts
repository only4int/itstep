class User{

    lastname: string;
    age: number = 18;
    protected sex: boolean; // true - мужчина, false - женщина

    constructor(name: string, sex:boolean, age?:number){
        this.lastname = name;
        this.sex = sex;
        if(age != undefined){
            this.age = age;
        }
    }

    print():void{
        console.log(this.lastname,this.age);
    }

    isAdult():boolean{      
        if(this.age >= 18)
            return true;
        else    
            return false;
    }
}

export {User};