import { Product } from "./product.js";
import { Category } from "./category.js";
import { Basket } from "./basket.js";
import { User } from "./user.js";

let meat = new Product("meat", 10, 4);
let milk = new Product("milk", 5, 3);
let bread = new Product("bread", 6, 5);

let food = new Category("food");

food.addProduct(meat);
food.addProduct(milk);
food.addProduct(bread);

food.showProducts();

let user = new User("Vasya","123456");

user.addProductToBasket(milk);
user.addProductToBasket(bread);

user.show();