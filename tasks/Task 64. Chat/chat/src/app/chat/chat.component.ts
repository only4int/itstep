import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

    constructor() { }
    @Input()
    messages2: Message[] = [];

    ngOnInit(): void {
        
    }

}
