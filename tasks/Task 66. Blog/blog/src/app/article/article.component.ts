import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor() { 
      this.article = new Article("","","","",new Date,"");
  }

  ngOnInit(): void {
  
  }
  
  @Input()
  article: Article;
}
