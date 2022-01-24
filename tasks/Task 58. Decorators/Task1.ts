
function isInt(target: Object, propertyKey: string){
     
    let _val = this[propertyKey];  

    var getter = function () {
        return _val;
    };
  
    var setter = function (newVal: number) {
        if(Math.floor(newVal) === newVal)
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

function isNotNegative(target: Object, method: string, descriptor: PropertyDescriptor){
    let originalMethod = descriptor.value;
    descriptor.value = function(arg: number){
        if(arg >= 0){
            let returnValue = originalMethod.apply(this, arg);
            return returnValue;
        }
        else{
            throw new Error("Число должно быть неотрицательным");
        }
        
    }
}

class Integer{

    @isInt
    value: number;

    constructor(number: number){
        this.value = number;
    }

    @isNotNegative
    sqrt() : number{
        return this.value**0.5;
    }
}

let n = new Integer(-2);

//n.value = 2.5;
console.log(n.sqrt());
