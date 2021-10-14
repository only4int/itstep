import { Driver } from "../model/driver.js";

class DriverController{

    static create(name, login, password, tax){
        let driver = new Driver(name, login, password, tax);
        return driver;
    }


    static addReview(driver, review){
        driver.addReview(review);
    }

    static addCar(driver,car){
        driver.addCar(car);
    }
}
export{DriverController};