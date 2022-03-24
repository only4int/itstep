import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, CommentService, UserService } from './service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PostService, CommentService, UserService]
})
export class CoreModule { }
