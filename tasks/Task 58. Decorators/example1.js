var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logger(target) {
    var newConstructor = function (name) {
        console.log("Creating new instance");
        this.name = name;
        this.age = 23;
        this.print = function () {
            console.log(this.name, this.age);
        };
    };
    return newConstructor;
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    User = __decorate([
        logger
    ], User);
    return User;
}());
var tom = new User("Tom");
var bob = new User("Bob");
tom.print();
bob.print();
