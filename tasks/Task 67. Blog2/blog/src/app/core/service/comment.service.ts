import { Comment } from '../model';

export class CommentService {

  constructor() { }

  data: Array<Comment> = [
        {
            id: 1,
            userId: 2,
            postId: 1,
            date: new Date(),
            text: "Хорошая статья"
        },
        {
            id: 2,
            userId: 1,
            postId: 1,
            date: new Date(),
            text: "Я старался"
        },
    ]

    getByPostId(id: number){
        return this.data.filter(function(item: Comment){
            return item.postId == id;
        })
    }

    create(comment: Comment){
        this.data.push(comment);
    }
    
}
