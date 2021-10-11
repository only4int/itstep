class Basket{
    products;
    constructor(){
        this.products = new Array();
    }

    addToBasket(product){
        this.products.push(product);
    }
}

export{Basket};