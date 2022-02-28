import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit{

    @Input()
    name: string = "";
    
    message: string = "";

    @Output() 
    onKeyUp = new EventEmitter<{name: string, text: string}>();
    
    enterMessage($event: any) {
        if($event.keyCode != 13)
            return;
        if(this.message == "")
            return;

        let data: any = {name: this.name, text: this.message};

        this.onKeyUp.emit(data);

        this.message = "";
    }

    constructor() { }

    ngOnInit(): void {

    }

}
