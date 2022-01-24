var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function isInt(target, propertyKey) {
    var _val = this[propertyKey];
    var getter = function () {
        return _val;
    };
    var setter = function (newVal) {
        if (Math.floor(newVal) === newVal)
            _val = newVal;
        else
            throw new Error("Не является целым число");
    };
    if (delete this[propertyKey]) {
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
function isNotNegative(target, method, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function (arg) {
        if (arg >= 0) {
            var returnValue = originalMethod.apply(this, arg);
            return returnValue;
        }
        else {
            throw new Error("Число должно быть неотрицательным");
        }
    };
}
var Integer = /** @class */ (function () {
    function Integer(number) {
        this.value = number;
    }
    Integer.prototype.sqrt = function () {
        return Math.pow(this.value, 0.5);
    };
    __decorate([
        isInt
    ], Integer.prototype, "value", void 0);
    __decorate([
        isNotNegative
    ], Integer.prototype, "sqrt", null);
    return Integer;
}());
var n = new Integer(-2);
//n.value = 2.5;
console.log(n.sqrt());
