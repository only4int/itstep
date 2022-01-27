"use strict";
exports.__esModule = true;
exports.Hero = void 0;
var Hero = /** @class */ (function () {
    function Hero(name, hp, xp) {
        this.xp = 0;
        this.name = name;
        this.hp = hp;
        if (xp != undefined)
            this.xp = xp;
    }
    Hero.prototype.isDead = function () {
        if (this.hp == 0)
            return true;
        return false;
    };
    Hero.prototype.isMage = function () {
        return false;
    };
    Hero.prototype.isWarrior = function () {
        return false;
    };
    Hero.prototype.attack = function (enemy) {
        this.xp -= enemy.takeDamage(20);
    };
    return Hero;
}());
exports.Hero = Hero;
