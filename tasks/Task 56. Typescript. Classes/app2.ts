abstract class Animal{

    name: string;
    color: string;

    constructor(name: string, color: string){
        this.name = name;
        this.color = color;
    }

    print():void{
        console.log(this.name, this.color);
    }

    abstract sound():void;
}

class Cat extends Animal{

    sound(): void {
        console.log("Мяу");
    }
}

class Dog extends Animal{

    sound(): void {
        console.log("Гав"); 
    }
}

const cat = new Cat("Барсик", "Черный");
cat.print();
cat.sound();

const dog = new Dog("Тузик", "Белый");
dog.print();
dog.sound();