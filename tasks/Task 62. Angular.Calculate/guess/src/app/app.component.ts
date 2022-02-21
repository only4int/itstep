import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  x: number = 0;
  y: number = Math.floor(Math.random() * 100);

  getResult():string{
        if(this.x == this.y){
            this.y = Math.floor(Math.random() * 100);
            return "Угадал";
        } else if(this.x > this.y){
            return "Многова-то";
        } else {
            return "Малова-то";
        }
    }

}
