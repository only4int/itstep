import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostService, CommentService, UserService } from './service';
import { AuthGuard } from './guard/auth.guard';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [PostService, CommentService, UserService, AuthGuard]
})
export class CoreModule { }
