import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormpostComponent } from './formpost/formpost.component';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';



@NgModule({
  declarations: [
    FormpostComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
