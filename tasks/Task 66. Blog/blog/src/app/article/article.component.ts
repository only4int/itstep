import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    constructor(private service:ArticleService) { 
      this.article = {
            id: 0,
            title: "",
            previewText:"",
            fullText: "",
            picture: "",
            date: new Date,
            author: "",
            favorite: false
      };
    }

    ngOnInit(): void {
    
    }

    @Input()
    article: Article;

    changeStatus(){
        let articles: Article[] = this.service.get();
        let index = articles.indexOf(this.article);
        if(index !== -1)
            articles[index].favorite = !articles[index].favorite;
    }
}
