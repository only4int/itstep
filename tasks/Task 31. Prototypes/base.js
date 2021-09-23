let str = "10";

String.prototype.super = function () {
    return "Super " + this;
}
console.log(str.super());

let a = 10;

Number.prototype.convertToMoney = function(exchange){
    return this+exchange;
}


console.log(a.convertToMoney("$"));

let obj = {
    0: "Hello",
    1: "world!",
    length: 2,
    join1: function (delimetr) {
        return this[0]+delimetr+this[1];
    }
  };
  
  obj.join = Array.prototype.join;
  
  console.log( obj.join(',') );
  console.log( obj.join1(",") );