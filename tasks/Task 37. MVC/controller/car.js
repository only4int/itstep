import { Car } from "../model/car.js";

class CarController{

    static create(model, number, color, comfort, hasBabyChair, capaсity){
        let newCar = new Car(model, number, color, comfort, hasBabyChair, capaсity);
        return newCar;
    }


}
export{CarController};