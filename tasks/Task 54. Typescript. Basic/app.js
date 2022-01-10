// описание переменных
var myName = "Alice";
console.log(myName);
var a1, a2;
a1 = 1;
a2 = 3;
console.log(a1 + a2);
var yourName = "Not Alice";
console.log(yourName);
yourName = 2;
console.log(yourName);
//вывод строки
var message = "Hello World!";
//message = 2;
console.log(message + a2);
console.log(message.toLowerCase());
// функции
function sum(x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
}
;
function print_sum(x, y) {
    console.log(x + y);
}
;
function subtract(a, b) {
    return a - b;
}
;
var op;
op = sum;
console.log(op(2, 4)); // 6
op = subtract;
console.log(op(6, 4)); // 2
var add = function (x, y) {
    if (y === void 0) { y = 2; }
    return x + y;
};
var result = add(15, 20);
console.log(result);
//объединения
var id;
id = "1345dgg5";
console.log(id);
id = 234;
console.log(id);
// null и undefined
var a = undefined;
var b = null;
var c = null;
c = "Tom";
// объекты
var person = { name: "Tom", age: 23 }; // Свойство age - необязательное
person = { name: "Tom", age: 23 };
console.log(person.name); // Tom
person = { name: "Bob" }; // Норм, свойство age - необязательное
console.log(person.name); // Bob
console.log(person.age);
var userId = 2;
console.log("Id: ".concat(userId));
userId = "qwerty";
console.log("Id: ".concat(userId));
var tom = { name: "Tom", age: 36 };
var bob = { name: "Bob", age: 41 };
function printPerson(user, user1) {
    console.log("Name: ".concat(user.name, "  Age: ").concat(user.age));
}
printPerson(tom, bob);
printPerson(bob, tom);
// массивы
var list = [10, 20, 30];
var colors = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);
var names = ["Tom", "Bob", "Alice"];
console.log(names[1]);
// неизменяемые массивы
var people = ["Tom", "Bob", "Sam"];
// классы
var User = /** @class */ (function () {
    function User(userName, userAge) {
        this.name = "Default user";
        this.name = userName;
        this.age = userAge;
    }
    User.prototype.print = function () {
        console.log("name: ".concat(this.name, "  age: ").concat(this.age));
    };
    return User;
}());
var Alice = new User("Alice", 36);
Alice.age = 25;
Alice.print();
