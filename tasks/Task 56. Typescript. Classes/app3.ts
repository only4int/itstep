interface Animal{
    eat():void;
}

interface Sound{
    sound():void;
}

interface Fly{
    fly():boolean;
}

class Cat implements Animal, Sound{

    name: string;

    constructor(name: string){
        this.name = name;
    }

    eat(): void {
        console.log("Ням-ням");
    }

    sound(): void {
        console.log("Мяу");
    }

}

class Bird implements Animal, Fly{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    eat(): void {
        console.log("Ням-ням");
    }

    fly(): boolean {
        return true;
    }    
}

const cat = new Cat("Барсик");
cat.eat();
cat.sound();

const bird = new Bird("Галчонок");
bird.eat();
console.log(bird.fly());