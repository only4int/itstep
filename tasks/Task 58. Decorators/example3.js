var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function readable(onlyRead) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = !onlyRead;
    };
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        readable(false)
    ], User.prototype, "print", null);
    return User;
}());
var tom = new User("Tom");
tom.print = function () { console.log("print has been changed"); };
tom.print();
