class Person {  
    name: string;
    static retirementAge: number = 65;
    constructor(name: string) {
        this.name = name;
    }
    static calculateYears(age: number): number{
        return Person.retirementAge - age;
    } 
}
let tom = new Person("Tom");
console.log(Person.retirementAge);
console.log(`До пенсии осталось: ${Person.calculateYears(36)} лет`);