import { Note } from "./note.model";


export class NoteService {

    private data: Note[] = [{date: new Date(), title: "Шаг", text: "Занятия в 18.30"}];

    getData(): Note[] {
        return this.data;
    }

    addData(note: Note): void{
        this.data.push(note);
    }

    deleteData(note: Note):void{
        let index = this.data.indexOf(note);

        if(index !== -1)
            this.data.splice(index, 1);
    }
}
