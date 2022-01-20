class User{

    lastname: string;
    age: number = 18;
    protected sex: boolean; // true - мужчина, false - женщина
    private color: string = "white";

    constructor(name: string, sex:boolean, age?:number){
        this.lastname = name;
        this.sex = sex;
        if(age != undefined){
            this.age = age;
        }
    }

    getColor(){
        return this.color;
    }

    print():void{
        console.log(this.lastname,this.age,this.color);
    }

    isAdult():boolean{
        
        if(this.age >= 18 && this.isRussian())
            return true;
        else    
            return false;

    }

    private isRussian():boolean{
        return true;
    }

    public isBelorussian():boolean{
        return true;
    }
}

class SuperUser extends User{

    height: number;

    constructor(name: string, sex:boolean, height: number, age?:number){
        super(name,sex,age);
        this.height = height;
    }

    isFly():boolean{
        if(this.sex == false)
            return true;
        if(this.isBelorussian())
            return true;

        return false;
    }
}


const user = new User("Вася", true);
user.print();
console.log(user.isAdult(), user.isBelorussian(), user.getColor());

const superUser = new SuperUser("Аня", false, 180);
superUser.print();
console.log(superUser.isAdult(), superUser.isBelorussian(), superUser.isFly());