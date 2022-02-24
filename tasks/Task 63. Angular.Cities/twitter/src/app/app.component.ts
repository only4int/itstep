import { Component } from '@angular/core';
import { Twit } from './twit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    posts: Twit[] = [];

    user: string = "";
    text: string = "";

    addPost():void{
        if(this.user != "" && this.text != ""){
            this.posts.push({
                user: this.user,
                date: new Date(),
                text: this.text
            })
            this.user = "";
            this.text = "";
        }

    }
}
