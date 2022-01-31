import { Component } from '@angular/core';
     
@Component({
    selector: 'fff', //имя компонента в html
    template: `<label>Введите, пожалуйста, вашеыва имя:</label>
                 <input [(ngModel)]="name" placeholder="name">
                 <h1>Добро пожаловать {{name}}!</h1>
                 `
})
export class AppComponent { 
    name= '';
}