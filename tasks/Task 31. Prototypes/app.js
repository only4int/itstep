let home = {
    l: 10,
    w: 20,
}

let oneFloorHome = {
    __proto__:home,
    getSquare: function (){
        return this.l*this.w;
    }
}
let oneMansardaFloorHome = {
    __proto__:home,
    getSquare: function() {
        return 1.5*this.l*this.w;
    }
}
let oneHalfFloorHome = {
    __proto__:home,
}
oneHalfFloorHome.getSquare = oneMansardaFloorHome.prototype.getSquare;


oneFloorHome.l = 30;

console.log(oneFloorHome.getSquare());
console.log(oneHalfFloorHome.getSquare());
console.log(oneMansardaFloorHome.getSquare());
