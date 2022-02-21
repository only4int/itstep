 class Item{
    purchase: string;
    done: boolean;
    price: number;
    itemQuantity: number;
     
    constructor(purchase: string, price: number) {
        this.purchase = purchase;
        this.price = price;
        this.done = false;
        this.itemQuantity = 10;
    }
}
export {Item}