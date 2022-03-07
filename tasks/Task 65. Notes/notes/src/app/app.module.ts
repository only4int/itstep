import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { NoteformComponent } from './noteform/noteform.component';
import { NotelistComponent } from './notelist/notelist.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteformComponent,
    NotelistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
