var Cat = /** @class */ (function () {
    function Cat(name) {
        this.name = name;
    }
    Cat.prototype.eat = function () {
        console.log("Ням-ням");
    };
    Cat.prototype.sound = function () {
        console.log("Мяу");
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name) {
        this.name = name;
    }
    Bird.prototype.eat = function () {
        console.log("Ням-ням");
    };
    Bird.prototype.fly = function () {
        return true;
    };
    return Bird;
}());
var cat = new Cat("Барсик");
cat.eat();
cat.sound();
var bird = new Bird("Галчонок");
bird.eat();
console.log(bird.fly());
