function logger<TFunction extends Function>(target: TFunction): TFunction{
 
    let newConstructor: Function = function(name:string){
        console.log("Creating new instance");
        this.name = name;
        this.age = 23;
        this.print = function():void{
            console.log(this.name, this.age);
        }
    }
    return <TFunction>newConstructor;
}
 
@logger
class User {

    name: string;
    constructor(name: string){
        this.name = name;
    }
 
    
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
let bob = new User("Bob");
tom.print();
bob.print();