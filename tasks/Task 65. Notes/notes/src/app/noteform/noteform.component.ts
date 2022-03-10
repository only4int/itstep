import { Component, EventEmitter, Output } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-noteform',
  templateUrl: './noteform.component.html',
  styleUrls: ['./noteform.component.scss']
})
export class NoteformComponent  {

    date: Date = new Date();
    title: string = "";
    text: string = "";
    
    @Output()
    onSend = new EventEmitter<Note>();

    addNote():void{
        if(this.title == "" || this.text == "")
            return;
            
        let note = new Note(new Date(this.date), this.title, this.text)
        this.onSend.emit(note);    

        this.date = new Date();
        this.title = "";
        this.text = "";
    }
}
