var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function format(target, propertyKey) {
    var _val = this[propertyKey]; // получаем значение свойства
    // геттер
    var getter = function () {
        return "Mr./Ms." + _val;
    };
    // сеттер
    var setter = function (newVal) {
        _val = newVal;
    };
    // удаляем свойство
    if (delete this[propertyKey]) {
        // И создаем новое свойство с геттером и сеттером
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        format
    ], User.prototype, "name", void 0);
    return User;
}());
var tom = new User("Tom");
tom.print();
tom.name = "Tommy";
tom.print();
