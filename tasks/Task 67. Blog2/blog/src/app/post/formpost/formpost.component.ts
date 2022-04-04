import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post, PostService, User, UserService } from 'src/app/core';

@Component({
  selector: 'app-formpost',
  templateUrl: './formpost.component.html',
  styleUrls: ['./formpost.component.scss']
})
export class FormPostComponent implements OnInit {

    form: FormGroup;

    
    constructor(private postService: PostService, private userService: UserService, private router: Router) { 
      this.form = new FormGroup({
        "title": new FormControl("", [Validators.required, Validators.maxLength(100), Validators.minLength(10)]),
        "previewText": new FormControl("", [Validators.required]),
        "fullText": new FormControl("", [Validators.required, Validators.minLength(20)]),
        "picture": new FormControl("", [Validators.required]),
        "date": new FormControl(new Date(), [Validators.required])
      })
      this.userService.getCurrentUserId();
    }

  ngOnInit(): void {
  }
      addPost():void{

        if(this.form.invalid)
            return;

        let articles = this.postService.get();
        let newId;
        if(articles.length == 0)
            newId = 1;
        else
            newId = articles[articles.length - 1].id + 1;
          
          
        let article:Post = {
            id: newId,
            title: this.form.value.title,
            previewText: this.form.get("previewText")?.value,
            fullText: this.form.controls["fullText"].value,
            picture: this.form.value.picture,
            date: this.form.value.date,
            userId: this.userService.getCurrentUserId()
        };
        
        this.postService.create(article);
        this.form.reset();
        this.router.navigate(["/post"]);
    }

}
