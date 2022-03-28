import { Post } from '../model';

export class PostService {

    constructor() { }

    data: Array<Post> = [
        {
            id: 1,
            title: "Моя статья", 
            userId: 1, 
            date: new Date(), 
            previewText: "Моя первая статья",
            fullText: "Моя первая статья. Полный текст",
            picture: "https://static.tildacdn.com/tild3938-6531-4637-a235-613762383465/555.jpg"
        }
    ];

    create(post: Post){
        this.data.push(post);
    }

    get():Array<Post>{
        return this.data;
    }

    remove(post: Post):boolean{
        let index = this.data.indexOf(post);

        if(index !== -1)
            return Boolean(this.data.splice(index, 1));

        return false;
    }

    getById(id: number): Post{
        let index = this.data.findIndex(function(item:Post){
            return item.id == id;
        });

        return this.data[index];
    }
}
