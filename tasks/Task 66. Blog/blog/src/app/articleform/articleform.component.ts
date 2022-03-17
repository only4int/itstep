import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articleform',
  templateUrl: './articleform.component.html',
  styleUrls: ['./articleform.component.scss']
})
export class ArticleformComponent implements OnInit {

    form: FormGroup;

    constructor(private articleService: ArticleService) { 
      this.form = new FormGroup({
        "title": new FormControl("", [Validators.required, Validators.maxLength(100)]),
        "previewText": new FormControl("", [Validators.required]),
        "fullText": new FormControl("", [Validators.required, Validators.minLength(20)]),
        "picture": new FormControl("", [Validators.required]),
        "date": new FormControl(new Date(), [Validators.required]),
        "author": new FormControl("", [Validators.required])
      })
    }

    ngOnInit(): void {

    }

    addArticle():void{

        if(this.form.invalid)
            return;

        let article:Article = {
            title: this.form.value.title,
            previewText: this.form.get("previewText")?.value,
            fullText: this.form.controls["fullText"].value,
            picture: this.form.value.picture,
            date: this.form.value.date,
            author: this.form.value.author,
            favorite: false
        };
        
        this.articleService.create(article);
    }
}
