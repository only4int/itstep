import { Component, OnInit } from '@angular/core';
import { Note } from './note.model';
import { NoteService } from './note.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'], 
    providers: [NoteService]
})
export class AppComponent implements OnInit{

    notes: Note[] = [];
    constructor(private noteService: NoteService){}

    ngOnInit(){
        this.notes = this.noteService.getData();
    }
    
    addNote(note: any):void{
        this.noteService.addData(note);
    }

    deleteNote(note: any):void{
        this.noteService.deleteData(note);
    }
}
