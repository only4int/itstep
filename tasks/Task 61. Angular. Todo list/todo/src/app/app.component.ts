import { Component } from '@angular/core';
import { Item } from './item';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title:string = ""; // особо не нужно

    tasks: Array<Item> = [
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

    countTasks(status: boolean): number{
        return this.tasks.filter(function(item:Item){
            return item.done == status;
        }).length;
    }

    filterTasks(status: boolean):Item[]{
        return this.tasks.filter(function(item:Item){
            return item.done == status;
        })
    }

    changeStatus(task:Item):void{
        task.done = !task.done;
    }

    deleteTask(task:Item):void{
        let index:number = this.tasks.findIndex(function(item:Item) {
            item == task
        });
        if(index !== -1){
            this.tasks.splice(index, 1);
        }
    }
}
