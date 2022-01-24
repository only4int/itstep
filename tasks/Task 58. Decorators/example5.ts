function logParameter(target: any, key : string, index : number) {
    var metadataKey = `__log_${key}_parameters`;
     
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
      }
      else {
        target[metadataKey] = [index];
    }
}
function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
 
    var originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
 
        var metadataKey = `__log_${key}_parameters`;
        var indices = target[metadataKey];
 
        if (Array.isArray(indices)) { 
            for (var i = 0; i < args.length; i++) { 
         
                if (indices.indexOf(i) !== -1) { 
                    var arg = args[i];
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`${key} arg[${i}]: ${argStr}`);
                }
            }
            var result = originalMethod.apply(this, args);
            return result;
        }
        else {
            var a = args.map(a => (JSON.stringify(a) || a.toString())).join();
            var result = originalMethod.apply(this, args);
            var r = JSON.stringify(result);
            console.log(`Call: ${key}(${a}) => ${r}`);
            return result;
        }
    }
    return descriptor;
}
 
class User {
 
    private name: string;
    constructor(name: string){
        this.name = name;
    }

    @logMethod
    setName(@logParameter name: string){
        this.name = name;
    }
    
    print():void{
        console.log(this.name);
    }
}
let tom = new User("Tom");
tom.setName("Bob");
tom.setName("Sam");