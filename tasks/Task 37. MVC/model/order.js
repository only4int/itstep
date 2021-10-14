class Order{
    request;
    driver;
    price = 0;
    constructor(request, driver){
        this.request = request;
        this.driver = driver; 
    }

    calculatePrice(){
        if(this.request.comfort == "business"){
            this.price = this.request.pathLength*this.driver.price*2;
        }
        else if(this.request.comfort == "comfort"){
            this.price = this.request.pathLength*this.driver.price*1.5;
        }
        else{
            this.price = this.request.pathLength*this.driver.price; 
        }
    }
}
export{Order};