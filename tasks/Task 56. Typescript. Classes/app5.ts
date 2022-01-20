//tsc -t es5 app5.ts - сборка

class Foo {
    _bar:boolean;
  
    get bar():boolean {
      return this._bar;
    }
    set bar(theBar:boolean) {
      this._bar = theBar;
    }

  }

const myFoo = new Foo();
let myBar = myFoo.bar;  // здесь вызывается геттер
myFoo.bar = true;  // здесь вызывается сеттер
console.log(myFoo.bar);