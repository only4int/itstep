import { User } from "../model/user.js";

class Driver extends User{
    car;
    reviews;
    tax;
    constructor(name, login, password,tax){
        super(name, login, password);
        this.tax = tax;
        this.reviews = [];
    }
    addCar(car){
        this.car = car;
    }
    removerCar(){
        this.car = undefined;
    }
    addReview(review){
        this.reviews.push(review);
    }
}
export{Driver};