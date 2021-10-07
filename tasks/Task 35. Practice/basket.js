class Basket{
    products;
    constructor(){
        this.products = [];
    }

    addToBasket(product){
        this.products.push(product);
    }
}

export{Basket};