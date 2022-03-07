import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent {

    @Input()
    note: Note = new Note(new Date, "","");

    @Output()
    onDelete = new EventEmitter<Note>();

    deleteNote(note: Note):void{
        this.onDelete.emit(note);
    }
}
