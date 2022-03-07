import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-notelist',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.scss']
})
export class NotelistComponent{

    @Input()
    notes: Note[] = [];

    @Output()
    onDelete = new EventEmitter<Note>();

    deleteNote(note: Note):void{
        this.onDelete.emit(note);
    }
}
