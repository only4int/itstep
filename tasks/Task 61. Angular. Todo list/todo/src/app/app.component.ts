import { Component } from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = "";

    tasks:Item[] = [
                    {title:"Сварить яйца", done: false},
                    {title:"Прочитать книгу по Javascript", done: false},
                    {title:"Сходить на работу", done: true}
                ];

    addTask(title:string):void{
        if(title != "")
            this.tasks.push({
                title: title,
                done: false
            })
    }
}
