var Foo = /** @class */ (function () {
    function Foo() {
    }
    Object.defineProperty(Foo.prototype, "bar", {
        get: function () {
            return this._bar;
        },
        set: function (theBar) {
            this._bar = theBar;
        },
        enumerable: false,
        configurable: true
    });
    return Foo;
}());
var myFoo = new Foo();
var myBar = myFoo.bar; // здесь вызывается геттер
myFoo.bar = true; // здесь вызывается сеттер
