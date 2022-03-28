import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentService, PostService, UserService } from 'src/app/core';

@Component({
  selector: 'app-postdetail',
  templateUrl: './postdetail.component.html',
  styleUrls: ['./postdetail.component.scss']
})
export class PostDetailComponent implements OnInit {


    ngOnInit(): void {

    }
    post: any;
    comments: any;
    private PostSubcription: Subscription;
    constructor(private route: ActivatedRoute, private postService: PostService, private userService: UserService, private commentService: CommentService) { 
        this.PostSubcription = route.params.subscribe(
            params => {
                this.post = postService.getById(params['id']); 
                this.comments = commentService.getByPostId(params['id'])
            } 
        );
    }

    getUserName(userId: number): string{
        return this.userService.getById(userId)?.name;
    }

}
