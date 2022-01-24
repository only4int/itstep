function format(target: Object, propertyKey: string){
     
    let _val = this[propertyKey];   // получаем значение свойства
 

    var f1 = function () {
        return "Mr./Ms." + _val;
    };
  

    var f2 = function (newVal: string) {
        _val = newVal;
    };
  
    // удаляем свойство
    if (delete this[propertyKey]) {
  
        // И создаем новое свойство с геттером и сеттером
        Object.defineProperty(target, propertyKey, {
            get: f1,
            set: f2
        });
    }
}
 
class User {
 
    @format
    name: string;
    
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.print();
tom.name = "Tommy";
tom.print();