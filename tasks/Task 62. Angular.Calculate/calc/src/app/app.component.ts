import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    a: number = 0;
    b: number = 0;

    getSum():string{
        if(this.a != null && this.b != null)
            return `${this.a} + ${this.b} = ${this.a+this.b}`;

        return `Ошибка ввода данных`;
    }

    getSub():number{
        return this.a - this.b;
    }

    getMul():number{
        return this.a * this.b;
    }

    getDiv():number | string{
        if(this.a == null || this.b == null)
            return `Ошибка ввода данных`;
        if(this.b == 0)
            return "Деление на ноль"; 

        return this.a / this.b;
    }
}
