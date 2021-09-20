let user = {
    name: "Вася",
    age: 30,
    print: function(){
        console.log(this.name,this.age);    // this - текущий объект  this = user
    },
    print2: function(){
      //  console.log(name,age);   // ошибка!!! ТОлько через this
    }
}
let admin = user;
//user = null;

admin.print(); // this = admin
admin.print2();


function Man(name,sex){
    this.name = name;
    this.sex = sex;
    this.print = function(){
        console.log(this.name,this.sex);    // this - текущий объект  this = man
    }
    this.print2 = () => {
        console.log(this.name,this.sex); 
    }
}

Man.prototype.changeName = function(newname) {
    this.name = newname;
}


let man = new Man("Вася", "m"); //this = man
man.changeSex = () => {
    this.sex = (this.sex == "m") ? "f" : "m";
}
let man2 = new Man("Петя", "m"); //this = man2
let man3 = man;
man3.sex = "f";
man.print();
man.changeSex();
man.changeName("Аня");
man.print2();
man3.print();
man3.changeSex();
man3.changeName("Катя");
man3.print2();

man2.print();
//man2.changeSex();
man2.changeName("Лена");
man2.print2();