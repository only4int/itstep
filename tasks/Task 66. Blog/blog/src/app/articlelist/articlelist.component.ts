import { Component, OnInit } from '@angular/core';
import { Article } from '../article.model';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articlelist',
  templateUrl: './articlelist.component.html',
  styleUrls: ['./articlelist.component.scss']
})
export class ArticlelistComponent implements OnInit {

    articles: Article[] = [];
    private articleService: ArticleService = new ArticleService();
    constructor() { }

    ngOnInit(): void {
        this.articles = this.articleService.get();
    }

}
