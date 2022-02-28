import { Component } from '@angular/core';
import { Message } from './message.model';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    
    messages1: Message[] = [];

    firstUser: string = "Вася";
    secondUser: string = "Петя";

    addMessage(data: any):void{
        this.messages1.push(new Message(new Date(), data.text, data.name))
    }
}
