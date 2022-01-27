"use strict";
exports.__esModule = true;
var Mage_1 = require("./Mage");
var Warrior_1 = require("./Warrior");
var mage = new Mage_1.Mage("Маг", 20, 10);
var warrior = new Warrior_1.Warrior("Воин", 30, 10);
var Enemy = /** @class */ (function () {
    function Enemy() {
    }
    Enemy.prototype.takeDamage = function (num) {
        return 2;
    };
    return Enemy;
}());
var gnol = new Enemy();
mage.attack(gnol);
console.log(mage);
