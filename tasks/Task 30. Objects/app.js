let user = {
    name: "Вася",
    age: 30,
    eyeColor: "brown",
    height: 180,
    adres: {
        city: "Витебск",
        street: "Ленина",
        coords: {
            x: 55,
            y: 40
        } 
    }
};
console.log(user.age, user["age"],user.adres.street, user.adres.coords.x );
let admin = {
    name: "Вася",
    age: 30,
};
console.log(admin.age, admin["height"]);
for(let key in user){
    // key - имя свойства(поля)
    // user[key] - значение  свойства(поля)
    console.log(key,user[key]);
}
admin.height = 181;

console.log(admin.age, admin["height"]);

user = {};
admin = new Object();

let user1 = user;
user.name = "Петя";
console.log(user1.name, user.name);

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for(let key in salaries){
    sum += salaries[key];
}

console.log(sum);

user = {
    name: "Иван",
    age: 30
};

let cloneUser = {};

for(let key in user){
    cloneUser[key] = user[key];
}

console.log(user, cloneUser);

user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};
cloneUser = {};

for(let key in user){
    if(typeof user[key] != "object")
        cloneUser[key] = user[key];
    else {
        cloneUser[key] = {};
        for(let key1 in user[key]){
            cloneUser[key][key1] = user[key][key1];
        }
    }
}

console.log(user, cloneUser);

function isEmpty(object) {
    for(let key in object){
        return false;
    }
    return true;
}

let u = {};
console.log(isEmpty(u));
u = {
    name: "sgdg",
}
console.log(isEmpty(u));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function doubleNumber(object){
    for(let key in object){
        if(typeof object[key] == "number"){
            object[key] *= 2;
        }
    }
}
doubleNumber(menu);

console.log(menu);




