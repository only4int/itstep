import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articleform',
  templateUrl: './articleform.component.html',
  styleUrls: ['./articleform.component.scss']
})
export class ArticleformComponent implements OnInit {

    title: string = "";
    previewText: string = "";
    fullText: string = "";
    picture: string = "";
    date: Date = new Date();
    author: string = "";

    constructor(private articleService: ArticleService) { }

    ngOnInit(): void {

    }

    addArticle():void{
      if(this.title == "" || this.previewText == "" || this.fullText == "" || this.author == "")
        return;

        let article = new Article(
                            this.title,
                            this.previewText,
                            this.fullText,
                            this.picture,
                            this.date,
                            this.author
                            );
        
        this.articleService.create(article);
    }
}
