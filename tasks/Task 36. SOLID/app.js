import {User} from "./user.js";
import {Client} from "./client.js";
import {Petsitter} from "./petsitter.js";
import {Service} from "./service.js";
import {Pet} from "./pet.js";
import {Review} from "./review.js";
import {Order} from "./order.js";


let cat = new Pet("Барсик", "кот", "дворовой", 10);
let dog = new Pet("Тузик", "собака", "овчарка", 8);

let client = new Client("Иван","qwerty", "123456");

client.addPet(cat);
client.addPet(dog);

console.log(client.checkPet("Барсик"));

let service = new Service("Выгул", 10, 5);

let review1 = new Review(client,"Все ок","11.10.2021", 5);
let review2 = new Review(client,"Не ок","11.10.2021", 3);

let petsitter = new Petsitter("Петр","qwerty", "123456");

petsitter.addService(service);
petsitter.addReview(review1);
petsitter.addReview(review2);

console.log(petsitter.checkService("Выгул"));
console.log(petsitter.getRating());
