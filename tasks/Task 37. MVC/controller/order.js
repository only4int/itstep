import { Order } from "../model/order.js";

class OrderController{

   static create(driver, request){
        if(driver.car.comfort != request.comfort){
            return undefined;
        }
        if(driver.car.capacity < request.capacity){
            return undefined;
        }
        if(request.hasBabyChair == true && driver.car.hasBabyChair == false){
            return undefined;
        }

        let order = new Order(request, driver);
        order.calculatePrice();
        return order;
    }

}
export{OrderController};