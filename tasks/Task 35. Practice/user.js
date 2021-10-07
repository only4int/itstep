import {Basket} from "./basket.js";

class User{
    login;
    password;
    basket;

    constructor(login,password){
        this.login = login;
        this.password = password;
        this.basket = new Basket();
    }

    addProductToBasket(product){
        this.basket.addToBasket(product);
    }

    show(){
        console.log(`${this.login}'s basket`);
        this.basket.products.forEach(function (product, index) {
            console.log(`${index+1}. ${product.name} cost ${product.price}$`)
        });
    }
}

export{User};