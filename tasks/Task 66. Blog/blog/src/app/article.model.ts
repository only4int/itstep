export class Article {
    title: string;
    previewText: string;
    fullText: string;
    picture: string;
    date: Date;
    author: string;
    favorite: boolean;

    constructor(title: string, previewText: string, fullText: string, picture: string, date: Date, author: string, favorite: boolean){
        this.title = title;
        this.previewText = previewText;
        this.fullText = fullText;
        this.picture = picture;
        this.date = date;
        this.author = author;
        this.favorite = favorite; 
    }
}
