export interface Article {
    id: number,
    title: string;
    previewText: string;
    fullText: string;
    picture: string;
    date: Date;
    author: string;
    favorite: boolean;
}
