var Phone = /** @class */ (function () {
    function Phone(obj) {
        this.number = obj && obj.number || "";
        this.model = obj && obj.model || "";
        this.weight = obj && obj.weight || 0;
    }
    Phone.prototype.receiveCall = function (name) {
        console.log("\u0417\u0432\u043E\u043D\u0438\u0442 ".concat(name));
    };
    return Phone;
}());
var phone1 = new Phone();
var phone2 = new Phone({ number: "123123", model: "Nokia", weight: 200 });
