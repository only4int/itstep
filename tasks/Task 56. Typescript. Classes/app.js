var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, sex, age) {
        this.age = 18;
        this.color = "white";
        this.lastname = name;
        this.sex = sex;
        if (age != undefined) {
            this.age = age;
        }
    }
    User.prototype.print = function () {
        console.log(this.lastname, this.age, this.color);
    };
    User.prototype.isAdult = function () {
        if (this.age >= 18 && this.isRussian())
            return true;
        else
            return false;
    };
    User.prototype.isRussian = function () {
        return true;
    };
    User.prototype.isBelorussian = function () {
        return true;
    };
    return User;
}());
var SuperUser = /** @class */ (function (_super) {
    __extends(SuperUser, _super);
    function SuperUser(name, sex, age) {
        return _super.call(this, name, sex, age) || this;
    }
    SuperUser.prototype.isFly = function () {
        if (this.sex == false)
            return true;
        if (this.isBelorussian())
            return true;
        return false;
    };
    return SuperUser;
}(User));
var user = new User("Вася", true);
user.print();
console.log(user.isAdult(), user.isBelorussian());
var superUser = new SuperUser("Аня", false);
superUser.print();
console.log(superUser.isAdult(), superUser.isBelorussian(), superUser.isFly());
