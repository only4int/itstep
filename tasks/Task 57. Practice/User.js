"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, sex, age) {
        this.age = 18;
        this.lastname = name;
        this.sex = sex;
        if (age != undefined) {
            this.age = age;
        }
    }
    User.prototype.print = function () {
        console.log(this.lastname, this.age);
    };
    User.prototype.isAdult = function () {
        if (this.age >= 18)
            return true;
        else
            return false;
    };
    return User;
}());
exports.User = User;
