"use strict";
exports.__esModule = true;
var SuperUser_1 = require("./SuperUser");
var superUser = new SuperUser_1.SuperUser("Аня", false, 180);
superUser.print();
console.log(superUser.isAdult());
