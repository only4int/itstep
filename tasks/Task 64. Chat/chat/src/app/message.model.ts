export class Message {
    date: Date;
    text: string;
    user: string;

    constructor(date: Date, text: string, user: string){
        this.date = date;
        this.text = text;
        this.user = user;
    }
}
