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
console.log(user.age, user["age"],user.adres.street, user.adres.coords.x);
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

