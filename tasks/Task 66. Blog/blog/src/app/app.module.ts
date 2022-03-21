import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArticleformComponent } from './articleform/articleform.component';
import { ArticlelistComponent } from './articlelist/articlelist.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { ArticleService } from './article.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';


let routes: Routes = [
    {path: "", component: HomeComponent, pathMatch: 'full'},
    {path: "list", component: ArticlelistComponent, pathMatch: 'full'},
    {path: "list/:id", component: ArticleDetailComponent},
    {path: "form", component: ArticleformComponent},
    {path: "**", component: NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    ArticleformComponent,
    ArticlelistComponent,
    ArticleComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    HomeComponent,
    NotFoundComponent,
    ArticleDetailComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes)
  ],
  providers: [ArticleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
