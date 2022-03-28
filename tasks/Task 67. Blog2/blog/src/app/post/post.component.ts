import { Component, OnInit } from '@angular/core';
import { Post, PostService, UserService } from '../core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private postService: PostService, private userService: UserService) { }

  posts: Array<Post> = [];


  ngOnInit(): void {
    this.posts = this.postService.get();
  }

  getUserName(userId: number): string{
      return this.userService.getById(userId)?.name;
  }
}
