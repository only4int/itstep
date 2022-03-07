export class Note {
    date: Date;
    title: string;
    text: string;

    constructor(date: Date, title: string, text: string){
        this.date = date;
        this.title = title;
        this.text = text;
    }
}
