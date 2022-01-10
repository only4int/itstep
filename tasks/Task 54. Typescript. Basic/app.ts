// описание переменных
let myName: string = "Alice";
console.log(myName);

let a1: number, a2: number;

a1 = 1;
a2 = 3;
console.log(a1+a2);

let yourName: any = "Not Alice";
console.log(yourName);
yourName = 2;
console.log(yourName);

//вывод строки
let message: string = "Hello World!";
//message = 2;

console.log(message+a2);
console.log(message.toLowerCase());

// функции
function sum (x: number, y: number = 2): number {
	return x + y;
	};

function print_sum (x: number, y: number): void {
    console.log(x + y);
    };

function subtract (a: number, b: number): number {
	return a - b;
	};

let op: (x:number, y:number) => number;

op = sum;
console.log(op(2, 4)); // 6

op = subtract;
console.log(op(6, 4)); // 2

let add = (x: number, y: number = 2): number => x + y;
 
let result = add(15, 20);
console.log(result);

//объединения
let id: number | string;
id = "1345dgg5";
console.log(id); 
id = 234;
console.log(id); 

// null и undefined
let a: undefined = undefined;
let b: null = null;

let c: string | null = null;
c = "Tom";

// объекты
let person: { name: string; age?: number } = { name: "Tom", age: 23 }; // Свойство age - необязательное
 
person = { name: "Tom", age: 23 };
console.log(person.name);   // Tom
person = { name: "Bob"};    // Норм, свойство age - необязательное
console.log(person.name);   // Bob
console.log(person.age);

// собственные типы
type id = number | string;
 
let userId: id = 2;
console.log(`Id: ${userId}`);
userId = "qwerty";
console.log(`Id: ${userId}`);

// сложные типы
type Person = {name: string; age: number};
 
let tom: Person = {name: "Tom", age: 36};
let bob: Person = {name: "Bob", age: 41};
 
function printPerson(user: Person, user1: Person){
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}
 
printPerson(tom, bob);
printPerson(bob, tom);

// массивы
let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);

const names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names[1]); 

// неизменяемые массивы
const people: ReadonlyArray<string> = ["Tom", "Bob", "Sam"];

// классы
class User {
  
    readonly name: string = "Default user";
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(): void{
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
 
let Alice = new User("Alice", 36);
Alice.age = 25;    
Alice.print();   