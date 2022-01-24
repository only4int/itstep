var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParameter(target, key, index) {
    var metadataKey = "__log_".concat(key, "_parameters");
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
function logMethod(target, key, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var metadataKey = "__log_".concat(key, "_parameters");
        var indices = target[metadataKey];
        if (Array.isArray(indices)) {
            for (var i = 0; i < args.length; i++) {
                if (indices.indexOf(i) !== -1) {
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log("".concat(key, " arg[").concat(i, "]: ").concat(argStr));
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(function (a) { return (JSON.stringify(a) || a.toString()); }).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log("Call: ".concat(key, "(").concat(a, ") => ").concat(r));
            return result;
        }
    };
    return descriptor;
}
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    User.prototype.setName = function (name) {
        this.name = name;
    };
    User.prototype.print = function () {
        console.log(this.name);
    };
    __decorate([
        logMethod,
        __param(0, logParameter)
    ], User.prototype, "setName", null);
    return User;
}());
var tom = new User("Tom");
tom.setName("Bob");
tom.setName("Sam");
