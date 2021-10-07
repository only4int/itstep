class Category{
    name;
    products;

    constructor(name){
        this.name = name;
        this.products = [];
    }

    addProduct(product){
        this.products.push(product);
    }

    showProducts(){
        console.log(`Category ${this.name}:`)
        this.products.forEach(function (product, index) {
            console.log(`${index+1}. ${product.name} cost ${product.price}$ with rating ${product.rating}`)
        });
    }
}

export {Category};