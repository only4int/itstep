import { Component } from '@angular/core';
import { Item } from './Item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent { 
  text: string = "";
  price: number = 0;
   
  items: Item[] = 
  [
      { purchase: "Хлеб", done: false, price: 15.9, itemQuantity: 20 },
      { purchase: "Масло", done: false, price: 60, itemQuantity: 10 },
      { purchase: "Картофель", done: true, price: 22.6, itemQuantity: 30 },
      { purchase: "Сыр", done: false, price:310, itemQuantity: 20 }
  ];

  addItem(text: string, price: number): void {   
      if(text==null || text.trim()=="" || price==null)
          return;
      this.items.push(new Item(text, price));
  }

  getSum():number{

    return this.items.filter(function(item) {
      return item.done == true;
    }).reduce(function(sum,item){
        return sum + item.price*item.itemQuantity
    },0)
    
  }

}