import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { CommentService, Comment } from 'src/app/core';

@Injectable()
export class CommentResolverService implements Resolve<Array<Comment>>{

  constructor(private commentService: CommentService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<Comment> {

    return this.commentService.getByPostId(route.params["id"]);
      
  }
}
