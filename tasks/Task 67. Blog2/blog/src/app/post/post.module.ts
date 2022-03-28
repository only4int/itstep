import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormPostComponent } from './formpost/formpost.component';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { PostDetailComponent } from './postdetail/postdetail.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormPostComponent,
    PostComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
